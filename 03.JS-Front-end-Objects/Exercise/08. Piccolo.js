function printParkingStatus(input) {
  const parkingLot = new Set();

  for (const pair of input) {
    const [command, number] = pair.split(", ");

    if (command === "IN") {
      parkingLot.add(number);
    } else if (command === "OUT") {
      parkingLot.delete(number);
    }
  }

  const sortedParking = Array.from(parkingLot).sort();

  console.log(sortedParking.join("\n"));
}

printParkingStatus([
  "IN, CA2844AA",
  "IN, CA1234TA",
  "OUT, CA2844AA",
  "IN, CA9999TT",
  "IN, CA2866HI",
  "OUT, CA1234TA",
  "IN, CA2844AA",
  "OUT, CA2866HI",
  "IN, CA9876HH",
  "IN, CA2822UU",
]);
