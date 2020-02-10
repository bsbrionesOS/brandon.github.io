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

/*
* Scope
*
*  Functions can get access to variables in the global scope or parent scope, but it cant get access to variables inside local or nested
* functions. Where as the nested function can get access to everything outside of it,
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

// example of a closure
 var myName = 'Brandon';
 
 function show(){
     console.log(myName);
 }
 show(); // print => "brandon" created a simple closure  where the function was able to take the global variable and use it inside the function
 

