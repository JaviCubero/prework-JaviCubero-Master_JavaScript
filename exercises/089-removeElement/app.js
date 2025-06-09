function removeElement(array, n) {
    let newArray = array.filter(pos => pos !== n);

    return newArray
}

let output = removeElement([1, 2, 3, 2, 1], 2);
console.log(output); // --> [1, 3, 1]