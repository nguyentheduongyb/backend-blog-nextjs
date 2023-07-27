const mongoose = require('mongoose');

const connect = () => {
        mongoose.connect('mongodb+srv://dity:732002duong@cluster0.tchqiid.mongodb.net/Blog')
                .then(() => console.log('Connected!'))
                .catch(() => console.log('false'))
}

module.exports = { connect }