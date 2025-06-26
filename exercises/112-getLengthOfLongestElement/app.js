function getLengthOfLongestElement(arr) {
    // Your code here
    let lenghtLongestElement = 0

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > lenghtLongestElement) {
            lenghtLongestElement = arr[i].length;
        }
    }

    return lenghtLongestElement
}

let output = getLengthOfLongestElement(['one', 'two', 'three']);
console.log(output); // --> 5
