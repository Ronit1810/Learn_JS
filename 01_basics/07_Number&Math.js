
/************************************    NUMBER AND MATH    **************************************************************/

//Two ways to declare Number
// 1]
const value = 500;
console.log(value);

// 2]
const value2 = new Number(501);
console.log(value2);

//to see the difference between them compile the in browsers 
// Number allow us to apply multiple function such as

console.log(value2.toFixed(3));// output: 501.00 (basically control digits after decimal point)
console.log(value2.toString().length);// output: 3 (here we are converting number int string and then applying String functions)

const number = 100000;
console.log(number.toLocaleString()); // output: 100,000 (commas as US standards)
console.log(number.toLocaleString("en-IN")); // output: 1,00,000 (commas as IN standards as we have pass the params (i.e. en-IN))



/**************************************           MATH        *********************************************************************** */

/**
 * JAVASCRIPT comes with default MATH library 
 * The JavaScript Math object allows you to perform mathematical tasks on numbers.
 * It is a static object
*/

console.log(Math);
console.log(Math.abs(-34));
console.log(Math.round(4.55));
console.log(Math.ceil(4.55));
console.log(Math.floor(4.55));

// IMP

console.log(Math.random());// always give random number from 0-1
console.log(Math.random()*10);// here it will give random number from 0-10
console.log((Math.random()*10) + 1); // here range will be 1-10

//consider we have given max and min value

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min +1) + min)); 