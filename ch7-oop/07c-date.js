var time1 = new Date();

//today one year ago
var lastYear = time1.getFullYear()-1;
time1.setFullYear(lastYear);
console.log(time1);

time1 //Thu Feb 26 2015 23:33:00 GMT-0500 (EST)
time1.toLocaleTimeString();
//'11:33:00 PM'
time1.toLocaleDateString()
//'2/26/2015'

time1.valueOf()
//1425011580748