//selecting document
const containerProfile = document.querySelector('.container-profile');
const button = document.querySelector('.button');
const img = document.querySelector('#imgPict');
const personName = document.querySelector('#personName');
const userName = document.querySelector('#userName');
const userDescription = document.querySelector('#userDescription');

//user Description
const userDesc = [
    {
    id:1,
    img: "./pictures/boredape.png",
    name:'doni',
    username:'@doni88',
    desc:`I'm doni thx for providing this platform for me, big appreciation for the team!`,
    },
    {
    id:2,
    img:"./pictures/CryptoPunk.jpg",
    name:'Rena',
    username:'@Renaa',
    desc:`hi my name is Rena,  love the purpose of this platfrom`,
    },
    {
    id:3,
    name:'Romy',
    img:"./pictures/wickedMonster.png",
    username:'@RobyKing',
    desc:`hi I'm Roby, I'm a student. this platfrom so much helped me while learn about design thank you`,
    },

];
//current user description
let currentDesc = 1;

//add event to windoow to display
window.addEventListener('DOMContentLoaded', ()=>{
    showPerson();
});

//show person method
const showPerson = ()=>{
      //access item from array
  const item = userDesc[currentDesc];
  personName.textContent = item.name;
  img.src = item.img;
  userName.textContent = item.username;
  userDescription.textContent = item.desc;
}

button.addEventListener('click', ()=>{
    currentDesc = Math.floor(Math.random() * userDesc.length);
    console.log(currentDesc)
    showPerson()

})






