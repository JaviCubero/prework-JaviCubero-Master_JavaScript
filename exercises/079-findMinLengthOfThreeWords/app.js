function findMinLengthOfThreeWords(word1, word2, word3) {
    // Write your function here
    return Math.min(word1.length, word2.length, word3.length)
}


let output = findMinLengthOfThreeWords('a', 'be', 'see');
console.log(output); // --> 1