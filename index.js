const express = require('express');
const jokes = require('give-me-a-joke');

const app = express();
const PORT = 3000;

// Serve static files from 'public' folder
app.use(express.static('public'));

// API route to get a joke
app.get('/api/joke', (req, res) => {
    jokes.getRandomDadJoke(joke => {
        res.json({ joke });
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
