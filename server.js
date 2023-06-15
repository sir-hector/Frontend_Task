const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());


const data = {
    "name": "John",
    "cars": [
        {
            "name": "Ford",
            "model": "Mustang"
        },
        {
            "name": "BMW",
            "model": "X5"
        }
    ]
};

app.get('/cars', (req, res) => {
    res.json(data);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});