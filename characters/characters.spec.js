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

    // describe('characters-route.js', () => {
    //     describe('character route', () => {
    //         it('should return a status code from the character route', async () => {
    //             const expectedStatusCode = 200;
    //             const response = await request(cServer).get('/characters')
    //             expect(response.status).toBe(expectedStatusCode)
    //         });

    //         it('should return a JSON object fron the index route', async () => {
    //             const expectedBody = 'characters';
    //             const response = await request(cServer).get('/characters');
        
    //             expect(response.body).toEqual(expectedBody);
    //         });
        
    //         it('should return a JSON object fron the index route', async () => {
    //             const response = await request(cServer).get('/characters');
    //             expect(response.type).toEqual('application/json');
    //         });
    //     })
    // })
});


