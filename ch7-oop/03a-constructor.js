//You can create an object with these two steps:
//- Define the object type by writing a constructor function. There is a strong convention, with good reason, to use a capital initial letter.
//- Create an instance of the object with new.

//This is a constructor function
function Car() {}
car1 = new Car();
 
console.log(car1.color);    // undefined

//You use prototype 
//to add new properties to class
//If JS does not find it in object,
//it goes up in prototype hierarchy
Car.prototype.color = null;
console.log(car1.color);    // null
 
car1.color = "black";
console.log(car1.color);   // black