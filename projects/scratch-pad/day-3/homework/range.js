// #!/usr/bin/env node

'use strict';

/**
 * 3: range()
 *
 *  a. Create a function called range that takes two integers as 
 *  parameters and returns an Array containing all integers 
 *  between the two parameters, inclusively.  For example:
 *
 *      range(8, 14);  // => [8, 9, 10, 11, 12, 13, 14]
 *
 *  BONUS: If the first argument is greater than the second, 
 *  return the range in reverse order, ie:
 *
 *      range(14, 8);  // => [14, 13, 12, 11, 10, 9, 8]
 *
 *  TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best?
 *  c. you'll wanna make use of the push() method of Array.
 */
function range(start, end) {
    // YOUR CODE GOES BELOW HERE //
    // need to create an array literal to collect the output
     var arr =[];
     //using if statement to set the conditons, then using for loop too print out
     // the numbers between the two parameters given
     //if start is less then end
     if(start < end){
         
         for(var i = start; i <= end; i++){
             //all numbers between start and end will be pushed into the array in ascending order
             arr.push(i);
         }
     }else{
         // if start is greater
         for(var i = start; i >= end; i--)
         //will push the numbers into array in descending order
         arr.push(i);
     }
     return(arr);
    
    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.range = range;
}