const rating = document.querySelector('.rating');

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
    if(newRate){
        const star1= document.querySelector('.star1');
        star1.className = 'colorStaer';

    }
    }catch(error){
       console.log(error)
    }
})