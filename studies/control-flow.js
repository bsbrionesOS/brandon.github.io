/*
* Control flow
*
* 0. Conditional statements can be used to control the path of which a certain code runs.
* By using If statements we can check for certain condtions to be true which will lead to
* a certain action being performed.
* 
* 1. If theres more then one condition that needs to be tested for, you can add on to the If
* statment by using the keyword else if. There can be a countless number of else if statements in a chain.
*
* 2.Lastly you can end a if statement by using the keyword else, which will be the default
* action if the condition being tested is false
*/

/**
 * 3. To create a conditional statement the following steps are used
 *      a) the key word "if"
 *      b) followed by the condition in paranthesis (condition)
 *      c) curly braces
 *      d) within the curly braces will be the action thats going to be executed
 *      e) if condition is not met, you can add a 'else if'statment after '}'to test for a another condition
 *      f) else condition can be used as a default setting if non of the condtions are met
 *              for else will be after '}' followed by the key word else then {} with the action inside
 */
 
 /**
  * Syntax of if statements
  *   
  * if(condition){
  *   //action to be performed in code block
  *} else if(condition){
  *   //action to be performed
  * }else{//action to be performed}
  */
 
 
 
// example of if-else if- else stament

var gemColor = "red";

if(gemColor === "blue"){
     "saphire";
}else if(gemColor === "red"){
     "ruby";
}else{ "gem not found"} // => print ruby since the condition red was met

/*
* Switch statements
*
* 0. Is similar to a if statment but goes about it a diffrent way. Switch statements uses cases to evaluate
* the given expresseion. Once the correct case is found then it will execute the given value. Like the if statement
* if no cases are found to be true it can have a default but it is not nessecary.
*/

// 1. A switch statment is usually preferred over an if/else if statment, if only one type of  data value is being tested
        // such as if the experssion is a certain number or string
        // if multiple boolean conditions are being tested then if/else if is used

/**
 * 2. To create a switch statment the following syntax is used.
 *      a) the key word switch is used
 *      b) followed by an expression 
 *      c) curly braces {}
 *      d) inside the curly brace the key word case is used, followed by the value that the expression might be.
 *              Underneath the case and value will be the action that will be executed. 
 *      e) After the action will be the break keyword which stops or breaks out of the switch once the values match.
 *      f) You can have any number of cases in a switch 
 *      g) The last thing you can have is the key word default which is usually the last clause and what the program 
 *          goes to when the expression do not match any cases.
 * 
 */
 
 /**
  * 3.  SYNTAX
  * switch(expression){
  *    case value1:
  *         //action;
  *     break;
  *     default:
  *         //action;
  * }
  */
// example of a switch statement

switch(gemColor){
    case "green":
        console.log('Jade');
        break;
    case "purple":
        console.log('amethyst');
        break;
    default:
    console.log('gem not found'); // => prints gem not found since red isnt in the list
}