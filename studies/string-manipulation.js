/*
* String Manipulation
*
* 0. Strings are able to be manipulated in serveral ways, they can be concatnated 
* by using the + operator. Or +=
*
*/
// example of concatnation

var dog = "Great dane";

var size= "Big";

var typeDog = size + " " + dog;
console.log(typeDog);//print => "Big Great dane"

// example of concatnation

var elementalAnimal = 'fire';
elementalAnimal += 'fox';
console.log(elementalAnimal); // => firefox

/**
 *  1. trim method() is able to shave off any unessecary whitespaces that might be before or after the word in the string
 */

// example of .length
var trimming = '   example   ';
console.log(trimming.trim()); // print => "example" there will be no whitespaces before or after the word of example 

/**
 * 2. Can also change the casing in a string from uppercase to lowercase, or lowercase to uppercase
 *      using toUpperCase or toLowerCase
 * 
 */
 
 // example of casing to uppercase
 
 var lowerCase = 'this is a string';
 
 lowerCase = lowerCase.toUpperCase();
 console.log(lowerCase); // => THIS IS A STRING. Will change everything in a string to uppercase
 
 // example to casing to lowercase
 
 var upperCase = "ANOTHER ONE";
 
 upperCase = upperCase.toLowerCase();
 
 console.log(upperCase); // => another one. Will change everything in a string to lowercase
 
 /**
  * 3. By using the split() method you can put a string in an array, and sepreate it by index 
  * 
  */
  
  // example of putting a string into an array
var nums = '12345';

console.log(nums.split()); // => ['12345']

console.log(nums.split('')); // => [1,2,3,4,5]

/**
 * 4. By using indexOf method you can see if a substring is inside another string and
 *      it will return the index of where that substring starts.
 * 
 *  a) if the substring is not found in the string it will return -1
 * 
 */

// example of using indexOf

var exampleUno = 'Snowball';

console.log(exampleUno.indexOf('ball')); // => 5 index number where it starts is shown

/**
 * 5. By using the replace() method you can change a certain piece of a string with the desired replacement
 * 
 */

// example of replace()

var gettingReplaced = 'I am driving';

// the first parameter in replace is whats getting replaced and the second parameter is the replacement

gettingReplaced = gettingReplaced.replace('drving','flying');
console.log(gettingReplaced); // => I am flying, driving got replaced

/**
 * 6. By using slice you can return the characters in a string within the index that you are looking for
 * 
 *  a) The first paramter in the slice method is where it will start, the second parameter is where it will end
 * 
 *  b) It will return all the character between the index givin, the characters of the index of start and end will not 
 *      be included
 * 
 *  c) If only a start parameter is givin it will return all the values from the start to the end of the string
 * 
 */
 
 // example of slice method
 
 var exampleDos = '123456';
 
 console.log(exampleDos.slice(0,5)); // =>'2345'
 
 console.log(exampleDos.slice(0)); // => '23456'