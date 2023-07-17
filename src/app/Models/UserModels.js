const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const User = new Schema({
        username: { type: String, require: true, unique: true },
        password: { type: String, require: true, private: true },
        email: { type: String, require: true, unique: true },
        genre: { type: String },
        phone: { type: Number },
        lastname: { type: String },
        firstname: { type: String },
        isAdmin: { type: Boolean, default: false },
        isAuthor: { type: Boolean, default: false },
}, {
        timestamps: true
});

User.set('toJSON', {
        transform: function (doc, ret, opt) {
                delete ret['password']
                delete ret['_id']
                return ret
        }
})

module.exports = mongoose.model('User', User)