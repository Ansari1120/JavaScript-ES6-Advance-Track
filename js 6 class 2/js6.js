//var : hoisting
console.log(a)
// var a = 1;
// var a = 1; can redecleare
// a = 2;  // reassignable
console.log(a)
// let h = 1;
// let h =2 ; //error cant redecleare
// h =2; // reassignable

console.log(a)
// const i = 1; 
// const i = 2; error cant redecleare
// i = 5; // cant reassignable


//var : hoisting
// console.log(b)
// var b = 1;

// console.log(b)
// let b = 1;

// console.log(b)
// const b = 1;   // error occur in all cases


// function hoisting
//hoisting work correctly there

abc();   // file read initially of js
function abc(){
    console.log("abc"); // file executed after read 
}


// template literals :

var num = 10;
var a = `the square root of ${num} is ${num * num}`;

console.log(a);

// ternary operators

var marks = 80;

if(marks < 70){ //condition
    console.log("abc"); //action
}
else if(marks < 60){ //condition
    console.log("abc"); //action
}
else{
    console.log("egh"); //reaction
}
// instead
marks < 70 ? console.log("abc") : marks !== 70 ? !console.log("455") : console.log("thg") ;


// multiple else if

let nume = "ab" * 5; // NaN -> output
let total = nume || 0; // if no number then 0 will be printed
console.log(total); 
// called circuits

let bool = true;

let total1  = bool && "abc" //if false then false is print otherwise abc is printed cuz of true condidition

console.log(total1); //abc

//1 = true , 0 = false.

total1 = bool || "cdg";


console.log(total1); //true

bool = false;

total1 = bool && "cdg";

console.log(total1); //false



// object , methods

const obj = {
    id:1,
    name:"abc",
    category:"A",
    status:false,
};
// let arr = Object.keys(obj);
// let arr = Object.values(obj);
// let arr = Object.entries(obj);
let arr = Object.freeze(obj); // to restrict changing property refernce

// we can still change const obj but can change its referencing not changing its property value
// we change const obj value pass by reference
// so we use freeze instead not to allow property refernce to be change.
obj.category = "C"

console.log(obj);


