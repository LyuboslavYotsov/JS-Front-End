function attachEvents() {
  const loadBooksButton = document.querySelector("#loadBooks");
  const submitButton = document.querySelector("#form button");
  let booksData;

  loadBooksButton.addEventListener("click", loadBooks);
  submitButton.addEventListener("click", createBook);

  async function loadBooks() {
    const response = await fetch(
      "http://localhost:3030/jsonstore/collections/books"
    );
    booksData = await response.json();

    const booksTable = document.querySelector("table tbody");
    booksTable.innerHTML = "";

    Object.entries(booksData).forEach(([bookId, book]) => {
      const newRow = document.createElement("tr");

      const authorCol = document.createElement("td");
      authorCol.textContent = book.author;

      const titleCol = document.createElement("td");
      titleCol.textContent = book.title;

      const buttonsCol = document.createElement("td");
      const editButton = document.createElement("button");
      editButton.textContent = "Edit";
      editButton.setAttribute("bookID", bookId);
      editButton.addEventListener("click", editBook);

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.setAttribute("bookID", bookId);
      deleteButton.addEventListener("click", deleteBook);

      buttonsCol.appendChild(editButton);
      buttonsCol.appendChild(deleteButton);

      newRow.appendChild(titleCol);
      newRow.appendChild(authorCol);
      newRow.appendChild(buttonsCol);

      booksTable.appendChild(newRow);
    });
  }

  async function createBook() {
    const title = document.querySelector('input[name="title"]').value;
    const author = document.querySelector('input[name="author"]').value;

    if (!title || !author) {
      console.log("Form fields cannot be empty!");
      return;
    }

    document.querySelector('input[name="title"]').value = "";
    document.querySelector('input[name="author"]').value = "";

    await fetch("http://localhost:3030/jsonstore/collections/books", {
      method: "POST",
      body: JSON.stringify({ author, title }),
    });

    loadBooks();
  }

  async function deleteBook(e) {
    const currentBookID = e.currentTarget.getAttribute("bookID");

    await fetch(
      `http://localhost:3030/jsonstore/collections/books/${currentBookID}`,
      {
        method: "DELETE",
      }
    );
    loadBooks();
  }

  async function editBook(e) {
    const currentBookID = e.currentTarget.getAttribute("bookID");

    document.querySelector("#form h3").textContent = "Edit FORM";
    document.querySelector("#form button").style.display = "none";
    const saveButton = document.createElement("button");
    saveButton.textContent = "Save";
    saveButton.addEventListener("click", saveBook);
    document.querySelector("#form").appendChild(saveButton);

    const books = Object.entries(booksData);
    const currentBook = books.find(([id, book]) => id === currentBookID);

    document.querySelector("#form input[name ='title']").value =
      currentBook[1].title;
    document.querySelector("#form input[name ='author']").value =
      currentBook[1].author;

    async function saveBook() {
      const author = document.querySelector("#form input[name ='title']").value;
      const title = document.querySelector("#form input[name ='author']").value;

      if (!author || !title) {
        console.log("Form fields cannot be empty!");
      } else {
        await fetch(
          `http://localhost:3030/jsonstore/collections/books/${currentBookID}`,
          {
            method: "PUT",
            body: JSON.stringify({ author, title }),
          }
        );

        loadBooks();

        document.querySelector("#form input[name ='title']").value = "";
        document.querySelector("#form input[name ='author']").value = "";
        document.querySelector("#form h3").textContent = "FORM";
        document.querySelector("#form button").style.display = "block";
        document.querySelector("#form").removeChild(saveButton);
      }
    }
  }
}

attachEvents();
