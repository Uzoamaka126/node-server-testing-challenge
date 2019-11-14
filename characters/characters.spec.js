const request = require('supertest');
const Characters = require('./character-model');
const cServer = require('./character-router');
const db = require('../database/db-config');

beforeEach(async () => {
    // this function executes and clears out the table before each test
    await db('characters').truncate();
});

describe('characters model', () => {
    describe('insert()', () => {
        it('should insert the provided characters array into the db', async () => {
            await Characters.insert({ name: 'gaffer' });
            await Characters.insert({ name: 'paul' });
            await Characters.insert({ name: 'peter' });

            const characters = await db('characters');
            expect(characters).toHaveLength(3);
        })
    })

    describe('remove()', () => {
        it('should remove the specified character from the db', async () => {
            const id = 1
            await Characters.remove(id);

            const characters = await db('characters');
            expect(characters).toHaveLength(3);
        })
    })

    
});


