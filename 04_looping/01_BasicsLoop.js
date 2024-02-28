
/**
    > JavaScript Loops:
        | In programming, loops are used to repeat a block of code.
        | For example, if you want to show a message 100 times, then you can use a loop. 
            It's just a simple example; you can achieve much more with loops. 
        | 1] for loop
          2] while loop
          3] do-while loop
*/

//For Loop Example
const arr = [1,5,9,8,6,3];
for (let index = 0; index < arr.length; index++) {
    console.log(arr[index]);
}
console.log();



//While Loop Example
const arr2 = [1,6,9,8,2];
let i = 0
while (i<arr2.length) {
    console.log(arr2[i]);
    // i =  i + 1;
    i++;
}
console.log();



//Do-While Loop Example
const arr3 = [7,6,9,5,3,5];
let j = 0;
do {
    console.log(arr3[j]);
    j++;
} while (j<arr3.length);





