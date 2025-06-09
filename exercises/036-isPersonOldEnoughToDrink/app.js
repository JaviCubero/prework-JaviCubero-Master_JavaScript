function isPersonOldEnoughToDrink(person) {
  // Add your code after this line
  if (person.age >= 21) {
    return true
  }
  else {
    return false
  }
}

let person = {
  age: 15
}

console.log(isPersonOldEnoughToDrink(person));