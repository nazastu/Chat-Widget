// Get the chat widget element
const chatWidget = document.getElementById('chat-widget');

// Get the chat messages element
const chatMessages = document.getElementById('chat-messages');

// Get the chat input element
const chatInput = document.querySelector('#chat-input input');

// Get the send button element
const sendButton = document.getElementById('send-btn');

// Add event listener for send button click
sendButton.addEventListener('click', sendMessage);

// Add event listener for enter key press
chatInput.addEventListener('keydown', (event) => {
  if (event.keyCode === 13) {
    sendMessage();
  }
});

// Function to send a message
function sendMessage() {
  const message = chatInput.value.trim();

  if (message) {
    // Create a new chat message element
    const newMessage = document.createElement('div');
    newMessage.classList.add('message');
    newMessage.classList.add('sent');
    newMessage.innerHTML = message;

    // Append the new message to the chat messages element
    chatMessages.appendChild(newMessage);

    // Clear the chat input
    chatInput.value = '';
  }
}
