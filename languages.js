const languages=[
    {
        name:"EN", //English is always first and is used in case of lack of user language
        beforeDawn:'before dawn',
        dawn:'at dawn',
        afterDusk:'after dusk',
        dusk:'at dusk',
        beforeSunset:'before sunset',
        afterSunrise:'after sunrise',
        am:"AM"
    },
    {
        name:"RU", //Russian
        beforeDawn:'до рассвета',
        dawn:'рассвет',
        afterDusk:'после заката',
        dusk:'на закате',
        beforeSunset:'до заката',
        afterSunrise:'после рассвета'
    },
    {
        name:"FR", //French
        beforeDawn:'avant l\'aurore',
        dawn:'à l\'aube',
        afterDusk:'après le crépuscule',
        dusk:'au crépuscule',
        beforeSunset:'avant le coucher du soleil',
        afterSunrise:'après le lever du soleil'
    },
    {
        name:"ID", //Bahasa Indonesia
        beforeDawn:'sebelum fajar',
        dawn:'pada waktu fajar',
        afterDusk:'setelah senja',
        dusk:'pada senja',
        beforeSunset:'sebelum matahari terbenam',
        afterSunrise:'setelah matahari terbit'
    },
    {
        name:"MS", //Bahasa Malaysia
        beforeDawn:'sebelum subuh',
        dawn:'pada waktu subuh',
        afterDusk:'selepas senja',
        dusk:'pada waktu senja',
        beforeSunset:'sebelum matahari terbenam',
        afterSunrise:'selepas matahari terbit',
        am:"PG"
    },
    {
        name:"CS", //Czech
        beforeDawn:'před úsvitem',
        dawn:'za rozbřesku',
        afterDusk:'po soumraku',
        dusk:'za soumraku',
        beforeSunset:'před západem slunce',
        afterSunrise:'po východu slunce'
    },
    {
        name:"DA", //Danish
        beforeDawn:'inden daggry',
        dawn:'ved daggry',
        afterDusk:'efter skumring',
        dusk:'i skumringen',
        beforeSunset:'før solnedgang',
        afterSunrise:'efter solopgang'
    },
    {
        name:"DE", //German
        beforeDawn:'vor der Morgendämmerung',
        dawn:'in der Dämmerung',
        afterDusk:'nach Einbruch der Dunkelheit',
        dusk:'bei Dämmerung',
        beforeSunset:'vor dem Sonnenuntergang',
        afterSunrise:'nach Sonnenaufgang'
    },
    {
        name:"ES", //Spanish
        beforeDawn:'antes del amanecer',
        dawn:'en la madrugada',
        afterDusk:'después del anochecer',
        dusk:'al anochecer',
        beforeSunset:'antes del atardecer',
        afterSunrise:'después del amanecer'
    },
    {
        name:"TL", //Filipino - Tagalog
        beforeDawn:'bago mag madaling araw',
        dawn:'dapit-umaga',
        afterDusk:'pagkatapos ng takipsilim',
        dusk:'sa dapit-hapon na',
        beforeSunset:'bago lumubog ang araw',
        afterSunrise:'pagkatapos ng pagsikat ng araw',
        am:"AM"
    },
    {
        name:"IT", //Italian
        beforeDawn:'prima dell\'alba',
        dawn:'all\'alba',
        afterDusk:'dopo il tramonto',
        dusk:'al crepuscolo',
        beforeSunset:'prima del tramonto',
        afterSunrise:'dopo l\'alba'
    },
    {
        name:"HU", //Hungarian
        beforeDawn:'hajnal előtt',
        dawn:'hajnalban',
        afterDusk:'alkonyat után',
        dusk:'szürkületkor',
        beforeSunset:'naplemente előtt',
        afterSunrise:'napfelkelte után'
    },
    {
        name:"NL", //Netherlands
        beforeDawn:'voor zonsopgang',
        dawn:'bij dageraad',
        afterDusk:'na zonsondergang',
        dusk:'bij zonsondergang',
        beforeSunset:'voor zonsondergang',
        afterSunrise:'na zonsopgang'
    },
    {
        name:"NB", //Norway, bokmal
        beforeDawn:'før daggry',
        dawn:'ved daggry',
        afterDusk:'etter skumring',
        dusk:'ved solnedgang',
        beforeSunset:'før solnedgang',
        afterSunrise:'etter soloppgang'
    },
    {
        name:"PL", //Polish
        beforeDawn:'przed świtem',
        dawn:'o świcie',
        afterDusk:'po zmierzchu',
        dusk:'o zmierzchu',
        beforeSunset:'przed zachodem słońca',
        afterSunrise:'po wschodzie słońca'
    },
    {
        name:"PT", //Portugese
        beforeDawn:'antes do amanhecer',
        dawn:'ao amanhecer',
        afterDusk:'depois do crepúsculo',
        dusk:'ao entardecer',
        beforeSunset:'antes do pôr do sol',
        afterSunrise:'depois do nascer do sol'
    },
    {
        name:"RO", //Romanian
        beforeDawn:'inainte de rasarit',
        dawn:'în zori',
        afterDusk:'după amurg',
        dusk:'la amurg',
        beforeSunset:'Înainte de răsărit',
        afterSunrise:'după răsăritul soarelui'
    },
    {
        name:"FI", //Finnish
        beforeDawn:'ennen aamunkoittoa',
        dawn:'aamunkoitteessa',
        afterDusk:'hämärän jälkeen',
        dusk:'hämärässä',
        beforeSunset:'ennen auringonlaskua',
        afterSunrise:'auringonnousun jälkeen'
    },
    {
        name:"SV", //Swedish
        beforeDawn:'innan gryningen',
        dawn:'vid gryningen',
        afterDusk:'efter skymningen',
        dusk:'i skymningen',
        beforeSunset:'före solnedgången',
        afterSunrise:'efter soluppgång'
    },
    {
        name:"VI", //Vietnamese
        beforeDawn:'trước bình minh',
        dawn:'lúc bình minh',
        afterDusk:'sau khi Hoàng hôn',
        dusk:'lúc hoàng hôn',
        beforeSunset:'trước khi mặt trời lặn',
        afterSunrise:'sau khi mặt trời mọc'
    },
    {
        name:"TR", //Turkish
        beforeDawn:'şafaktan önce',
        dawn:'şafakta',
        afterDusk:'alacakaranlıktan sonra',
        dusk:'alacakaranlıkta',
        beforeSunset:'gün batımından önce',
        afterSunrise:'gün doğumundan sonra'
    },
    {
        name:"EL", //Greek
        beforeDawn:'πριν την αυγή',
        dawn:'την αυγή',
        afterDusk:'μετά το σούρουπο',
        dusk:'στο σούρουπο',
        beforeSunset:'Πριν το ηλιοβασίλεμα',
        afterSunrise:'μετά την ανατολή',
        am:"π.μ."
    },
    {
        name:"BG", //Bulgarian
        beforeDawn:'преди изгрев',
        dawn:'призори',
        afterDusk:'след здрач',
        dusk:'привечер',
        beforeSunset:'преди залез',
        afterSunrise:'след изгрев слънце'
    },
    {
        name:"UK", //Ukrainian
        beforeDawn:'до світанку',
        dawn:'на світанку',
        afterDusk:'після сутінків',
        dusk:'у сутінках',
        beforeSunset:'до заходу сонця',
        afterSunrise:'після сходу сонця'
    },
    {
        name:"AR", //Arabic
        beforeDawn:'قبل الفجر',
        dawn:'عند الفجر',
        afterDusk:'بعد الغسق',
        dusk:'عند الغسق',
        beforeSunset:'قبل الغروب',
        afterSunrise:'بعد شروق الشمس',
        am:'ص'
    },
    {
        name:"TH", //Thai
        beforeDawn:'ก่อนรุ่งสาง',
        dawn:'ตอนเช้า',
        afterDusk:'หลังพลบค่ำ',
        dusk:'ตอนค่ำ',
        beforeSunset:'ก่อนพระอาทิตย์ตกดิน',
        afterSunrise:'หลังพระอาทิตย์ขึ้น'
    },
    {
        name:"KO", //Korean 
        beforeDawn:'날이 새기 전에',
        dawn:'새벽',
        afterDusk:'황혼 후',
        dusk:'황혼에',
        beforeSunset:'일몰 전에',
        afterSunrise:'일출 후',
        am:'오전' //in Korean AM/PM delimiter is in front of the number
    },
    {
        name:"JA", //Japanese
        beforeDawn:'夜明け前に',
        dawn:'明け方に',
        afterDusk:'夕暮れ後',
        dusk:'夕暮れに',
        beforeSunset:'日没前',
        afterSunrise:'日の出後'
    },
    {
        name:"ZH", //Chinese
        beforeDawn:'臨晨之前',
        dawn:'黎明時分',
        afterDusk:'黃昏之後',
        dusk:'黃昏',
        beforeSunset:'太陽下山之前',
        afterSunrise:'日出後'
    }
]