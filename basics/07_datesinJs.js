var myDate = new Date()

//Common formatting:
console.log(myDate) //a bit cryptic to look at
console.log(myDate.toString()) //Day Month Date Year hr/min/sec timeZone
console.log(myDate.toDateString()) //toString but only date part
console.log(myDate.toTimeString())//toString but only time part
console.log(myDate.toLocaleString()) //Date and Time formed as below together
console.log(myDate.toLocaleDateString()) //Date formatted MM/DD/YYYY
console.log(myDate.toLocaleTimeString()) //Time formatted HH:MM:SS am/pm

//Declaring Date Objects:
var newDate=new Date(2024, 0, 15); //Year<>month*index*<>Date 
console.log(newDate.toString())//Automatically figures out day of the week and time=0000
console.log(newDate.toLocaleDateString())

var newDate2=new Date("2024-1-15") //Year<>month*string*<>Date
console.log(newDate2.toString())

//to get time in milliseconds that has elapsed since the epoch(midnight at the beginning of January 1, 1970)
console.log(Date.now())

//toLocaleString() => to customise the entire formatting of the date
//The Intl.DateTimeFormat object enables language-sensitive date and time formatting
console.log(`Formatted Date::${newDate.toLocaleString('default', { //Will Print Year and Monday only (Oder will always be year>Day)
   weekday:"long",year:"2-digit" 
})}`)

//Interview Question: Writing time in seconds::
console.log(`Time in seconds is:: ${Math.floor((Date.now()/1000))}`)
//Interview Question: Type of Date=> Object type
console.log(typeof myDate) //object type