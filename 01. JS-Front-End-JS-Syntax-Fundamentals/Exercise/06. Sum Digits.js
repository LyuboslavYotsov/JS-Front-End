function sumDigits(number) {
    
    let numAsString = number.toString();
    let sum = 0;
    
    for (const number of numAsString) {
        
        sum += Number(number);
    }

    console.log(sum);
}

sumDigits(245678);
sumDigits(97561);
sumDigits(543);