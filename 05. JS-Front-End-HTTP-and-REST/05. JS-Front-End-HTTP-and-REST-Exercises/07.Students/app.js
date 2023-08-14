function attachEvents() {
  loadStudents();
  let studentsData;
  const tableBox = document.querySelector("#results tbody");

  const submitButton = document.querySelector("#submit");
  submitButton.addEventListener("click", addStudent);

  async function loadStudents(params) {
    const response = await fetch(
      "http://localhost:3030/jsonstore/collections/students"
    );
    studentsData = await response.json();

    Object.values(studentsData).forEach((student) => {

      const newTableRow = document.createElement("tr");

      const firstNameCol = document.createElement("td");
      firstNameCol.textContent = student.firstName;

      const lastNameCol = document.createElement("td");
      lastNameCol.textContent = student.lastName;

      const facultyNumberCol = document.createElement("td");
      facultyNumberCol.textContent = student.facultyNumber;

      const gradeCol = document.createElement("td");
      gradeCol.textContent = student.grade;

      newTableRow.appendChild(firstNameCol);
      newTableRow.appendChild(lastNameCol);
      newTableRow.appendChild(facultyNumberCol);
      newTableRow.appendChild(gradeCol);

      tableBox.appendChild(newTableRow);
    });
  }

  async function addStudent() {
    document.querySelector(".notification").textContent = "";
    const firstName = document.querySelector('input[name="firstName"]').value;
    const lastName = document.querySelector('input[name="lastName"]').value;
    const facultyNumber = document.querySelector(
      'input[name="facultyNumber"]'
    ).value;
    const grade = document.querySelector('input[name="grade"]').value;

    if (!firstName || !lastName || !facultyNumber || !grade) {
      document.querySelector(".notification").textContent =
        "Fields cannot be empty";
      return;
    }

    await fetch("http://localhost:3030/jsonstore/collections/students", {
      method: "POST",
      body: JSON.stringify({ firstName, lastName, facultyNumber, grade }),
    });

    tableBox.innerHTML = "";
    loadStudents();
  }
}

attachEvents();
