function sortNames(names) {
    
    names.sort((a, b) => a.localeCompare(b));
    let counter = 0;

    for (const name of names) {
        console.log(`${++counter}.${name}`);
    }
}


sortNames(["john",
"bob",
"Christina",
"Ema"]
);