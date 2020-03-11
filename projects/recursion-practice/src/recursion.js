// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120
var factorial = function(n) {
  // we want to create the case base for this function
  // want to create a stop condition when n = 0, also since we dont want to mulitply by 0 we return 1
  if(n === 0){
    return 1;
    // to account for negative numbers we math.sign is used and if it returns -1 which means that n is a negative number
    // null will be returned
  }else if (Math.sign(n) === -1){
    return null;
  }
  
  // want to create the recurssion where n is going to be multiplied
  return n * factorial(n - 1);
};

// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21
var sum = function(array) {
  //wanting to use the base to stop when the array only has 0 elem
  // return 0 when the array is empty
  if(array.length === 0){
    return 0;
  }
  // the first value in the array will be added, remove the first index of the array each call
  return array[0] + sum(array.slice(1));
};

// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
};

// 4. Check if a number is even.
var isEven = function(n) {
  
  //also accounting for negative numbers
  if(n < 0){
    // if the number is even recalling it back in the function as a positive
     return isEven(Math.abs(n));
     // if number is odd will return false
  } else if(n === 1){
    return false;
    // if number is even will return true
  }else if(n === 0){
    return true;
  }
  // if number is bigger the 1 or 2, subtract by -2 and that will result to 1 or 0
   return isEven( n - 2);
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
// giving it an edge case of 0 and will return 0 once the number is reached
if (n === 0){ 
  return n;
  // if the number is a negative number, will add +1 to get the number below it until 0 is reached
}else if ( n < 0){
  return n + 1 + sumBelow(n + 1);
}
// if the number is a positive number will just return n - 1
  return n-1 + sumBelow(n-1);
};

// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]
var range = function(x, y) {
  // setting a boolen to true
   var bool = true;
   // will check if the first input if bigger then the second 
  if (x > y) {
    // if true will flip and make x the smaller number
    // will reassign a new variable of x
    var temp = x;
    // making x  become y
    x = y;
    // y become x
    y = temp;
    bool = false;
  }// edge cases if x and y are the same will return an empty array
  if (x === y) return [];
  // x is 1 away from becoming y will return an array that will start collecting the new inputs
  if (x+1 === y) return [];
  // recalling the function going down by 1 in y
  var result = range(x, y-1);
  // will push the value of y - 1
  result.push(y-1);
  // if the boolean is false will reverse the order so it can be scaling up instead of down
  return bool ? result : result.reverse();
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
    var isNeg = false;
    // checking to see if the exp is less then 0
  if (exp < 0) {
    // will reassign bool to true
    isNeg = true;
    // exp will be multiplied by -1 which will make it a positive
    exp *= -1;
  }
  // then setting the base case when the exp is 0
  if (exp === 0){ 
    // want it to return 1
    return 1;
  }
  // calling back of recurssion to get access to rest of numbers sending back exp -1 until it hits 0
  var result = base * exponent(base, exp-1);
  // doing ternary op to pass result when number is positive, 1/result if its false
  return !isNeg ? result : 1/result;
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
  //base case will be if the number reaches 0
  if (n === 0){
    // the number will not be a power of 2
   return false;
  }// base case where if the number reaches 1
  if (n === 1) {
    // the number is a power of 2
    return true;
  }// if the number does have a remainder 
  if (n%2 !== 0) {
    // will not be a power of 2
    return false;
  }
  // recall the number being divided by 2 until it reaches 1 or 0
  return powerOfTwo(n/2);
};

// 9. Write a function that accepts a string a reverses it.
var reverse = function(string) {
  // the base case will be when string is down to 0
  if (string.length === 0) return string;
  // recalling the string with the 0 index of that current iteration of the string
  //will get the string in reverse
  return reverse(string.substring(1)) + string.charAt(0);
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
  // creating a variable with a reguler expression
   var re = /[^A-Za-z0-9]/g;
   // modifing our string to lowercase and removing any spaces in between letters or words
 let str = string.toLowerCase().replace(re, '');
 //setting base case of when string becomes 0 returns true
 	if(str.length === 0 ){
		return true;
		// if the beginning of the array and end of the array mataches
	} else if(str[0] === str[str.length - 1]) {
	  // want to use recursion and the new input will have the first and last index mixing
		return palindrome(string.slice(1, string.length - 1));
	}
	// if they dont match then it will be false
	return false;
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
};

// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.
var multiply = function(x, y) {
  // making a boolean of false 
   var isNeg = false;
   // setting a conditional statement that will check for negative numbers for x and y
  if (x < 0) {
    // will change the boolean to true
    isNeg = !isNeg;
    // will change the value to a positive
    x = -x;
  }
  if (y < 0) {
    isNeg = !isNeg;
    y = -y;
  }
  // if both x and y are 0 will return 0
  if (y === 0 || x === 0){ 
    return 0;
  }
// setting the base case of  y reacheing 1
  if (y === 1) {
    // will return x because that what going to be added y amount of times
    return x;
  }// calling back the function decrementing by 1 in the y
  var res = x + multiply(x, y-1);
  // if the number was a negative will convert the number back to a negative
  return isNeg ? -res : res;
};

// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.
var divide = function(x, y) {
};

// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
  //making our stopping condition when the index of both strings are 0
   if (str1.length === 0 && str2.length === 0) {
     //using conditional statements to check if each characters are the same
        if (str1[0] === str2[0]) {
          // return true
            return true;
        }
  } // if the characters are not the same it will return false
    else if (str1[0] !== str2[0]) {
        return false;
    }
// to get to our base condition we will have to slice off the first index of each string until the base condtion is met
    return compareStr(str1.slice(1), str2.slice(1));
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str){
  // creating an array literal to hold in the contents of the string
  var arr = [];
  // the base case will stop once the string length is 0
    if(str.length === 0) {
      // will return array
        return arr;
    }
    //will push the first index of the string into the array
    arr.push(str[0]);
    //we have to invoke the function by returning the string with the first index cut off, to gain access to the next letter
    //reassigning the array with the new array with the content in it and concating it will ensure that the new array is picking up all the letters 
    arr = arr.concat(createArray(str.slice(1)));
    // will return the new array
    return arr;

};

// 17. Reverse the order of an array
var reverseArr = function (array) {
  // creating a new array that will hold the contents in reverse
  let arr = [];
  // base case will be when length of the array is 0
  if(array.length === 0){ 
    return arr;
  }
  // will push the last item of the array into the new array
  arr.push(array.pop());
  // concating to be able to add the rest of the values
  arr = arr.concat(reverseArr(array.slice(0)));
  // returning the new array
  return arr;
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
  // creating a new array that will hold the contents of value
  let newArr = [];
  // the base case will be when the length is equal to 0 because that determines how many times the value will be pushed into the new array
  if(length === 0){
    return newArr;
  }
  // pushing in the value into the new array
  newArr.push(value);
  // using concat so when it callstaks it can pick up the values and return a new array
  // subtracting -1 to the length so when it hits 0 it will activate the base case.
  newArr = newArr.concat(buildList(value, length - 1));
  // returning new array
  return newArr;
};

// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
  // using counter that will keep track of each time the value is in the array
  let count = 0;
  //base case when the array is empty it will return the counter of 0
  if(array.length === 0){
    return count;
    // if the content in the array is the same as the value
  }else if(array[0] === value){
    // then it will add one to the counter
     count += 1;
     // this will return count and recall the function with one less element
    return count + countOccurrence(array.slice(1),value);
    // if the elements dont match it will just retun recall the function with one less element
  }else {return countOccurrence(array.slice(1),value)}
};

// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
  // base case will be when theres one element in the array 
   if(array.length === 1) { 
     // will return an array with the modified element
  	return callback(array); 
  }
  //removing the first element in the array by slicing 
  // when its getting called back the rest of the elements modified will be added to the overall array
    return [callback(array[0])].concat(rMap(array.slice(1), callback));
};

// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function(obj, key) {
};

// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function(obj, value) {
};

// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, key, newKey) {
};

// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
var fibonacci = function(n) {
  
};

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
  // making base case
  // if the number is negative will return null
  if(n < 0) {
    	return null;
    	// when the number reaches 1 it will return 1
    } else if(n === 1) {
		return 1;
	}
	// the first iteration will minus one until it reaches 1 which rep the index, where as the second time it will minus 2,
	//which will give you the number 
  	return nthFibo(n - 1) + nthFibo(n - 2);
};

// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(input) {
  // making a new array to hold the new content
  let result = [];
  // making base case of length of array becoming 0
    if(input.length === 0) {
      // will return array literal
        return result;
    }
    // will make the whole element at the index of 0 capitilized push it into new array
    result.push(input[0].toUpperCase());
    // recall the function with the first index removed
    result = result.concat(capitalizeWords(input.slice(1)));
    return result;
};

// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = function(array) {
  // will return array with the new modified content
  let result = [];
  // once the array has no length will return new array
    if(array.length === 0) {
      return result;
      }
      // will modifiy the first letter of each word at each index and push it into the new array
    result.push(array[0].charAt(0).toUpperCase() + array[0].slice(1));
    // will callback the function with the first index missing
    result = result.concat(capitalizeFirst(array.slice(1)));
    return result;
};

// 28. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
};

// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(arrays) {
};

// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
var letterTally = function(str, obj = {}) {
  // making a base case of when the length of the string is 0 will return the object literal
  if (str.length === 0) {
    return obj;
  }
  // calling the function with the first index of the string missing
  letterTally(str.substring(1), obj);
  // conditional statment to assign the tallys
  if (obj[str[0]] === undefined) {
    // assigning the key value pair with the letter being the key and the count as value
    obj[str[0]] = 1;
    
  } else {
    // if the key value exist it will add the occurance
    obj[str[0]] += 1;
  }
  // returning the object
  return obj;
    
};

// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
var compress = function(list) {
  // base case when the length of the array reaches 0
  if (list.length === 0){ 
    // will return array literal
    return [];
  }
  // setting a new variable that will callback the function with the first index missing
  var newArr = compress(list.slice(1));
  // setting a new codntional statment which test if number matches whats already in the new array
  if (list[0] !== newArr[0]) {
    //if it doesnt match it will add to the beggining of the array
    newArr.unshift(list[0]);
  }
  // will return the new compressed array
  return newArr;
};

// 32. Augment every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
};

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
  // making the base case when the array becomes empty
  if (array.length === 0) { 
    // returning the array
    return array;
  }
  // condtional statement to find the extra 0s and removing them
    if(minimizeZeroes(array.slice(1))[0] === 0 && array[0] === 0) {
      // removing the excess 0s
        return minimizeZeroes(array.slice(1));
    } else {
      // concatnating the rest of the array
        return [array[0]].concat(minimizeZeroes(array.slice(1)));
    }
};

// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
  // the base case will be when the length of array is 0
  if (array.length === 0) {
    // will return the array
    return array;
    }
    //setting the condtional statement if the 0 index is negtive will change to positive
    if(array[0] < 0) {
      array[0] = -array[0]; 
      
    }
    // setting the condtional statement where if the 1 index is greater then 0 will change to a negative
    if(array[1] > 0) {
      array[1] = -array[1]; 
      
    }
    //recall with the first 2 index missing, getting modified along the way, will return an array with the alternating signs
    return [array[0], array[1]].concat(alternateSign(array.slice(2)));
};

// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
  // base case will be when the string length is  0
   if (str.length === 0) {
     // will return an empty string
     return '';
     
   }
   // making a new variable where the new input will be missing its last index
  var tempStr = numToText(str.substring(0, str.length-1));
  // setting a new variable that will take up the number in words
  var replace;
  // using the switch method that will replace any numbers with the actual words
  switch (str[str.length-1]) {
    case '1': replace = 'one';
      break;
    case '2': replace = 'two';
      break;
    case '3': replace = 'three';
      break;
    case '4': replace = 'four';
      break;
    case '5': replace = 'five';
      break;
    case '6': replace = 'six';
      break;
    case '7': replace = 'seven';
      break;
    case '8': replace = 'eight';
      break;
    case '9': replace = 'nine';
      break;
      // if the item is not a number will just return the word
    default: replace = str[str.length-1];
      break;
  }
  // will return the string modified
  return tempStr + replace;
};

// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

var binarySearch = function(array, target, min, max) {
};

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var mergeSort = function(array) {
};



