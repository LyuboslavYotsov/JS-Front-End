function printFlightsStatus(input) {
  const [initialFlights, statusChanges, targetedStatus] = input;
  class FLight {
    constructor(flightNumber, destination) {
      (this.flightNumber = flightNumber),
        (this.destination = destination),
        (this.status = "Ready to fly");
    }
    changeStatus(status) {
      this.status = status;
    }
  }

  const flights = [];

  for (const pair of initialFlights) {
    [flightNumber, ...destination] = pair.split(" ");
    destination = destination.join(" ");

    const newFlight = new FLight(flightNumber, destination);
    flights.push(newFlight);
  }

  for (const pair of statusChanges) {
    const [flightNumber, newStatus] = pair.split(" ");

    const targerFlight = flights.find((f) => f.flightNumber === flightNumber);

    if (targerFlight) {
      targerFlight.changeStatus(newStatus);
    }
  }

  const flightsWithGivenStatus = flights.filter(
    (flight) => flight.status === targetedStatus.toString()
  );

  for (const flight of flightsWithGivenStatus) {
    console.log(
      `{ Destination: '${flight.destination}', Status: '${flight.status}' }`
    );
  }
}

printFlightsStatus([
  [
    "WN269 Delaware",
    "FL2269 Oregon",
    "WN498 Las Vegas",
    "WN3145 Ohio",
    "WN612 Alabama",
    "WN4010 New York",
    "WN1173 California",
    "DL2120 Texas",
    "KL5744 Illinois",
    "WN678 Pennsylvania",
  ],
  [
    "DL2120 Cancelled",
    "WN612 Cancelled",
    "WN1173 Cancelled",
    "SK430 Cancelled",
  ],
  ["Cancelled"],
]);

printFlightsStatus([
  [
    "WN269 Delaware",
    "FL2269 Oregon",
    "WN498 Las Vegas",
    "WN3145 Ohio",
    "WN612 Alabama",
    "WN4010 New York",
    "WN1173 California",
    "DL2120 Texas",
    "KL5744 Illinois",
    "WN678 Pennsylvania",
  ],
  [
    "DL2120 Cancelled",
    "WN612 Cancelled",
    "WN1173 Cancelled",
    "SK330 Cancelled",
  ],
  ["Ready to fly"],
]);
