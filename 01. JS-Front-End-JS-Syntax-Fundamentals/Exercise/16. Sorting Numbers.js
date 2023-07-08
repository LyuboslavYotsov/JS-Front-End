function sortNumbers(numbers) {
  const sortedArr = numbers.sort((a, b) => a - b);

  const resultArr = [];

  const arrlength = numbers.length;

  for (let i = 0; i < arrlength; i++) {
    if (i % 2 === 0) {
        resultArr.push(sortedArr.shift());
    } else {
        resultArr.push(sortedArr.pop());
    }
  }

  return resultArr;
}

sortNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);
