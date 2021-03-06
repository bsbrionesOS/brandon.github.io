// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
    //returning a function that compares the base from the parent function to the value from the child function
    //using a if statement to compare base and value, if value is bigger return true; false otherwise
    return function greater(value){
         if(value > base){
             return true;
         }else{return false}
    };
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
    /*returning a function that uses a if statement to compare base and value bringing
    back true if base is bigger then value and false if otherwise */
   return function lesserThen(value){
       if(value < base){
           return true;
       }else{return false}
   };
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
    // returning a function with a if statement to compare a character with the beginging character of a string
    // access the string first character by [0] to make sure case is insensitive, I made everything .Uppercase to be equal
    //return true if value of startsWith matches the first value of a string.
    return function startString(string){
        if(string[0].toUpperCase() === startsWith.toUpperCase()){
            return true;
        }else{return false}
    };
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
    //to test weather the last letter of the string is the same as the endsWith
    // Access the last index of string to find the value and strictly compare it to the value of endsWith
    //account for casing by making each value being compared to uppercase
    return function endString(string){
        if(string[string.length - 1].toUpperCase() === endsWith.toUpperCase()){
            return true;
        }else{return false}
    };
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return an Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
    // create an array literal to collect data
  var arrayMod = [];
  /* to modify the strings within the array, a for loop has to be used to run through
   the data within the array. The output of the loop will modify and push into new array.*/
  for(var i = 0; strings.length > i; i++){
      arrayMod.push(modify(strings[i]));
  }
    // returning the array of strings modified
    return arrayMod;
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
    // create a container to hold all strings that return true
    var array = [];
    // need to use a for loop to run through the data within the array
    
    for(var i = 0; i <= strings.length-1; i++){
        //if conditions if the string that is being tested within the function returns true it will ne pushed into the array
        if(test(strings[i]) === true){
            array.push(i);
        }
    }
    // using another if condition to comapre both the strings, if the strings aka the original array with strings has a bigger length value
    // then the new array of strings. That means that a string within the array was false.
    if(strings.length > array.length){
        //return false if string has a bigger length then array
        return false;
    }else {return true}
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}