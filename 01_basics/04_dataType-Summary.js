
/* 
    Primitive data types:
        | The predefined data types provided by JavaScript language are known as primitive data types. 
        Primitive data types are also known as in-built data types.

        | 7 Types : String; Number; Null; Undefine; Boolean; BigInt; Symbol
*/

const name = "ronit"; //string type [primitive]

const number = 100; // Number type [primitive]
const value = 100.3;

const isTrue = true; // Boolean type [primitive]

const temp = null; // Null type [primitive]

let username; //Undefine type [primitive]

//notice in below example id & anotherId has same value, but when we compare them it give false.
// Basically symbol type is known for it, they have same value but because of symbol it is not.
const id = Symbol("123"); // Symbol type [primitive]
const anotherId = Symbol("123");
console.log(id === anotherId);
console.log(id);
console.log(anotherId);



/*
    Non-primitive data types:
        | The data types that are derived from primitive data types of the JavaScript language are known as non-primitive data types. 
        It is also known as derived data types or reference data types.

        | 3 Types: Arrays; Object; Function
*/

const heros = ["Ironman","thor","antman"]; //Array

//Object can consist of different dataType also
let myObj = {
    name : "ronit",
    age : 23,
}

// function is a block of reuseable code
let myFunc = function () {
        console.log("hello World");
}
myFunc(); // calling myFunc