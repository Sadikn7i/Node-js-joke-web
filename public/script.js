const jokeText = document.getElementById('joke');
const jokeBtn = document.getElementById('newJokeBtn');
const card = document.getElementById('jokeCard');

jokeBtn.addEventListener('click', () => {
    // Add flip animation
    card.style.transform = 'rotateY(180deg) rotateX(15deg)';
    
    fetch('/api/joke')
        .then(res => res.json())
        .then(data => {
            // Animate text change
            jokeText.style.opacity = 0;
            setTimeout(() => {
                jokeText.textContent = data.joke;
                jokeText.style.opacity = 1;
                card.style.transform = 'rotateY(0deg) rotateX(0deg)';
            }, 300);
        })
        .catch(err => {
            jokeText.textContent = "Oops! Could not fetch a joke.";
            console.error(err);
        });
});
