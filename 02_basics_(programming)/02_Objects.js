/**
    > Object:
        | JavaScript object is a non-primitive data-type that allows you to store multiple collections of data.
        | Objects, in JavaScript, are the most important data type and form the building blocks for modern JavaScript.
        | It is used to store various keyed collections and more complex entities. 
        | Objects can be created using the Object() constructor or the object initializer.
        | If the object is created by constructor then it will be singleton(object.create), where as created as literal then it will not be a singleton object.

*/


// Object Literal
const JsUser = {
    name:"ronit",
    email: "ronit@12@gmail.com",
    age: 51,
    logedIn: false,
}

//How to access the values of object..
console.log(JsUser.email); // one way to print(not to preferred)
console.log(JsUser["email"]);// preferrer this
console.log(JsUser["age"]);
console.log(JsUser);

//How to change the value of objects
JsUser.email = "patel23@gmail.com"
console.log(JsUser["email"]);

//If you want the object should non-changeable use ".freeze"
Object.freeze(JsUser)
//now the object JsUser is non-changeable

//--------------------------------------------------------------------

//Creating new object as we freeze the JsUser
const JsUser2 = {
    name:"ronit",
    email: "ronit@12@gmail.com",
    age: 51,
    logedIn: false,
}
//We can also add function in objects
JsUser2.greeting = function(){
    console.log("Hello");
}
console.log(JsUser2.greeting());

//Also
JsUser2.greeting2 = function() {
    console.log(`Hello, ${this.name}`); //.this is used to refer in same object(i.e. JsUser2)
}
console.log(JsUser2.greeting2());


