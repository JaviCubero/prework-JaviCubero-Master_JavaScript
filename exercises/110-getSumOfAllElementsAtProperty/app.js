function getSumOfAllElementsAtProperty(obj, key) {
    // your code here
    let sum = 0
    if (obj.hasOwnProperty(key) && Array.isArray(obj.key) && obj.key.length > 0) {
        for (let i = 0; i < obj.key.length; i++) {
            sum += obj.key[i]
        }
    }
    else {
        return 0
    }

    return sum
}

let obj = {
    key: [4, 1, 8]
};
let output = getSumOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 13
