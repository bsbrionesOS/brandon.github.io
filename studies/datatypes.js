/*
*DATA TYPES
*
* 0. Data types are diffrent type of values that are used to carry out actions.
*
* 1. They have two diffrent types of data types Complex and Simple/Primitive.
*   
* 2. Simple data types consist of Numbers, Strings, Booleans, undefined, null, NaN, infinity, -infinity.
* What makes these data types simple is the fact that they cannot hold or collect other values.
*
* 3. Complex data types consist of Arrays, Functions, and Objects. These data types are complex because they can store
* other values within them.
*/

/* Primitive data types
*
* 0. Numbers: They can represent any numerical value; whether it's a positive, negative or decimal number.
* Numbers can be used to carry out arithmetic by using operators.
*
* 1. They can be initilized simply by typing the designated number
*/
// initilzing a number in a variable

var num = 1;
console.log(num); // => print out 1

// initilizing an equation in a variable

var addNum = 2 + 3;
console.log(addNum); // => prints out 5

/*
*STRINGS
*
* 0. String is a simple data type used to create words. A string also has a length property which allows you to
* see how many elements a certain string has. 
* 
* 1. To create a string you would have to declare it in a variable and initilize by using single or double quotation marks then putting in 
* the word, letters, or sentence you want to use.
*
* 2. To acess individual characters in a string you can use bracket notation or charAt() with the specific index of the string.
*      Acessing the last character in a string can be done by using .length -1
*
* 3. Strings are also unmutable
*/
// declaring and initilizing a string

var myString = "This is a String";
console.log(myString); // => "This is a String"

// finding number of elements in a string

console.log(myString.length); // => print out 16

// Acessing an individual character in a string

console.log(myString[0]); // => prints out T

console.log(myString.charAt(1)); // => prints out h

// Acessing the last chracter in a string

console.log(myString[myString.length - 1]); // => prints out g



/*
*Booleans;
*
* 0. Booleans are true or false values. They can control the path of code in a function to give out diffrent outputs.
*
* 1. To create a boolean you would declare a variable and assign it the keywords of true or false.
*/

// declaring and assigning a boolean

var likeWaffles = true;
console.log(likeWaffles); // prints out true

/*
*Null
*
* 0. Null is an assignment value of nothing or no value
*
* 1. To create a value of null you would decalre a variable and assign it the keyword of null
*/
// declaring and assigning

var empty = null;
console.log(empty); // prints out null

/*
* Undefined;
*
* 0. Undefined is when a variable has been declared but has no value;
*/
// example of undefined

var nothing;
console.log(nothing); // => prints out undefined

/*
* NaN
*
* 0. NaN stands for Not a Number which occurs when you're trying to do a  Math calculation and one of the values is
* not a number.
*/
// example of NaN

var noNum = 'a'/2;
console.log(noNum); // print out the data type NaN because you can not divide a string by 2

/*
* Infinity and -Infinity
*
* 0. Infinity and - Infinity represent negative and postive infinity oo this can be represented by dividing any number
*   positive or negative by 0
*/
// example of positive and negative infinity
console.log(1/0); // prints => infinity

console.log(-1/0); // prints => -infinity

/*
* Complex data types;
*
* Array:
*
* 0. An Array has the ability to store multiple data types within and collect using diffrent methods. It also has a length property which can
* indicate how many elements are inside. By using push pop shift and unshift you can add or remove elements
*
* 1. An array is made by using brackets [], then putting any data type seperated by a comma
*
* 2. Similar to a string you can get acess to a value in an array by doing bracket notation
*
* 3. Arrays are mutable so you can change an element within the array
*
*/
// declaring and assigning an array
var myArray = [1, 'a'];
console.log(myArray); // => prints [1, 'a'] in this instance the array has a number and a string inside

// manipulating an array using pop 
myArray.pop();
console.log(myArray); // prints [1] pop removed the last element in the array

// manipulating an array using push

myArray.push(true);
console.log(myArray); // prints [1, true] pushes the value to the end

// manipulating an array using shift

myArray.shift();
console.log(myArray); // => prints [true] removes the first element in the array

// manipulating using unshift

myArray.unshift('hello');
console.log(myArray); // => ['hello', true] adds value to the beginning of the array

// accessing values for arrays

console.log(myArray[0]); // => 'hello'

//accessing last value in the array

console.log(myArray[myArray.length - 1]); // => 'true'

// changing an element in array

myArray[0] = false;

console.log(myArray); // => [false, true]


/*
* Object:
*
* 0. Objects are another complex data type that is a collection of multiple data type. With an object it take key/value pairs
* as substance. Objects do not have a length property because they do not have an index and are not ordered.
*
* 1. Objects are declared and assigned by using curly brackets {}; and the key/ value pair have to be relevent to each other. Once made 
* you can add key/value pairs by using dot or bracket notation
*/
// declaring and assigning an object
var myObject = {};
console.log(myObject); // prints => {}; empty object

// add into object using dot notation
myObject.breed = 'Dobberman';
console.log(myObject); // prints {Breed: 'Dobberman'}

/*
* Functions:
*
* 0. Functions are complex data types that are able to perform a certain action multiple times. By taking an input in its parameter
* it's able to process the input return a new data value
*
* 1. Creating a function consits of declaring/paramter/function body/ return statement
*/
// making a function
function add(num){
    return num + 2;
}
// once made you have to invoke the function
add(2); // prints => 4

/*
* Copy by value vs Copy by reference
*
* 0. Copy by value referes to simple data types because they are stored in the variable itself.
* where as copy by reference  referes to complex data types because an array or object isnt stored in the variable
* itself the variable is able to point to the reference of the array.
*
* 1. When copied by value the item copied will no longer be associated with the original,
*.       When copied by reference the copy will have a direct link to the original.
*/
// example of copy by value

var myNum1 = 3;

var myNum2 = myNum1;
console.log(myNum2); // prints => 3 because the value that is in myNum1 gets copied to myNum2, num2 now contains the value of 3

// example of copy by reference

var arrayy = [1,2,3,4];

var arrayyCopy = arrayy;

arrayyCopy.pop(); // => removes the last element from array

console.log(arrayy); // => [1,2,3] what was changed in arrayCopy will have an effect in arrayy

