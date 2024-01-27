/**
    * Array:
        | The Array object, as with arrays in other programming languages, enables storing a collection of multiple items under a single variable name, 
        and has members for performing common array operations.

        | In JavaScript, arrays aren't primitives but are instead Array objects with the following core characteristics:
            > JavaScript arrays are resizable and can contain a mix of different data types.
            > JavaScript arrays are zero-indexed(i.e indexing start with 0,1,2,3....,)
            > JavaScript array-copy operations create shallow copies. (To understand revise stack & heap memory (basically provide reference))
            ---> shallow copy: A shallow copy of an object is a copy whose properties share the same references (point to the same underlying values) as those of the source object from which the copy was made. 
                As a result, when you change either the source or the copy, you may also cause the other object to change too.
            ---> deep copy: A deep copy of an object is a copy whose properties do not share the same references (point to the same underlying values) as those of the source object from which the copy was made. 
                As a result, when you change either the source or the copy, you can be assured you're not causing the other object to change too.

*/




let newArray = new Array(5,8,4,6,3,2)
console.log(newArray);

const newArray2 = [5,9,6,3,5,4];
console.log(newArray2);

// Let us some of the methods of array in JS

//this push and pop will add or remove the last digit no.
newArray.push(11); // ---------->  [ 5, 8, 4, 6, 3, 2, 11 ]
console.log(newArray);

newArray.pop(11);// ---------->  [ 5, 8, 4, 6, 3, 2 ]
console.log(newArray);

newArray.pop(); // ---------->  [ 5, 8, 4, 6, 3 ]
console.log(newArray);

//-----------------------------------------
//unshift and shift will add or remove first digit no.
newArray.unshift(11); // ---------->  [ 11, 5, 8, 4, 6, 3 ]
console.log(newArray);

newArray.shift();// ---------->  [ 5, 8, 4, 6, 3 ]
console.log(newArray);

//----------------------------------------
console.log(newArray.toString());// ---------->  5,8,4,6,3,2

//------------------------------------------
//questioners Methods in JS
console.log(newArray.includes(6));//--------------->  true

console.log(newArray.indexOf(6));//--------------->  3

//-----------------------------------------
//Slice and Splice
/**
    - Slice:
        | Slice is use to print the digit of certain range of index, which need to be given.
        But the main difference from splice is, it do not change the original array also do not include the high range digit in o/p.

    - Splice:
        | Splice is also similar to slice use to print the digit of certain range of index, which need to be given.
        But in splice it changes the original array and also include high range digit in o/p.

*/

const myn = [0,1,2,3,4,5,6];

//slice
console.log(myn.slice(1,3));//----------->  [ 1, 2 ]
console.log(myn);//----------->  [0,1,2,3,4,5,6]

//Splice
console.log(myn.splice(1,3));//----------->  [ 1, 2, 3 ]
console.log(myn);//----------->  [ 0, 4, 5, 6 ]

//------------------------------------------------
//push; concat; and spread-operator of Arrays
const heros1 = ["ironman","thor","caption"];
const heros2 = ["batman","superman","flash"];

//push : Basically here the (heroes2) array is consider as one element therefore it is of 4 array length
heros1.push(heros2);
console.log(heros1);//----------> [ 'ironman', 'thor', 'caption', [ 'batman', 'superman', 'flash' ] ]
console.log(heros1.length);//----------> 4

//Concat : Basically it gives all new array combining all element,
const heros3 = ["ironman","thor","caption"];
const heros4 = ["batman","superman","flash"];
const herosArrays = heros3.concat(heros4);
console.log(herosArrays);// -------->[ 'ironman', 'thor', 'caption', 'batman', 'superman', 'flash' ]

//Spread-operator : 
const herosArrays1 = [...heros3, ...heros4];// we can add other arrays in once 
console.log(herosArrays1);// -------->[ 'ironman', 'thor', 'caption', 'batman', 'superman', 'flash' ]

//---------------------------------------------------
//isArray; from; of, are used to check and convert in array

//isArray : use to check whether the data is array or not
console.log(Array.isArray("Ronit")); //give boolean values

// from : it convert the data of any datatype in arrays
console.log(Array.from("Ronit")); //----------------> [ 'R', 'o', 'n', 'i', 't' ]

// of : convert different variable in arrays
let a = 100;
let b = 200;
let c = 300;
console.log(Array.of(a, b, c));// ---->[ 100, 200, 300 ]

