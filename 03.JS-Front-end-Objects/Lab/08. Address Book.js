function printAdressBook(input) {
  const adressBook = {};

  for (const pair of input) {
    [name, adress] = pair.split(":");

    adressBook[name] = adress;
  }

  const entries = Object.entries(adressBook).sort((a,b) => a[0].localeCompare(b[0]));



  for (const pair of entries) {
    console.log(`${pair[0]} -> ${pair[1]}`);
  }
}

printAdressBook([
  "Tim:Doe Crossing",
  "Bill:Nelson Place",
  "Peter:Carlyle Ave",
  "Bill:Ornery Rd",
]);
