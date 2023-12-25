//Synchronous Programming
//FLOW GOES STEP BY STEP

// let a=5;
// let b=7;
// console.log(a+b);




//Asynchronous Programming

// console.log("Start"); //it seems like first start will be printed then HEY thrn End , but here due to an asychronous fn HEY goes on halt and op is start,end,HEY // here setTimeout is an async fn
// setTimeout(function(){
//     console.log("HEY");
// },3000);
// console.log("End");


//CallBacks
//HERE WE HAVE TO WRITE SAME CODE FOR SQUARE AS WELL AS FOR CUBE IE SumOfSquare and SumOfCubes --> their work is exactly same just calling their respective fns // SO WE CAN REPLACE IT BY CALL-BACKS

function square(n){
    return n*n;
}

function cube(n){
    return n*n*n;
}

function SumOfSquare(a,b){
    let val1=square(a);
    let val2=square(b);

    return val1 + val2;

}

function SumOfCubes(a,b){
    let val1=cube(a);
    let val2=cube(b);

    return val1 + val2;

}

const ans1=SumOfSquare(1,2);
const ans2=SumOfCubes(1,2);

console.log(ans1);
console.log(ans2);


////////////////////////////////////////

function square(n){
    return n*n;
}

function cube(n){
    return n*n*n;
}

function SumOfSomething(a,b,fn){
    let val1=fn(a);
    let val2=fn(b);

    return val1 + val2;

}

const ans1=SumOfSomething(1,2,square);
const ans2=SumOfSomething(1,2,cube);

console.log(ans1);
console.log(ans2);



////////////////////
//ANONYMOUS FUNCTION

//NOT DEFINING FN ANYWHERE AND PASSING THE WHOLE FN AS ARGUMENT IN ANOTHER FN

const res=SumOfSomething(2,5,function(n){
    return n*n;
});

/////////////////////////HARRY
function loadScript(src,callback){ //inbuilt fn to add new js file to html 
    var script=document.createElement("script"); //creates new script
    script.src=src;//sets inner content to src
    script.onload=function(){//inbuilt fn used after script is loaded
        console.log("loaded successfully" + src);
        callback(null,src);//we can also pass no parameter into it////////it passes null as a argument coz fn hello is taking error as 1st argument so it will be set to null means no error
    }

    //if by chance src is unable to load then
    // script.onerror=function(){
    //     console.log("error occured");
            // callback(new Error("src got some error")); //throwing error to other fn
    // }
    document.body.appendChild(script);//whole script tag with inner content adds into body tag of html
}

function hello(error,src){
    if(error){//if error is there 
        console.log(error);
        return;
    }
    alert("hey");
}

function gm(){//can also written as hello
    alert("gm");
}

loadScript("www.xyz.com",hello);//fn name (src,callback fn name)//make sure passing a valid src coz it cause error

//but such type of fn calling and giving full handle of fns wiht error suchas hello and good morning can lead to errors //coz loadScript is such vulnarable fn , to prevent such vulnerable fns 


//if we want to load multiple scripts   by calling 1st fn only so we have to call another fn from it , so it decreases readibility due to many scripts --> pyramid of doom // callbacks in callbacks





// loadScript function:

// Accepts two parameters: src (the URL of the script to be loaded) and callback (a function to be called once the script is loaded).
// Creates a new <script> element using document.createElement.
// Sets the src attribute of the <script> element to the provided URL.
// Defines an onload event handler for the <script> element. When the script finishes loading, it logs a message to the console and then calls the provided callback function.
// hello function:

// A simple function that displays an alert with the message "hey".
// gm function:

// Another simple function that displays an alert with the message "gm".
// loadScript("www.xyz.com", hello);:

// Invokes the loadScript function with the URL "www.xyz.com" and the hello function as the callback. This triggers the loading of the script and, upon successful loading, executes the hello function.
// In this case, when the script from "www.xyz.com" finishes loading, the console will display "loaded successfully www.xyz.com" and then trigger the hello function, displaying an alert with "hey".