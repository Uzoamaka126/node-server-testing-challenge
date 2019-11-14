const router = require('express').Router();

const Characters = require('./character-model');

router.get('/characters', (req, res) => {
    Characters.getAll()
        .then(characters => {
            res.status(200).json(characters)
        })
        .catch(error => {
            res.status(500).json(error)
        });
});

module.exports = router;