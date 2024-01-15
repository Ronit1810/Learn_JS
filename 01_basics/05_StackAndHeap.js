/*
    - Memory Management in JavaScript:
        | Memory management in JavaScript is handled automatically by the runtime environment, typically the JavaScript engine in web browsers or Node.js. 
        JavaScript uses a garbage collector to manage memory and ensure that developers do not need to manually allocate or deallocate memory.

        | JavaScript engines have two places to store data:

            + Stack (primitive): It is a data structure used to store static data. Static data refers to data whose size is known by the engine during compile time. 
                In JavaScript, static data includes primitive values like strings, numbers, boolean, null, and undefined. References that point to objects and functions are also included. 
                A fixed amount of memory is allocated for static data. This process is known as static memory allocation.
            
            + Heap(non-primitive): It is used to store objects and functions in JavaScript. 
                The engine doesn’t allocate a fixed amount of memory. Instead, it allocates more space as required.
*/



//Example for Stack Memory

let value = "ronit";
console.log(value);

let value2 = value; //here we are assigning same value(i.e, "ronit") to value2
console.log(value2);

value2 = 54;// changing the value of value2 as well as datatype
console.log(value2);
// here the value and datatype will be changes as it is stored in stack memory as it provide the copy.
//i.e. [value2=value] is the copy of value, which means value2 will be completely different and hence changeable



//Example of Heap Memory

let user1 = {
    name: "Ronit",
    age: 22
}
console.log(user1);

let user2 = user1;// we are assigning same values to both users
console.log(user2);

user2.age = 23;// changing the value of age in user2
console.log(user1);// the above change will also apply to original data(value) as it is store in heap memory
console.log(user2);
//Basically in Heap Memory reference value i.e. user1 & user2 both point to same data.
//Hence change is applied to main data