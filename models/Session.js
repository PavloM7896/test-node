var mongoose = require('mongoose');

var SessionSchema = new mongoose.Schema({
    title: String,
	desription: String,
    agenda: [String],
    date: Date,
   /* users: {
        type: Schema.ObjectId,
        ref: 'User'
    },*/
});

module.exports = mongoose.model('Session', SessionSchema);