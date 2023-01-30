let obj = [
  { id: 1, name: "abc", category: "A", city: "karachi" },
  { id: 2, name: "cfg", category: "Y", city: "nowshehra" },
  { id: 3, name: "TRE", category: "J", city: "hyderabad" },
  { id: 4, name: "kae", category: "P", city: "sukkhur" },
  { id: 5, name: "jsa", category: "Q", city: "islamabad" },
];

// var get_key  = document.getElementById("tdd");
// let gt_k = Object.keys(obj);

// for (var i = 0 ; i < obj.length; i++){
//     let keys_fetched = obj[i];
//     let gt_v = Object.values(keys_fetched);
//  get_key.insertRow(gt_v[0])

// }

let labels = Object.keys(obj[0]);
let a = document.getElementById("header");
let b = document.getElementById("body");

for (let i = 0; i < labels.length; i++) {
  a.innerHTML += `<td>${labels[i]}</td>`;
}
for (i = 0; i < obj.length; i++) {
  let x = obj[i];
  b.innerHTML += `<tr>
    <td>
    ${x.id}
    </td>
    <td>
    ${x.name}
    </td>
    <td>
    ${x.category}
    </td>
    <td>
    ${x.city}
    </td>
    </tr> `;
}
