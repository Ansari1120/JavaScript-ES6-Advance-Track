var a = {
    mobiles: {
      samsung: {
        a30: {
          name: "a30",
          ram: "4gb",
          rom: "64gb",
          camera: "50px",
          price: 2000,
        },
        note10: {
          name: "note10",
          ram: "6gb",
          rom: "128gb",
          camera: "50px",
          price: 4000,
        },
        s10: {
          name: "s10",
          ram: "3gb",
          rom: "128gb",
          camera: "10px",
          price: 5000,
        },
      },
      iphone: {
        iphone4: {
          name: "iphone4",
          ram: "4gb",
          rom: "64gb",
          camera: "50px",
          price: 10000,
        },
        iphone4s: {
          name: "iphone4s",
          ram: "4gb",
          rom: "64gb",
          camera: "50px",
          price: 20000,
        },
        iphone5: {
          name: "iphone5",
          ram: "4gb",
          rom: "64gb",
          camera: "50px",
          price: 30000,
        },
        iphone6: {
          name: "iphone6",
          ram: "4gb",
          rom: "64gb",
          camera: "50px",
          price: 30000,
        },
      },
      xiomi: {
        redminote10: {
          name: "redminote10",
          ram: "4gb",
          rom: "64gb",
          camera: "50px",
          price: 10000,
        },
        redminote11: {
          name: "redminote11",
          ram: "4gb",
          rom: "64gb",
          camera: "50px",
          price: 10000,
        },
        redmi10: {
          name: "redmi10",
          ram: "4gb",
          rom: "64gb",
          camera: "50px",
          price: 10000,
        },
        redmi10pro: {
          name: "redmi10pro",
          ram: "4gb",
          rom: "64gb",
          camera: "50px",
          price: 10000,
        },
      },
      oppo: {
        a3s: {
          name: "a3s",
          ram: "4gb",
          rom: "64gb",
          camera: "50px",
          price: 10000,
        },
      },
    },
  };


// var inp1 = prompt ("enter your brand name :");
// var inp2 = prompt ("enter your model name :");

// var b  = a.mobiles[inp1];
// var c = b[inp2];


function searchMobile(){
  
var brand = document.getElementById("brand");
var model = document.getElementById("model");
    console.log(a.mobiles[brand.value][model.value]);
}


//count specific values in the array

var arr = [
    1, 0, 1, 0, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0,
    0, 0, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1,
    0, 0, 0, 1, 0, 1,
  ];
    var ones = arr.filter(a => {return a})
    console.log(ones.length)

