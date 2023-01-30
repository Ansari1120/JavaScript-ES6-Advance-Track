let a = ['ans']

let b = a; //b contains reference of a so indirectly a's value is changed.

b.push = 123;
console.log(a)

// spread operator

let config = {
    inst : 'SAIMS',
    course:'web and mobile',
    batch : 6, 
    year:2023
} 

let std1 = {
    ...config,  // fetching all properties of config object
    age:15,
    name:'samar',
    sec:'A',
}
console.log(std1) // follows key's alphabetic order.

// spread operator on array

let x = ['a','b','c'];
let c = [1,...x,2,3]; // follows index number of the array for order

console.log(c);

// spread example over object another
// no reference made
let t = {
    name :'abc'
}
let g = {...t}; //t's value remains init
//g have its value 123 and t's property
//just fetched
//t dont include g's 123 value and key as reference
g.id = 123;

console.log(t,g)

// spread example over array
// no refernce made a copy of l's properties 
//just copied into b object.
let l = ['c','d','h']
let o = [...l]
o.push(454)
console.log(o,l)


// spread use case another
// reference still made despite of using 
//spread operator.
let arr = { // array of object
    name:'avc',
    id:1,
    details:{ //nested object
        city:'karachi',
        country : 'pak'
    }
}
// let arr2 = {...arr};
// delete obj2.details;

// delete arr2[0].details;

//arr details also delete 
//but we supposed to delete arr2 some
//properties
// to kill reference over nested object:

let arr2 = JSON.parse(JSON.stringify({...arr}))
delete arr2.details;
console.log(arr,arr2);


// REST PARAMETER OPERATOR

function abc(...rest){
    console.log(rest)
}

abc(1,2,3,4,5,6,7,8,9,10) // got argument in the form of aaray

//Destructuring

let obj3 = {
    id:1,
    name:'abc',
    userName:'abc123',
    contact:'12321321321'
}
// want to access specific property again
// and again behave as a variable it still
//present as property(passed by reference)
let {id} = obj3

// console.log(name,id);

//destructuring in array

let arr4 = ['abc','we2','faq','wqa','dfe']

let [jo,fi,,tr] = arr4

console.log(tr);


// fetch name "abu bakar" and dt value 12345

let arr7 = [
    2,
    2,
    3,
    "abc",
    "ty",
    [  // 5th index
      true,
      { // 1st index
        id: 374, 
        details: [{ //accessing details object
            id: 1, 
            name: //at index 0
            "Abu Bakar",
             dt:
             [1, 2, 3, 4, 5] }
            ] //this is index 0 
            },
    ],
  ];
let {name} = arr7[5][1].details[0]
console.log(name);


  
let {dt} = arr7[5][1].details[0]
console.log(dt);


