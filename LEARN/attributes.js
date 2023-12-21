let a=first.getAttribute("class"); //  attribute(class) kya he //class k badle or kuch b search kr skte he
console.log(a); // op--> jo bhi class ka naam hoga first id wale ka


let target=document.getElementById("first");
console.log(target.hasAttribute("class")); //  element ka koi class he kya // return true or false;
console.log(target.hasAttribute("style")); // style he kya uska attribute ya n
target.setAttribute("hidden","true");// sets hidden as a attribute of element and sets the value of hidden as true

target.setAttribute("class","sachin");//sets target's class named as sachin

target.removeAttribute("class"); //class hata do target ki
target.attributes // returns all the attributes target have

///////////////////////////////////
// // Adding own custom attributes to tags

// HTML
// /* <div data-game="HEllo" data-player="noob">  Hii there  </div> */  

console.log(target.dataset); //return all custom attributes
console.log(target.dataset.game); //return game naamak attribute value ie HEllo
console.log(target.dataset.player); //noob










