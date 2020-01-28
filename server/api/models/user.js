const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    userName: { type: String, required: true, },
    passWord: { type: String, required: true }
});

module.exports = mongoose.model('User', userSchema);