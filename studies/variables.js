/*
* VARIABLES:
*
* 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
* are named identifiers that can point to values of a particular type, like a Number, String,
* Boolean, Array, Object or another data-type.  Variables are called so because once created, we
* can CHANGE the value (and type of value) to which they point.
*
* 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
* variable.
*
* 2. There are 2 phases of using variables: declaration and initialization (or assignment).
*/

// 1. declaration //
var myName;

/*
* At the declaration phase, the variable myName is undefined because we have NOT initialized
* it to anything
*/
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";

/*
*let:
*
* 0. Like Var we can use let to delcare diffrent values such as string, numbers, booleans, and other data types.
* What makes "let" diffrent is that it is confined to the block scope that it's made in. Ypu can't call a let variable outside of its
* code block.
*
* 1. To create a let varaiable we use the keyword, let, followed by a name.
*
* 2. With let you have the option to decalre it but not define it right away within the block scope.
*/

// 1. declaration //
 let weather;
// At this point weather is not defined and it will result in undefined
console.log(weather); // prints => undefined

// 2. declaration and assignment
let month = "September";
console.log(month); //prints => 'Septemeber'
// 3. re-assignment
month = 'December';
console.log(month); // prints => 'Decemeber'

/*
* const:
*
* 0. With the variable const you can also declare any datatype but it's also confined to a block scope. The diffrence with const is
* that you have to declare and give it a value all at once. You can't reassign the const with a diffrent value or redeclare within the same scope.
*
* 1. Since you cant change the reference to a const variable; 
* does not mean that you can't update the values within a const that has an array or object literal.
*
* 2. To create a const varaiable we use the keyword, const, followed by a name and it's value
*/

// 1. declaration and assignment//
 const lastName = "Briones";
 console.log(lastName); // prints => "Briones"
 
//2. Trying to only declare a const variable will give a syntax error

/*
* Hoisting:
*
* 0. Hoisting is a javascript behavior of bringing delcarations to the top of the scope. It will not bring the initilization
*
* 1. For the variable var it will be hoisted to the top of the global scope or local scope if inside of a function. Postioning matters
*/

var typeWater = 'Fiji';
console.log(typeWater); // print => 'Fiji'
// Because typeWater was decalred and initilized before it was called it was able to run properly

// 2. If the variable var is called before it's declared and initilized. The declaration will be brought to the top but not the assignment

console.log(typeDog); // => prints undefined because only the declaration is hoisted to the top 
var typeDog = 'Great Dane';

// 3. In the instance of const and let they are both hoisted to the top of there respective code block but are not avaialbe

//console.log(typeCoffee); // prints => refrence error typeCoffee is not defined
//let typeCoffee = "Frappe"; // this example can be switched with const and it will have the same output
 
