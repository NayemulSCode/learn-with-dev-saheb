const addUserBtn = document.getElementById('add-user');
const main = document.getElementById('main');
const double = document.getElementById('double');
const millionaires = document.getElementById('show-millionaires');
const sort = document.getElementById('sort');
const calculate_wealth = document.getElementById('calculate-wealth');
let data = [];
getRandomUser();

// fetch random user
async function getRandomUser(){
    const res = await fetch('https://randomuser.me/api/');
    const data = await res.json();
    const user = data.results[0];
    // console.log(" getRandomUser ~ user:", user)
    const userInfo ={
        name: `${user.name.title} ${user.name.first} ${user.name.last}`,
        money: Math.floor(Math.random()*100000)
    }
    addUser(userInfo);
}

// add new user in data arr
function addUser(obj){
    data.push(obj);
    udpateDOM()
}



// insert into dom

function udpateDOM(provideData = data){
    // clear main div
    main.innerHTML = '<h2><strong>Person</strong> Wealth</h2>';
    provideData.forEach(item=>{
        const element = document.createElement('div');
        element.classList.add('person');
        element.innerHTML = `<strong>${item.name}</strong> ${formatMoney(item.money)}`
        main.appendChild(element);
    });
    
};
let sum = 0;
function summation() {
    data.forEach((user) => {
        sum = sum + user.money;
    });
    udpateDOM(data, sum);
}
// calculate wealthCalulate.
function calculateWealth(){
   let sum  = data.reduce((a, user)=> {
       console.log("a=", a, "user=", user)
       return a + user.money;
    },0);
    const wealthEle = document.createElement('div');
    wealthEle.innerHTML = `Total wealth= ${formatMoney(sum)}`;
    main.appendChild(wealthEle);
}
// double money

function doubleMoney(){
    data = data.map(user =>{
        return {
            ...user,
            money: user.money * 2
        };
    });
    udpateDOM();
};

function formatMoney(number) {
    return '$' + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

// filter only milllionires
function showMillionaires(){
   data =  data.filter(user => user.money > 1000000);
   udpateDOM();
}
// sort by richest
function sortByRichest(){
    data.sort((a,b)=> b.money - a.money);
    udpateDOM();
}


// formater of money

addUserBtn.addEventListener('click',getRandomUser);
double.addEventListener('click', doubleMoney);
millionaires.addEventListener('click', showMillionaires);
sort.addEventListener('click', sortByRichest);
calculate_wealth.addEventListener('click', calculateWealth);

// let exam =  '{"name":"John", "age":30, "car":null}'
// let parseValue = JSON.parse(exam)
// console.log("json parse",  JSON.parse(exam));
// console.log("json", typeof JSON.stringify(parseValue))

const numbers = [1, 5, 2, 7, 3];
const largest = numbers.reduce((accumulator, currentValue) => {
    // console.log(accumulator, currentValue)
  if (currentValue > accumulator) {
    return currentValue;
  } else {
    return accumulator;
  }
},0);
// console.log(largest);
