function joinThreeArrays(arr1, arr2, arr3) {
  // your code here
  
  let initialArray = arr1.concat(arr2)

  let finalArray = initialArray.concat(arr3)

  return finalArray
  
}

let output = joinThreeArrays([1, 2], [3, 4], [5, 6]);
console.log(output); // --> [1, 2, 3, 4, 5, 6]