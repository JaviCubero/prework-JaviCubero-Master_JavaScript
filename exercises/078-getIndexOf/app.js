function getIndexOf(caracter, string) {
    // Write your function here
    let charNotExists = 0
    
    for (let i = 0; i < string.length; i++) {
        if (string[i] === caracter) {
            return i
        }
        else {
            charNotExists = -1
        }
    }

    return charNotExists
}

let output = getIndexOf('r', 'I am a hacker');
console.log(output); // --> 2