const route = require("express").Router()

const Appointement_controler = require("../Controllers/Appointement_controler")


route.post("/create",Appointement_controler.create)
route.get("/getall",Appointement_controler.getall)
route.get("/getbyid",Appointement_controler.getbyid)
route.get("/getbyname",Appointement_controler.getbyname)
route.put("/update/:id",Appointement_controler.update)
route.delete("/delete/:id",Appointement_controler.delete) 


module.exports = route  

