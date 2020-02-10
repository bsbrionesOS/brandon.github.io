/*
* String Manipulation
*
* 0. Strings are able to be manipulated in serveral ways, they can be concatnated 
* by using the + operator. By using the join method you can make the contents of an Array into a string
*
*/
// example of catnation

var dog = "Great dane";

var size= "Big";

var typeDog = size + " " + dog
console.log(typeDog);//print => "Big Great dane"

//example of join method

var anothArray = ['a',1,'c'];

console.log(anothArray.join(' ')); // print => "a 1 c"
