const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const charactersRouter = require('../characters/character-router');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/api', charactersRouter);

server.get('/', (req, res) => {
    res.status(200).json({ api: 'running' });
});



module.exports = server;