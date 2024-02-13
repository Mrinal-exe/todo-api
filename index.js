const express = require('express');
const create = require('./routes/createTodos');
const get = require('./routes/gettodos');
const update = require('./routes/updateTodos');
const del = require('./routes/deleteTodo');
require('./config/mongo');

const app = express();

app.use(express.json());

//ROUTES

app.get('/show', get);
app.post('/add', create);
app.put('/update/:id', update);
app.delete('/delete/:id', del);


app.listen(3001, () => console.log('API is ready'))




