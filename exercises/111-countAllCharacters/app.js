// Write your function here
function countAllCharacters(str) {
    let resultado = {}

    for (i = 0; i < str.length; i++) {
        if (resultado.hasOwnProperty(str[i])) {
            resultado[str[i]] += 1;
        }
        else {
            resultado[str[i]] = 1;
        }
    }

    return resultado
}


let output = countAllCharacters('banana');
console.log(output); // --> {b: 1, a: 3, n: 2}