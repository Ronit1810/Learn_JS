/**
    1. 'this' keyword
     | The this keyword is a reference variable that refers to the current object.
     | Basically it refer to current object.
     NOTE: 'this' keyword is used in object to refer same/current object

    2. Arrow Function
     | Arrow function {()=>} is concise way of writing JavaScript functions in shorter way. 
        Arrow functions were introduced in the ES6 version. They make our code more structured and readable.
     | Arrow functions are anonymous functions i.e. functions without a name but they are often assigned to any variable. 
        They are also called Lambda Functions.
*/

//'this' keyword
const User = {
    Username: "Ronit",
    Price: 999,
    WelcomeMessage: function(){
        console.log(`${this.Username}, Welcome to World!!`);
    }
}
User.WelcomeMessage()


//let see ARROW FUNCTION
const AddOn = (num1, num2) => {
    console.log(num1+num2);
}
AddOn(5,6)

//Now if there is single line statement to execute, We can also write function as
const AddOn2 = (num1,num2) => (num1 + num2);
console.log(AddOn2(5,5))
/*
    NOTE: In AddOn2 function if we use {} we need to return function, 
    and if we use () we don't to return it,
    compiler automatically detect that it single line statement
*/

//If we want to return object in arrow function
const AddObj = () => ({Username: "Ronit"})
console.log(AddObj());

