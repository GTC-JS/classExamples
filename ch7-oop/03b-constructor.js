//Usually we pass parameters to constructor
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  //you can check type of parameters to be correct, and log an error, in constructor.
  if(typeof(year) === 'string')
    this.year = year;
    else
        console.log("year passed as number");
}

var randsCar = new Car("Eagle", "Talon TSi", 1993);
var kenscar = new Car("Nissan", "300ZX", 1992);