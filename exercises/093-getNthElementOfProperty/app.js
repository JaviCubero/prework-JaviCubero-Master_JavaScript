function  getNthElementOfProperty(obj, key, n) {
    if (obj.hasOwnProperty(key)) {
    return obj.key[n]
  }  
  else {
    
  }
}

let obj = {
  key: [1, 2, 6]
};
let output = getNthElementOfProperty(obj, 'key', 1);
console.log(output); // --> 2