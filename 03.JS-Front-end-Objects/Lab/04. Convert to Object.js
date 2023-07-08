function converJSONToObj(JsonString) {
    const peson = JSON.parse(JsonString);

    for (const property in peson) {
        console.log(`${property}: ${peson[property]}`)
    }
}

converJSONToObj('{"name": "George", "age": 40, "town": "Sofia"}');