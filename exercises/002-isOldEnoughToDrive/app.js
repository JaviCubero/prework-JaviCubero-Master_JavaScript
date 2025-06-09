function isOldEnoughToDrive(age) {
  // your code here
  if (age < 16) {
    return false;
  }
  else {
    return true;
  }
}

let age = prompt("Introduzca su edad por favor:");

if (isOldEnoughToDrive(age) == false) {
    console.log("NO tienes la edad suficiente para conducir.");
} else {
    console.log("Eres lo suficientemente mayor para conducir.");
}