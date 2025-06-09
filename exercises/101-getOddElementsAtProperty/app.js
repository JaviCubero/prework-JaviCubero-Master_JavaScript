function getOddElementsAtProperty(obj, key) {
    if (obj.hasOwnProperty(key) && Array.isArray(obj.key)) {    
        const newKey = obj.key.filter(item => item % 2 !== 0)

        return newKey
    }
    else {
        return []
    }
}

let obj = {
  key: [1, 2, 3, 4, 5]
};
let output = getOddElementsAtProperty(obj, 'key');
console.log(output); // --> [1, 3, 5]
