
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles(number) {
  // making an empty string of pyramid
    var pyramid = '';
    // looping though the number
  for(var i = 0; i < number; i++){
    // will add the given number of hashes to the string
    pyramid = '#' + pyramid ; 
    console.log(pyramid);
  }

}
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz(start, end) {
  // making a for loop to iterate through the numbers
  for(var i = start; i <= end; i++){
    // if a number is divisible by both 3 and 5 will retun fizzbuzz
   if(i % 3 ===0 && i % 5 ===0){
      console.log('fizzbuzz');
      // if number is only divisble by 5 will return buzz
    } else if(i % 5 === 0){
      console.log('buzz');
      // if number is only divisible by 3 return fizz
    }else if(i % 3 === 0){
      console.log('fizz');
      // return just the number if it isnt
    }else{console.log(i)}
  } 
 
}
fizzBuzz(1,15);
////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard(number) {
var board = "";
//for loop through the rows
for (var row = 0; row < number; row++) {
//nested for loop through the columns
 for (var col = 0; col < number; col++) {
   //if row is even and col is odd add #
  if(row % 2 === 0 && col % 2 !== 0){
    board += "#";
   //else if row is odd and col is odd add " "
  } else if(row % 2 !== 0 && col % 2 !== 0){
    board += " ";
   //else if row is even and col is even add " "
  } else if(row % 2 === 0 && col % 2 === 0){
    board += " ";
   //else if row is odd and col is even add #
  }else {board += "#"}
}
board += "\n";
}
console.log(board);
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
