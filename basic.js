let a=prompt("enter the number");
console.log(oddEven(a));

/*if(a>0){
  console.log("positive");
}
else if(a<0){
   console.log("negative");
}
else{
  console.log("zero")
}*/

// let count=0;
// for(let i=2;i<a;i++){
//   if(a%i==0){
//     count++;
//   }
// }

// if(count>0){
//   console.log("Not prime");
// }
// else{
//   console.log("Prime");
// }

function oddEven(x){
  if(x%2==0){
    return "Even"
  }
  else{
    return "odd"
  }
}
