const User = require("../model/User")
const { get } = require("mongoose")

module.exports={
    
    async show (req,res){
        try{
            const {userId} = req.params
            const users = await User.find({
                _id: userId
            })
                console.log(users)
                res.json({users})
            } catch(err){
                console.log(err)
                res.json({"msg":'erro no servidor'})
            }
    },

    async list (req,res){
        try{
            const users = await User.find()
                console.log(users)
                res.json({users})
            } catch(err){
                console.log(err)
                res.json({"msg":'erro no servidor'})
            }
    },
    
    async create (req,res) {
       
        try{
        const {nome, cidade, idade} = req.body
        const user = await User.create({nome,cidade,idade})
        console.log(user)
        res.json({user})
            
        } catch(err) {
            console.log(err)
            res.json({"msg":"Erro no servidor"})
            }
     },

     async update (req,res) {
       
        try{
        const {nome, cidade, idade} = req.body
        const {userId} = req.params
        const user = await User.findByIdAndUpdate({
            _id: userId
        },
        {
        nome,
        cidade,
        idade
        },{
            new:true
        })
        
        console.log(user)
        
        res.json({user})

        } catch(err) {
            console.log(err)
            res.json({"msg":"Erro no servidor"})
            }
     },
     async create (req,res) {
       
        try{
        const {nome, cidade, idade} = req.body
        const user = await User.create({nome,cidade,idade})
        console.log(user)
        res.json({user})
            
        } catch(err) {
            console.log(err)
            res.json({"msg":"Erro no servidor"})
            }
     },

     async delete (req,res) {

        try {
        const {userId} = req.params
        const user = await User.findByIdAndDelete({_id: userId})
        console.log(user)
        res.json({user})

            } catch(err) {
            console.log(err)
            res.json({"msg":"Erro no servidor"})
            }
     }
}