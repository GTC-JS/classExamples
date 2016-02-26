// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain

//JavaScript objects are dynamic "bags" of properties 
// (referred to as own properties). 
//JavaScript objects have a link to a prototype object.
//When trying to access a property of an object,
// the property will not only be sought on the object 
// but on the prototype of the object, 
// the prototype of the prototype, and so on 
//   until either a property with a matching name is found 
//   or the end of the prototype chain is reached.



//List all properties
function listAllProperties(o){     
	var objectToInspect;     
	var result = [];
	
	for(objectToInspect = o; objectToInspect !== null; objectToInspect = Object.getPrototypeOf(objectToInspect)){  
		result = result.concat(Object.getOwnPropertyNames(objectToInspect));  
	}
	
	return result; 
}
//This can be useful to reveal "hidden" properties (properties in the prototype chain which are not accessible through the object, because another property has the same name earlier in the prototype chain). Listing accessible properties only can easily be done by removing duplicates in the array.