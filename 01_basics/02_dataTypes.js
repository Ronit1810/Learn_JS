"use strict" //this line indicate or tell compiler/browser that treat all the code of JavaScript written below as newest version of JS

/*
while writing code you should consider the following:
1] code should be clean
2] code should be readable
3] and avoid unnecessarily use of spaces
*/ 

//DataTypes
let name = "ronit" // String dataType - as it is written in ""
let roll = 15 // Number dataType ['bigInt' is also one of the dataType use when number is too big ]
let isTrue = true // Boolean dataType (true/false)
let nothing = null // null dataType - define intentionally to give no value
let find; // unndefined dataType

console.table([name, roll, isTrue, nothing, find])


// lets check its type 
console.log(typeof name);
console.log(typeof roll);
console.log(typeof isTrue);
console.log(typeof nothing); // it gives object as a type
console.log(typeof find);

