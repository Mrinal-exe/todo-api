const todo = require('../models/todo');

async function del(req,res){
    
    if(req.params == ''){
        return res.status(400).json({result : 'Please provide id of the todo to delete!'})

    }else{

        try {

            let data = await todo.deleteOne(req.params);

            if(data.acknowledged == true){
                return res.status(200).json({result : `Successfully delete todo with id : ${req.params.id}`})
            }else{
                return res.send('Error deleting!')
            }

        } catch (err) {
            console.log(err.message);
            return res.status(400).json({result : 'Error while deleting data!'})
        }

    }
    
}

module.exports = del;