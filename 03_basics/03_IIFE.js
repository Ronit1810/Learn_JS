/**
    > Immediately Invoked Function Expressions(IIFE) 
        | It is a JavaScript function that runs as soon as it defined.
        | An IIFE can be used for avoiding the variable hoisting from within the blocks. 
*/

//With normal function
(function quick() {
    console.log("Connected");
})(); //here ';' if important to stop and go on next line

//With Arrow function
( () => {
    console.log("Connected 2");
} )();

//if we want to pass value
((name)=>{
    console.log(`Connected ${name}`);
})("ronit") //consider as function call (eg. quick())





