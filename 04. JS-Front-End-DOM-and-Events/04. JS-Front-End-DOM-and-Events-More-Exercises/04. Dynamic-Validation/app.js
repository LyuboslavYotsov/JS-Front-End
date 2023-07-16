function validate() {
    const emailInput = document.getElementById("email");

    emailInput.addEventListener("change", validate);

    function validate(e) {
        e.target.classList.remove("error");
        const value = e.target.value;

        const match = value.match(/[a-z]+@[a-z]+\.[a-z]+/gm);

        if (match === null || match.toString().length !== value.length) {
            e.target.classList.add("error");
        }
    }
}