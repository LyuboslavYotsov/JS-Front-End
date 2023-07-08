function extractResources(yield) {
    let daysCount = 0;
    let totalYield = 0;

    while (yield >= 100) {
        daysCount++;
        totalYield += yield - 26;
        yield -= 10;

        if (yield < 100) {
            totalYield -= 26;
        }
    }

    console.log(daysCount);
    console.log(totalYield);
}

extractResources(450);