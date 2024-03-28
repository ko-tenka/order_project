const chatForm = document.querySelector('.chatForm');

chatForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const data = new FormData(chatForm);
  const res = Object.fromEntries(data);
  try {
    const response = await fetch(`/api/chat/${event.target.id}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(res),
    });
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.log('error', error);
  }
});

// chat.addEventListener('click', async (e) => {
//   try {
//     const response = await fetch('/api/probook', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ comment: e.target.id, book_id: e.target.parentNode.id }),
//     });
//     const newComment = await response.json();
//     if (newComment) {
//       const comment = document.querySelector('.chat-2');
//       comment.className = 'comment';
//     }
//   } catch (error) {
//     console.log(error);
//   }
// });
