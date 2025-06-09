function getEvenElementsAtProperty(obj, key) {
    // your code here
    if (obj.hasOwnProperty(key) && Array.isArray(obj.key)) {    
        const newKey = obj.key.filter(item => item % 2 === 0)

        return newKey
    }
    else {
        return []
    }
}

let obj = {
  key: [1000, 11, 50, 17]
};
let output = getEvenElementsAtProperty(obj, 'key');
console.log(output); // --> [1000, 50]
