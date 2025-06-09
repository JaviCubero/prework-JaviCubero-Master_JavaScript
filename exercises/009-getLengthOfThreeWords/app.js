function getLengthOfThreeWords(word1, word2, word3) {
  // your code here
  let longitud1 = parseInt(word1.length)
  let longitud2 = parseInt(word2.length)
  let longitud3 = parseInt(word3.length)

  return longitud1 + longitud2 + longitud3;
}

let output = getLengthOfThreeWords('some', 'other', 'words');
console.log(output);
