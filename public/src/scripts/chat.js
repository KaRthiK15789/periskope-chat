document.querySelectorAll('.chat-list-item').forEach(item => {
  item.addEventListener('click', () => {
    document.querySelectorAll('.chat-list-item').forEach(i => i.classList.remove('active'));
    item.classList.add('active');
    
    const chatName = item.querySelector('.font-semibold').textContent;
    document.querySelector('.chat-area .font-semibold').textContent = chatName;
  });
});

setTimeout(() => {
  const typing = document.querySelector('.typing-indicator');
  if (typing) typing.style.display = 'none';

  const messagesContainer = document.querySelector('.overflow-y-auto');
  const newMessage = document.createElement('div');
  newMessage.className = 'flex mb-4';
  newMessage.innerHTML = `
    <img src="https://ui-avatars.com/api/?name=Jane+Smith&background=random" alt="Profile" class="w-8 h-8 rounded-full mr-2 mt-1">
    <div>
      <div class="message received rounded-lg py-2 px-3 max-w-xs lg:max-w-md shadow">
        <p>That's the new Periskope office view!</p>
      </div>
      <div class="text-xs text-gray-500 mt-1">10:37 AM</div>
    </div>
  `;
  messagesContainer.appendChild(newMessage);
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
}, 3000);
