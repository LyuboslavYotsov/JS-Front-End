function calculateFruitPrice(fruit, weightInGrams, pricePerKilogram) {
    
    let weightInKilograms = weightInGrams / 1000;
    let fruitTotalPrice = weightInKilograms * pricePerKilogram;

    console.log(`I need $${fruitTotalPrice.toFixed(2)} to buy ${weightInKilograms.toFixed(2)} kilograms ${fruit}.`);
}

calculateFruitPrice('orange', 2500, 1.80);
calculateFruitPrice('apple', 1563, 2.35);