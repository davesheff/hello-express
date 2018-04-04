
const express = require('express');
const helloWorld = require('./controllers/helloWorld');
const bodyParser = require('body-parser');
const createShoppingList = require('./controllers/createShoppingList');

const app = express();
app.use(bodyParser.json());

app.get('/', helloWorld);

app.post('/shopping-lists', createShoppingList);

app.listen(3000, () => console.log('Example app listening on port 3000!'));
