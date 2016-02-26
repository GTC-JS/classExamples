//properties of objects can be objects 
var person1 = {
  "fname" : "Ozgur",
  "lname" : "Ozturk",
  "phone" : "(888) 888-8888",
  "address" : {
      "street" : "123 Broadway St",
      "city" : "Atlanta",
      "State" : "GA",
      "zip" : "30001"
  }    
}

//can access zip by
person1.address.zip
// or by
person1["address"]["zip"]