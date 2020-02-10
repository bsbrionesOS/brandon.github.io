/*
* Operators
*
* 0. Operators are used to perform some action on a value. The type of operators differ from Assignment,
* Arthmetic, Comparison, logical, Unary, Ternary. Each type doing a specific task
*/

/*
* Assignment Operators:
*
* 0. Assignment operators are used to assign values to variables such as =, +=, -=, *=, /=, %=
*/
// example of assignment operators in use
var num = 3; // = operator is assigning 3 to num

num += 1; // += is adding 1 to the value stored in num resulting in 4

num -= 2; // -= operator is subtracting 2 from the value stored in num

num *= 2; // *= operator is multiplying the value stored in num by 2

num /= 3; // /= operator is dividing 3 by the value stored in num

num %= 3; // %= operator is getting the absolute value after division

/*
* Arithmetic Operators:
*
* 0. Arithmetic operators are used to do calculations. Using +, -, /, *, %, ++, --
*
*/
// examples of Arithmetic operators in use:
 var num2 = 6;
 num + num2; // prints => 9 the + operator adds
 
 num2 ++; // prints => 7 the ++ is an increment that adds by 1 each time its used
 
 /*
 * Comparison operators:
 *
 * 0. Comparasion operators are used to compare two values and the result will give out a boolean 
 * of true or false
 *
 * 1. The operators are ==, ===, <, >, <=, >=, !=
 *
 */
 // examples of comparison operators
 var number = 1;
  var number2 = 2;
  var stringNum = "1";
  
  number == stringNum; // prints => true because it doesnt compare by type
  
  number === stringNum; // prints => false becasue it strictly compares the two values
  
  number > number2; // prints => false because 1 is not greater then 2
  
  /*
  * Logical operators:
  *
  * 0. Logical operators are used in conditonal statements where two conditions are being compared.
  *
  * 1. The operators for these are && which compares if both conditions are true, || which compares if 1 condition is true,
  * ! which reverses the output of the boolean.
  */
  // examples of logical operators 
  
  if(number === 1 || number === 2){
    true;
  }else{false}
  //print => true because at least one of the conditon was met
  
  if( number > number2 && number === 1){
   true;
  }else{false} // print => because number 1 is not greater then number2 2. Both conditions have to be true
  
  if( number < number2 && number != 2){
   true;
  }else{false} // print => true because the operator ! reverses the output of the boolelan making that false statement true
  
  /*
  * Unary operators:
  *
  * 0. Unary operators take a single argument and performs an action such as typeof, -, !
  */
  // example of unary operators
   var isString = 'a';
   
   typeof isString; //prints => string typeof prints out the type of value 
   
   var isPosNum = 1;
   isPosNum = -isPosNum; // prints -1 the - makes the value negative
   /*
   * Ternary Operators
   *
   * 0. These operators start with a conditonal statement followed by a ? then its followed by two arguments split by a :
   * if the condtion is true then the argument before : is ran. If its false the condtion after : will run
   */
   // example of ternary operators
  var z = 10, d = 12;
  
  var u = z > d? d:z; // prints => will print out 10 because the statement is false so it will run the argument after the semicolon