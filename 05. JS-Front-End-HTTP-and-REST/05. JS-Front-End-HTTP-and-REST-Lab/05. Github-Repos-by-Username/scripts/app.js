async function loadRepos() {
  const username = document.querySelector("#username").value;
  const reposList = document.querySelector("#repos");

  try {
    const response = await fetch(
      `https://api.github.com/users/${username}/repos`
    );

	if (response.ok === false) {
		throw new Error(`${response.status} ${response.statusText}`);
	}
    const data = await response.json();


	reposList.innerHTML = "";
    data.forEach(repo => {
		const listItem = document.createElement("li");
		const link = document.createElement("a");

		link.textContent = repo.full_name;
		link.href = repo.html_url;

		
		listItem.appendChild(link);
		reposList.appendChild(listItem);


	});
  } catch (error) {
    console.log(error.message);
  }
}
