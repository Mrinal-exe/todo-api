const mongoose = require('mongoose');
require('../config/mongo');

const todoSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true        
    },
    description : {
        type : String,
        required : true
    },
    isCompleted : {
        type : Boolean,
        default : false,
        required : true
    }
});

const todo = mongoose.model('todos', todoSchema);

module.exports = todo;