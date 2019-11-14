const router = require('express').Router();

const Characters = require('./character-model');


router.get('/characters', (req, res) => {
    Characters.getAll()
        .then(characters => {
            console.log(characters);
            res.status(200).json(characters)
        })
        .catch(error => {
            console.log(error);
            res.status(500).json(error)
        });
});

router.delete('/characters/:id', (req, res) => {
    const { id } = req.params;
    Characters.remove(id)
        .then(count => {
            if(count > 0) {
                res.status(200).json({
                    message: "The Character has been deleted"
                })
            } else {
                res.status(404).json({
                    message: 'The character could not be found'
                })
            }
        })
        .catch(error => {
            res.status(500).json({
                message: 'Error deleting the character'
            })
        })
})

module.exports = router;

// test('the db env is testing', () => {
//     expect(process.env.DB_ENV).toBe('testing')
//   })