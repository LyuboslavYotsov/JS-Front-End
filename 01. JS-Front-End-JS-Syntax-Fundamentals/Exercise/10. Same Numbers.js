function verifyNumber(number) {
    let numberArr = number.toString().split("");

    let sum = 0;
    for (const num of numberArr) {
        sum += Number(num);
    }

    let isNumberValid = true;
    let baseNumber = numberArr[0];
    
    for (const num of numberArr) {
        if(num != baseNumber)
        {
            isNumberValid = false;
            break;
        }
    }

    console.log(isNumberValid);
    console.log(sum);
}

verifyNumber(2122);