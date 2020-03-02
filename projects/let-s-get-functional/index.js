// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('lodown-bsbrionesos');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
return _.filter(array,function(customerObj){
    return customerObj.gender === "male";
}).length;
};

var femaleCount = function(array){
    return _.filter(array,function(customerObj){
    return customerObj.gender === "female";
}).length;
};

var oldestCustomer = function(array){
//have to set a counter of 0 to compare the age too
    let oldest = 0;
    // we have an array of objects
    //use reduce so we can iterate through the array to get what we need
    //within the array we give the parameters of array and function with the parameter of the accumaltor and people
    var oldFart = _.reduce(array,function(acc, people){
        //using a conditional statment to find the biggest age value
        if (people.age > oldest){
            // reassigning oldest when it finds a number bigger then zero 
            oldest = people.age;
            // accumaltor will become the new name of the oldest name
            acc = people.name;
        }
        return acc; // return the string
    }, '');
    // return the oldest customer
    return oldFart;
};

var youngestCustomer = function(array){
    let youngest = 100;
    //using reduce to iterate through the array and get what we need
    //giving reduce the param array and fucntion with accumaltor and people, with the seed of ""
    var younging = _.reduce(array,function(acc, people){
        // using a conditional statement to compare the youngest age
        if (people.age < youngest){
            // once youngest age is found its going to be reassigned to that number
            youngest = people.age;
            // accumaloter will take up the name of the youngest age
            acc = people.name;
        }
        return acc; // return the string
    }, '');
    return younging;
};

var averageBalance = function(array){
    //using the reduce method to iterate through the array
    
  var total = _.reduce(array, function(acc,people){
      // objective is to find the average balance of all the customers
      //  the first param is the accumaltor we make a seed of zero to add up all the balances
      //  the value of balance is a string, parsefloat is used to convert the string into a number
      // the sting also contains characters besides number, those have to be removed ny using replace
      // The average of all the customers is to be found we divide that number by array.length
        var newBal = acc + parseFloat(people.balance.replace(/\$/g,"").replace(/\,/g,''))/array.length;
        //return the newBal which is now the average balance
        return newBal;
    }, 0);
    
    return total;

    
};
   


var firstLetterCount = function(array,letter){
    //use the reduce method to gain access to the array
    var newNum =_.reduce(array,function(acc,people){
        // we have to use a conditional statement to test if the first letter of the names matches with the argument off letter
        // to account for case senesitivity we use toupprecase for both the argument and whats being tested
        if(people.name[0].toUpperCase() === letter.toUpperCase()){
            // if the case is true 1 is going to be added each time to keep track of how many times its true
            return acc + 1;
            //if nothing matches then the acc of zero is going to return back saying 0 matches were found
        }else{return acc}
        
    },0);
    return newNum;
};

var friendFirstLetterCount = function(array,customer,letter){
      // set filteredArray equal to the filter function invoked on array and 
    // a function taking element, index, and array
    let filteredArray = _.filter(array, function(element, index, array) {
       // if element.name is strictly equal to the customer string
       if (element.name === customer) {
           // return true
           return true;
       } 
    });
    // return the result of reduce invoked on the friends key value of the only element of 
    // filtered array
    // 
    return filteredArray[0].friends.reduce(function(accumulator, currentResult) {
        // if the first letter of currentResult converted to lowercase is
        // strictly equal to letter converted to lowercase
        if (currentResult.name[0].toLowerCase() === letter.toLowerCase()) {
            // increase the accumulator by 1
            accumulator += 1;
        }
        // return the accumulator
        return accumulator;
    }, 0);

};

var friendsCount = function(array,name){
    //gaining access to the array of friends
    //we have to iterate through the array of friends to find if the object has 'name' in there friend list
  return  _.reduce(array,function(accu,person){
        _.each(person.friends,function(friend){
            //console.log(friend);
            //if the customer has a friend with that given name
            if(friend.name === name){
                accu.push(person.name);
            }
                //if the given name is found push the customer name into array accu
                
        });
        return accu;
    },[]);
};

var topThreeTags = function(array) {
    let tag1 = _.reduce(array, function(tagsObj, curr) {
        //getting access too the array of tags
        let arrayOfTags = curr.tags;
        //using each to iterate over array of tags
        _.each(arrayOfTags, function(tag) {  
            //conditional statement to add
            if (tagsObj[tag]) {
                tagsObj[tag]++;
                // if non setting the tag count to 1
            } else { 
                tagsObj[tag] = 1;
            }
        });
        return tagsObj; //return our tags obj counts
    }, {});
    // creating a variable to hold an array
    let arr = []; 
    _.each(tag1, function(value, key, obj) {
        //for each tag pushing the key value into array.
        arr.push([key,value]); 
    });
    arr.sort(function(x, y) {
        return y[1] - x[1]; //sort our arr from top to bottom
    });
    var topThree = arr.slice(0, 3); //use the slice method to get rid of extra data because you only want the top 3
    let test = _.map(topThree, function(nested) { //run map as a test
        return nested[0];
    });
    return test; 
};

var genderCount = function(array){
   return _.reduce(array, function(acc, person){
       // create a conditional statement to check each gender
       // counting how many times that gender exists
       // create a seed with all genders and the initial value of 0
        if (person.gender === 'male'){
        acc.male += 1; //each time a male exists it will add one
        } else if (person.gender === 'female'){
            acc.female += 1; //each time a female exists it will add one
        }else if (person.gender === 'non-binary'){
            acc['non-binary'] += 1; //each time a non-binary exists it will add one
        }
        return acc;
    }, {
        male: 0,
        female: 0,
        'non-binary':0
    });
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
