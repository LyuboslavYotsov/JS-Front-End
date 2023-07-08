function logIn(input) {
  [username, ...inputPasswords] = input;

  function reverseUsername(username) {
    const usernameChars = username.split("");
    const correctPassword = [];
    for (const char of username) {
      correctPassword.unshift(char);
    }
    return correctPassword.join("");
  }
  const correctPassword = reverseUsername(username);

  let wrongPassCount = 0;
  for (const password of inputPasswords) {
    if (password === correctPassword) {
      console.log(`User ${username} logged in.`);
      return;
    } else {
      wrongPassCount++;

      if (wrongPassCount === 4) {
        console.log(`User ${username} blocked!`);
        return;
      }
      console.log("Incorrect password. Try again.");
    }
  }
}

logIn(["sunny", "rainy", "cloudy", "sunny", "not sunny"]);
