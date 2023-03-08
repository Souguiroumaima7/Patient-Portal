const route = require("express").Router()

const Departemnt_controller = require("../Controllers/Departemnt_controller")
const Upload = require("../middlewares/UploadFiles") 

route.post("/create",Departemnt_controller.create)
route.get("/getall",Departemnt_controller.getall)
route.get("/getbyid",Departemnt_controller.getbyid)
route.get("/getbyname",Departemnt_controller.getbyname)
route.put("/update/:id",Departemnt_controller.update)
route.delete("/delete/:id",Departemnt_controller.delete) 


module.exports = route  

