// let a="this is global variable";
// function myfunction(){
//     var b="this is local variable";
//     console.log(b);
// //     console.log(b);
// }
// myfunction()
// console.log(a);

// let num={
//     nisha:3,
//     rafat:6,
//     sufi:4
// }
// console.log(typeof(num))

// let arr=string([1,2,4,5,6])
// console.log(arr,(typeofarr))

// let myvar;
// myvar=string(23);
// console.log(myvar,(typeof myvar))

// let number=parseFloat("34,876");
// console.log(number.toFixed(100),(typeof number))

// let mystr="34";
// let mynum=43;
// console.log(mystr + mynum)

let a=require("readline-sync");
let chr=a.question("enter the chr");
if (chr>="A" && chr<="Z"){
    console.log("uper case")
}
else{
    console.log("loewr case")
}