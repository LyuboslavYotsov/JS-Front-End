function calculateRepairCosts(gamesLostCount, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let totalCost = 0;
    let shieldBrakeCount = 0;

    for (let i = 1; i <= gamesLostCount; i++) {
        
        let isHelmetBroken = false;
        let isSwordBroken = false;
        let isShieldBroken = false;

        if (i % 2 === 0){
            isHelmetBroken = true;
            totalCost += helmetPrice;
        }
        
        if (i % 3 === 0) {
            isSwordBroken = true;
            totalCost += swordPrice;
        }

        if (isHelmetBroken && isSwordBroken) {
            shieldBrakeCount++;
            totalCost += shieldPrice;
        }

        if (shieldBrakeCount % 2 === 0 && shieldBrakeCount !== 0) {
            totalCost += armorPrice;
            shieldBrakeCount = 0;
        }
    }

    console.log(`Gladiator expenses: ${totalCost.toFixed(2)} aureus`);
}

calculateRepairCosts(23,
    12.50,
    21.50,
    40,
    200
    );