//To print the full text corresponding to the day of the week 
function getDayName(curDay)
{
    if (curDay === 0) {
       return "Sunday";
    } else if (curDay === 1) {
       return "Monday";
    } else if (curDay === 2) {
       return "Tuesday";
    } else if (curDay === 3) {
       return "Wednesday";
    } else if (curDay === 4) {
       return "Thursday"; 
    } else if (curDay === 5) {
       return "Friday";
    } else if (curDay === 6) {
       return "Saturday";
    }
}

var today = new Date();
console.log("Today is " + getDayName(today.getDay()));