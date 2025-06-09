function isOldEnoughToVote(age) {
  // your code here
  if (age < 18
  ) {
    return false;
  }
  else {
    return true;
  }
}

let age = prompt("Introduzca su edad por favor:");

if (isOldEnoughToVote(age) == false) {
    console.log("NO tienes la edad suficiente para votar.");
} else {
    console.log("Eres lo suficientemente mayor para votar.");
}