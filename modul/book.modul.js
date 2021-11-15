const mongoose = require('mongoose')

let s = Math.floor(Math.random() * 5)
const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    public: {
        type: Number,
        required: true,
        validate: {
            validator: (v) => {
                const date = new Date().getFullYear();
                return v < date
            }
        },
        message: 'The Year is not valide'
    },
    language: {
        type: String,
        required: true,
        validate: {
            validator: (v) => {
                return v.length === 2
            }
        },
        // message: 'The language only on string ' 
    },
    stars: {
        type: Number,
        required: false,
        default : s,
        validate: {
            validator: (v) => {
              return (v < 6 && v >0)
            }
        },
        message: 'rating between 1 and 5  '
    }
})

const book = mongoose.model('library', bookSchema)

module.exports = {
    book
}