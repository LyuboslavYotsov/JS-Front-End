function carWash(commands) {
  let cleanStatus = 0;

  for (const command of commands) {
    if (command === "soap") {
      cleanStatus += 10;
    } else if (command === "water") {
      cleanStatus += cleanStatus * 0.2;
    } else if (command === "vacuum cleaner") {
      cleanStatus += cleanStatus * 0.25;
    } else if (command === "mud") {
      cleanStatus -= cleanStatus * 0.1;
    }
  }

  console.log(`The car is ${cleanStatus.toFixed(2)}% clean.`);
}

carWash(["soap", "soap", "vacuum cleaner", "mud", "soap", "water"]);
carWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"]);
