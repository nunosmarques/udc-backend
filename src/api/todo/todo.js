const restful = require('node-restful')
const mongoose = restful.mongoose

const todoSchema = new mongoose.Schema({
    _id: { type: Number },
    name: { type: String },
    age: { type: Number },
    memberSince: { type: Date, default: Date.now }
})

module.exports = restful.model('todo', todoSchema);