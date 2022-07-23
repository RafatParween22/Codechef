// var list=[1,2,5,6,7];
// var i=0;
// var sum=0;
// for (i=0;i<length(list);i++);{
//     sum=sum+list[i];
//     console.log(sum);
// }

// var list=[1,3,4,5];
// var  sum=0;
// var i=0;
// while (i<length(list));{
//     sum=sum+list[i];
//     i=i+1;
//     console.log(sum);
// }

let readlineSync = require("readline-sync");
 
var computerMoves = ['rock', 'paper', 'scissors'];
var randomMoveOfComputer = computerMoves[Math.floor(Math.random() * computerMoves.length)];
 
var playerName= readlineSync.question("What is your name: ")
console.log("hi "+ playerName )
console.log("choose any move in rock paper scissors")
var playerMove = readlineSync.question("Which move you want to do? ");
 
if (playerMove == randomMoveOfComputer){
   console.log("Match Draw");
}
else if(playerMove =="rock" && randomMoveOfComputer == "paper"){
   console.log("computer won the match");
}
else if(playerMove=="rock" && randomMoveOfComputer == "scissors"){
   console.log(playerName+" Won the match");
}
else if(playerMove=="scissors" && randomMoveOfComputer == "rock"){
   console.log("computer won the match");
}
else if(playerMove=="scissors" && randomMoveOfComputer == "paper"){
   console.log(playerName+" Won the match");
}
else if(playerMove=="paper" && randomMoveOfComputer == "rock"){
   console.log(playerName+" Won the match");
}
else if(playerMove=="paper" && randomMoveOfComputer == "scissors"){
   console.log("computer won the match");
}

var i=1;
while (i<=10){
   console.lo
}