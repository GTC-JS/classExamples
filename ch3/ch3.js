var newsSections = ["world", "local", "opinion", "sports"];
newsSections[4] = "entertainment";
newsSections.push("technology");
newsSections[10] = "economy";
//! Can assign mixed types
newsSections[15] = true;
var colors = [];

// JS Arrays are also objects
// so they can have properties
// properties can also use [] notation
// they are not elements of the array

var grades = [];
grades['Alissa'] = 100;
grades.Alissa // This 
grades['Johnny'] = 99;
Array.isArray(grades);
console.log(grades.length);
//0

var lis = document.getElementsByTagName("li")
typeof lis
// "object"
Array.isArray(lis)
// false