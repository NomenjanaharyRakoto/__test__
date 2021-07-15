const mongoose = require('mongoose')
const Schema = mongoose.Schema
mongoose.Promise = global.Promise

const commentSchema = new Schema({
    body: {
        type: String,
        required: true
    },
    car: {
        type: Schema.Types.ObjectId,
        ref: 'Car'
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    updateAt: Date,
})

module.exports = mongoose.model('Comment', commentSchema)