function calculatePrice(product, quantity) {
  const productPrices = {
    coffee: 1.5,
    water: 1,
    coke: 1.4,
    snacks: 2,
  };

  const totalPrice = productPrices[product] * quantity;

  console.log(totalPrice.toFixed(2));
}

calculatePrice("water", 5);
calculatePrice("coffee", 2);
