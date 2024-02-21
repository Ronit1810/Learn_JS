/*
    >JavaScript Function:
        | A JavaScript function is a block of code designed to perform a particular task.
        | A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses ().
        | A function in JavaScript is similar to a procedure — a set of statements that performs a task or calculates a value, 
            but for a procedure to qualify as a function, 
            it should take some input and return an output where there is some obvious relationship between the input and the output.
        | Syntax: 
            function name(params) {

            }

        
*/


//lets create a simple function of adding two numbers

//function declaration------
function addMe(num1, num2){
    return num1 + num2
}

//function call-----------
let result = addMe(5, 5)
console.log("Result:", result);
console.log(typeof result);



//Another function to welcome user
function UserCome(name){
    if (!name) {
        console.log("Enter username");
        return
    }
    return `${name} just logged in`
}

console.log(UserCome("Ronit"));
console.log(UserCome());

console.log();
//---------------------------- Part-II ----------------------------------------//

/**
 * Now there will be condition where you don't know the amount of entry will be entered in function
 * such as in shopping card, There we use Rest operator(aka. Spread operator)(...) 
 */

function ShoppingCardCount(...nums) {
    console.log(nums);
}
ShoppingCardCount(11, 22, 33, 44); //it will form a array


/**
 * Now let see how to pass an object in function
*/

//1: Create object
const User = {
    User: "Ronit Patel",
    Price: 599
}
//2: create function
function HandleObject(anyObject) {
    console.log(`Username is ${anyObject.User} and total price is ${anyObject.Price}`);
}
//3: Declare/call function
HandleObject(User)


