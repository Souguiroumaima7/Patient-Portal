const route = require("express").Router()

const Testiomonial_controller = require("../Controllers/Testiomonial_controller")
const Upload = require("../middlewares/UploadFiles") 

route.post("/create",Testiomonial_controller.create)
route.get("/getall",Testiomonial_controller.getall)
route.get("/getbyid",Testiomonial_controller.getbyid)
route.get("/getbyname",Testiomonial_controller.getbyname)
route.put("/update/:id",Testiomonial_controller.update)
route.delete("/delete/:id",Testiomonial_controller.delete) 


module.exports = route  

