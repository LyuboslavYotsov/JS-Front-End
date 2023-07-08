function splitWords(words) {
  const wordsArray = words.match(/[A-Z]{1}[a-z]*/g);

  console.log(wordsArray.join(", "));
}

splitWords("SplitMeIfYouCanHaHaYouCantOrYouCan");
splitWords("HoldTheDoor");
splitWords("ThisIsSoAnnoyingToDo");
