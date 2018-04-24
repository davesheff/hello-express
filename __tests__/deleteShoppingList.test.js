/* eslint-env jest */

const fs = require('fs');
const path = require('path');
const httpMocks = require('node-mocks-http');
const deleteShoppingList = require('../controllers/deleteShoppingList');

it('deletes a shopping list', (done) => {
  expect.assertions(1);
  const filename = Date.now().toString();
  const filePath = path.join(__dirname, '../controllers/shoppingLists', filename);
  fs.writeFile(filePath, 'test string', (err) => {
    const request = httpMocks.createRequest({
      method: 'DELETE',
      url: '/shopping-lists/:filename',
      params: {
        filename: filename,
      },
    });
    const response = httpMocks.createResponse({
      eventEmitter: require('events').EventEmitter,
    });
    deleteShoppingList(request, response);
    response.on('end', () => {
      fs.stat(filePath, (error, stats) => {
        expect(error.code).toBe('ENOENT');
        done();
      });
    });
  });
});
