function getAllElementsButNth(array, n) {
    // your code here
    let itemToDelete = array.splice(n, 1)

    const resultado = array.filter(pos => pos != itemToDelete);
    
    return resultado
}

let output = getAllElementsButNth(['a', 'b', 'c'], 1);
console.log(output); // --> ['a', 'c']
