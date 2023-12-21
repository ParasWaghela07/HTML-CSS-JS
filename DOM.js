// console.log(document.body.firstChild); //gives 1st child of body
// console.log(document.body.lastChild); //gives last child of body
// console.log(document.body.childNodes); //gives all child of body

// Element.childNodes[0]==Element.firstChild // same
// Element.childNodes[Element.childNodes.length-1]==Element.lastChild //same

// let arr=Array.from(document.body.childNodes);//got data and converted into console.

// document.documentElement.parentNode --> return parent anything --> text , node , tag , comment

// document.documentElement.parentElement --> return parent element,tags only


// console.log(document.body.firstChild);

// //we can also do
// let a=console.log(document.body.firstChild);
// console.log(a.parentElement);
// console.log(a.parentNode);
// console.log(a.firstChild.nextSibling);

 function changeBg() {
    document.body.firstElementChild.style.background="red";
}


let a=document.body;
console.log(a.firstChild);
console.log(a.firstElementChild); //gives element not text , comments 

//also works for table
let t=document.body.firstElementChild; //target table 1st

console.log(t.rows); //like this t.thead,t.tbody,t.caption etc....
//t.bodies -->multi bodies
//t.rows[0]--> 1st row 1st tr
//t.rows[0].rowIndex
//td.r

