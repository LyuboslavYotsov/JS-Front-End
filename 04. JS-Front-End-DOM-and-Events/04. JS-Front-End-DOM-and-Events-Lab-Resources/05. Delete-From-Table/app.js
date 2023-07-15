function deleteByEmail() {
    const targetEmail = document.getElementsByName("email")[0].value;

    const emailColumn = document.querySelectorAll("#customers tr td:nth-child(2)");

    const resultElement = document.querySelector("#result");

    for (const element of emailColumn) {
        if (element.textContent === targetEmail) {
            element.parentElement.remove(element);

            resultElement.textContent = "Deleted."
            continue;
        } else {
            resultElement.textContent = "Not found."
        }
    }
}