function printSortedCatalogue(input) {
  const catalogue = input.reduce((acc, curr) => {
    const [productName, productPrice] = curr.split(" : ");
    acc[productName] = productPrice;
    return acc;
  }, {});

  const sortedCatalogue = Object.keys(catalogue).sort((a, b) =>
    a.localeCompare(b)
  );

  let letter = sortedCatalogue[0][0];
  sortedCatalogue.forEach((product, i) => {
    if (i === 0) {
      console.log(letter);
    }

    if (product[0][0] !== letter) {
      letter = product[0][0];
      console.log(letter);
    }

    console.log(`  ${product}: ${catalogue[product]}`);
  });
}

printSortedCatalogue([
  "Appricot : 20.4",
  "Fridge : 1500",
  "TV : 1499",
  "Deodorant : 10",
  "Boiler : 300",
  "Apple : 1.25",
  "Anti-Bug Spray : 15",
  "T-Shirt : 10",
]);

printSortedCatalogue(["Omlet : 5.4", "Shirt : 15", "Cake : 59"]);
