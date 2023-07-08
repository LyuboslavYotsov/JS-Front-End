function printAndSumNumbers(startNum, endNum)
{
    let sum = 0;

    const numArray = [];

    for (let index = startNum; index <= endNum; index++) {
        sum += index;
        numArray.push(index);
    }

    console.log(numArray.join(" "));
    console.log(`Sum: ${sum}`);
}

printAndSumNumbers(5,10);
printAndSumNumbers(0,26);