# Skyscanner daylight extension
Chrome extension adding simple yet useful functionality to Skyscanner flight ticket search.

# Why?
As a keen traveller, I lacked this functionality for 3 reasons:
* I always want to maximize my daylight ours after arrival and before departure to see more
* On some flights I want to see a specific view (say, mount Everest at dawn) and choose flight accordingly
* In some countries it is not safe to travel around at night, so I'd better choos flight that arrives at daytime

# What it does?
The extension adds a comment below departure and arrival time:
* Green text showing how many daylight hours a passenger will have before departure or after arrival of the flight
* Orange and red text shows that flight departs or arrives at dawn/dusk
* Black text shows nighttime
  
![Screenshot](https://lh3.googleusercontent.com/atGvNZV-Ac0bK_XX7WaGiuBAwXnTt3HAZPRKitZ-S4k2uE-wRvWcqaoDV9VkoiONiuLnHNXuOpgdQstCva-AwFqIuQ=w640-h400-e365-rj-sc0x00ffffff)

* Extension works with any country-specific version of Skyscanner (e.g. ".net", ".com",. ".co.kr")
* Supports all languages available for Skyscanner users

# Known issues
* Some countries utilize DST (daylight saving time). In those countries all airports are assigned with DST and GMT (Greenwich Mean Time) offset. 
Calculation of when to use DST and when GMT is quite rough and it does not consider specific DST switch dates for each country. 
Therefore, for several days in March and October (depending on how close the calculation is to the actual switch date),
the extension could show sunrise and sunset with 1 hour error.

### [Get it here](https://chrome.google.com/webstore/detail/skyscanner-daylight-hours/cgnecdkffjnlogglladkogeabgklaild?hl=en&authuser=0)

### Credits
* @mourner - great sunrise/sunset calculation [library](https://github.com/mourner/suncalc)
* @dereke - airport time zone [offsets](https://github.com/dereke/airport-timezone)
