function isPersonOldEnoughToVote(person) {
  // Add your code after this line
  if (person.age >= 18) {
    return true
  }
  else {
    return false
  }
}

let person = {
  age: 15
}

console.log(isPersonOldEnoughToVote(person));