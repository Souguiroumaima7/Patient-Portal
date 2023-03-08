

const mongoose = require('mongoose')    



const FaqSchema = new mongoose.Schema({
    title: {
        type: String,
        required : true
    },
    content: {
        type: String,
        required : true
    },
    type : {
        type: String,
        required : true
    },


 
     
})
  
  
module.exports = mongoose.model("Faqs",FaqSchema)




