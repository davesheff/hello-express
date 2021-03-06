
const express = require('express');
const helloWorld = require('./controllers/helloWorld');
const bodyParser = require('body-parser');
const createShoppingList = require('./controllers/createShoppingList');
const updateShoppingList = require('./controllers/updateShoppingList');
const deleteShoppingList = require('./controllers/deleteShoppingList');

const app = express();
app.use(bodyParser.json());

app.get('/', helloWorld);

app.post('/shopping-lists', createShoppingList);

app.put('/shopping-lists/:filename', updateShoppingList);

app.delete('/shopping-lists/:filename', deleteShoppingList);

app.listen(3000, () => console.log('Example app listening on port 3000!'));
