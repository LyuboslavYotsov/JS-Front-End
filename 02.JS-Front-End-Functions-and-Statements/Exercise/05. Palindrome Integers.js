function checkForPalindrome(numbers) {
  for (const number of numbers) {
    let numberToString = number.toString();

    let firstHalf = numberToString.substring(
      0,
      numberToString.length / 2 + (numberToString.length % 2)
    );
    let secondHalf = numberToString.substring(
      numberToString.length / 2,
      numberToString.length + 1
    );

    let array = secondHalf.split("").reverse();

    secondHalf = array.join("");

    console.log(secondHalf === firstHalf);
  }
}

checkForPalindrome([123321]);