//-----------------------------------
// DON'T REMOVE THIS CODE -----------
//-----------------------------------

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {

  /**
   * Due to some node-related issues with spying on recursive functions,
   * it isn't possible to test them with sinon spies like so:
   *
   *   var originalSum = sum;
   *   sum = sinon.spy(sum);
   *
   *   sum([1, 2, 3, 4, 5, 6]);
   *
   *   // callCount will always 1 causing, this test to always fail in node :(
   *   expect(sum.callCount).to.be.above(1);
   *
   *   sum = originalSum;
   *
   * However, we can work around this by using proxies!
   * If you reassign the function to a proxy and use the `apply` trap,
   * you can make a `proxyCallCount` property on the function,
   * increment it each time it's called, and then test that instead.
   *
   *   sum.proxyCallCount = 0;
   *   sum([1, 2, 3, 4, 5, 6]);
   *   expect(sum.proxyCallCount).to.be.above(1);
   *
   * MDN Proxies: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
   * MDN Proxy Apply Trap: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/apply
   */
  const createSpyProxy = (func) => {
    func.toString = func.toString.bind(func);

    const recursiveFunctionCallCounterHandler = {
      apply(target, thisArg, args) {
        target.proxyCallCount = target.proxyCallCount ? target.proxyCallCount + 1 : 1;
        return target.apply(thisArg, args);
      },
    };

    return new Proxy(func, recursiveFunctionCallCounterHandler);
  };

  factorial = createSpyProxy(factorial);
  sum = createSpyProxy(sum);
  arraySum = createSpyProxy(arraySum);
  isEven = createSpyProxy(isEven);
  sumBelow = createSpyProxy(sumBelow);
  range = createSpyProxy(range);
  exponent = createSpyProxy(exponent);
  powerOfTwo = createSpyProxy(powerOfTwo);
  reverse = createSpyProxy(reverse);
  palindrome = createSpyProxy(palindrome);
  modulo = createSpyProxy(modulo);
  multiply = createSpyProxy(multiply);
  divide = createSpyProxy(divide);
  gcd = createSpyProxy(gcd);
  compareStr = createSpyProxy(compareStr);
  createArray = createSpyProxy(createArray);
  reverseArr = createSpyProxy(reverseArr);
  buildList = createSpyProxy(buildList);
  countOccurrence = createSpyProxy(countOccurrence);
  rMap = createSpyProxy(rMap);
  countKeysInObj = createSpyProxy(countKeysInObj);
  countValuesInObj = createSpyProxy(countValuesInObj);
  replaceKeysInObj = createSpyProxy(replaceKeysInObj);
  fibonacci = createSpyProxy(fibonacci);
  nthFibo = createSpyProxy(nthFibo);
  capitalizeWords = createSpyProxy(capitalizeWords);
  capitalizeFirst = createSpyProxy(capitalizeFirst);
  nestedEvenSum = createSpyProxy(nestedEvenSum);
  flatten = createSpyProxy(flatten);
  letterTally = createSpyProxy(letterTally);
  compress = createSpyProxy(compress);
  augmentElements = createSpyProxy(augmentElements);
  minimizeZeroes = createSpyProxy(minimizeZeroes);
  alternateSign = createSpyProxy(alternateSign);
  numToText = createSpyProxy(numToText);
  tagCount = createSpyProxy(tagCount);
  binarySearch = createSpyProxy(binarySearch);
  mergeSort = createSpyProxy(mergeSort);

  module.exports = {
    factorial,
    sum,
    arraySum,
    isEven,
    sumBelow,
    range,
    exponent,
    powerOfTwo,
    reverse,
    palindrome,
    modulo,
    multiply,
    divide,
    gcd,
    compareStr,
    createArray,
    reverseArr,
    buildList,
    countOccurrence,
    rMap,
    countKeysInObj,
    countValuesInObj,
    replaceKeysInObj,
    fibonacci,
    nthFibo,
    capitalizeWords,
    capitalizeFirst,
    nestedEvenSum,
    flatten,
    letterTally,
    compress,
    augmentElements,
    minimizeZeroes,
    alternateSign,
    numToText,
    tagCount,
    binarySearch,
    mergeSort,
  };
}

//-----------------------------------
