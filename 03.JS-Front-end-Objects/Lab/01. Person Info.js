function createPersonObject(firstName, lastName, age) {
  const person = {
    firstName,
    lastName,
    age,
  };

  return person;
}

console.log(createPersonObject("Peter", "Pan", "20"));
