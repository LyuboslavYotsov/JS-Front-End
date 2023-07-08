function printLoadingBarStatus(number) {
    if (number < 0 || number > 100) {
        console.log("Invalid Number!")
        return;
    }

  const filledBars = number / 10;
  const emptyBars = 10 - filledBars;

  if (filledBars < 10) {
    console.log(
      `${number}% [${"%".repeat(filledBars)}${".".repeat(emptyBars)}]`
    );
    console.log("Still loading...");
  } else {
    console.log("100% Complete!");
    console.log(
        `${number}% [${"%".repeat(filledBars)}${".".repeat(emptyBars)}]`
      );
  }
}
printLoadingBarStatus(240);
