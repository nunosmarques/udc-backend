const express = require('express')

module.exports = function(server){

    //API routes
    const router = express.Router()
    server.use('/api', router)

    //MEMBERS routes
    const memberService = require('../api/todo/todoService')
    memberService.register(router, '/todo')

    const testeService = require('../api/teste/testeService')
    testeService.register(router, '/teste')
}