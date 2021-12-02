/*
    add listener that will fire an update each time when flights are added tot he page
    this solves 2 problems: 
        1 - flights can be loaded one by one, we need to track all the new ones
        2 - when user presses "Show more flights", we need to add info to newly shown flights
*/
console.log(new Date().toString())
let observer = new MutationObserver(mutationsList => {
    //search for divs with classes "LegInfo_routePartial" (the full class name contains ID that we don't need)
    const divArr = Array.from(document.getElementsByTagName("div"))
    const departureArr = divArr.filter(item=>item.className.includes("LegInfo_routePartialDepart"))
    const arrivalArr = divArr.filter(item=>item.className.includes("LegInfo_routePartialArrive"))

    //search for language that user prefers on Skyscanner
    const spanArr=Array.from(document.getElementsByTagName("span"))
    const userLanguage = spanArr.filter(item=>item.className.includes("CultureSelectorButton_CultureSelectorButton__locale--mobile"))
    let i=0
    if(userLanguage.length){
        const name=userLanguage[0].innerText
        i=languages.findIndex(item=>item.name===name)
    }

    //if we don't have the language, set to English
    const lang=languages[Math.max(0,i)]

    //when flights are loaded, we need to add info to each flight
    if(departureArr?.length && arrivalArr?.length){
        //get dates from URL
        const dates = getDates()

        for(let i=0;i<departureArr.length;i++){
            //select which date we should use (if return flight or even multi-leg journey)
            const date=dates[i%dates.length] || dates[0]

            //start adding data
            addSpan(departureArr[i],date,'departure',lang)
            addSpan(arrivalArr[i],date,'arrival',lang)
        }

    }
});
observer.observe(document, { childList: true, subtree: true });

/*
    Get dates from URL
    date could be in two formats: YYYY-MM-DD or YYMMDD
*/
function getDates(){
    const test= new RegExp('^[0-9-]+$');

    //get all url parts, some of which are dates
    const url = location.href.split("/")

    return url
        //find only dates and format them
        .map(item=>{
            if(!test.test(item)){return null}
            let parts=[]
            if(item.includes("-")){
                //format YYYY-MM-DD
                parts=item.split('-').map(item=>Number(item))
            } else {
                for(let i=0;i<5;i+=2){
                    //format YYMMDD
                    parts.push(Number(item.substr(i,2)))
                }
            }
            return new Date(parts[0],parts[1]-1,parts[2])
        })
        //remove all url parts that are not dates
        .filter(item=>item)

}

//actually adds info to the web page
function addSpan(node, dt,mode, lang){

    //check if we already added our info, otherwise it will be an infinite loop
    if(!node.children[node.children.length-1].id.includes("added_daylight")) {

        //add time of flight departure/arrival to the date
        const date = getFullDate(node.children[0].innerText,dt,lang.am)
        
        //create and format element
        const span = document.createElement("span")
        span.style.fontSize="10px"
        span.style.fontWeight='bold'

        //id is needed to check if we already added sunlight info to this flight
        //it also has to stay unique
        span.id="added_daylight_"+Math.round(Math.random()*1000000000)

        //get sunlight data and add it as an inner text
        const addData = getDaylight(date,node.children[1].innerText,mode,lang)
        span.innerText=addData.text
        
        //black for night, green for day, orange/red for dawn/dusk
        span.style.color=addData.color
        node.appendChild(span)
    }
}

//takes time in the language format and converts it to an actual date-time
function getFullDate(time, date,am){
    if(!date){return 0}
    let addDays=0 //flight may arrive the next day, for example, we need to check it too
    let hrs=0
    let min=0

    //if time includes + symbol (meaning arrival is not the same day as departure)
    //we remove averything after and including  from time but add that number to date
    if(time.includes("+")){
        addDays=Number(time.substr(time.length-2,1)) ||0
        time = time.substring(0,time.length-2)
    }

    //depending on the language, hours and minutes can be divided with ":", "." or other symbol
    const possibleDelimiters=[":","."]
    const delimiter=possibleDelimiters.filter(item=>time.includes(item))[0] || possibleDelimiters[0]

    if(time.includes(" ")){
        //AM/PM format
        const timeParts=time.split(" ")

        //search where AM/PM is stored (usually after the time, but some languages have it at the beginning)
        let i=0, j=1
        if(!timeParts[0].includes(delimiter)){i=1;j=0}

        //get times
        const t = timeParts[i].split(delimiter).map(item=>Number(item))
        hrs=t[0]
        min=t[1]

        //adjust for AM/PM
        if(timeParts[j].includes(am) && hrs===12){hrs=0}
        else if (!timeParts[j].includes(am) && hrs!==12){hrs+=12}
    } else {
        //normal H:MM format
        const t=time.split(delimiter).map(item=>Number(item))
        hrs=t[0]
        min=t[1]
    }

    return new Date(date.getFullYear(),date.getMonth(), date.getDate()+addDays,hrs, min)
}

//get coordinates based on IATA code of the airport
function getCoordinates(airport,date){
    //roughly check GMT or DST
    //first, create two dates, 15 Mar or current year and 15 October of current year
    const dstStart=new Date(date.getFullYear(),2,15) //march = 2 as months start from 0
    const dstEnd=new Date(date.getFullYear(),9,15)

    //then calculate if our date is inside
    const isDST = dstStart.valueOf()<=date.valueOf() && dstEnd.valueOf()>=date.valueOf()

    //loads from external file (initially JSON, but converted to JS)
    const i=coordinatesArray.findIndex(item=>item.iata===airport)
    if(i===-1){return [0,0]}
    const {lat, lon,dst,gmt} = coordinatesArray[i]
    return {lat, lon,airportOffset: isDST ? dst : gmt}
}

function getDaylight(date,airport,mode,lang){
    //calculate local time zone offset and airport offset difference
    const localOffset = -date.getTimezoneOffset()/60
    const {lat,lon,airportOffset} = getCoordinates(airport,date)
    const offset = (localOffset- airportOffset)
    let text=''
    let color='black'
    if(!lat ||!lon){return {text,color}}

    //loads from external script
    const sunData = SunCalc.getTimes(date,lat,lon,0,offset)
    const riseDiffMin = Math.round((Number(date)-Number(sunData.sunrise))/(1000*60))
    const dawnDiffMin = Math.round((Number(date)-Number(sunData.dawn))/(1000*60))
    const setDiffMin = Math.round((Number(date)-Number(sunData.sunset))/(1000*60))
    const duskDiffMin = Math.round((Number(date)-Number(sunData.dusk))/(1000*60))
    if(dawnDiffMin<0){
        text=`${timeString(dawnDiffMin)} ${lang.beforeDawn}`
    } else if(riseDiffMin<0){
        text=lang.dawn
        color="orange"
    } else if(duskDiffMin>0){
        text=`${timeString(duskDiffMin)} ${lang.afterDusk}`
    } else if (setDiffMin>0) {
        text=lang.dusk
        color="red"
    } else {
        text= mode==='arrival' ? `${timeString(setDiffMin)} ${lang.beforeSunset}` : `${timeString(riseDiffMin)} ${lang.afterSunrise}`
        color="green"
    }
    //do something
    return {text, color}
}

//convert time to a string
const timeString = time=>`${Math.floor(Math.abs(time/60))}:${(Math.abs(time)%60).toString().padStart(2,"0")}`