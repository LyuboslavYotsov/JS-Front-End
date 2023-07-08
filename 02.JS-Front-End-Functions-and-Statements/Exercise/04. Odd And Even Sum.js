function printOddAndEvenSum(number) {
  let numbersString = number.toString();
  let evenSum = 0;
  let oddSum = 0;

  for (const number of numbersString) {
    if (Number(number) % 2 === 0) {
      evenSum += Number(number);
    } else {
        oddSum += Number(number);
    }
  }

  console.log(` Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

printOddAndEvenSum(3495892137259234);
