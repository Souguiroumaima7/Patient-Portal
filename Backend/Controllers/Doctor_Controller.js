const Doctors_model = require("../models/Doctors_model") 


module.exports = ({
    create: (req,res) => {
        const Doctors = new Doctors_model(req.body)
        Doctors.save(req.body,function(err,item){
            if(err){
                res.status(406).json({message : "failed to create an Doctors "})
            }
            else{
                res.status(201).json({message : "Doctors created successfully ", data:item})
            }

        })

    },
  getall : (res, req) => {
    Doctors_model.find({},(err,item) =>{
        if(err){
           res.status(406).json({message : "failed to Get all Doctors  "})
        }
        else{
           res.status(201).json({message : "Get all Doctors successfully ",data:items})
        }

     })
  }, 
  getbyid : (req,res) =>{
    Doctors_model.findById(req.params.id,(err,item) =>{
        if(err){
            res.status(406).json({message : "failed to Get Doctors by id "})
        }
        else{
            res.status(201).json({message : "Get Doctors by id successfully ",data:item})
        }

  })
  },
  getbyname : (req,res) =>{
    Doctors_model.find({name:req.query.name},(err,item) =>{
        if(err){
            res.status(406).json({message : "failed to Get Doctors by name "})  
        }
        else{
            res.status(201).json({message : "Get Doctors by name successfully ",data:item})           
        }
  })
},
update: function(req, res) {
    Doctors_model.findByIdAndUpdate(req.params.id, req.body, { new: true }, //pour accepter le changement de la premiere fois},
        function(err, item) {
            if (err) {
                res.status(406).json({ message: "failed to update Doctors" })


            } else {

                res.status(201).json({ message: " success of update", data: item })
            }
        })


},
delete: function(req, res) {
    Doctors_model.findByIdAndRemove(req.params.id, function(err, item) {
        if (err) {
            res.status(406).json({ message: "failed to delete Doctors" })


        } else {

            res.status(201).json({ message: " success of delete" })
        }
    })

}

})