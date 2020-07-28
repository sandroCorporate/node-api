const mongoose = require("mongoose")    
const userSchema = new mongoose.Schema(
    {
    nome: {
        type: String,
        require: true,
        },
    cidade: {
        type: String,
        },
    idade: {
        type: Number
        },
    }
)
module.exports = mongoose.model("User",userSchema)