'use strict';

const server = require('../app.js').server;
const supergoose = require('./supergoose');
const jwt = require('jsonwebtoken');
const mockRequest = supergoose.server(server);

beforeAll(supergoose.startDB);
afterAll(supergoose.stopDB);

describe('Testing /signin and /signup', () => {
    let username = {username: username, password: password};

    let encodeToken;
    let id;

    test('/signup', () => {
       return mockRequest.post('/signup')
            .send(username)
            .then(results => {
               let token = jwt.verify(results.text,);
                expect().toBe(username);
            })
    });

    test('/signin', () => {
        return mockRequest.post('/signin')
            .send(username)
            .then((result) => {
                expect(result.status).toBeTruthy(200);
            })
    })
});
