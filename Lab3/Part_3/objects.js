// Pre-defined Object Methods

/*
1-
 Object.values() method:static method returns an array of values of an object.
 */
const person = { name: "Mariam", age: 22 };
console.log(Object.values(person)); //['Mariam', 22]

/*
2-
 Object.seal() method: Static method prevents new properties from being added
  and marks all existing properties as non-configurable.
*/
Object.seal(person);
// Prevents other code from deleting properties of an object.  
person.age = 23;
person.phone = "0120102547";
console.log(person.age);
console.log(person.phone);   // cannot added when sealed -> undefined
delete person.age;    // cannot delete when sealed  
console.log(person.age);

/*
3-Object.isSealed()method:static method determines if an object is sealed.
*/
console.log(Object.isSealed(person));//true 

/*
4-Object.isExtensible()method:static method determines if an object is extensible
 (whether it can have new properties added to it).
*/
const emp = { name: "Mariam", age: 23, desc: "developer" };
console.log(Object.isExtensible(person)); //false because is sealed
console.log(Object.isExtensible(emp)); //true

/*
5-Object.preventExtensions()method:static method prevents new properties from ever being added to an object.
*/
Object.preventExtensions(emp);
console.log(Object.isExtensible(emp)); //false

/*
6-
Object.hasOwn()method:static method returns true if the specified object has the indicated property as its own property. 
If the property is inherited, or does not exist, the method returns false. */
console.log(Object.hasOwn(emp, 'desc'));  //true
console.log(Object.hasOwn(person, 'desc'));  //false

/*
7-Object.keys()method:static method returns an array of a given object's own enumerable string-keyed property names.
 */
console.log(Object.keys(emp)); //[ 'name', 'age', 'desc' ]

/*
8- Object.entries()method: static method returns an array of a given object's own enumerable string-keyed property key-value pairs.
 */

for (const [key, value] of Object.entries(emp)) {
    console.log(`${key}: ${value}`);
}

/*9-
Object.freeze()method: static method freezes an object.
 Freezing an object prevents extensions and makes existing properties non-writable and non-configurable. */
const manager = { name: "Mariam", age: 23, desc: "developer", departmentNo: 15 };
Object.freeze(manager);
manager.departmentNo = 20; //cannot ne changed 
console.log(manager.departmentNo); //15

/*
10-
Object.isFrozen()method:static method determines if an object is Frozen.
*/
console.log(Object.isFrozen(manager));//true 
