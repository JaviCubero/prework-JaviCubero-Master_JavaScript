function findMaxLengthOfThreeWords(word1, word2, word3) {
    // Write your function here
    return Math.max(word1.length, word2.length, word3.length)
}


let output = findMaxLengthOfThreeWords('a', 'be', 'see');
console.log(output); // --> 1