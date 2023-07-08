function convertToJSON(name, lastName, hairColor) {
  const person = {
    name,
    lastName,
    hairColor,
  };

  const personToString = JSON.stringify(person);

  console.log(personToString);
}

convertToJSON("George", "Jones", "Brown");
convertToJSON("Peter", "Smith", "Blond");
