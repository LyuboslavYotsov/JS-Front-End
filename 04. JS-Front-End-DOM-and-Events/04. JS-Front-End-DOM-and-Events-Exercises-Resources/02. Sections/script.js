function create(words) {
   const contentBox = document.getElementById("content");

   words.forEach(word => {
      const newDiv = document.createElement("div");

      const newPar = document.createElement("p");
      newPar.textContent = word;
      newPar.style.display = "none";

      newDiv.appendChild(newPar);

      contentBox.appendChild(newDiv);
   });

   const sections = Array.from(document.querySelectorAll("#content div "));

   for (const section of sections) {
      section.addEventListener("click", (e) => {
         const targetDiv = e.target;

         targetDiv.children[0].style.display = "block";
      })
   }
}