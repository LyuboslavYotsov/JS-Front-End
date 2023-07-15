function addItem() {
    const newText = document.getElementById("newItemText");
    const newValue = document.getElementById("newItemValue");

    const menuSection = document.getElementById("menu");
    const newOption = document.createElement("option");

    newOption.textContent = newText.value;
    newOption.value = newValue.value;

    menuSection.appendChild(newOption);

    newText.value = "";
    newValue.value = "";

}