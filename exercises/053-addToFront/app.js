function addToFront(arr, element) {
  // your code here
  let newArr = []
  newArr.push(element)

  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i])
  }

  return newArr
}

let output = addToFront([1, 2], 3);
console.log(output); // -> [3, 1, 2]
