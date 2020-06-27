const express = require('express') 

const app = express()

let port = 3000

app.listen(port,function () {
    console.log('Servidor rodando na porta 3000 !')
})

app.get ('/',function (req,res) {
    res.send('Minha primeira rota na porta 3000')
})


app.get ('/teste', function(req,res) {
    res.send('Meu primeiro teste')
})

app.get ('/teste/2', function(req,res) {
    res.send('Meu segundo teste')
})