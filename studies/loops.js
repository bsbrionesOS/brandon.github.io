/*
* Loops
*
* 0. loops is great to perform a certain action a specific amount of times.Loops 
*become specifically useful when dealing with complex data types such as arrays, and objects.
* Were able to pull out the values within to work with them one at a time.
*
* 1. The for loop is great for looping over array. While the "for - in" loop is best when working 
* with objects. Lastly the while loop will will have a conditon and while true will continue executing 
* the given command. 
*
* 2. The for loop consist of a starting, stopping condition, and a increment.
*/
// using for loop to loop over an array going forward

var myArray = [1, 2, 3, 4];

for(let i = 0; i < myArray.length; i++){
    console.log(myArray[i]); // => print 1, 2, 3, 4
}

// using for loop to loop over an array backwards
for(let i = myArray.length -1; i > -1; i-- ){
    console.log(myArray[i]); // => print 4,3,2,1
}

//using a for in loop to loop over object values

var object = {
    name: "brandon",
    lastname: " briones",
    hair: "yes"
};

for(var key in object){
    console.log(object[key]); // => print "brandon" "briones" " yes"
    console.log(key);// => print name, lastname, hair
}

// counting up to a certain number and going in reverse

var count = 1;

while(count < 5){
    console.log(count);
    count ++;
} // => print out to 1,2,3,4,5

// to go in reverse you do the following
var newCount = 4;
while(newCount > 0){
    console.log(newCount);
    newCount --; // => print out 4,3,2,1
}