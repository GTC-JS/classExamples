//some parameters can be objects too
function Car(make, model, year, owner) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.owner = owner;
}
var rand = new Person("Rand McNally", 33, "M");
var ken = new Person("Ken Jones", 39, "M");

function Person(name, age, sex) {
  this.name = name;
  this.age = age;
  this.sex = sex;
}

var car1 = new Car("Eagle", "Talon TSi", 1993, rand);
var car2 = new Car("Nissan", "300ZX", 1992, ken);

console.log(car2.owner.name);