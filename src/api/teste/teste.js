
const restful = require('node-restful')
const mongoose = restful.mongoose

const testeSchema = new mongoose.Schema({
    _id: { type: Number, require: true },
    member: { type: String, require: true, default: 0 },
    paid: { type: Boolean, require: true, default: false },
    createdAt: { type: Date, default: Date.now }
})

module.exports = restful.model('teste', testeSchema);