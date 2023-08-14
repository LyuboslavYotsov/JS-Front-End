function solve() {
    const departButton = document.querySelector("#depart");
    const arriveButton = document.querySelector("#arrive");
    const infoBox = document.querySelector(".info");
    let nextStopId = "depot";
    let currentStopId = "";

    async function depart() {
        
        try {
            const response = await fetch(`http://localhost:3030/jsonstore/bus/schedule/${nextStopId}`);
    
            const data = await response.json();
    
            infoBox.textContent = `Next stop ${data.name}`;
            departButton.disabled = true;
            arriveButton.disabled = false;
            currentStopId = data.name;
            nextStopId = data.next;
        } catch (error) {
            infoBox.textContent = "Error";
            departButton.disabled = true;
            arriveButton.disabled = true;
        }
    }

    async function arrive() {
        try {
            infoBox.textContent = `Arriving at ${currentStopId}`;
            departButton.disabled = false;
            arriveButton.disabled = true;
        } catch (error) {
            infoBox.textContent = "Error";
            departButton.disabled = true;
            arriveButton.disabled = true;
        }
    }

    return {
        depart,
        arrive
    };
}

let result = solve();