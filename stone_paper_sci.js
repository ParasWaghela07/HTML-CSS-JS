// let str1=["stone","paper","scissor"];
// let num1=math.floor(math.random()*2);
// let bot=str1[num1];

// let num2=prompt("Enter your choice !");

// if(bot === num2){
//   console.log(Its a TIE !)
// }

let cpu=0;
let player=0;
for(let i=0;i<5;i++){
  
let str1=["stone","paper","scissor"];
let num1=Math.floor(Math.random()*3);
let c=str1[num1];

let p=prompt("Enter your choice !")

if(c==p){
  console.log("It's a TIE !")
  console.log("You :- " + p);
  console.log("Opponent :- " + c);
  i--;
}
else if(p=='stone' && c=='paper'){
  console.log("You Lost this round !")
  console.log("You :- " + p);
  console.log("Opponent :- " + c);
  cpu++;
}
else if(p=='stone' && c=='scissor'){
  console.log("You won this round !")
  player++;
}
else if(p=='paper' && c=='scissor'){
  console.log("You lost this round !")
  console.log("You :- " + p);
  console.log("Opponent :- " + c);
  cpu++;
}
else if(p=='paper' && c=='stone'){
  console.log("You won this round !")
  console.log("You :- " + p);
  console.log("Opponent :- " + c);
  player++;
}
else if(p=='scissor' && c=='stone'){
  console.log("You lost this round !")
  console.log("You :- " + p);
  console.log("Opponent :- " + c);
  cpu++;
}
else if(p=='scissor' && c=='paper'){
  console.log("You won this round !")
  console.log("You :- " + p);
  console.log("Opponent :- " + c);
  player++;
}

}

if(player>cpu){
  console.log("YOU WON THE GAME !")
  console.log("YOUR SCORE :- " + player)
  console.log("OPPONENT SCORE :- " + cpu)
}
else if(player<cpu){
  console.log("YOU LOST THE GAME !")
  console.log("YOUR SCORE :- " + player)
  console.log("OPPONENT SCORE :- " + cpu)
}
else{
  console.log("GAME IS TIED !")
  console.log("YOUR SCORE :- " + player)
  console.log("OPPONENT SCORE :- " + cpu)
}
