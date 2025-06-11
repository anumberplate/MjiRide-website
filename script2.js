let startupContext = "";

window.onload = async () => {
  const res = await fetch("content.txt");
  startupContext = await res.text();
};

const messages = document.getElementById("messages");
const input = document.getElementById("userInput");

function appendBubble(text, type) {
  const bubble = document.createElement("div");
  bubble.className = `bubble ${type}`;
  bubble.innerText = text;
  messages.appendChild(bubble);
  messages.scrollTop = messages.scrollHeight;
}

async function sendMessage() {
  const userText = input.value.trim();

  appendBubble(userText, "user");
  input.value = "";

  const reply = await puter.ai.chat({
    messages: [
      { role: "system", content: startupContext },
      { role: "user", content: userText }
    ]
  });

  appendBubble(reply.message.content, "bot");
}

function quickAsk(question) {
  input.value = question;
  sendMessage();
}

