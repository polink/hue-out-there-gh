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
    let errorObject = {error: 'Resource Not Found'};

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

  test('404 testing', () => {
    return mockRequest.post('/signin')
      .auth({username: 'username1', password: '1234'})
      .then(() => {
        console.log(jest.fn());
        expect(jest.fn()).toHaveBeenCalledWith(errorObject);
      })
  });
});