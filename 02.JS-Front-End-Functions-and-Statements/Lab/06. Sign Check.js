function checkPositivity(num1, num2, num3) {
  let negativesCount = 0;

  if (num1 < 0) {
    negativesCount++;
  }
  if (num2 < 0) {
    negativesCount++;
  }
  if (num3 < 0) {
    negativesCount++;
  }

  console.log(negativesCount % 2 != 0 ? "Negative" : "Positive");
}

checkPositivity(5, 12, -15);
checkPositivity(-6, -12, 14);
checkPositivity(-1, -2, -3);
