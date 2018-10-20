const teste = require('./teste')

teste.methods(['get','post','put','delete'])
teste.updateOptions({new: true, runValidators: true})

module.exports = teste