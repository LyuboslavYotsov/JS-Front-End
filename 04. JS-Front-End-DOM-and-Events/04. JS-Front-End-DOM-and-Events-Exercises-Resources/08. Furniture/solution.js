function solve() {
  const generateButton = document.querySelector("button:nth-of-type(1)");

  generateButton.addEventListener("click", generateObject);

  function generateObject() {
    inputObjects = JSON.parse(
      document.querySelector("#exercise textarea").value
    );

    const tableBody = document.querySelector("tbody");

    inputObjects
      .map((furniture) => {
        const newRow = document.createElement("tr");

        const imgCell = document.createElement("td");
        const image = document.createElement("img");
        image.src = furniture.img;
        imgCell.appendChild(image);

        const nameCell = document.createElement("td");
        nameCell.textContent = furniture.name;

        const priceCell = document.createElement("td");
        priceCell.textContent = furniture.price;

        const decFactorCell = document.createElement("td");
        decFactorCell.textContent = furniture.decFactor;

        const checkBoxCell = document.createElement("td");
        const checkBox = document.createElement("input");
        checkBox.type = "checkbox";
        checkBoxCell.appendChild(checkBox);

        newRow.appendChild(imgCell);
        newRow.appendChild(nameCell);
        newRow.appendChild(priceCell);
        newRow.appendChild(decFactorCell);
        newRow.appendChild(checkBoxCell);

        return newRow;
      })
      .forEach((row) => {
        tableBody.appendChild(row);
      });
  }

  const buyButton = document.querySelector("button:nth-of-type(2)");

  buyButton.addEventListener("click", buyFurniture);

  function buyFurniture() {
    const checkedBoxes = Array.from(
      document.querySelectorAll('input[type="checkbox"]:checked')
    );

    const cart = checkedBoxes
      .map((checkedBox) => {
        const row = checkedBox.parentElement.parentElement;
        const name = row.querySelector("td:nth-of-type(2)").innerText;
        const price = row.querySelector("td:nth-of-type(3)").innerText;
        const decFactor = row.querySelector("td:nth-of-type(4)").innerText;

        return { name, price, decFactor };
      })
      .reduce(
        (acc, curr) => {
          acc.names.push(curr.name);
          acc.price += Number(curr.price);
          acc.totalDecFactor += Number(curr.decFactor);

          return acc;
        },
        {
          names: [],
          price: 0,
          totalDecFactor: 0,
        }
      );

    const cartTextArea = document.querySelector(
      "#exercise textarea:nth-of-type(2)"
    );
    const average = cart.totalDecFactor / checkedBoxes.length;

    cartTextArea.value = `Bought furniture: ${cart.names.join(", ")}${"\n"}Total price: ${cart.price.toFixed(2)}${"\n"}Average decoration factor: ${average}`.trim();
  }
}
