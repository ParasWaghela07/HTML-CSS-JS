console.log(document.body.firstChild); //gives 1st child of body
console.log(document.body.lastChild); //gives last child of body
console.log(document.body.childNodes); //gives all child of body

Element.childNodes[0]==Element.firstChild // same
Element.childNodes[Element.childNodes.length-1]==Element.lastChild //same

let arr=Array.from(document.body.childNodes);//got data and converted into console.

document.documentElement.parentNode --> return parent anything --> text , node , tag , comment

document.documentElement.parentElement --> return parent element,tags only


console.log(document.body.firstChild);

//we can also do
let a=console.log(document.body.firstChild);
console.log(a.parentElement);
console.log(a.parentNode);
console.log(a.firstChild.nextSibling);

