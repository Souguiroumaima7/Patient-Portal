const Departement_model = require("../models/Departement_model") 


module.exports = ({
    create: (req,res) => {
        const Departement = new Departement_model(req.body)
        Departement.save(req.body,function(err,item){
            if(err){
                res.status(406).json({message : "failed to create an Departement "})
            }
            else{
                res.status(201).json({message : "Departement created successfully ", data:item})
            }

        })

    },
  getall : (res, req) => {
    Departement_model.find({},(err,item) =>{
        if(err){
           res.status(406).json({message : "failed to Get all Departement  "})
        }
        else{
           res.status(201).json({message : "Get all Departement successfully ",data:items})
        }

     })
  }, 
  getbyid : (req,res) =>{
    Departement_model.findById(req.params.id,(err,item) =>{
        if(err){
            res.status(406).json({message : "failed to Get Departement by id "})
        }
        else{
            res.status(201).json({message : "Get Departement by id successfully ",data:item})
        }

  })
  },
  getbyname : (req,res) =>{
    Departement_model.find({name:req.query.name},(err,item) =>{
        if(err){
            res.status(406).json({message : "failed to Get Departement by name "})  
        }
        else{
            res.status(201).json({message : "Get Departement by name successfully ",data:item})           
        }
  })
},
update: function(req, res) {
    Departement_model.findByIdAndUpdate(req.params.id, req.body, { new: true }, //pour accepter le changement de la premiere fois},
        function(err, item) {
            if (err) {
                res.status(406).json({ message: "failed to update Departement" })


            } else {

                res.status(201).json({ message: " success of update", data: item })
            }
        })


},
delete: function(req, res) {
    Departement_model.findByIdAndRemove(req.params.id, function(err, item) {
        if (err) {
            res.status(406).json({ message: "failed to delete Departement" })


        } else {

            res.status(201).json({ message: " success of delete" })
        }
    })

}

})