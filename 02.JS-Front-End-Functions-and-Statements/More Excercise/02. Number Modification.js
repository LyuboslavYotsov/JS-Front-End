function modifyNumber(number) {
    
    let numberString = number.toString();

    function checkAverage() {
        let sum = 0;

        for (const num of numberString) {
            sum += Number(num);
        }

        let average = sum / numberString.length;

        return average;
    }

    if (checkAverage() > 5){
        console.log(number);
        return;
    }

    while(checkAverage() <= 5){
        numberString += '9';
    }

    console.log(Number(numberString));
}

modifyNumber(5835);
modifyNumber(101);