const user_model = require("./User_models")


const mongoose = require('mongoose')    



const AdminSchema = new mongoose.Schema({
     
})
  
  
const admins  = user_model.discriminator("admins",AdminSchema)  
module.exports = mongoose.model("admins")



