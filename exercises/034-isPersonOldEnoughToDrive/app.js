function isPersonOldEnoughToDrive(person) {
  // Add your code after this line
  if (person.age >= 16) {
    return true
  }
  else {
    return false
  }
}

let person = {
  age: 15
}

console.log(isPersonOldEnoughToDrive(person));