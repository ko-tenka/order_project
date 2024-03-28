const rating = document.querySelector('.rating');

// const chat = document.querySelector('.chat-2');
const starMsg = document.querySelector('.starMsg');
// const allRateHome = document.querySelector('.allRateHome')


rating.addEventListener('click', async (e) => {
  try {
    // Для простой звездочки:
    // console.log('Это ешка', e.target.id);
    // console.log('Это ешка', e.target.parentNode.id);
    console.log('Это ешка', e.target.parentNode.id);
    console.log('Это ешка', e.target.parentNode.parentNode.id);
    const response = await fetch('/api/probook', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      // body: JSON.stringify({ rate: e.target.id, book_id: e.target.parentNode.id }),
      body: JSON.stringify({ rate: e.target.parentNode.id, book_id: e.target.parentNode.parentNode.id }),
    });
    const newRate = await response.json();
    
 //   if (newRate) {
 //     const star1 = document.querySelector('.star1');
 //     star1.className = 'colorStar';
 //   }
 // } catch (error) {
 //   console.log(error);
 // }
//});

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

    if(newRate.err){
        starMsg.innerText = `Вы уже оставляли оценку!`;
        
        

    }else if(newRate.starDone){
        starMsg.innerText = `Благодарим за вашу оценку!`;
        const star1= document.querySelector('.star1');
        star1.className = 'colorStaer';
    }
    }catch(error){
       console.log(error)
    }
})

