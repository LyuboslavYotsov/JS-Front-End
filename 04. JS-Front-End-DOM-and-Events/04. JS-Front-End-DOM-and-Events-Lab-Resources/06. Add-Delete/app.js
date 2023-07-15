function addItem() {
  const value = document.querySelector("#newItemText").value;

  const newItem = document.createElement("li");
  newItem.textContent = value;

  const remove = document.createElement("a");
  const linkText = document.createTextNode("[Delete]");
  remove.appendChild(linkText);
  remove.href = "#";
  remove.addEventListener("click", deleteItem);

  newItem.textContent = value;
  newItem.appendChild(remove);

  const list = document.querySelector("#items");

  list.appendChild(newItem);


  function deleteItem()
  {
    newItem.remove();
  }
}
