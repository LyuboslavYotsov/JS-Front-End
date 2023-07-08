function findSpecialWords(input) {
  const words = input.split(" ");

  for (const word of words) {
    let regEx = /^[#]+[a-zA-Z]+$/g;

    if (word.startsWith("#") && word.match(regEx)) {
      let resultWord = word.substring(1, word.length);
      console.log(resultWord);
    }
  }
}

findSpecialWords(
  "Nowadays everyone uses # to tag a #special word in #socialMedia"
);
findSpecialWords(
  "The symbol # is known #variously in English-speaking #regions as the #number sign"
);
