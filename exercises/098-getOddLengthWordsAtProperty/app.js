function getOddLengthWordsAtProperty(obj, key) {
    if (obj.hasOwnProperty(key) && Array.isArray(obj.key)) {    
        const newKey = obj.key.filter(item => item.length % 2 !== 0)

        return newKey
    }
    else {
        return []
    }
}

let obj = {
  key: ['It', 'has', 'some', 'words']
};
let output = getOddLengthWordsAtProperty(obj, 'key');
console.log(output); // --> ['has', 'words']