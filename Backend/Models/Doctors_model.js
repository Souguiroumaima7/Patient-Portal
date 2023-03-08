

const mongoose = require('mongoose')    



const DoctorsSchema = new mongoose.Schema({
    appointement_id: {
        type: String,
        required: true,
    },
    appointement_name: {
        type: String,
        required: true,
    },
    appointement_date: {
        type: String,
        required: true,
    },
    appointement_time: {
        type: String,
        required: true,
    },
    appointement_address: {
        type: String,
        required: true,
    },
    appointement_phone: {
        type: String,
        required: true
    },
    appointement_email: {
        type: String,
        required: true,
    },
    appointement_status: {
        type: String,
        required: true
    }

     
})
  
  
module.exports = mongoose.model("Doctors",DoctorsSchema)




