const Appointement_model = require("../models/Appointement_model") 


module.exports = ({
    create: (req,res) => {
        const Appointement = new Appointement_model(req.body)
        Appointement.save(req.body,function(err,item){
            if(err){
                res.status(406).json({message : "failed to create an Appointement "})
            }
            else{
                res.status(201).json({message : "Appointement created successfully ", data:item})
            }

        })

    },
  getall : (res, req) => {
    Appointement_model.find({},(err,item) =>{
        if(err){
           res.status(406).json({message : "failed to Get all Appointement  "})
        }
        else{
           res.status(201).json({message : "Get all Appointement successfully ",data:items})
        }

     })
  }, 
  getbyid : (req,res) =>{
    Appointement_model.findById(req.params.id,(err,item) =>{
        if(err){
            res.status(406).json({message : "failed to Get Appointement by id "})
        }
        else{
            res.status(201).json({message : "Get Appointement by id successfully ",data:item})
        }

  })
  },
  getbyname : (req,res) =>{
    Appointement_model.find({name:req.query.name},(err,item) =>{
        if(err){
            res.status(406).json({message : "failed to Get Appointement by name "})  
        }
        else{
            res.status(201).json({message : "Get Appointement by name successfully ",data:item})           
        }
  })
},
update: function(req, res) {
    Appointement_model.findByIdAndUpdate(req.params.id, req.body, { new: true }, //pour accepter le changement de la premiere fois},
        function(err, item) {
            if (err) {
                res.status(406).json({ message: "failed to update Appointement" })


            } else {

                res.status(201).json({ message: " success of update", data: item })
            }
        })


},
delete: function(req, res) {
    Appointement_model.findByIdAndRemove(req.params.id, function(err, item) {
        if (err) {
            res.status(406).json({ message: "failed to delete Appointement" })


        } else {

            res.status(201).json({ message: " success of delete" })
        }
    })

}

})