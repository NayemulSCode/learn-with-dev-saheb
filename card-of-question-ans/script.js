const showBtn = document.getElementById('show');
const hideBtn = document.getElementById('hide');
const addContainer = document.getElementById('add-container');

const addCardBtn = document.getElementById('add-card');
const questionEl = document.getElementById('question');
const answerEl = document.getElementById('answer');

// Show add container
showBtn.addEventListener('click', () => addContainer.classList.add('show'));
// Hide add container
hideBtn.addEventListener('click', () => addContainer.classList.remove('show'));

//add local storage
function setCardsData(cards){
    localStorage.setItem('cards', JSON.stringify(cards))
}

addCardBtn.addEventListener('click', ()=>{
    const question = questionEl.value;
    const answer = answerEl.value;
    if(question.trim() && answer.trim()){
        console.log('qsn-- if', question.trim())
        console.log('ans-- if', answer.trim())
        const newObj = { question, answer };
        console.log('ans-- if', newObj)
        setCardsData(newObj)
    }
})