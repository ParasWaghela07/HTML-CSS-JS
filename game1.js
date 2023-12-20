let n = Math.floor(Math.random() * 100); 
let count=1;
while(1){
  let num = prompt("Enter your guess !")
  num=Number.parseInt(num);
   if(n==num){
     console.log("You guessed the correct number");
     break;
   }
  else if(num>n){
    console.log("You guessed the number higher than correct number,Please Try again !");
  }
  else{
    console.log("You guessed the number lower than correct number,Please Try again !");
  }
  count++;
}

let result=100-count;

console.log("Number of guesses you did :- "+count);
console.log("Your Final Score is ");
console.log(result);