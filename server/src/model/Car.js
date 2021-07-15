const mongoose = require('mongoose')
mongoose.Promise = global.Promise
const carSchema = new mongoose.Schema({
    brand: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    matricule: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    updatedAt: Date
})

module.exports = mongoose.model('Car', carSchema)