let a=document.getElementById("btn");

let b=function(){
    alert("Hello 1");
}

let c=function(){
    alert("Hello 2");
}

a.addEventListener('click',b);
a.addEventListener('click',c);

let x=prompt("Enter number of alert ");
if(x=="1"){
    a.removeEventListener('click',b);
}
else{
    a.removeEventListener('click',c);
}

