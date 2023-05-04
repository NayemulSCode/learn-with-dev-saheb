const showBtn = document.getElementById('show');
const hideBtn = document.getElementById('hide');
const addContainer = document.getElementById('add-container');

const addCardBtn = document.getElementById('add-card');
const questionEl = document.getElementById('question');
const answerEl = document.getElementById('answer');

const cardsContainer = document.getElementById('cards-container');

// Show add container
showBtn.addEventListener('click', () => addContainer.classList.add('show'));
// Hide add container
hideBtn.addEventListener('click', () => addContainer.classList.remove('show'));

let cardsData = getCardsData();

//add local storage
function setCardsData(cards){
    localStorage.setItem('cards', JSON.stringify(cards))
    window.location.reload();        
  }

//get data from localstorage
function getCardsData(){
  const getcardData = JSON.parse(localStorage.getItem('cards'));
  return getcardData === null ? [] : getcardData;
}
addCardBtn.addEventListener('click', ()=>{
    const question = questionEl.value;
    const answer = answerEl.value;
    if(question.trim() && answer.trim()){
      const newObj = { question, answer };
      cardsData.push(newObj);
      setCardsData(cardsData);
    }
})