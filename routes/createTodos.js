const todo = require('../models/todo');

async function create(req, res){
    try {
        let newTodo = new todo(req.body);
        let data = await newTodo.save();

        return res.status(200).json(data);

    } catch (err) {
        console.log(err.message);
        return res.status(400).josn({result : 'Error creating a new Todo'})
    }
}

module.exports = create;