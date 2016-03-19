var today = new Date();
var curDay = today.getDay();


//Returns full text corresponding to the day of the week 
// returned by the getDay() method
if (curDay === 0) {
   weekday = "Sunday";
} else if (curDay === 1) {
   weekday = "Monday";
} else if (curDay === 2) {
   weekday = "Tuesday";
} else if (curDay === 3) {
   weekday = "Wednesday";
} else if (curDay === 4) {
   weekday = "Thursday"; 
} else if (curDay === 5) {
   weekday = "Friday";
} else if (curDay === 6) {
   weekday = "Saturday";
}

console.log(weekday)