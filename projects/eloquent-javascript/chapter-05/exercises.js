// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function flatten(arrays) {
  // using the reduce method to iterate though the array
return arrays.reduce(function(flat, current) {
  // using concat to put all the arrays within one array
  return flat.concat(current);
}, []);
}

// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function loop(start, test, update, body) {
  // using a for loop to iterate through the function
  // the start will be the start, the end will be whatever value the test function is, value will be updated
for (let value = start; test(value); value = update(value)) {
  // the body will be inside the body of the for loop
    body(value);
  }
}

// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function every(array, predicate) {
  // getting access to elements in the array
 for (let element of array) {
   // predicate will be the test and if the element does not pass it will return false
    if (!predicate(element)) return false;
  }
  return true;
}

// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function dominantDirection(text) {
  //iterates through each letter of the text and creates an array with the name "ltr", "rtl", or "ttb" or adds to the counter of said array.
let counted = countBy(text, char => {
  //characterScript input is Unicode of char which gets iterated over by this being inside the countBy function.
  //It then stores the Object in script variable or returns false if there is no Object containing the input.
    let script = characterScript(char.codePointAt(0));
    //Uses ternary to either return "none" which is then filtered out,
    //or it returns the script direction (lts, rtl, or ttb) which is then output to the countBy function.
    return script ? script.direction : "none";
    //filters out objects whose name property is "none"
  }).filter(({name}) => name != "none");
//this would mean that characterScript output false or null for all characters, 
  if (counted.length == 0) return "ltr";
// using the reduce method to get the name of the returned array
  return counted.reduce((a, b) => a.count > b.count ? a : b).name;
}

// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
};
