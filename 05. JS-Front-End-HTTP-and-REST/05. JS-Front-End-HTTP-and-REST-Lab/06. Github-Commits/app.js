async function loadCommits() {
  const username = document.querySelector("#username").value;
  const repo = document.querySelector("#repo").value;
  const list = document.querySelector("#commits");
  list.innerHTML = "";

  try {
    const response = await fetch(
      `https://api.github.com/repos/${username}/${repo}/commits`
    );

    if (response.ok === false) {
        throw new Error(response.status);
    }
    const entries = await response.json();
    

    entries.forEach(entrie => {
        const listItem = document.createElement("li");
        listItem.textContent = `"${entrie.commit.author.name}: ${entrie.commit.message}`;
        list.appendChild(listItem);
        
    });
  } catch (error) {
    const listItem = document.createElement("li");
    listItem.textContent = `Error: ${error.message} (Not Found)`;
    list.appendChild(listItem);
  }
}
