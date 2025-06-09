function removeProperty(obj, key) {
  // your code here
  delete obj[key]

  return obj
}

let obj = {
  name: 'Sam',
  age: 20
}

console.log(obj);

console.log(removeProperty(obj, 'age'));
