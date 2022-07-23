var r=require("readline-sync")
var a=r.questionInt("enter the num")
var b= r.questionInt("enter the num")
var c=r.questionInt("enter the num")
if (a>=b && a>=c){
    console.log("maximum of",a)
}
else if (b>=a && b>=c){
    console.log("maximum of",b)
}
// else;
// console.log("maximum of",c)
