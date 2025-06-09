function isSameLength (word1, word2) {
    if (parseInt(word1.length) == parseInt(word2.length)) {
        return true;
    }
    else {
        return false;
    }
}

console.log(isSameLength('words', 'super'));