/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal = {};
// adding the key of species with value of dog to animal object
animal.species = 'dog';
//adding the key of name with value of bob using bracket note
animal['name'] = "Bob";
//adding the key of nosies giving the value arrray lit
animal.noises = [];
// printing animal object to console 
console.log(animal);
//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// creating variable of nosies with an array lit
var noises = [];

//using bracket notation give array first element
noises[0] = 'bark';

// add another element to end of array
noises.push('woof');

// add another noise at the begining of array
noises.unshift('snore');

//add another noise using bracket notation to the end
noises[noises.length] = "cry";

//finding the length of noises
console.log(noises.length);

// finding the last element of noises without hardcoding
console.log(noises[noises.length - 1]);

// logging the whole array
console.log(noises);

//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
animal["noises"] = noises;
// adding another noise to the property of animal
animal.noises.push('sniff');
//seeing if everything looks like
console.log(animal);

/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *
 * 2. What are the different ways of accessing elements on arrays?
 *    a) you can acess an element in the array by name[index]
 *    b) to find the last element of an array name[name.length -1]
 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
// create variable of animals and give it an array
var animals = [];
//push the variable animal into animals
animals.push(animal);
// double check that animals look right
console.log(animals);
// creating a variable called duck with assigned data
var duck = { species: 'duck', name: 'Jerome', noises: ['quack', 'honk', 'sneeze', 'woosh'] };
// push duck to animals
animals.push(duck);
// checking animals now have two values
console.log(animals);
// making two more aniaml object with species;name; 2noises
var lion = {species: 'lion', name: 'Simba', noises: ['roar','meow']};
var bird = {species: 'bird', name: 'Zazu', noises: ['hoot', 'talk']};
// pushing lion and bird into animals
animals.push(bird);
animals.push(lion);
// checking
console.log(animals);

//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// choosing array as data set
// Array is being chosen so it can collect friends
// creating a varaiable of friends and giving an array
var friends = [];
//making function call getRandom: takes the array of animals return the index of a random element using
// Math.random
     function getRandom(animals){
  return animals[Math.floor(Math.random() * animals.length)];
}
getRandom(animals);
//adding name of animal and pushing it into friend
animal['friends'] = friends;
/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}
