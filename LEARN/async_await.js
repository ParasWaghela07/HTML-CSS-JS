//////// ASYNC FN ALWAYS RETURN A PROMISE .... IT WRAPPES EVERYTHING INSIDE IT AND MAKE IT PROMISE AND RETURNS

async function paras(){ // always returns promise // return 5 as promise
    let w1=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("27 deg");
        },1000)
    })
    
    let w2=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("23 deg");
        },3000)
    })

    console.log("w1 is coming , wait...")
    let getw1=await w1; // waits until w1 promise gets sresolved and it stores it in getw1 then flow goes forward , flow halts
    console.log("w2 is coming , wait...")
    let getw2=await w2; //await is use to hold for a while

    return [getw1,getw2]; //return both value togerthr by array
}

console.log("WELCOME TO SUPLEX CITY")
let a=paras(); // return a promise coz paras() is an async fn
// console.log(a);
a.then((value)=>{
    console.log(value);
})
//if there is any other fn or codes below this will not stop this will run parallelly side by side // async fn