function solve() {
  const text = document.querySelector("#text").value;
  const convention = document.querySelector("#naming-convention").value;
  const resultBox = document.querySelector("#result");

  const words = text.split(" ").map((word) => {
    return word.toLowerCase();
  });

  console.log(words);

  if (convention !== "Pascal Case" && convention !== "Camel Case") {
    resultBox.textContent = "Error!";
  } else if (convention === "Pascal Case") {
    let result = "";

    words.forEach((word) => {
      const wordArr = Array.from(word);
      wordArr[0] = wordArr[0].toUpperCase();
      result += wordArr.join("");
    });

    resultBox.textContent = result;
  } else if (convention === "Camel Case") {
    let result = "";

    words.forEach((word, i) => {
      const wordArr = Array.from(word);
      if (i > 0) {
        wordArr[0] = wordArr[0].toUpperCase();
      }
      result += wordArr.join("");
    });

    resultBox.textContent = result;
  }
}
