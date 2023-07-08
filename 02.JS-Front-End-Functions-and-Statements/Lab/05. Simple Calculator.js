function calculateResult(num1, num2, operator) {
  const calculator = {
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b,
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
  };

  console.log(calculator[operator](num1, num2));
}

calculateResult(5, 5, "multiply");
calculateResult(40, 8, "divide");
calculateResult(12, 19, "add");
