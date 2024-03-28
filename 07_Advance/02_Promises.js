/*
    -Promises:
        | The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
        | the Promise constructor takes an argument that callbacks the function. This callback function takes two arguments, i.e.,
            Resolve: When the promise is executed successfully, the resolve argument is invoked, which provides the result.
            Reject: When the promise is rejected, the reject argument is invoked, which results in an error.
            It means either resolve is called or reject is called. Here, then() has taken one argument which will execute, if the promise is resolved. Otherwise, catch() will be called with the rejection of the promise
*/






const promise01 = new Promise((resolve, reject) => {
    setTimeout(function(){
        console.log("Done");
        resolve()
    },1000)
})

promise01.then(function () {
    console.log('function');
})


new Promise((resolve, reject) => {
    setTimeout(function () {
        console.log("Promises 02");
        resolve()
    },3000)
}).then(function () {
    console.log("Resollve");
})

//we can pass the data to .then() through resolve()
const promise03 = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({name:"Ronit", email:"ronit@.com"})
    },5000)
}).then(function(user){
    console.log(user);
})


//.then()____.catch()

const promise04 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let error = false
        if(!error){
            resolve({username:"RonitPatel",userid:"112245"})
        }else{
            reject('ERROR')// use of reject 
        }
    },5500)
})

//this also called as chaining 
promise04.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);
}).catch((error)=>{
    console.log(error);
})



//Async...await function

async function callforData(){
    try {
        const respone = await fetch('https://api.github.com/users/Ronit1810')
        const data = await respone.json()
        console.log(data);  
    } catch (error) {
        console.log("E:",error);
    }
}
// callforData()

//using .then...catch()
fetch('https://api.github.com/users/Ronit1810')
.then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(error);
})
