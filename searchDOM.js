//change card title color to red
let rcard=document.getElementsByClassName("card-title")[0];
rcard.style.color="red";

let ctitles=document.querySelectorAll(".card-title");
ctitles[0].style.color="green";
ctitles[1].style.color="purple";
ctitles[2].style.color="yellow";
console.log(ctitles);

document.querySelector(".this").style.color="black";

document.querySelector(".this").style.background="red";//1st element dedo jiska class this ho


document.querySelectorAll //all childs of given class/id
document.querySelector //1st child of given class/id
document.getElementsByTagName//

// console.log(document.getElementsByTagName("a")); == console.log(document.body.getElementsByTagName("a"));
console.log(document.querySelector(".card").getElementsByTagName("a")); // pehle class k 1st child ko lake degi fir usme tagname wala sab find karegi

console.log(document.getElementsByName("search")); // koibi input k andr attribute as name add krke usko target kr skte