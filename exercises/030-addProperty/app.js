function addProperty(obj, key) {
  // your code here
  obj[key] = true

  return obj
}

let car = {
  model: 'Toyota'
}

console.log(addProperty(car, 'color'));