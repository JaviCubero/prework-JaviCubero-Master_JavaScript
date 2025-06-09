function addFullNameProperty(obj) {
  // Add your code after this line 
  //obj[key] = (obj[Object.keys(obj)[0]] + ' ' + obj[Object.keys(obj)[1]])

  obj.fullName = obj.firstName + ' ' + obj.lastName

  return obj
}

let person = {
  firstName: 'Javier',
  lastName: 'Cubero'
}

console.log(addFullNameProperty(person));