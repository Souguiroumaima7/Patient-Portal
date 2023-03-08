
const mongoose = require('mongoose')    


const DepartementSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },


})
module.exports = mongoose.model("Departements",DepartementSchema)