function attachEvents() {
  const sendButton = document.querySelector("#submit");
  const refreshButton = document.querySelector("#refresh");

  sendButton.addEventListener("click", sendMessage);
  refreshButton.addEventListener("click", loadMesseges);

  async function loadMesseges() {
    const response = await fetch("http://localhost:3030/jsonstore/messenger");
    const messengerData = await response.json();

    const textAreaBox = document.querySelector("#messages");
    textAreaBox.value = "";

    const messeges = Object.values(messengerData).map((m) => `${m.author}: ${m.content}`);

    textAreaBox.value = messeges.join("\n");

    console.log(messeges);
  }

  async function sendMessage() {
    const author = document.querySelector('input[name = "author"]').value;
    const content = document.querySelector('input[name = "content"]').value;

    await fetch("http://localhost:3030/jsonstore/messenger", {
      method: "post",
      body: JSON.stringify({ author, content }),
    });
  }
}

attachEvents();
