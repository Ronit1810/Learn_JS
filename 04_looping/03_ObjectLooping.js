/**
    > Object Function
        1. Filter Function
        2. Map Function
        3. Function Chaining
        4. Reduce Function
*/



//Filter Function
const List = [0,1,2,3,4,5,6,7,8,9];
// const outcome = List.filter( (item) => item >= 5 );
const outcome = List.filter( (item) => {
    return item <= 5;
} )
console.log(outcome );



const database = [
    {
        name: "ronit",
        class: 2,
        age: 10
    },
    {
        name: "ronit",
        class: 5,
        age: 15
    },
    {
        name: "ronit",
        class: 3,
        age: 15
    },
    {
        name: "ronit",
        class: 1,
        age: 8
    },
    {
        name: "ronit",
        class: 5,
        age: 15
    }
]

const outcome2 = database.filter( (data) => {
    return data.class >=3 && data.age === 15
} )
console.log(outcome2);




//Map Function
const outcome3 = database.map( (data) => {
    return data.age
} )

console.log(outcome3);





//Chaining : Basically it means that we can apply multiple function at once 
const ArrayData = [0,1,2,3,4,5,6,7,8,9];
const outcome4 = ArrayData.map( (arr) => arr * 10 ) .filter( (arr) => arr<=50 );
console.log(outcome4);





//Reduce Function
/*
   array1.reduce( (accumulator, currentValue) => accumulator + currentValue, initialValue);
*/
const myNums = [1,2,3];

//Using arrow function
const outcome5 = myNums.reduce( (prev,curr) => prev + curr , 0 );
console.log(outcome5);

//Using function
const outcome6 = myNums.reduce( function (prev,curr) {
    console.log(`previous Val : ${prev} ; current Value : ${curr}`);
    return prev + curr;
},5)
console.log(outcome6);