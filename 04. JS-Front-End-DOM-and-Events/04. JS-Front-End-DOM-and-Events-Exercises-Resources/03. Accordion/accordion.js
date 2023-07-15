function toggle() {
  const button = document.getElementsByClassName("button")[0];
  const extraText = document.getElementById("extra");

  // button.addEventListener("click", acordeon());

  if (button.textContent === "More") {
    button.textContent = "Less";
    extraText.style.display = "block";
  } else {
    button.textContent = "More";
    extraText.style.display = "none";
  }
}
