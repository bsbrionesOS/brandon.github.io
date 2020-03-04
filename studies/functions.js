/*
* Functions:
*
* 0. Functions is a complex data type that allows us to use a block of code and excute
* that block of code whenever we want and however many times we want.
*
* 1. The two phases of a function are decalring it then calling it.
*
* 2. Functions have parameters which are placeholders for the inputs that will be used during call:
* Arguments are the actual inputs when the function is being called.
*
* 3. the Syntax for a given name function is function name(parameters){ block of code with return}
*
* 4. Functions can optionally take inputs: we specify how many inputs based on how many parameters we make;
* to specify the output we use the keyword return, if not the value will stay inside of the function.
*/
// example of a function 
function add(num){
    return num +2;
}
console.log(add(4)); // prints => 6 to console

// Assigning a function to a variable

var minusMe = function(num){
    return num -2;
};
console.log(minusMe(4)); //print => 2 

// example of a function that doesnt have any parameter
var num4 = 6;

function multiply(){
    return num4 *= 2;
}
console.log(multiply()); // => returns 24 everytime we invoke multiply the number contianed in num4 wil be modified;

/**
* Scopes
*   0. Scopes determines the visibilty of variables, functions and other objects in our code. In javascipt scopes operate by the lexical scope
*           which allows children scope to have access to varaibles decalred in their parent scope.
*   
*   1. Theres 3 types of scopes, global, local, and block scope
* 
*   2. Global scope - any varaibale or function that is wrriten in the global scope can be accessed by any other scope
* 
*   3. Locol scope - any varaiable that is written inside a function is bounded to that function and cant be used outside of the function
* 
*   4. Block scope - any variable that is written inside a if statement, switch, for any loops. By using const or let inside the block they only
*                       exist wihtin that block of code.
*   
*  
*
*
*/
// example of scope

var scope = 'Global';

function newScope(){
    var scope = 'local';
    console.log(scope);
}
newScope();// prints => 'local'

console.log(scope); // print => 'global' it did not get acess to the var scope inside the function newScope

/**
 * Closures
 *  0. a closure is just when a function has a reference to its parantes scope contained inside of its body
 * 
 *  1. All functions form closures
 * 
 * 
 */
 // example of closure
 var myName = 'Brandon';
 
 function show(){
     console.log(myName);
 }
 show(); // print => "brandon" created a simple closure  where the function was able to take the global variable and use it inside the function
                // inside of the function you can see that it carries the reference of myName, which is located outside of the actual function
 

