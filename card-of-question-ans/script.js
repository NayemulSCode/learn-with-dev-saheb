const showBtn = document.getElementById('show');
const hideBtn = document.getElementById('hide');
const addContainer = document.getElementById('add-container');

const addCardBtn = document.getElementById('add-card');
const questionEl = document.getElementById('question');
const answerEl = document.getElementById('answer');
const currentEl = document.getElementById('current');

const cardsContainer = document.getElementById('cards-container');

//DOM Array
const cardEl = [];

const currentActiveCard = 0;

let cardsData = getCardsData();
// create all cards
function createAllCards(){
  cardsData.forEach((data, index) => createSingleCard(data, index));
}
// create single cards
function createSingleCard(data, index){
  const card = document.createElement('div');
  card.classList.add('card');
  if(index === 0){
    card.classList.add('active')
  }
  card.innerHTML = `
  <div class="inner-card"> 
    <div class="inner-card-front">
      <p>
        ${data.question}
      </p>
    </div>
    <div class="inner-card-back">
      <p>
       ${data.answer}
      </p>
    </div>
  </div>
  `;

  card.addEventListener('click', ()=> card.classList.toggle('show-answer'))
  // add to DOM array
  cardEl.push(card);

  cardsContainer.appendChild(card);
  updateCurrentTotal();

}

createAllCards();


function updateCurrentTotal(){
  currentEl.innerText = `${currentActiveCard + 1} / ${cardEl.length}`
}


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

// Show add container
showBtn.addEventListener('click', () => addContainer.classList.add('show'));
// Hide add container
hideBtn.addEventListener('click', () => addContainer.classList.remove('show'));
addCardBtn.addEventListener('click', ()=>{
    const question = questionEl.value;
    const answer = answerEl.value;
    if(question.trim() && answer.trim()){
      const newObj = { question, answer };
      cardsData.push(newObj);
      setCardsData(cardsData);
    }
})