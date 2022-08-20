const firstCard = document.querySelector('#first');

const secondCard = document.querySelector('#Thank-you');

const selected = document.querySelector('#list');

const button = document.querySelector('button');

selected.addEventListener('click', function(e){
const value = e.target.textContent;

console.log(value);
secondCard.childNodes[3].textContent = `You selected ${value} out of 5`;
})

