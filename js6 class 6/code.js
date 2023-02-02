let mobiles = [
  {
    name: "a30",
    ram: "4gb",
    rom: "64gb",
    camera: "50px",
    price: 2000,
    brand: "samsung",
  },
  {
    name: "note10",
    ram: "6gb",
    rom: "128gb",
    camera: "50px",
    price: 4000,
    brand: "samsung",
  },
  {
    name: "s10",
    ram: "3gb",
    rom: "128gb",
    camera: "10px",
    price: 5000,
    brand: "samsung",
  },
  {
    name: "iphone4",
    ram: "4gb",
    rom: "64gb",
    camera: "50px",
    price: 10000,
    brand: "iphone",
  },
  {
    name: "iphone4s",
    ram: "4gb",
    rom: "64gb",
    camera: "50px",
    price: 20000,
    brand: "iphone",
  },
  {
    name: "iphone5",
    ram: "4gb",
    rom: "64gb",
    camera: "50px",
    price: 30000,
    brand: "iphone",
  },
  {
    name: "iphone6",
    ram: "4gb",
    rom: "64gb",
    camera: "50px",
    price: 30000,
    brand: "iphone",
  },
  {
    name: "redminote10",
    ram: "4gb",
    rom: "64gb",
    camera: "50px",
    price: 10000,
    brand: "xiaomi",
  },
  {
    name: "redminote11",
    ram: "4gb",
    rom: "64gb",
    camera: "50px",
    price: 10000,
    brand: "xiaomi",
  },
  {
    name: "redmi10",
    ram: "4gb",
    rom: "64gb",
    camera: "50px",
    price: 10000,
    brand: "xiaomi",
  },
  {
    name: "redmi10pro",
    ram: "4gb",
    rom: "64gb",
    camera: "50px",
    price: 10000,
    brand: "xiaomi",
  },
  {
    name: "a3s",
    ram: "4gb",
    rom: "64gb",
    camera: "50px",
    price: 10000,
    brand: "oppo",
  },
  {
    name: "a3s",
    ram: "4gb",
    rom: "64gb",
    camera: "50px",
    price: 10000,
    brand: "Realmi",
  },
];

//findindex

let ind = mobiles.findIndex((x) => x.name == "a3s");
console.log(`the index number of object a3s is : `, ind);

//find index method example 02

const ages = [3, 10, 18, 20];

document.getElementById("demo").innerHTML = ages.findIndex(checkAge);

function checkAge(age) {
  return age > 18;
}

//find method

const ages2 = [4, 12, 16, 20];

function checkAge(age) {
  return age > document.getElementById("ageToCheck").value; //fetch html tag to get its input value
}

function myFunction() {
  document.getElementById("demo1").innerHTML = ages2.find(checkAge); // fetch html tag to print value there.
}

//some method

let status1 = mobiles.some((x) => x.name == "a3s");
console.log(status1); //returns true or false on the basis of search
//over the array for specific input provided.

//reducer method :

const numbers = [175, 50, 25];
let red = numbers.reduce(myFunc);
console.log(red); // after all three iteration 100 is the remaining value.
function myFunc(total, num) {
  return total - num;
}

//flat method over array:

let arr5 = [1, 2, 3, ["a", "b", "c", ["1a", "2a", "3a", [1, 2, 3]]]];
arr5 = arr5.flat(3);
console.log(arr5);

//max method over array

let numArr = [1, 2, 34, 53, 1, 2, 31, 2, 3, 1, 5, 3, 1, 1];
let c = Math.max(...numArr);
console.log(c);

//search dom actions into mobiles object using different array methods

let brands = mobiles.map((x) => x.brand);
brands = [...new Set(brands)];
let models;

let brandSelect = document.getElementById("brand"); // fetched brand select tag
let modelSelect = document.getElementById("model"); // fetched model select tag

function init() {
  brands.forEach((x) => {
    //iterating(looping x(values of array))
    brandSelect.innerHTML += `<option value = '${x}'>${x}</option>`;
  }); // printing values into option tag as values return in the array from by x of foreach loop
}
init();

function getBrand() {
  models = mobiles
    .filter((x) => x.brand == brandSelect.value)
    .map((x) => x.name);
  modelSelect.innerHTML = "";
  models.forEach((x) => {
    modelSelect.innerHTML += `<option value = '${x}'>${x}</option>`;
  });
}
var obj;
var b = document.getElementById("body");
let a = document.getElementById("header");
function searchMob() {
  let obj = mobiles.find(
    (x) => x.brand == brandSelect.value && x.name == modelSelect.value
  );

  console.log(obj.name);
  a.innerHTML += `<td>${Object.keys(obj)}</td>`;
  b.innerHTML += `<tr>
    <td>
    ${obj.name}
    </td>
    <td>
    ${obj.ram}
    </td>
    <td>
    ${obj.rom}
    </td>
    <td>
    ${obj.camera}
    </td>
    <td>
    ${obj.price}
    </td>
    <td>
    ${obj.brand}
    </td>
    </tr> `;
}
