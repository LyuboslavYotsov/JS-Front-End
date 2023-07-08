function validatePassword(password) {
  function validateLettersAndDigits(password) {
    let symbols = password.match(/[a-zA-Z0-9]*/gm);

    if (symbols.join("").length !== password.length) {
      return true;
    }

    return false;
  }

  function validateAtleastTwoDigits(password) {
    let digitsCount = (password.match(/\d/gm) || []).length;

    if (digitsCount < 2) {
      return true;
    }

    return false;
  }

  let isValid = true;

  if (password.length < 6 || password.length > 10) {
    isValid = false;
    console.log("Password must be between 6 and 10 characters");
  }

  if (validateLettersAndDigits(password)) {
    isValid = false;
    console.log("Password must consist only of letters and digits");
  }

  if (validateAtleastTwoDigits(password)) {
    isValid = false;
    console.log("Password must have at least 2 digits");
  }

  if (isValid) {
    console.log("Password is valid");
  }
}

validatePassword("MyPass2");
