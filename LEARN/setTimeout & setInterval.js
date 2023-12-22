alert("Hello");

setTimeout(function(){
    alert("Dance");
},2000);

//we can also save it lile..
let a=setTimeout(function(){
    alert("Dance");
},2000);

//then directly use
clearTimeout(a);//stops the timeout of a
console.log(a);
//ex
let b=prompt("TImeout");
if(b=="n"){
    clearTimeout(a);
}
console.log(a);

//
const sum=function(a,b){                //naming fn AS const sum==function(){}
    console.log("I m running"+(a+b));
    return a+b;
}

setTimeout(sum,2000,2,3);//fn nane , delay , arguments...


/////////////////////////////////// SET INTERVAL
// setInterval(function(){
// alert("Helllo");
// },2000)

function sum2(a,b){
    console.log("Sum : -"+(a+b));
}

let x=setInterval(sum2,3000,3,4);
clearInterval(x);





