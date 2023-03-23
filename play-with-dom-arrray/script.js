const addUserBtn = document.getElementById('add-user');
const main = document.getElementById('main');
const double = document.getElementById('double');
const millionaires = document.getElementById('show-millionaires');
const sort = document.getElementById('sort');
let data = [];
getRandomUser();

// fetch random user
async function getRandomUser(){
    const res = await fetch('https://randomuser.me/api/');
    const data = await res.json();
    const user = data.results[0];
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
    console.log("provided",provideData)
    main.innerHTML = '<h2><strong>Person</strong> Wealth</h2>';
    provideData.forEach(item=>{
        const element = document.createElement('div');
        element.classList.add('person');
        element.innerHTML = `<strong>${item.name}</strong> $${item.money}`
        main.appendChild(element);
    });
};

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

// let exam =  '{"name":"John", "age":30, "car":null}'
// let parseValue = JSON.parse(exam)
// console.log("json parse",  JSON.parse(exam));
// console.log("json", typeof JSON.stringify(parseValue))
