//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// input:object, with key value pairs
// output: array with just the values
function objectValues(object) {
    // using Object.values will return an array of values
return Object.values(object);
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
// should return all keys in object to a string seperated by a space
// using Object.keys will return an array with the keys
// by using .join(' ') will return all the contents in the array as a string seperated by a space
return Object.keys(object).join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//givin an object with diffrent datatype as the value, return only the string values
function valuesToString(object) {
    // by setting a variable to hold our string
    var string = '';
    // using a while loop to get access to they key value pairs
    for(var key in object){
        // setting a condtional statment to strictly compare the values to a string using typeof
        if(typeof object[key] === "string"){
            // if its true the value will be added to the string with a space to seperate from other values
           string += object[key] + " ";
           //string += ' ';
           
        }
        
     }
     // setting a variable of trim string to have the new string that doesnt have any access white space from the beginging and end
     let trimstring = string.trim(); 
     
    return trimstring;
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// making a test to see if the collection is an array or object
function arrayOrObject(collection) {
    // using Array.isArray method since it will test if the input is an array
    if(Array.isArray(collection) === true ){
        // returning array as a string if it passes
        return "array";
        // checking to see if the collection is an object literal taking into account that diffrent data types also are objects
    }else if(typeof collection === 'object' && collection !== null && collection != Date()){
        // returning object as a string if it passes
        return 'object';
    }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
// should take a string and capitalize the first character and return the string
// making a container for our new string
    let newString = "";
    //using a for loop to run through the string
    for (var i = 0; i < string.length; i++) {
//        once the index hits 0 thats what we want to modify
            if (i === 0) {
                // string i will have access to the first character in the string and we capitalize, then add to our string
                newString += string[i].toUpperCase();
            } else {
                // for the rest of the letters in the string will just be added to our new string
            newString += string[i];
            }

    }
    // new string will have the old string with the first word capitlized
    return newString;
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    // since we want to capitalize all the words in a string, split method is used to put all the words in its own index

   string = string.split(' ');
   // using a for loop to iterate through the array
  
   for(var i = 0; i < string.length; i++){
       // getting access to each individual word, uppercasing the first letter. 
       //using substr(1) will return the rest of the letters in the string
     string[i] = string[i][0].toUpperCase() + string[i].substr(1);
   }
   // returning all the words as a string seperated by a whitespace
  return string.join(' ');



}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////


/**
 * I: an object with a name property
 * O: "Welcome <name>!"
 * C/E: gotta capitalize the name
 */
function welcomeMessage(object) {
    //we are going to define a variable that will be our object's name value, capitalized. so we access the object's name property's first letter, then .toUpperCase it,
    // then concatenate that with every other letter of our object's name value, recreating a new value that is capitalized
    let capName = object.name[0].toUpperCase() + object.name.substr(1);
     //now we return the new variable plus spaces and an exclamation
    return "Welcome" + " " + capName + "!";
}


//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// input an object that has a key value pair of name and species
function profileInfo(object) {
    // setting a variable thats going to contain the name that will be capitlized
    let capName = object.name[0].toUpperCase() + object.name.substr(1);
    // setting a variable that will contain the value of species capilized
    let capSpecies = object.species[0].toUpperCase() + object.species.substr(1);
    // wanting to return the name is a species
    return capName + " is a " + capSpecies;
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////


/**
 * I: an object
 * O: if it has a noises array return them as a string separated by a space, if there are no noises return 'there are no noises'
 * C/E: if there are no noises, or if noises is an empty array
 */
function maybeNoises(object) {
    // setting conditional statment to check if the object has a noise key value pair
    // testing to see if the nosies has a value
    if (object.noises === undefined) {
        return "there are no noises";
        // testing to see if the value of nosies has any elements within its array
    } else if (object.noises.length > 0 === false) {
        return "there are no noises";
        // if noises has a value of an array then returning all the nosies as a string seperated by a space
    } else if (Array.isArray(object.noises) === true ) {
        return object.noises.join(" ");
    }
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////


/**
 * I: a string of words and a word
 * O: true if that word is within the string, false otherwise
 * C/E: none
 * 
 */
 //string.indexOf() will return the number of the index of whatever is in the parenthesis, or a -1 if it is not found. so if we return -1 then our word is not in the string
 // so we need to return false. otherwise we should return true
function hasWord(string, word) {
    if (string.indexOf(word) === -1) {
        return false;
    } else {
        return true;
    }
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////


/**
 * I: a name and an object
 * O: the object, with the name added to its friends array.
 * C/E: none
 */
 //access  the friends array through dot notation, and pushing the name into it. then you return the updated object
function addFriend (name, object) {
    object.friends.push(name);
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////


/** 
 * I: name and object
 * O: return true if <name> is a friend of <object> and false otherwise
 * C/E: make sure object has a friends property
 */
function isFriend(name, object) {
    // check to make sure that object has a friend property. if it does not return false
    if (object.friends === undefined) {
        return false;
        //indexOf will return the index of a given input, so if it finds that input in a string or array it will return a number. it will return -1 if it doesn't find it
    } else if (object.friends.indexOf(name) !== -1) {
        return true;
        // if the indexOf doesn't give an index or something else happens, return false
    } else {
        return false;
    }
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
    // creating three containers
    
 var nameList = [];
    var result = [];
    var current = null;
    // using a for loop to iterate through the array of objects
    for(var i=0; i<array.length; i++){
        // if the target name matches a name thats within the object
        if(name === array[i].name){
            // it will reassign current with the object with the name found
            current = array[i];
        }else{
            //all the names will be pushed into the nameList
            nameList.push(array[i].name);
        }
    }
    
// if the current or name does not exist, then that person is not freinds with anyone, and nameList will have everyones name in it
    if(current === null){
        return nameList;
    }
// have to do another for loop to iterate over the array of friends of that person
    for(var v=0; v<nameList.length; v++){
        // indexOf will look if that value is inside an array, if its not it will return the boolean of false or -1
        if(current.friends.indexOf(nameList[v]) == -1){
            // if it is false, which means that person isnt friends with, then pushing those names into reuslt
            result.push(nameList[v]);
        }
    }

    return result;
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// should update the value of key with the new value
// if the key and value does not exist it should create it
function updateObject(object, key, value) {
    //just reassigning the value by accessing the object key
    //this will also add the key and value to the object if it doesnt exist
object[key] = value;
// returning object
  return object;
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
//make a for loop to get iterate through the array

for(var i = 0; i < array.length; i++){
    //loop through the object
    for(var key in object){
        //check to see if any of the elements in the array are equal to any of the keys
        if(array[i] === key){
            // remove the key/value if they do match
            delete object[key];
        }
    }
    //return the object
}return object;

}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
    //have to create a container holding the new modified array
    // using .filter to iterate over the array and check for duplicates 
    //returning new array without duplicates
var newArray = array.filter(function(item, pos) {
    return array.indexOf(item) == pos;
});
return newArray;
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}