const mongoose = require('mongoose')

const mainSchema = new mongoose.Schema( {
    name: {
        type: String,
        required: true },
    category: String,
    description: String,
    species: String,
    house: String,
    dateOfBirth: String,
    yearOfBirth: Number,
    wand: {
        wood: String,
        core: String,
        length: Number,
    },
    patronus: String,
    actor: String,
    img: String,
    likes: Number,
});

const Entries = mongoose.model('Entries', mainSchema)
module.exports = Entries
