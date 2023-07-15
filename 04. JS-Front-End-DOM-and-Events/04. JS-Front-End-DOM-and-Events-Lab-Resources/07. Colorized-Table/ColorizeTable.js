function colorize() {
    const evenRows = Array.from(document.querySelectorAll("table tr:nth-child(even)"));

    for (const row of evenRows) {
       row.style.background = "teal";
    }
}