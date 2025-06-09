function getAverageOfElementsAtProperty(obj, key) {
  // your code here
  let average = 0

  if (obj.hasOwnProperty(key) && Array.isArray(obj.key) && obj.key.length > 0) {
    for (let i = 0; i < obj.key.length; i++) {
      average += obj.key[i]
    }
  }
  else {
    return 0
  }

  return (average / obj.key.length )
}

let obj = {
  key: [1, 2, 3]
};
let output = getAverageOfElementsAtProperty(obj, 'key');
console.log(output); // --> 2  