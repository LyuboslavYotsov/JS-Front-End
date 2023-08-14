function attachEvents() {
  const loadPostsButton = document.querySelector("#btnLoadPosts");
  const viewPostButton = document.querySelector("#btnViewPost");
  const postsMenu = document.querySelector("#posts");
  const postTitleHeader = document.querySelector("#post-title");
  let currentPostBody = "";
  let postObjects;

  loadPostsButton.addEventListener("click", getPosts);
  viewPostButton.addEventListener("click", getPostInfo);

  async function getPosts() {
    const postsResponse = await fetch(
      "http://localhost:3030/jsonstore/blog/posts"
    );
    const postsData = await postsResponse.json();
    postObjects = Object.entries(postsData);

    postObjects.forEach(([objectKey, post]) => {
      const newOption = document.createElement("option");

      newOption.value = objectKey;
      newOption.textContent = post.title;
      postsMenu.appendChild(newOption);
    });
  }

  async function getPostInfo() {
    const unorderedList = document.getElementById("post-comments");
    const postBody = document.getElementById("post-body");
    unorderedList.innerHTML = "";
    const commentsResponse = await fetch(
      "http://localhost:3030/jsonstore/blog/comments"
    );

    const postId = postsMenu.value;
    const postTitle = postsMenu.options[postsMenu.selectedIndex].text;
    const commentsData = await commentsResponse.json();
    const commentsObjects = Object.entries(commentsData).filter(
      (obj) => obj[1].postId === postId
    );

    postTitleHeader.textContent = postTitle;

    postObjects = postObjects.filter(
      (obj) => obj[0] === postId
    );

    const bodyText = postObjects[0][1].body;
    postBody.textContent = bodyText;

    commentsObjects.forEach((commentObj) => {
      const newListitem = document.createElement("li");
      newListitem.textContent = commentObj[1].text;

      const unorderedList = document.getElementById("post-comments");
      unorderedList.appendChild(newListitem);
    });
  }
}

attachEvents();
