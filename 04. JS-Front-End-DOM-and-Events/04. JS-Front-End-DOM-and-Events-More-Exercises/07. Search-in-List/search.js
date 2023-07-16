function search() {
   
   const searchText = document.querySelector("#searchText").value;
   const rows = Array.from(document.querySelectorAll("#towns li"));
   let matches = 0;

   rows.forEach(row => {
         row.style.textDecoration = "none";
         row.style.fontWeight = "normal";
      if (row.textContent.includes(searchText)) {
         matches++;
         row.style.textDecoration = "underline";
         row.style.fontWeight = "bold";
      }
   });

   document.querySelector("#result").textContent = `${matches} matches found`;
}
