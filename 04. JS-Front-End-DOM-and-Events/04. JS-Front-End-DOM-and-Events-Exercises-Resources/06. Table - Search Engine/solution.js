function solve() {
  document.querySelector("#searchBtn").addEventListener("click", onClick);

  function onClick() {
    const rows = Array.from(document.querySelectorAll("tbody tr"));
    const inputField = document.querySelector("#searchField");
    const target = inputField.value;

    rows.forEach(row => {
      row.classList.remove("select");
    });

    rows.forEach((row) => {
      const cols = Array.from(row.querySelectorAll("td"));

      cols.forEach(col => {
         if (col.textContent.includes(target)) {
            row.classList.add("select");
         }
      });
    });

    inputField.value = "";
  }
}
