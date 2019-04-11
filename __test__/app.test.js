'use strict';

const server = require('../app.js').server; // change js file if we name it different
// const supergoose = require('../supergoose.js'); // need this too?
const supertest = require('supertest');
const mockRequest = supertest.server(server);

describe('Testing /signin and /signup', () => {
    let username = {username: username, password: password};

    test('/signup', () => {
       return mockRequest.post('/signup')
            .send(username)
            .then(results => {
            //    going to figure this out after our schema is established
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