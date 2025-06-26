// Write your function here
function select(arr, obj) {
    let resultado = {}

    for (item of arr) {
        if (obj.hasOwnProperty(item)) {
            resultado[item] = obj[item];
        }
    }

    return resultado
}

let arr = ['a', 'c', 'e'];
let obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
};
let output = select(arr, obj);
console.log(output); // --> { a: 1, c: 3 }