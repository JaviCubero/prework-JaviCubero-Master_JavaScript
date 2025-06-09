function filterOddLengthWords(words) {
    // your code here
    let newArray = words.filter(pos => pos.length % 2 !== 0);

    return newArray
}

let output = filterOddLengthWords(['there', 'it', 'is', 'now']);
console.log(output); // --> ['there', 'now']
