function printEmployeeList(input) {
  const employees = [];

  for (const name of input) {
    const employee = {
      name: name,
      peronsalNum: name.length,
    };

    employees.push(employee);
  }

  for (const employee of employees) {

    let keys =  Object.keys(employee);
    console.log(`Name: ${employee[keys[0]]} -- Personal Number: ${employee[keys[1]]}`)
  }
}

printEmployeeList([
  "Silas Butler",
  "Adnaan Buckley",
  "Juan Peterson",
  "Brendan Villarreal",
]);
