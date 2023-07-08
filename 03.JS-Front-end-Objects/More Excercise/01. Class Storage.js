class Storage {
  constructor(capacity) {
    this.capacity = capacity;
    this.storage = [];
  }

  get totalCost() {
    return this.storage.reduce((acc, curr) => {
      return acc + Number(curr.price) * Number(curr.quantity);
    }, 0);
  }

  addProduct(product) {
    this.storage.push(product);
    this.capacity -= product.quantity;
    return;
  }

  getProducts() {
    let outPut = []
    this.storage.forEach((product) => {
      outPut.push(JSON.stringify(product));
    });

    return outPut.join("\n");
  }
}

let productOne = { name: "Cucamber", price: 1.5, quantity: 15 };
let productTwo = { name: "Tomato", price: 0.9, quantity: 25 };
let productThree = { name: "Bread", price: 1.1, quantity: 8 };
let storage = new Storage(50);
storage.addProduct(productOne);
storage.addProduct(productTwo);
storage.addProduct(productThree);
console.log(storage.getProducts());
console.log(storage.capacity);
console.log(storage.totalCost);
