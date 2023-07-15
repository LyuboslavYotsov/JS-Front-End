function lockedProfile() {
  const buttons = Array.from(document.querySelectorAll("button"));

  buttons.forEach((button, i) => {
    button.addEventListener("click", revealInfo);

    function revealInfo(e) {
      const lockedButton = e.currentTarget.parentElement.querySelector(
        'input[type="radio"]'
      );

      if (lockedButton.checked) {
        return;
      }

      const isHidden = e.currentTarget.textContent === "Show more";
      const hiddenInfo = e.currentTarget.parentElement.querySelector("div");

      hiddenInfo.style.display = isHidden ? "block" : "none";
      e.currentTarget.textContent = isHidden ? "Hide it" : "Show more";
    }
  });
}
