function printTownsList(input) {
  const towns = [];

  for (const string of input) {
    [town, lattitude, longitude] = string.split(" | ");
    const city = {
      town,
      latitude: Number(lattitude).toFixed(2),
      longitude: Number(longitude).toFixed(2),
    };

    towns.push(city);
  }

  for (const town of towns) {
    console.log(town);
  }

  
}

printTownsList([
  "Sofia | 42.696552 | 23.32601",
  "Beijing | 39.913818 | 116.363625",
]);
