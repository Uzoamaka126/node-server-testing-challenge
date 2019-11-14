const express = require('express');
const Characters = require('../characters/character-router');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    res.status(200).json('Welcome')
});

module.exports = server;