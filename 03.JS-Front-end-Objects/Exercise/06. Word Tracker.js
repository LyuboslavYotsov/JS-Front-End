function findWordOccurences(input) {
  const wordsObjects = [];
  [targetWords, ...searchField] = input;

  for (const word of targetWords.split(" ")) {
    const wordObj = {};
    wordObj.name = word;
    wordObj.occurences = 0;

    for (const wordInfSearchField of searchField) {
      if (wordInfSearchField === word) {
        wordObj.occurences++;
      }
    }
    wordsObjects.push(wordObj);
  }

  const sortedWordsByOccurences = wordsObjects.sort(
    (a, b) => b.occurences - a.occurences
  );

  for (const word of sortedWordsByOccurences) {
    console.log(`${word.name} - ${word.occurences}`);
  }
}

findWordOccurences([
  "this sentence",
  "In",
  "this",
  "sentence",
  "you",
  "have",
  "to",
  "count",
  "the",
  "occurrences",
  "of",
  "the",
  "words",
  "this",
  "and",
  "sentence",
  "because",
  "this",
  "is",
  "your",
  "task",
]);

findWordOccurences([
  "is the",
  "first",
  "sentence",
  "Here",
  "is",
  "another",
  "the",
  "And",
  "finally",
  "the",
  "the",
  "sentence",
]);
