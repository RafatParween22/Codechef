// let namevar=undefined
// console.log(typeof(namevar));
let namevar=require("readline-sync");
let phy=namevar.questionInt("enter the subject mark");
let chem=namevar.questionInt("enter the subject mark");
let math=namevar.questionInt("enter the subject mark");
let computer=namevar.questionInt("enter the subject mark");
let bio=namevar.questionInt("enter the subject mark");
let subject=(phy+chem+math+computer+bio);

let Percentage=subject/5*100;

console.log(Percentage);

if (Percentage>=90){
    console.log("grade A")
}
else if (Percentage >= 80){
    console.log("grade B")
}
else if (Percentage >= 70){
    console.log("grade C")
}
else if(Percentage >= 60){
    console.log("grade D")
}
else if (Percentage >= 40){
    console.log("grade E")
}
else if(Percentage < 40){
    console.log("grade F")
}




// var a="rafat";
// var b="nisha"
// var c="sufiya"
// var d="sifat"
// var e="saniya"
// console.log(a,b,c,d,e)nu

// console.log("rafat\sifat\neha")

// let num=require("readline-sync");
// let a=num.questionInt("enter the num");
// if( a%2) {
//     console.log("even")
// }
// else{
//     console.log("odd")
// }

// let a=32;
// if (a%2==0){
//     console.log("divisible")
// }
// else{
//     console.log("not divisible")
//

// let b=require("readline-sync");
// let num=b.questionInt("enter the n")
// // let num=34;
// if (num=0){
//     console.log("zero")
// }
// else if (num>0){
//     console.log("is greater")
// }
// else{
//     console.log("is less")
// }

// let num=require("readline-sync")
// let n=num.questionInt("enter the num")
// if (n%5==0){
//     console.log("its divisible")
// }
// else{
//     console.log("its not divisible")
// }

