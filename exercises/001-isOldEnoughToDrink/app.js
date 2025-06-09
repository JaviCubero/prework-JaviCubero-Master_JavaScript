function isOldEnoughToDrink(age) {
    // your code here
    if (age < 21) {
        return false;
    }
    else {
        return true;
    }
}

let age = prompt("Introduzca su edad por favor:");

if (isOldEnoughToDrink(age) == false) {
    console.log("NO tienes la edad suficiente para beber.");
} else {
    console.log("Eres lo suficientemente mayor para beber.");
}