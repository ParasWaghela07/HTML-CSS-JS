console.log(); // nodename op--> text ,comment, h1 etc..
console.dir()//element name / tagName --> h1,span,div...

/////////////////////////////////////////////////////////
//INNER HTML AND OUTER HTML

first.innerHTML="none"; // here first is name of id of any element , by using inner html ,op--> inner content of first not its own element
//i am span <-> none

first.outerHTML="none";//here is gives inner html as well as its own tag
//<span id="first">i am span</span> <--> none

console.log(document.body.textContent); //textContent is used to retriev text only from any element removing tags



