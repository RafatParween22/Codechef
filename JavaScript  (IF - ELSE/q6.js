var num=require("readline-sync")
var sell=num.questionInt("enter the first number")
var cost=num.questionInt("enter the second no")
if (sell > cost){
    console.log("profit")
}
else{
    console.log("loss")
}