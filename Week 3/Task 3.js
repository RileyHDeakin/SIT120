//get the date
var d = new Date();
console.log(d);

//returns number of millaseconds  
var msec = Date.parse("June 27, 2022");
console.log(msec);

//gets the day
const date = new Date();
day = date.getDay();
console.log(day);

//gets the full year according to local time
const set_date = new Date();
set_date.setFullYear(2022);
console.log(set_date);

//returns the number of seconds in a date
const d1 = new Date();
secs = d1.getSeconds();
console.log(secs); 