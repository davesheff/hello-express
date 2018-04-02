/* eslint-env jest */

const helloWorld = require('../controllers/helloWorld');
const httpMocks = require('node-mocks-http');

it('returns a Hello World Object', () => {
  const request = httpMocks.createRequest({
    method: 'GET',
    url: '/',
  });
  const response = httpMocks.createResponse();
  helloWorld(request, response);
  expect(response._getData().message).toBe('Hello World!');
});
