let promise = new Promise(function(resolve, reject){  //used for parallel execution
console.log("hiii");
resolve()
})

console. log("Hello One")
setTimeout ( function( ) {
console. log("Hello Two in 2 seconds")

}, 2000)

console. log("My name is " + "Hello Three")
console. log(promise);//runs resolve(56)


///////////////////////////////////////////////////////////
    let p1=new Promise(function(resolve,reject){
        console.log("promise is pending")
        setTimeout(()=>{
            console.log("i am a promise and i am resolved")
            // resolve()
            reject(new Error("i am an error "))
        
        },2000)
        })

let p2=new Promise(function(resolve,reject){
    console.log("promise is pending")
    setTimeout(()=>{
        console.log("i am a promise and i am rejected")
        // resolve(true)
        reject(new Error("i am an error "))
        
    },2000)
    })
    console.log(p1,p2);

// p1.then((value)=>{  //executes only if p1 is resolved.
//     console.log("p1 resolved hua");                            
// })
// p1.catch((error)=>{
//     console.log("p1 reject hua")
// })
// p2.then((value)=>{
//     console.log("p2 resolved hua");
// })
// p2.catch((error)=>{
//     console.log("p2 rejected");
// })

// if we want to add perform then and catch for boht p1 and p2 this is not good approach instead do this

p1.then((value)=>{
    console.log("p1 resolve hua")},(error)=>{
        console.log("p1 reject hua")
    })

p2.then((value)=>{
    console.log("p2 resolve hua")},(error)=>{
        console.log("p2 reject hua")
    })


