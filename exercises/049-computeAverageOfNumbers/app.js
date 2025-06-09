function computeAverageOfNumbers(params) {
    let suma = 0

    for (let i = 0; i < params.length; i++) {
        suma += params[i]
    }

    if (params.length == 0) {
        return 0
    }

    return suma/params.length
}

let input = [1, 2, 3, 4, 5];
let output = computeAverageOfNumbers(input);
console.log(output); // --> 3