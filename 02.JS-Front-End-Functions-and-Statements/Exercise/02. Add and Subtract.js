function calculateResult(num1, num2, num3) {
  function sum(num1, num2) {
    return num1 + num2;
  }

  function subtract(num1, num2) {
    return num1 - num2;
  }
  let firstSum = sum(num1, num2);
  let result = subtract(firstSum, num3);

  console.log(result);
}

calculateResult(23, 6, 10);
calculateResult(1, 17, 30);
calculateResult(42, 58, 100);
