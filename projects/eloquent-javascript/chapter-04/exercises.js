////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// setting a condtion if the range has a step argument, then setting a default step
function range(start, end, step = start < end ? 1 : -1) {
  // setting an array literal
 let array = [];
//setting a condtional statment for when step is present
  if (step > 0) {
    // loop through the start and end number
    // step will indicate the number it will go up by in the loop
    //pushing in the number which is getting iterated
    for (let i = start; i <= end; i += step) array.push(i);
    // if the number are the same an empty array will be given
  }else if(start === end){
    return array;
  } 
  return array;
  }
 

////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function sum(array) {
  // setting a counter
let total = 0;
// getting access to the array
  for (let value of array) {
    // adding the value to the total
    total += value;
  }
  // return total
  return total;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArray(array) {
  //setting a new variable with an ar
 let output = [];
 // looping through the array and begining from the end
  for (let i = array.length - 1; i >= 0; i--) {
    // pushing each element into the array
    output.push(array[i]);
  }
  // output will be an array with the elements from input array in reverse
  return output;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArrayInPlace(arr) {
// looping through the array, setting two variables, i will be at the beginning and j will represent the end
// as long as i is less then j, i will move up the loop and j will move down
for (var i = 0, j = arr.length - 1; i < j; i++, j--) {
  // var temp will represent the starting element of i
  var temp = arr[i];
  //the original arr i will be assigned j which will move the front element to the back
  arr[i] = arr[j];
// this will move the back element to the front
  arr[j] = temp;
}
}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function arrayToList(array) {
  // assigning a variable of null
 let list = null;
 // looping through the array starting from the end
  for (let i = array.length - 1; i >= 0; i--) {
    // assigning list into an object with the element and null as a value. have its deignated key
    list = {value: array[i], rest: list};
  }
  // will return array as an object with the given order
  return list;
}

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function listToArray(list) {
  // setting a variable to an array literal 
let array = [];
// looping through the list
  for (let node = list; node; node = node.rest) {
    // getting access to the value of value and pushing it into array
    array.push(node.value);
  }
  return array;
}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function prepend(value, list) {
  //this will add the value at the beggining and return the rest of the list
return {value, rest: list};
}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function nth(list, n) {
  // if theres nothing in the list will return undefined
if (!list) return undefined;
// making a base case where it will return the value of the list
  else if (n == 0) return list.value;
  // recalling the function until n reaches the base case, will return the value at the n position
  else return nth(list.rest, n - 1);
}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function deepEqual(a,b) {
  // seeing if both values are the same
if (a === b) return true;
  // making conditional statement to check for falsey values
  if (a == null || typeof a != "object" ||b == null || typeof b != "object") return false;
//getting the keys from object a and b and putting them into an array
  let keysA = Object.keys(a), keysB = Object.keys(b);
// using for of loop to iterate through the array
  for (let key of keysA) {
    // Have to set a condition to test for nested arrays and objects
    if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
  }
  return true;
}




////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};
