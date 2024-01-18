/*
    *String:
        | JavaScript String Object is a sequence of characters. It contains zero or more characters within single or double quotes.

    *String interpolation:
        | String interpolation is a great programming language feature that allows injecting variables, function calls, and arithmetic expressions directly into a string. 
        | String interpolation was absent in JavaScript before ES6. 
        | String interpolation is a new feature of ES6, that can make multi-line strings without the need for an escape character. 
        | We can use apostrophes and quotes easily so that they can make our strings and therefore our code easier to read as well. 
        | These are some of the reasons to use string interpolation over string concatenation.
        | we can  also use any methods inside ${}.
*/



const name = "Ronit";//-----------------1
const count = "Hello";
//below is one of the way to print the string but it is OUTDATED 
console.log(name + " " + count + " " + "good");


//String Interpolation
console.log(`welcome ${name} to the ${count} world`);


//there is another way to declare the string first is given in eq.1 
//below is 2nd
//to see the difference between them, go use browser chrome
const name2 = new String("hello")
console.log(name2);


//now basically we can access each and every letter of string by using new String
// In short now they are key value pair, let's see example

console.log(name2[1]);// output: e
console.log(name2.length);//output: 5
console.log(name2.charAt(3));//output: l
console.log(name2.indexOf("e"));//output: 1

//we can use .substring to divide the string
const anotherString = name2.substring(0,3);
console.log(anotherString);
