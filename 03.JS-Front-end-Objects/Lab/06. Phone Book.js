function printPhoneBook(input) {
  const phoneBook = {};

  for (const string of input) {
    const pairs = string.split(" ");

    [name, phone] = pairs;

    phoneBook[name] = phone;
  }

  for (const key in phoneBook) {
    console.log(`${key} -> ${phoneBook[key]}`);
  }
}

printPhoneBook([
  "Tim 0834212554",
  "Peter 0877547887",
  "Bill 0896543112",
  "Tim 0876566344",
]);
