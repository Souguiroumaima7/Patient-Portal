const route = require("express").Router()

const Faq_Controller = require("../Controllers/Faq_Controller")


route.post("/create",Faq_Controller.create)
route.get("/getall",Faq_Controller.getall)
route.get("/getbyid",Faq_Controller.getbyid)
route.get("/getbyname",Faq_Controller.getbyname)
route.put("/update/:id",Faq_Controller.update)
route.delete("/delete/:id",Faq_Controller.delete) 


module.exports = route  

