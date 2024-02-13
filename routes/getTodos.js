const todo = require('../models/todo');


async function get(req, res){
    try {
        let data = await todo.find();

        if (!data){
            return res.status(404).json({error : 'No todos found in the database.'})
        }else{
            return res.status(200).json(data)
        }
    } catch (err) {
        console.log(err);
        return res.status(500).json({error : 'Error getting Data.'})
    }
};

module.exports = get;