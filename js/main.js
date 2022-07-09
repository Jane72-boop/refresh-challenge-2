const ratingContainer = document.querySelector('.rating-container')
const thanksContainer = document.querySelector('.thanks-container')
const ratingDisplay = document.querySelector(".rating-display");
const submitBtn = document.getElementById('submitBtn');
const ratingNumbers = document.querySelectorAll('li')

ratingNumbers.forEach((number) => {
  number.addEventListener("click", addActive);
});


submitBtn.addEventListener('click', rate)

function rate() {
    for (let i = 0; i < ratingNumbers.length; i++) {
        if(ratingNumbers[i].classList.contains('selected')) {
            let selectedRating = ratingNumbers[i]
            changeLayout(selectedRating);
        }
    }
}

function addActive() {
    for(let i=0; i < ratingNumbers.length; i++) {
        ratingNumbers[i].classList.remove('selected')
    }
    this.classList.add('selected')
}

function changeLayout(rating) {
    let activeRating = rating.innerText
    ratingContainer.setAttribute('id', 'hidden')
    thanksContainer.setAttribute("id", "");

    let p = document.createElement('p')
    p.innerText = `You selected ${activeRating} out of 5`;

    ratingDisplay.appendChild(p);
}