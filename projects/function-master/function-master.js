//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
return Object.values(object);
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
// should return all keys in object to a string seperated by a space
return Object.keys(object).join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    // return all values in object to a string 
    var string = '';
    for(var key in object){
        if(typeof object[key] === "string"){
           string += object[key] + " ";
           //string += ' ';
           
        }
        
     }
     let trimstring = string.trim(); 
     
    return trimstring;
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    if(Array.isArray(collection) === true ){
        return "array";
    }else if(typeof collection === 'object' && collection !== null && collection != Date()){
        return 'object';
    }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
// should take a string and capitalize the first character and return the string
    let newString = "";
    for (var i = 0; i < string.length; i++) {
//        if (string[i] !== " ") {
            if (i === 0) {
                newString += string[i].toUpperCase();
            } else {
            newString += string[i];
            }
//        }
    }
    return newString;
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    
   string = string.split(' ');
  
   for(var i = 0; i < string.length; i++){
     string[i] = string[i][0].toUpperCase() + string[i].substr(1);
   }
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


function profileInfo(object) {
    let capName = object.name[0].toUpperCase() + object.name.substr(1);
    let capSpecies = object.species[0].toUpperCase() + object.species.substr(1);
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
    if (object.noises === undefined) {
        return "there are no noises";
    } else if (object.noises.length > 0 === false) {
        return "there are no noises";
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
 //access the the friends array through dot notation, and pushing the name into it. then you return the updated object
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
 var nameList = [];
    var result = [];
    var current = null;
    for(var i=0; i<array.length; i++){
        if(name === array[i].name){
            current = array[i];
        }else{
            nameList.push(array[i].name);
        }
    }

    if(current === null){
        return nameList;
    }

    for(var i=0; i<nameList.length; i++){
        if(current.friends.indexOf(nameList[i]) == -1){
            result.push(nameList[i]);
        }
    }

    return result;
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
object[key] = value;
  return object;
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
//make a for loop to get iterate through the array
//loop through the object
//check to see if any of the elements in the array are equal to any of the keys
// remove the key/value if they do match
//return the object
for(var i = 0; i < array.length; i++){
    for(var key in object){
        if(array[i] === key){
            delete object[key];
        }
    }
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