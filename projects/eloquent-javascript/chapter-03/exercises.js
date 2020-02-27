////////////////////////////////////////////////////////////////////////////////
// min /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//output: the smallest number gets returned when 2 inputs are being compared
// have to set 2 parameters num1,num2
function min(num1,num2) {
  //use Math.min to return the smallest number that is being compared
  return  Math.min(num1,num2);

}

////////////////////////////////////////////////////////////////////////////////
// isEven //////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// creating function that returns true if number is even and false if odd
function isEven(n) {
  // use a conditional statement to return true if 0 is the value which represents even
if (n == 0) return true;
//set another conditional state to return false if the number given is 1 which represents odd
  else if (n == 1) return false;
  // too acount for negative numbers, we have to remake that number to a positive  and recall the function so the
  // new number can go throuh the tests
  else if (n < 0) return isEven(-n);
  // have to account for bigger numbers, by subtratcting a big whole number by 2 it wil return 0 or 1 eventually
  //therefore giving us the answer of true or false
  else return isEven(n - 2);
}

////////////////////////////////////////////////////////////////////////////////
// countChars //////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// creating function that outputs the total number of a certain ch in the given string
function countChars(string,ch) {
  // creating container that hold total amount of ch counted
let counter = 0;
//accesing the value within the string
  for (let i = 0; i < string.length; i++) {
    // using an if statement to compare each ch in the string with the given ch
    if (string[i] == ch) {
      // each time its true plus one will be added to the counter
      counter += 1;
    }
  }
  return counter;
}

////////////////////////////////////////////////////////////////////////////////
// countBs /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// creating function that outputs the total number of 'B' in a string
function countBs(string) {
  //creating a container to hold the number of bs identified
let numBs = 0;
//to create a for loop to get access to the characters of the string
for(var i = 0; i < string.length;i++){
  //use a conditional statement to compare the elements of the string with "B"
  if(string[i] === 'B'){
    //if the condition is true then 1 is going to be added each time to our container
    numBs += 1;
  }
}

return numBs;
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    min,
    isEven,
    countBs,
    countChars,
  };
};
