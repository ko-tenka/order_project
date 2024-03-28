const rating = document.querySelector('.rating');
const starMsg = document.querySelector('.starMsg');
// const allRateHome = document.querySelector('.allRateHome')

rating.addEventListener('click', async (e)=> {
    try{
        
        console.log("Это ешка", e.target.id)
        console.log("Это ешка", e.target.parentNode.id)
        const response = await fetch('/api/probook', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ rate: e.target.id, book_id: e.target.parentNode.id }),
    });
    const newRate = await response.json();
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
