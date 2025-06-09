async function loadContextAndStartChatbot(){
  try {
    const response = await fetch('content.txt');
    const systemPrompt = await response.text();

    const chatbot = puter.ai.chat({
      container: document.getElementById('prompt-container'),
      systemPrompt: systemPrompt
    })
     document.querySelectorAll('.sample-questions button').forEach(button => {
      button.addEventListener('click', () => {
        chatbot.ask(button.textContent);
      });
    });

  } catch (error) {
    console.error('Failed to load context:', error);
    document.getElementById('chatbot-container').innerText = "Failed to load chatbot. Please try again later.";
  }
}
    
