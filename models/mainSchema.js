const mongoose = require('mongoose')

const mainSchema = new mongoose.Schema( {
    name: {
        type: String,
        required: true },
    description: String,
    img: String,
    likes: Number,
});

const Entries = mongoose.model('Entries', mainSchema)
module.exports = Entries
