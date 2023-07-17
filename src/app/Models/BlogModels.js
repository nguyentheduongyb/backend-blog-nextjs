const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
var slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

const Blog = new Schema({
        title: { type: String, require: true },
        picture: { type: String },
        content: { type: String },
        shortcontent: { type: String },
        author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        status: { type: Boolean, default: true },
        slug: { type: String, slug: "title", unique: true },
        keywordseo: { type: String },
        descriptionseo: { type: String }
}, {
        timestamps: true
});

module.exports = mongoose.model('Blog', Blog)