//This is a constructor function
var Person = function(){
  console.log("Person is created");  
  console.log(this);  
}

var joe = new Person();