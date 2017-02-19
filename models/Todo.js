var mongoose = require('mongoose');


var TodoSchema = new mongoose.Schema({
    name: String,
    completed: Boolean,
    note: String,
   /* creator: {
        type: Schema.ObjectId,
        ref: 'User'
    },*/
});

module.exports = mongoose.model('Todo', TodoSchema);
