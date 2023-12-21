let a=document.getElementById("id1");
console.log(a.matches(".class")); // there is no such class named class so ans is false;
console.log(a.matches(".box"));

console.log(sp1.closest("#sp1")); //khudse start karke parent k paas jata rahega jab tak match na mil jaaye
console.log(a.closest("#sp1")); //id1 is starting point from where it starts matching

let sp1Element=document.getElementById("sp1");
console.log(a.conatins(sp1)); // a k andr sp1 hoga to true; naito false
console.log(sp1.conatins(a)); // both should be element
