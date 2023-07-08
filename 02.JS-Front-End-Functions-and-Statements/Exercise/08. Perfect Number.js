function checkNumber(number) {
    let delimeter = 1;
    const validDelimeters = [];

    while (delimeter < number) {
        if (number % delimeter === 0) {
            validDelimeters.push(delimeter);
        }
        delimeter++;
    }

    let sum = 0;
    for (const number of validDelimeters) {
        sum += number;
    }

    if (sum === number) {
        console.log("We have a perfect number! ");
    } else {
        console.log("It's not so perfect.")
    }
}

checkNumber(28);