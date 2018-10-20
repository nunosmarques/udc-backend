const mysql = require('mysql')

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'socialart',
    port: '3306'
})

connection.connect(function(err){
    if(err)
        throw err
    
    console.log('Connected to database.')
})

module.exports = connection;