function addItem() {
    
    const value = document.querySelector("#newItemText").value;

    const newItem = document.createElement("li")
    newItem.textContent = value;
    const list = document.querySelector("#items");

    list.appendChild(newItem);
    
}