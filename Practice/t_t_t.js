let turn='X';

let op1=function(){
    if(document.getElementById("op1").innerText.trim() === ''){

        document.getElementById("op1").innerHTML=turn;
    if(turn=='X'){
        turn='O';
    }
    else{
        turn='X';
    }

    }
     
}
let op2=function(){
    if(document.getElementById("op2").innerText.trim() === ''){

        document.getElementById("op2").innerHTML=turn;
    if(turn=='X'){
        turn='O';
    }
    else{
        turn='X';
    }

    }
}
let op3=function(){
    if(document.getElementById("op3").innerText.trim() === ''){

        document.getElementById("op3").innerHTML=turn;
    if(turn=='X'){
        turn='O';
    }
    else{
        turn='X';
    }

    }
}
let op4=function(){
    if(document.getElementById("op4").innerText.trim() === ''){

        document.getElementById("op4").innerHTML=turn;
    if(turn=='X'){
        turn='O';
    }
    else{
        turn='X';
    }

    }
}
let op5=function(){
    if(document.getElementById("op5").innerText.trim() === ''){

        document.getElementById("op5").innerHTML=turn;
    if(turn=='X'){
        turn='O';
    }
    else{
        turn='X';
    }

    }
}
let op6=function(){
    if(document.getElementById("op6").innerText.trim() === ''){

        document.getElementById("op6").innerHTML=turn;
    if(turn=='X'){
        turn='O';
    }
    else{
        turn='X';
    }

    }
}
let op7=function(){
    if(document.getElementById("op7").innerText.trim() === ''){

        document.getElementById("op7").innerHTML=turn;
    if(turn=='X'){
        turn='O';
    }
    else{
        turn='X';
    }

    }
}
let op8=function(){
    if(document.getElementById("op8").innerText.trim() === ''){

        document.getElementById("op8").innerHTML=turn;
    if(turn=='X'){
        turn='O';
    }
    else{
        turn='X';
    }

    }
}
let op9=function(){
    if(document.getElementById("op9").innerText.trim() === ''){

    document.getElementById("op9").innerHTML=turn;
    if(turn=='X'){
        turn='O';
    }
    else{
        turn='X';
    }

    }
}

function check(){}

document.getElementById("op1").addEventListener('click',op1);
let check=check();
document.getElementById("op2").addEventListener('click',op2);
document.getElementById("op3").addEventListener('click',op3);
document.getElementById("op4").addEventListener('click',op4);
document.getElementById("op5").addEventListener('click',op5);
document.getElementById("op6").addEventListener('click',op6);
document.getElementById("op7").addEventListener('click',op7);
document.getElementById("op8").addEventListener('click',op8);
document.getElementById("op9").addEventListener('click',op9);