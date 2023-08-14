function attachEvents() {
  const loadButton = document.querySelector("#btnLoad");
  const createButton = document.querySelector("#btnCreate");
  const phoneBookList = document.querySelector("#phonebook");
  let phonebookData;

  loadButton.addEventListener("click", loadPhoneNumbers);
  createButton.addEventListener("click", createContact);

  async function loadPhoneNumbers() {
    const response = await fetch("http://localhost:3030/jsonstore/phonebook");
    phoneBookList.innerHTML = "";

    phonebookData = Object.values(await response.json());

    phonebookData.forEach((number) => {
      const newListItem = document.createElement("li");
      newListItem.textContent = `${number.person}: ${number.phone}`;

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.classList.add("deleteBtn");
      deleteButton.setAttribute("id", number._id);
      newListItem.appendChild(deleteButton);

      phoneBookList.appendChild(newListItem);

      const deleteButtons = document.querySelectorAll(".deleteBtn");
      deleteButtons.forEach((button) => {
        button.addEventListener("click", deleteContact);
      });
    });
  }

  async function createContact() {
    let person = document.querySelector("#person").value;
    let phone = document.querySelector("#phone").value;

    await fetch("http://localhost:3030/jsonstore/phonebook", {
      method: "POST",
      body: JSON.stringify({ person, phone }),
    });

    document.querySelector("#person").value = "";
    document.querySelector("#phone").value = "";
    loadPhoneNumbers();
  }

  async function deleteContact(e) {
    const currentId = e.currentTarget.getAttribute("id");

    await fetch(`http://localhost:3030/jsonstore/phonebook/${currentId}`, {
      method: "DELETE",
    });

    loadPhoneNumbers();
  }
}

attachEvents();
