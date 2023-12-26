// let promise = new Promise(function(resolve, reject){  //used for parallel execution
// console.log("hiii");
// resolve()
// })

// console. log("Hello One")
// setTimeout ( function( ) {
// console. log("Hello Two in 2 seconds")

// }, 2000)

// console. log("My name is " + "Hello Three")
// console. log(promise);//runs resolve(56)


// ///////////////////////////////////////////////////////////
//     let p1=new Promise(function(resolve,reject){
//         console.log("promise is pending")
//         setTimeout(()=>{
//             console.log("i am a promise and i am resolved")
//             // resolve()
//             reject(new Error("i am an error "))
        
//         },2000)
//         })

// let p2=new Promise(function(resolve,reject){
//     console.log("promise is pending")
//     setTimeout(()=>{
//         console.log("i am a promise and i am rejected")
//         // resolve(true)
//         reject(new Error("i am an error "))
        
//     },2000)
//     })
//     console.log(p1,p2);

// // p1.then((value)=>{  //executes only if p1 is resolved.
// //     console.log("p1 resolved hua");                            
// // })
// // p1.catch((error)=>{
// //     console.log("p1 reject hua")
// // })
// // p2.then((value)=>{
// //     console.log("p2 resolved hua");
// // })
// // p2.catch((error)=>{
// //     console.log("p2 rejected");
// // })

// // if we want to add perform then and catch for boht p1 and p2 this is not good approach instead do this

// p1.then((value)=>{
//     console.log("p1 resolve hua")},(error)=>{
//         console.log("p1 reject hua")
//     })

// p2.then((value)=>{
//     console.log("p2 resolve hua")},(error)=>{
//         console.log("p2 reject hua")
//     })
//////////////////////////////////////////////////////----PROMISE CHAINING---///////////////////////////////////////////////////////////////////

// let q1 = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         console.log("Resolved after 2 seconds");
//         resolve("Promise 1"); // Resolve q1 with a value
//     }, 2000);
// });

// q1.then((value) => {
//     let q2 = new Promise(function(resolve, reject) {
//         setTimeout(()=>{resolve("Promise 2")},2000)
//     });
//     return q2;  // by any return values we can add more promises by using .then
// }).then((value) => {
//     console.log("We are here after resolving promise 2");
//     return 2
// }).then((value)=>{
//     console.log("finally done ");
// })             //better than callback hell


// ////////////////////////////////////////////////LOAD-SCRIPT FN USING PROMISES/////////////////////////////////////////////////////////////////////

// const loadScript=(src)=>{
//     return new Promise(function(resolve,reject){
//         let script=document.createElement("script")
//         script.type="text/javascript"
//         script.src=src
//         document.body.appendChild(script)
//         script.onload=()=>{
//             resolve()
//         }
//         script.onerror=()=>{
//             reject(0)
//         }
//     })
// }

// let p1=loadScript("http://localhost:3000/index.js")
// p1.then((value)=>{
//     console.log(value);
// }).catch((error)=>{
//     console.log("sorry");
// })


// ////////////////////////////////////////////////----MULTIPLE HANDLERS OF PROMISE----//////////////////////////////////////////////////////////

// let pq1=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve(23);
//     },3000);
// })

// pq1.then((value)=>{
//     console.log("promise ka 1st then");
//     return new Promise(function(resolve,reject){
//         setTimeout(function(){
//             console.log("another promise inside pq1")            //promise chaining me .then.then lagate jate he , where is in multiple handlers    matlab alag alag .then likhte he jodte nai he 1 sath , promise chaining me pehle wale ka aaneka w8 krta he fir agla.then execute hota he, multiple handlers me sab alag alag likhe hote he .then , so ek saath ho skte he
//         },5000)
//     })
// }).then((value)=>{
//     console.log("2nd then of pq1");
// })


////////////////////////////-----------------PROMISE API---------//////////////////////////////////////////////////////

let p1=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve(23);
    },1000);
})

let p2=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve(23);
    },2000);
})

let p3=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve(23);
    },3000);
})

/////////3 promises are defined if we use .then for every promise it will provide value of respected promise after their timeout ,,,, but if i want to see all values together after they all are done with their timeout so we will do

let promise_all=Promise.all([p1,p2,p3]); // making array of promises
promise_all.then((value)=>{//all elements of array are resolved then this get printed
    console.log(value); // if any one promise will fail or get rejected then this promise_all will not print anything // we can catch error by .catch
})

let promise_all=Promise.allSettled([p1,p2,p3]); // making array of promises
promise_all.then((value)=>{//all elements of array are resolved then this get printed
    console.log(value); // if any one promise will fail or get rejected still it will print resolved promises outputs but with their status whether they are resoevd or not // rejected promise's status will be shown by error
})

let promise_all=Promise.race([p1,p2,p3]); // making array of promises
promise_all.then((value)=>{//all elements of array are resolved then this get printed
    console.log(value); // jo sabse pehle resolve hoga wahi print hoga // if jo sabse pehel aya wo reject hua to error dedega code stop hoga
})

let promise_all=Promise.any([p1,p2,p3]); // making array of promises
promise_all.then((value)=>{//all elements of array are resolved then this get printed
    console.log(value); // jo sabse pehle reject hue bina resolve hoga wahi print hoga //koibi resolve nai hui to error dega
})

let promise_all=Promise.resolve(6);// resolved promise deta he direct
promise_all.then((value)=>{
    console.log(value); 
})

let promise_all=Promise.reject(new Error("Hey"));//rejected promise deta he direct
promise_all.then((value)=>{
    console.log(value); 
})






