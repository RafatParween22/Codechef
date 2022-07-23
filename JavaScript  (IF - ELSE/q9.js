let num=require("readline-sync");
let a=num.questionInt("enter the mark:-")
if (a<25){
    console.log("grading F")
}
else if(a>25 && a<45){
    console.log("grading E")
}
else if (a>45 && a<50){
    console.log("grading D")
}
else if (a>50 && a<60){
    console.log("grading C")
}
else if(a>60 && a<80){
    console.log("grading B")
}
else if (a>80){
    console.log("grading A")
}