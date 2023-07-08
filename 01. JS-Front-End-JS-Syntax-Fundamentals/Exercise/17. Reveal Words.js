function replaceString(wordsString, text) {
  let words = wordsString.split(", ");

  for (const word of words) {
    let censored = "*".repeat(word.length);
    text = text.replace(censored, word);
  }

  console.log(text);
}

replaceString(
  "great, learning",
  "softuni is ***** place for ******** new programming languages"
);
