const express = require('express'); //<<~~ npm i express
const shortid = require('shortid'); //<<~~ npm i shortid

const server = express();

let users = [];

server.use(express.json());

server.get('/', (req, res) => {
    res.status(200).json({ API: "is running..." })
});

server.get('/api/users', (req, res) => {
    res.status(200).json(users)
});

server.post('/api/users', (req, res) => {
    const usersInfo = req.body;

    usersInfo.id = shortid.generate();

    users.push(usersInfo)

    res.status(201).json(usersInfo);
});

const PORT = 5000;
server.listen(PORT, () =>
    console.log(`\n ** API listening on ${PORT} ** \n`)
);