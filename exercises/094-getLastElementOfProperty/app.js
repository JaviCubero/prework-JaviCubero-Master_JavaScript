function  getLastElementOfProperty(obj, key) {
    if (obj.hasOwnProperty(key)) {
        console.log(obj.key.length);
        
        return obj.key[obj.key.length-1]
    }  
    else {
    
    }
}

let obj = {
  key: [1, 2, 5]
};
let output = getLastElementOfProperty(obj, 'key');
console.log(output); // --> 5