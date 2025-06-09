function checkAge (name, age) {
  // your code here

  if (age < 21) {
    return ("Go home, " + name + "!");
  }
  else {
    return ("Welcome, " + name + "!");
  }
}

let name, age;

console.log(checkAge("Adrián", 22));