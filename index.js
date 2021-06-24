console.log('Hello World')

const message = document.querySelector('#message')

function addMovie(event) {
    event.preventDefault()
    let inputField = document.querySelector('input')
    
    const movie = document.createElement('li')    
    const movieTitle = document.createElement('span')
    movieTitle.textContent = inputField.value
    movieTitle.addEventListener('click', crossOffMovie)
    movie.appendChild(movieTitle)
    let deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'X'
    movie.appendChild(deleteBtn)
    deleteBtn.addEventListener('click', deleteMovie)
    let list = document.querySelector('ul')
    list.appendChild(movie)
    inputField.value = ''
}

function deleteMovie(event) {
    event.target.parentNode.remove()
    message.textContent = `${event.target.parentNode.textContent .slice(0, -1)} Deleted`
    revealMessage()
} 

const button = document.querySelector("button");

button.addEventListener('click', addMovie);


function crossOffMovie(event) {
    event.target.classList.toggle('checked')
        if (event.target.classList.contains('checked')) {
            message.textContent = `${event.target.textContent} Watched!`
        } else {
            message.textContent = `${event.target.textContent} Movie Added Back!`
    }
    // test ternary operator because my tutor wanted me to
        // message.textContent = (event.target.classList.contains('checked')) ? `${event.target.textContent} Watched!` : `${event.target.textContent} Movie Added Back!`;
    revealMessage()
}

function revealMessage() {
    message.classList.remove('hide')
    setTimeout(function(){
        message.classList.add('hide')
    }, 1000)
}