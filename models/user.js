const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = Schema(
    {
        username: {type: String, require: true},
        password: {type: String, required: true},
        pokemon:  {type: Array}
    }
);

let User = module.exports = mongoose.model('User', UserSchema);