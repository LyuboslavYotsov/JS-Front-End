function printStoreStock(currentStock, forDelivery) {
  const storeStock = {};
// InStock
  for (let i = 0; i < currentStock.length; i += 2) {

    const productName = currentStock[i];
    storeStock[productName] = Number(currentStock[i + 1]);
  }
// Delivery
  for (let i = 0; i < forDelivery.length; i += 2) {
    const productName = forDelivery[i];
    const productQuantity = Number(forDelivery[i + 1]);

    if (storeStock.hasOwnProperty(productName)) {
        storeStock[productName] += productQuantity;
    } else {
        storeStock[productName] = productQuantity;
    }
  }

  const pairs = Object.entries(storeStock);
  
  for (const pair of pairs) {
    [product, quantity] = pair;
    console.log(`${product} -> ${quantity}`);
  }
}

// printStoreStock(
//   ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
//   ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
// );
printStoreStock(
  ["Salt", "2", "Fanta", "4", "Apple", "14", "Water", "4", "Juice", "5"],
  ["Sugar", "44", "Oil", "12", "Apple", "7", "Tomatoes", "7", "Bananas", "30"]
);
