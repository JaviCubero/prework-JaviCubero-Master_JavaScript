let obj1 = {
    a: 1,
    b: 2
};
let obj2 = {
    b: 4,
    c: 3
};

function extend(objeto1, objeto2) {
    // your code here
    for (const key in objeto2) {
        if (objeto1.hasOwnProperty(key)) {
        } else {
            objeto1[key] = objeto2[key]
        }
    }

    return objeto1
}

console.log(extend(obj1, obj2));