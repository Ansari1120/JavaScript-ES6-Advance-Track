let arr7 = [
  2,
  2,
  3,
  "abc",
  "ty",
  [
    // 5th index
    true,
    {
      // 1st index
      id: 374,
      details: [
        {
          //accessing details object
          id: 1,
          name: "Abu Bakar",
          dt: [1, 2, 3, 4, 5],
        },
      ], //this is index 0
    },
  ],
];
const obj = arr7[5][1].details[0];
let { name } = obj;
// console.log(name); //abu bakar
name = obj;
let [a, b] = obj.dt;
// console.log(a, b);

//map method
const arr = [1, 2, 3, 4, 5, 6, 7, 8];
arr.map(function (a, b) {
  console.log("value : " + a + " its index : " + b);
});

// value : 1 its index : 0
// js6.js:35 value : 2 its index : 1
// js6.js:35 value : 3 its index : 2
// js6.js:35 value : 4 its index : 3
// js6.js:35 value : 5 its index : 4
// js6.js:35 value : 6 its index : 5
// js6.js:35 value : 7 its index : 6
// js6.js:35 value : 8 its index : 7

const arr2 = [1, 2, 3, 4, 5, 6, 7, 8];
const new_array = arr2.map(function (d) {
  //   const array = d * 2;
  //   console.log(array);
  return d * 2;
});
console.log(new_array); //do modification in
// new array is the objective of the method map
console.log(arr2);



//higher order function
//callback 
function abc(a){
console.log(a);
}
function xyz(x){
    return x;
}
abc(xyz("ahmed ali ansari"))
//first xyz will run then abc will run
//abc called first then xyz called
//abc call gone and xyz called back
//abc is higher order function.
//xyz is callback function
// xyz is dependent on abc


function dfc(k){
    console.log(k);
    return function(c){
        console.log(c);
    };
}
let y = dfc("baahir wala function"); // anonymous function return value is saved there
y("return wala function")

// another way of calling

dfc('tyt')('ryt')


//ARROW FUNCTIONS

//normal anonymous function

let p = function(){
    console.log('qqq');
} //hoisted first allocated a memory and held its space
p();
let h = ()=>{
    console.log('wont store and allocated its function"s space')
}
h();

let w = ( //if we want to called a function first we enclosed our function in the round bracket and it is run first of all
    ()=>{ //function created
return 'abc'
})() 
console.log(w);