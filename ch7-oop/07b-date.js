//create date variable representing now
var time1 = new Date();
//"time1" will store the time this line executed, printed like
//Fri Feb 26 2016 17:48:03 GMT-0500 (EST)

time1.getDate() // 26
time1.getDay() //5
time1.getMinutes() //48

//Some field values start with zero like array indices
//6 for July
var independenceDay = new Date(1776, 6, 4);
console.log(independenceDay)
//Thu Jul 04 1776 00:00:00 GMT-0400 (EDT)

//new Date class method in ES5, standardized in 2009 
var time2= Date.now()
1456526603261
//Date class methods to manipulate the object

time2-time1 //milliseconds like 5809

//time2.getDay()
//TypeError: time2.getDay is not a function
var time3 = new Date(time2)
time3.getDay() //5
