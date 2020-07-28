const express = require ("express")

const routes = express.Router()

const User = require("./model/User")

routes.post ('/user', async function (req,res) {
    
    
    const {nome, cidade, idade} = req.body
    const user = await User.create({nome,cidade,idade})
    res.json({user})
 })

module.exports = routes


