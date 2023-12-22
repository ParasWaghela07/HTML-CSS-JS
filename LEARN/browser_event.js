//better way //js onclick has higher priority than html inlines
let a=document.getElementsByClassName("con")[0];
a.onclick=function(){
    let b=document.getElementsByClassName("con")[0];
    b.innerHTML=b.innerHTML + '<h1>HEllo</h1>';
}