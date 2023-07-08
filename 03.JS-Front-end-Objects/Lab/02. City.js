function printObjectProperties({ name, area, population, country, postcode }) {
  const city = {
    name,
    area,
    population,
    country,
    postcode,
  };

  for (const key in city) {
    console.log(`${key} -> ${city[key]}`)
  }
}

printObjectProperties({
  name: "Plovdiv",
  area: 389,
  population: 1162358,
  country: "Bulgaria",
  postCode: "4000",
});
