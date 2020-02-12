/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function search(animals,name){
    // searching for the name of animal and returning its object
    // use a for loop to get access to the index of the animal array
    for( var i = 0; i < animals.length; i++){
        // with the index given, need to acess the value of name within object to compare
        if(animals[i].name === name){
            // if true return the whole object
            return animals[i];
        }
        
    }
    return null;
}


//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// creating a function that replaces the object that matches the name with a new object
function replace(animals,name,replacement){
    for(var i = 0; i < animals.length; i++){
        if(animals[i].name === name){
            //once the name is found we have to reassign that index with the new object
            return animals[i] = replacement;
        }
    }
}


//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// creating a function that removes the object with the specific name thats being looked for
function remove(animals,name){
    for(var i = 0; i < animals.length; i++){
        if(animals[i].name === name){
            //once the animals name is found, that object has to be removed within the array.
            //used the splce method to remove that specific object
            animals.splice(animals[i],1);
        }
    }
}


//////////////////////////////////////////////////////////////////////
// Step 4 - Create ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// writing a function called add with the parameters of aniamls, and animal
let counter = 0;
function add(animals, animal){
    
    for(var i = 0; i < animals.length; i++)
    // check to see if animal has a name property with length > 0
    //check to see if animal has a species property with length > 0
    // checks to see if animal has a unique name
    if(animal.name.length > 0 && animal.species.length > 0 && animals[i].name !== animal.name){
        counter ++;
    }
    if(animals.length === counter){
        animals.push(animal);
    }
}

/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
