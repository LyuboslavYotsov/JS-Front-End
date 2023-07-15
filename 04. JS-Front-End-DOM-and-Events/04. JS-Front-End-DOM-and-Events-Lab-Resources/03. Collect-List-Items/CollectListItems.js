function extractText() {
  const liElements = Array.from(document.querySelectorAll("ul li"));

  const text = liElements.map((el) => el.textContent).join("\n");
  
  
  document.querySelector("#result").textContent = text;
}
