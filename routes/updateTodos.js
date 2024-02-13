const todo = require('../models/todo');

async function update(req, res) {

    if (req.params == '') {
        return res.json({ result: 'Please provide id of the todo you want to update!' })

    } else {
        try {

            let data = await todo.updateOne(
                req.params,
                { $set: req.body });
            
            if(data.acknowledged == true){
                return res.status(200).json({result : `Successfully updated todo with id : ${req.params.id}`})
            }else{
                return res.send('Error Updating!')
            }

        } catch (error) {
            console.log(error.message);
            return res.status(400).json({ result: 'Error updating todo!' })
        }

    }
}

module.exports = update;