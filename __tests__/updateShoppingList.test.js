/* eslint-env jest */

const fs = require('fs');
const path = require('path');
const httpMocks = require('node-mocks-http');
const updateShoppingList = require('../controllers/updateShoppingList');

it('creates a new shopping list', (done) => {
  expect.assertions(1);
  const filename = Date.now().toString();
  const filePath = path.join(__dirname, '../controllers/shoppingLists', filename);  
  const body = {
    items: ['broccoli', 'bread', 'bananas'],
  };
  fs.writeFile(filePath, JSON.stringify(body), (err) => {
    
  })
});