function solve() {
  
  const sentences = document.querySelector("#input").value.split(".").filter(s => s.length > 0);
  const outPut = document.querySelector("#output");

  console.log(sentences);

  while (sentences.length > 0) {
    const newPar = document.createElement("p");

    newPar.textContent = sentences.splice(0,3).join(".") + ".";

    outPut.appendChild(newPar);
  }
}