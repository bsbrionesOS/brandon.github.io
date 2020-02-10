/*
* Control flow
*
* 0. Conditional statements can be used to control the path of which a certain code runs.
* By using If statements we can check for certain condtions to be true which will lead to
* a certain action being performed.
* 
* 1. If theres more then one condition that needs to be tested for, you can add on to the If
* statment by using the keyword else if.
*
* 2.Lastly you can end if statement by using the keyword else, which will be the default
* action if the condition being tested is false
*/
// example of if-else if- else stament

var gemColor = "red";

if(gemColor === "blue"){
     "saphire";
}else if(gemColor === "red"){
     "ruby";
}else{ "gem not found"} // => print ruby since the condition red was met

/*
* Switch statements
*
* 0. Is similar to a if statment but goes about it a diffrent way. Switch statements uses cases to evaluate
* the given expresseion. Once the correct case is found then it will execute the given value. Like the if statement
* if no cases are found to be true it can have a default but it is not nessecary.
*/
// example of a switch statement

switch(gemColor){
    case "green":
        console.log('Jade');
        break;
    case "purple":
        console.log('amethyst');
        break;
    default:
    console.log('gem not found'); // => prints gem not found since red isnt in the list
}