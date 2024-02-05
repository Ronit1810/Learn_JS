/**
    > Object:
        | JavaScript object is a non-primitive data-type that allows you to store multiple collections of data.
        | Objects, in JavaScript, are the most important data type and form the building blocks for modern JavaScript.
        | It is used to store various keyed collections and more complex entities. 
        | Objects can be created using the Object() constructor or the object initializer.
        | If the object is created by constructor then it will be singleton(object.create), where as created as literal then it will not be a singleton object.

*/

// Object Constructor (singleton) 
const User = new Object()

// Object Literal (non-singleton)
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




console.log("--");
/*--------------------------------------------PART-02----------------------------------------------------------*/

//Creating new  Object
const AppUser = {};

//Adding value in AppUser Object
AppUser.name = "ronit";
AppUser.email = "ronit@gmail.com"

console.log(AppUser);


//We can also add object inside object
const AppUser2 = {
    name2: "ronit",
    email2: "roni12@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Ronit",
            lastname: "Patel",
        }
    }
}

console.log(AppUser2.fullname.userfullname.lastname);



//we can all combine to object using Spread operator(...)
const AppUser3 = {...AppUser, ...AppUser2};
console.log(AppUser3);


//we can also print/get a array of keys or values of object
console.log(Object.keys(AppUser));
console.log(Object.values(AppUser));//further this arrays are use by looping or mapping

//we can also print/get a arrays of key-value pair of object
console.log(Object.entries(AppUser));


console.log("--");
/*----------------------------PART_03-------------------------------------------------*/

//Destructuring

const course = {
    courseName: "WebDev",
    coursePrice: "1999",
    courseInstructor: "Ronit"
}

console.log(course.courseInstructor);
const {courseInstructor} = course;// here course is a object from where the courseInstructor value is extracted
console.log(courseInstructor);

const {courseName: otherName} = course; // we can also give customized name
console.log(otherName);


/*This destructuring is mostly important, in api calls when we get JSON data */

