const route = require("express").Router()

const Doctor_Controller = require("../Controllers/Doctor_Controller")
const Upload = require("../middlewares/UploadFiles") 

route.post("/create",Doctor_Controller.create)
route.get("/getall",Doctor_Controller.getall)
route.get("/getbyid",Doctor_Controller.getbyid)
route.get("/getbyname",Doctor_Controller.getbyname)
route.put("/update/:id",Doctor_Controller.update)
route.delete("/delete/:id",Doctor_Controller.delete) 


module.exports = route  

