'use strict';

const server = require('../app.js').server;
const supergoose = require('./supergoose');
const jwt = require('jsonwebtoken');
const mockRequest = supergoose.server(server);

beforeAll(supergoose.startDB);
afterAll(supergoose.stopDB);

describe('Testing 404 and error middleware', () => {
    let user = {username: 'username', password: 'password'};

    let encodeToken;
    let id;

    test('/signup', () => {
        return mockRequest.post('/signup')
            .send(user)
            .then(results => {
                let token = jwt.verify(results.text, process.env.SECRET);
                id = token.id;
                encodeToken = results.text;
                expect(id).toBeTruthy();
            })
    });
});