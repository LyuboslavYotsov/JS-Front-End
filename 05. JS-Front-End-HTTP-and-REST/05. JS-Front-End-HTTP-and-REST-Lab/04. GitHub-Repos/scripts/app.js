function loadRepos() {
  const siteBody = document.querySelector("body");

  fetch("https://api.github.com/users/testnakov/repos")
    .then((res) => res.json())
    .then((repos) => {
      const div = document.createElement("div");
      div.textContent = JSON.stringify(repos);

      siteBody.appendChild(div);
    });
}
