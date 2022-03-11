const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.promise = Promise;
const userSchema = new Schema({
    googleId: String
})


const User = mongoose.model('users', userSchema);
module.exports = User;