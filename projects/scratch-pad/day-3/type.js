// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 */
function isArray(value) {
    // YOUR CODE BELOW HERE //
    // using Array.isArray to test if value is strictly an array
    if(Array.isArray(value)){
        return true;
    }else{return false}
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 */
function isObject(value) {
    // YOUR CODE BELOW HERE //
    // Using and if statement to test the conditions of object being an object literal, and the value thats put in is not
    // null,date(), or an array because they are all considered objects
    if(typeof value === 'object' && value !== null && value != Date() && Array.isArray(value) !== true){
        //return true if the value passes all the conditions
        return true;
    }else{return false}
  
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
function isCollection(value) {
    // YOUR CODE BELOW HERE //
    // testing for {} and [] literal
    //using an if statement to test if value is an object literal or array.
    //just have to account for if the value is not null or is a date() 
    if(typeof value === 'object' && value !== null && value != Date()){
       //return true if all the conditions pass
        return true;
        //otherwise return false
    }else{return false}
    
    
    
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 
function typeOf(value) {
    // YOUR CODE BELOW HERE //
    // Using if statements and  setting the condtions of if argument is a certain data type
    // it will return as a string
    // setting the condition if value is a function
    if(typeof value === "function"){
        // will return function as a string
        return "function";
        //value is a boolean
    } else if(typeof value === "boolean"){
        //return boolean as a string
        return "boolean";
        //value is null
    }else if( value === null){
        //will return null as a string
        return "null";
        //value is undefined
    }else if(typeof value === undefined){
        //return undefined as a string
        return "undefined";
        //value is a string
    }else if(typeof value === "string"){
        //return string as a string
        return "string";
        //value is an array literal
    }else if(Array.isArray(value)){
        //will return 'array' as a string
        return "array";
        // if value is date, has to account if date is an object and also has the constructor of Date
    } else if( typeof value === "object" && value instanceof Date){
        //will return date as a string
        return "date";
        //if the value is a number
    }else if(typeof value === "number"){
        //return number as a string
        return "number";
    }
    
    
    
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}
