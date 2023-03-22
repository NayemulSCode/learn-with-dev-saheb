const addUserBtn = document.getElementById('add-user');
const main = document.getElementById('main');

let data = [];
getRandomUser();

// fetch random user
async function getRandomUser(){
    const res = await fetch('https://randomuser.me/api/');
    const data = await res.json();
    const user = data.results[0];
    const userInfo ={
        name: `${user.name.title} ${user.name.first} ${user.name.last}`,
        money: Math.floor(Math.random()*10000000)
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
        element.innerHTML = `<strong>${item.name}</strong> ${item.money}`
        main.appendChild(element);
    });
};


addUserBtn.addEventListener('click',getRandomUser);

// let exam =  '{"name":"John", "age":30, "car":null}'
// let parseValue = JSON.parse(exam)
// console.log("json parse",  JSON.parse(exam));
// console.log("json", typeof JSON.stringify(parseValue))
