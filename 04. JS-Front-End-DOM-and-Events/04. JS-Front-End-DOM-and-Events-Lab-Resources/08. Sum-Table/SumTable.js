function sumTable() {
  const tablePricesArray = Array.from(
    document.querySelectorAll("table td:nth-child(even)")
  );

  tablePricesArray.pop();

  const sum = tablePricesArray.reduce((acc, curr) => {
    return Number(acc) + Number(curr.textContent);
  }, 0);

  document.querySelector("#sum").textContent = sum;
}
