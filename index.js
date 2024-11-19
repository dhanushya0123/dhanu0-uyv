console.log("hi sweet")
var a=10
var b=20
var result =a+b
console.log("total value",result);
//primitrive type
var num1=10
var num2 =num1
//re assign
num1=20
console.log("num1:",num1);
console.log("num2:",num2);

//reference type
var renum1=[10]
var renum2=renum1
renum1[0]=20
console.log("renum1:",renum1);
console.log("renum2:",renum2);

let i=10;
if(i===10) {
     console.log('value:', i);
     console.log('correct');
}

const value = parseInt(prompt("enter the value:"));
if (value < 0) {
    console,log("negative");
} else {
    console.log("positive");
}

let age=29;
if (age<20) {
    console.log("children");
}else if(age <30){
    console.log("adults");
}else if(age <50){
    console.log("citizen");
}else if(age <75){
    console.log("senior citizen");
}

let age1=20;
let hasID=true;

if(age1 >=18) {
    console.log("you are an adult.");

    if(hasID) {
        console.log("you have an ID.you can enter.");
    } else{
        console.log("you need an ID to enter.");
    }
} else {
    console.log("you are not an adult.");
}

//array

var list=[10,7,4,6,85,4]
console.log("array value:",list);
console.log("array 0 center value:",list[3]);

//object
var obj={
     name:"pranava",
     age:20,
     role:"mern stack developer"
     }

     console.log("object value:",obj);
     console.log("object role value:",obj.role);