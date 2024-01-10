let value = "45";
console.log(typeof value);
//here we are converting the type of [value - which is in string] to number datatype
let convertValue = Number(value)
console.log(typeof convertValue); 



let value1 = 1
console.log(typeof value1);
//here we are converting number datatype to boolean[0==false ; 1==true]
let convertValue2 = Boolean(value1)
console.log(typeof convertValue2);
console.log(convertValue2);



let value2 = "12abc"
console.log(typeof value2);
/*
here we are converting string datatype to number 
but the string(value2) is mix of number and alphabet
*/
//In JS it will convert the string to number but the value will be NaN, to avoid this TS was introduced
let convertValue3 = Number(value2)
console.log(typeof convertValue3); //datatype converted
console.log(convertValue3);// output : NaN (i.e., not a number)



let value3 = null
console.log(typeof value3);
// here also datatype will be converted and output will be 0
let convertValue4 = Number(value3)
console.log(typeof convertValue4);
console.log(convertValue4); // output : 0



let value4 = "33"
let convertValue5 = String(value4)
console.log(typeof convertValue5);
console.log(convertValue5);