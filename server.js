const express = require('express') 

const bodyParser = require('body-parser')

const mongoose = require("mongoose")

const app = express()

let port = 3000

app.listen(port,function () {
    console.log('Servidor rodando na porta 3000 !')
})

mongoose.connect("mongodb+srv://api-node:Trug$1414@cluster0.okbc4.mongodb.net/<dbname>?retryWrites=true&w=majority",{ useNewUrlParser: true, useUnifiedTopology: true })

/*
app.get ('/',function (req,res) {
    res.send('Usando Nodemon')
})


app.get ('/teste', function(req,res) {
    res.send('Meu primeiro teste')
})

app.get ('/teste/2', function(req,res) {
    res.send('Meu segundo teste')

users["Gabriel"] = {idade:39, cidade:"Tefé"}
console.log(users)

*/
app.use(bodyParser.json())

const users = {
   
}

const User = require("./src/model/User")

app.post ('/', async function (req,res) {
   const {nome, cidade, idade} = req.body
   const user = await User.create({nome,cidade,idade})
   res.json({user})
})

/*
app.post ('/', function(req,res) {
    const {nome, cidade, idade} = req.body
    users [nome] = {cidade, idade, nome}
    console.log(req.body)
    res.send('Cadastro efetuado com sucesso usando Post!')
})

app.put ('/', function(req,res) {
    res.send('Usando Put!')

})

app.delete ('/', function(req,res) {
    res.send('Usando delete!')

})
*/

//MONGO DB
