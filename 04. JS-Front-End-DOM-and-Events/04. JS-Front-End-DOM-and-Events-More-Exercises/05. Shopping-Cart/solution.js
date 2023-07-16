function solve() {
  const cart = [];

  const productButtons = Array.from(document.querySelectorAll(".add-product"));
  const resultBox = document.querySelector("textarea");
  const checkOutButton = document.querySelector(".checkout");

  productButtons.forEach((button) => {
    button.addEventListener("click", addProduct);
  });

  checkOutButton.addEventListener("click", buyProducts);

  function addProduct(event) {
    const productBox = event.target.parentElement.parentElement;

    const productName = productBox.querySelector(".product-title").textContent;
    const price = productBox.querySelector(".product-line-price").textContent;

    const product = { productName, price };
    cart.push(product);
    resultBox.value += `Added ${productName} for ${price} to the cart.\n`;
  }

  function buyProducts() {
    const buyResult = cart.reduce(
      (acc, curr) => {
        acc.productNames.add(curr.productName);
        acc.totalPrice += Number(curr.price);

        return acc;
      },
      {
        productNames: new Set(),
        totalPrice: 0,
      }
    );
    resultBox.value += `You bought ${Array.from(buyResult.productNames).join(
      ", "
    )} for ${buyResult.totalPrice.toFixed(2)}.`;

    const allButtons = Array.from(document.querySelectorAll("button"));

    allButtons.forEach((button) => {
      button.setAttribute("disabled", "");
    });
  }
}
