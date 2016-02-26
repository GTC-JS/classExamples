//properties of objects can be objects 
//recursively!
var person1 = {
  "fname" : "Ozgur",
  "lname" : "Ozturk",
  "phone" : "(888) 888-8888",
  "address" : {
      "street" : "123 Broadway St",
  },
  mother: {
      "fname" : "Suzan",
      "lname" : "Ozturk",
      "phone" : "(555) 555-5555",
      "address" : {
          "zip" : "66779"
      }
    }
}
//
person1.mother.address.zip
