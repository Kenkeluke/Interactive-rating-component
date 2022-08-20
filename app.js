const firstCard = document.querySelector('#first');

const secondCard = document.querySelector('#Thank-you');

const selected = document.querySelector('#list');

const button = document.querySelector('button');

selected.addEventListener('click', function(e)
{
//selecting all the list elements aka rating scores

    const listItems = selected.querySelectorAll('li');


/* a forEach method to remove any previously added active state, in case of multiple clicks */

    listItems.forEach((item) => {
    item.classList.remove('active')
    })

	
// extracting the value of the clicked score
	const value = e.target.textContent;

// Getting the actual list element that was clicked out of the five
	const li = e.target.parentNode;

//Appending the active class to the exact list item
 li.classList.add('active')


/*Value extracted earlier is then used to modify the content of the 
 second card that displays the score that was chosen*/
	secondCard.childNodes[3].textContent = `You selected ${value} out of 5`;
})


button.addEventListener('click', function(e){
/*preventing the default action of a submit button which is to refresh and reset the page */
    e.preventDefault();

//Adding the hidden class to the fist card to hide it after submission
    firstCard.classList.add('hidden');
//Removing the hidden class on the second card to display it after submission
    secondCard.classList.remove('hidden');
})
