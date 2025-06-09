let obj = {
    a: 8,
    b: 2,
    c: 'montana'
}

function removeNumbersLargerThan(num, obj) {
    // your code here
    for (const key in obj) {
        if (JSON.stringify(obj[key]) > num) {
            delete obj[key]
        }
    }

    return obj
}

console.log(removeNumbersLargerThan(1, obj));