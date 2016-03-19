//You can create an object with these two steps:
//- Define the object type by writing a constructor function. There is a strong convention, with good reason, to use a capital initial letter.
//- Create an instance of the object with new.

//This is a constructor function
function Car() {}
var car1 = new Car();
 
console.log(car1.color);    // undefined

//You use "prototype" to add new properties to "class"
//If JS does not find it in object,
//it searches up in prototype hierarchy
Car.prototype.color = null; // default value
Car.prototype.changeColor = function (newColor)
{
    Car.prototype.color= newColor;
}
console.log(car1.color);    // null, found default 

car1.color = "black";
console.log(car1.color);   // black

// https://blog.pivotal.io/labs/labs/javascript-constructors-prototypes-and-the-new-keyword
console.log(car1 instanceof Car);
//true
console.log(car1.constructor);
//[Function: Car]