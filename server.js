const express = require('express') 

const bodyParser = require('body-parser')

const mongoose = require("mongoose")

const app = express()

let port = 3000

app.listen(port,function () {
    console.log('Servidor rodando na porta 3000 !')
})

mongoose.connect("mongodb+srv://api-node:Trug$1414@cluster0.okbc4.mongodb.net/<dbname>?retryWrites=true&w=majority",{ useNewUrlParser: true, useUnifiedTopology: true })

app.use(bodyParser.json())

const users = {
   
}

app.use('/',require("./src/routes.js"))

//MONGO DB
