function calculateVacationPrice(peopleCount, groupType, dayOfWeek)
{
    let basePrice = 0;
    let totalPrice = 0;

    if (groupType === "Students")
    {
        switch(dayOfWeek)
        {
            case "Friday":
                basePrice = 8.45;
            break;

            case "Saturday":
                basePrice = 9.80;
            break;

            case "Sunday":
                basePrice = 10.46;
            break;
        }

        totalPrice = peopleCount * basePrice;

        if (peopleCount >= 30) {

            totalPrice -= totalPrice * 0.15; 
        }
    }

    else if (groupType === "Business")
    {
        switch(dayOfWeek)
        {
            case "Friday":
                basePrice = 10.90;
            break;

            case "Saturday":
                basePrice = 15.60;
            break;

            case "Sunday":
                basePrice = 16;
            break;
        }

        if (peopleCount >= 100) {
            peopleCount -= 10;
        }

        totalPrice = peopleCount * basePrice;
    }

    else if (groupType === "Regular")
    {
        switch(dayOfWeek)
        {
            case "Friday":
                basePrice = 15;
            break;

            case "Saturday":
                basePrice = 20;
            break;

            case "Sunday":
                basePrice = 22.50;
            break;
        }

        totalPrice = peopleCount * basePrice;

        if (peopleCount >= 10 && peopleCount <= 20) {
            totalPrice -= totalPrice * 0.05;
        }
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);

}

solve(40,
    "Regular",
    "Saturday"
    );