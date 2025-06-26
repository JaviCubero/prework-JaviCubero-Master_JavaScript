function squareElements(arr) {
  // your code here
  let resultado = []

  for (let i = 0; i < arr.length; i++) {
    resultado.push(Math.pow(arr[i], 2));
  }

  return resultado
}

let output = squareElements([1, 2, 3]);
console.log(output); // --> [1, 4, 9]
