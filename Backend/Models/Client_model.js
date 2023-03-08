const user_model = require("./User_models")

const mongoose = require('mongoose')

const clientSchema = new mongoose.Schema({
    address:{
        type:String,
        required:true
    }
})


const Clients = user_model.discriminator("Clients",clientSchema)

module.exports = mongoose.model("Clients")