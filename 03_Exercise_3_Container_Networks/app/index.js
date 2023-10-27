/*
    This node application will generate a random number and print it out.
    It requires an environment variable PORT to be set.
    The application will listen on the port specified in the environment variable.
    It also exposes a REST endpoint on the root URL.
    The REST endpoint will return a JSON object with the following structure:
    {
        id: <random number>,
        message: 'This is a message from the App!'
    }
    The application will run forever, so you have to stop it manually using CTRL+C.
*/

const express = require('express');
const dotenv = require('dotenv');

const PORT = process.env.PORT;

if (!PORT) {
    console.error('PORT is not defined as an environment variable');
    process.exit(1);
}

const app = express();
const id = generateRandomInt(1000);
console.log(`This App generated the following Random Number: ${id}`);

const body = {
    id: id,
    message: 'This is a message from the App!'
};

app.get('/', (req, res) => {
    console.log('Received a request on the URL' + req.url);
    res.send(body);
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

function generateRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}