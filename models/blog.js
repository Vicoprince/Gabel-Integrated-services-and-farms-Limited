const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// creating a new schema
// A schema is the thing that defines the structure of our documents
// and the model is the thing that surrounds that and provides us
// with the interface for communicating with the db collection  type
const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    snippet: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
}, { timestamps: true });

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;