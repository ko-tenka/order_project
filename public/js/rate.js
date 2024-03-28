const rating = document.querySelector('.rating');
// const chat = document.querySelector('.chat-2');

rating.addEventListener('click', async (e) => {
  try {
    console.log('Это ешка', e.target.id);
    console.log('Это ешка', e.target.parentNode.id);
    const response = await fetch('/api/probook', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ rate: e.target.id, book_id: e.target.parentNode.id }),
    });
    const newRate = await response.json();
    if (newRate) {
      const star1 = document.querySelector('.star1');
      star1.className = 'colorStar';
    }
  } catch (error) {
    console.log(error);
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
