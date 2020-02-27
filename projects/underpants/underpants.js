// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below it's instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/
// using a function that returns the argument passed
_.identity = function(value){
    return value;
};
/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/
_.typeOf = function(value){
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
    }else if(typeof value === "undefined"){
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
    }else if(typeof value === "number"){
        //return number as a string
        return "number";
    }else if (typeof value === 'object' && value !== null && value != Date() && Array.isArray(value) !== true){
        return 'object';
    }

};

/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/

   _.first = function (array, number) {
     // checking is array is not an array
     if(Array.isArray(array) === false) {
         // returning array literal
         return [];
         // checking if number is grater than array length
         // returning the whole array
     } else if (number > array.length ) {
         return array;
         // checking if number is less than 0
         // returning []
     } else if (number < 0) {
         return [];
         // checking if number is greater than 0 and less than array lenght
         //return first number in the array
     } else if (number > 0 && number <= array.length) {
         return array.splice(0, number);
         //checking if number is not a number
         // returning array at 0 index
     } else if (Number.isNaN(number) === false) {
         return array[0];
     }
     
    
};

/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/
_.last = function(array, number) {
    // If value is not an array returning []
    if(Array.isArray(array) === false) {
        return [];
        // if number is bigger then the array length returning the whole array
    } else if (number > array.length ) {
         return array;
         // if number is a negative number returning []
} else if (number < 0) {
         return [];
         // if number is one of the index within the array returning that number of elements
} else if (number > 0 && number <= array.length) {
         return array.slice(array.length-number, array.length);
         // if value is not a number returning the last element in the array
} else if (Number.isNaN(number) === false) {
         return array[array.length-1];
     }
};

/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/
_.indexOf = function(array, number) {
    // using Array.isArray to test the truthy of the array 
   if(Array.isArray){
       //returning the first occurance of the value
       return array.indexOf(number);
   }
};

/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/
_.contains = function(array, value) {
   var bool = false;
   //using a forloop it iterate over the array
    for(var i = 0; i < array.length; i++) {
        //testing to see if the contents of the array has a value
       array[i] === value ? bool = true : false; 
    }
    return bool;
};
/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/
_.each = function(collection,action) {
    // testing to see if collection is an array or object
    // Using Array.isArray to test the collection 
    // calling action for each  element,index,array
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
        //if collection is a object using a for in loop to access contents
    } else {
        for (var key in collection) {
            //calling the action with its property value,key and object
            action(collection[key], key, collection);
        }
    }
};


/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/
_.unique = function(array) {
    // using array.from to pass all the arguments into an array, by using set will return no repeats.
    var uniqueArray = Array.from(new Set(array));
    return uniqueArray;
};

/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/
_.filter = function(array, fun) {
    // setting a container for the new array
  let filterArr = [];
  //using for loop to iterate over array
  for (var i = 0; i < array.length; i++) {
      // using the fun argument and passing the elements, index and array
      // if function returns truthy it will get push that element into new array
     if(fun(array[i], i, array)) {
          filterArr.push(array[i]);
      }
  }
     return filterArr;
};

/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter(), you must use _.filter() in your implementation
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/
_.reject = function(array, fun1) {
    //setting a new container for the array
    let rejArray = [];
    // iterating for array
    for(var i = 0; i < array.length; i++) {
        // if the value return false then that element will get pushed into new array
        if(fun1(array[i], i, array) === false) {
            rejArray.push(array[i]);
        }
    }
    return rejArray;
};

/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/
_.partition = function(array,action){
    let both = [];
    let small = [];
    let large = [];
    // using a for loop to iterate over the array
    for(var i = 0; i < array.length; i++) {
        // if action returns true element will be pushed into small array
        if(action(array[i], i, array)) {
            small.push(array[i]); 
            // if action returns falsy element will get pushed into large array
            } else if (!action(array[i], i, array)) {
            large.push(array[i]) ;
            } 
    }
    //small and large arrays gets pushed into both array
    both.push(small, large);
    // returining an array with two subarrays
    return both;
};

/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/
_.map = function(collection, fun3){
    // setting new container for a new array
    var newArray = [];
    // testing if collection is an array
    if(Array.isArray(collection)){
        // iterating over array 
        for(var i = 0; i < collection.length; i++){
            // saving the return value of the function and pushing it into new array
           var val1 =fun3(collection[i],i,collection);
            newArray.push(val1);
        }
        // testing if collection is stricly an object
    }else if(typeof collection === 'object' && collection !== null && collection != Date() && Array.isArray(collection) !== true){
        //using for in loop to iterate over object
        for(var key in collection){
            // saving the return value in a new variable and pushing into the new array
            var val2 = fun3(collection[key],key,collection);
            newArray.push(val2);
        }
    }
    return newArray;
};

/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/
_.pluck = function(array, property) {
// using the function _.map and setting the argument array, function with element index and collection
// will give an array with elements
//returning an array with values of objects
   return _.map(array, function(element, index, collection){
        return element[property];
    });
};

/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/
_.every = function(collection, fun) {
    // testing to see if function is not a function or given
    if (typeof(fun) !== 'function') {
        // using contains with arguments of collection and false
      return !_.contains(collection, false);
   }
   //setting new array
    var newArray = [];
    //using the map method to access array and object
    newArray = _.map(collection, fun);
    console.log(newArray);
    // by using contains will give back the truthy or falsy values
    return !_.contains(newArray, false);
//     
};

/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/
_.some = function(collection,fun){
    //test to see if fun is a function
    if (typeof(fun) !== 'function') {
        //testing to see if collection has any truthy or falsy values
      return !_.contains(collection, false);
   }
   //setting a new array
   var newArray = [];
   //using map method to access array and object
    newArray = _.map(collection, fun);
    console.log(newArray);
    // by running it in contains will test true or false
    return _.contains(newArray, true);
};

/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/
_.reduce = function(array, fun, seed){
 var previousResult;
 // take into account if seed is not given
 if (seed == undefined){
     // using the first element in array for seed when not givin
        seed = array[0];
        //iterate through the array
        for (let i = 1; i < array.length; i++) {
     if (i === 1) {
         //using the retuned value of function as previous result
         previousResult = fun(seed, array[i], i);
         //returning the final return value of the funciton call
     } else if ( i !== array.length - 1) {
         previousResult = fun(previousResult, array[i], i);
     } else {
         return fun(previousResult, array[i], i);
     }
     }
         }
         //when seed is givin
 for (let i = 0; i < array.length; i++) {
     if (i === 0) {
         //running the first iteration
         previousResult = fun(seed, array[i], i);
         //running the last iteration
     } else if ( i !== array.length - 1) {
         previousResult = fun(previousResult, array[i], i);
     } else {
         return fun(previousResult, array[i], i);
     }
     }
};

/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/

_.extend = function (...object){
    //using the ... to put all the objects into an array
   // iterate through the array of Objects
   for (let i = 1; i < object.length; i++){
         // use the assign method to replace the first object the others
         Object.assign(object[0], object[i]);
     }
     // returning extended array
     return object[0];
   };

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
