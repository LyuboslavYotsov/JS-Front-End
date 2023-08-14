async function getInfo() {
  const bustStopInput = document.querySelector("#stopId").value;
  const busStopName = document.querySelector("#stopName");
  busStopName.textContent = "";
  const busesList = document.querySelector("#buses");
  busesList.innerHTML = "";

  try {
    const response = await fetch(
      `http://localhost:3030/jsonstore/bus/businfo/${bustStopInput}`
    );
    const data = await response.json();
    const stationName = data.name;
    const busesForStation = data.buses;
    busStopName.textContent = stationName;

    const busesInfo = Object.entries(busesForStation);
    busesInfo.forEach((bus) => {
      const listItem = document.createElement("li");

      listItem.textContent = `Bus ${bus[0]} arrives in ${bus[1]} minutes`;
      busesList.appendChild(listItem);
    });
  } catch (error) {
    busStopName.textContent = "Error";
  }
}
