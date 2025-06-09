function filterEvenLengthWords(words) {
    // your code here
    let newArray = words.filter(pos => pos.length % 2 === 0);

    return newArray
}

let output = filterEvenLengthWords(['word', 'horse', 'car', 'computer']);
console.log(output); // --> ['word', 'word']