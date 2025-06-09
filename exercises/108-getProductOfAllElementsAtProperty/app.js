function getProductOfAllElementsAtProperty(obj, key) {
  // your code here
  let average = 1
  if (obj.hasOwnProperty(key) && Array.isArray(obj.key) && obj.key.length > 0) {
    for (let i = 0; i < obj.key.length; i++) {
      average = average * obj.key[i]
    }
  }
  else {
    return 0
  }

  return average
}

let obj = {
  key: [1, 2, 3, 4]
};
let output = getProductOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 24
