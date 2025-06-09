function isOldEnoughToDrinkAndDrive(age) {
  // your code here
  if (age >= 0) {
    return false;
  }
  else {
    return true;
  }
}

let age = prompt("Introduzca su edad por favor:");

if (isOldEnoughToDrinkAndDrive(age) == false) {
    console.log("Es ilegal beber y conducir a cualquier edad.");
}
