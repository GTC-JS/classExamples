//using an array and index is better approach
var today = new Date();
var months = ["January","February","March", "April","May","June",
"July","August","September",
"October","November","December"];
var curMonth = months[today.getMonth()];
console.log(curMonth);
