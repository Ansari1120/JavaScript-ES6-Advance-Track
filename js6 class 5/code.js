//closures
function init() {
  var name = "Mozilla"; // name is a local variable created by init
  function displayName() {
    // displayName() is the inner function, that forms the closure
    console.log(name); // use variable declared in the parent function
  }
  displayName();
}
init();

//Lexical Scoping

//traditional scoping
let a = "abc";
let abc = () => {
  let a = 123;
  console.log(a);
};
abc();

//lexical
//shortly referenced passed instead of redeclaration
let cdf = (a = 212) => {
  // default parameters
  console.log(a);
};
cdf();
cdf("short");
cdf(11);

// for each example

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let b = arr.forEach((e, i) => {
  e * 2;
  console.log(`foreach example `, e);
});
console.log(b);
//for each example 02

let sum = 0;
const numbers = [65, 44, 12, 4];
numbers.forEach(myFunction);

function myFunction(item) {
  sum += item;
  console.log(sum);
}

// 65
// code.js:49 109
// code.js:49 121
// code.js:49 125

//map
arr.map((e, i) => {
  console.log(`map example on value ${e} on index ${i}`);
});

//map example 02

const numbers1 = [65, 44, 12, 4];
const newArr = numbers1.map(myFunction1);

function myFunction1(num) {
  return num * 10;
}
console.log(newArr);

//............................

let arr1 = [
  {
    id: 1,
    name: "ABC",
    category: "C",
  },
  {
    id: 2,
    name: "XYZ",
    category: "A",
  },
  {
    id: 3,
    name: "MNO",
    category: "A",
  },
  {
    id: 4,
    name: "JKL",
    category: "B",
  },
  {
    id: 5,
    name: "LPO",
    category: "C",
  },
  {
    id: 6,
    name: "TYU",
    category: "A",
  },
  {
    id: 7,
    name: "LKJ",
    category: "B",
  },
  {
    id: 8,
    name: "OLK",
    category: "A",
  },
  {
    id: 9,
    name: "JHG",
    category: "B",
  },
  {
    id: 10,
    name: "ERT",
    category: "A",
  },
];

let ids = arr1.map((x) => ({ name: x.name, category: x.category }));

console.log(ids); //fetch all objects arrays

//filter and map combo

let arr2 = arr1
  .filter((x) => {
    // takes out all category objects contain 'A' init.
    if (x.category == "A") {
      return x; //return all 'A' category objects
    }
  })
  .map((x) => x.id); // iterating(looping) all objects contain category 'A'

//filter and map combo example 02

let arr3 = arr1
  .map((x) => {
    if (x.category == "A") {
      return x.id;
    }
  })
  .filter(Boolean);
console.log(arr3);
console.log(arr2);
