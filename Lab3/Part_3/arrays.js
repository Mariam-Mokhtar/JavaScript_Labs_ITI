// Pre-defined Array Methods

/*
1-
  every() method:method executes a function for each array element.
  return true if all elements in an array pass a test inside function
  else return false.
  method does not execute the function for empty elements.
  method does not change the original array
*/
var arr = [20, 18, 52, 22, 60];
var check = arr.every(isEven); //true
console.log(check);
function isEven(num) {
    return num % 2 == 0;
}


/*
2-
  filter() method:method creates a new array filled with elements that pass a test provided by a function.
  method does not execute the function for empty elements.
  method does not change the original array
*/
arr = [3, 50, 4, 7, 55, 90, 80];
console.log(arr);
var newArr = arr.filter(isEven);//50 4 90 80
console.log(newArr);

/*
3-
  find() method:method returns the value of the first element that passes a test.method executes
  a function for each array element.
  method returns undefined if no elements are found.
  method does not execute the function for empty elements.
  method does not change the original array
*/
console.log(arr.find(isEven));//50

/*
4-
  find() method:method returns the index (position) of the first element that passes a test.method executes
  a function for each array element.
  method returns -1 if no match is found.
  method does not execute the function for empty elements.
  method does not change the original array
*/
console.log(arr.findIndex(isEven));//1

/*
5-
forEach() method:method calls a function for each element in an array.
  method does not execute the function for empty elements.
*/

arr.forEach(element=>console.log("ELement is : ",element)); //ELement is :  3

/*
6-
includes() method:method returns true if an array contains a specified value.
method returns false if the value is not found.
method is case sensitive.
*/
const fruits = ["Banana", "Orange", "Apple"];

console.log(fruits.includes("Apple"));//true
console.log(fruits.includes("Kiwi"));//false

/*7-
map() method:methos that creates a new array from calling a function for every array element.
calls a function once for each element in an array.
does not execute the function for empty elements.
does not change the original array.
*/
arr = [4, 9, 16, 25];
newArr = arr.map(Math.sqrt) //[2,3,4,5]
console.log(newArr);
/*
8-
fill() method:method fills specified elements in an array with a value.
method overwrites the original array.
Start and end position can be specified. If not, all elements will be filled.
*/

fruits.fill("Mango"); //[ 'Mango', 'Mango', 'Mango' ]
fruits.fill("apple", 1, 2);
console.log(fruits);  // [ 'Mango', 'apple', 'Mango' ]

/*
9-
from() method:method returns an array from any iterable object "with a length property".
*/
console.log(Array.from("Mariam")); // [ 'M', 'a', 'r', 'i', 'a', 'm' ]

/*
10-
isArray() method: method returns true if an object is an array, otherwise false. 
*/
var x=5;
console.log(Array.isArray(fruits)); //true
console.log(Array.isArray(x)); //false




