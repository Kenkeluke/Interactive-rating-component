const firstCard = document.querySelector('#first');

const secondCard = document.querySelector('#Thank-you');

const selected = document.querySelector('#list');

const button = document.querySelector('button');

selected.addEventListener('click', function(e)
{
    const listItems = selected.querySelectorAll('li');

    listItems.forEach((item) => {
    item.classList.remove('active')
    })

	console.log(listItems);

	const value = e.target.textContent;
	const li = e.target.parentNode;
		console.log(li);

	li.classList.add('active')


	console.log(value);
	secondCard.childNodes[3].textContent = `You selected ${value} out of 5`;
})


button.addEventListener('click', function(e){
    e.preventDefault();
    firstCard.classList.add('hidden');
    secondCard.classList.remove('hidden');
})
