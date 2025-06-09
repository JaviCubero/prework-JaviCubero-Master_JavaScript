function keep(array, n) {
    let newArray = array.filter(pos => pos === n);

    return newArray
}

let output = keep([1, 2, 3, 2, 1], 2) 
console.log(output); // --> [2, 2]