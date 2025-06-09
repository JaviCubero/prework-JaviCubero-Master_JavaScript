function getLongestOfThreeWords(word1, word2, word3) {
    // your code here
    let longestWord = word1

    if (word2.length > word1.length) {
        longestWord = word2
        
        if (word3.length > word2.length) {
            longestWord = word3
            return longestWord
        }
        else {
            return longestWord
        }
    }
    else {
        if (word3.length > word1.length) {
            longestWord = word3
            return longestWord
        }
        else {
            return longestWord
        }
    }
}

let output = getLongestOfThreeWords('these', 'three', 'words');
console.log(output); // --> 'these'
