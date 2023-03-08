const express =  require("express")
const router = express.Router() 
const app = express()
app.use(express.json())

const database = require("./config/database")
const dotenv = require("dotenv").config()


PORT = process.env.PORT


const client_router = require("./routers/Client_router")
app.use("/clients",client_router)

const auth_router = require("./routers/Auth_router")
app.use ("/auth",auth_router)

const admin_router = require("./routers/Admin_router")
app.use("/admin",admin_router)


const Appointement_router = require("./routers/Appointement_router")
app.use("/Appointement",Appointement_router)

const Departement_router = require("./routers/Departement_router")
app.use("/Departement",Departement_router)

const Doctor_router = require("./routers/Doctor_router")
app.use("/Doctor",Doctor_router)  


const Faq_router = require("./routers/Faq_router")
app.use("/Faq",Faq_router)  


const Testiomonial_router = require("./routers/Testiomonial_router")
app.use("/Testiomonial",Testiomonial_router) 




app.listen(PORT,()=>{
    console.log(`server working good on http://localhost:${PORT}`)
 })
    
