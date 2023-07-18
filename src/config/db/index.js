const mongoose = require('mongoose');

const connect = () => {
        mongoose.connect('mongodb+srv://nguyentheduongyb:732002Duong@cluster0.tchqiid.mongodb.net/Blog')
                .then(() => console.log('Connected!'))
                .catch(() => console.log('false'))
}

module.exports = { connect }