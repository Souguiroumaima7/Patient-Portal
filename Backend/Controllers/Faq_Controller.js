const Faq_model = require("../models/Faq_model") 


module.exports = ({
    create: (req,res) => {
        const Faq = new Faq_model(req.body)
        Faq.save(req.body,function(err,item){
            if(err){
                res.status(406).json({message : "failed to create an Faq "})
            }
            else{
                res.status(201).json({message : "Faq created successfully ", data:item})
            }

        })

    },
  getall : (res, req) => {
    Faq_model.find({},(err,item) =>{
        if(err){
           res.status(406).json({message : "failed to Get all Faq  "})
        }
        else{
           res.status(201).json({message : "Get all Faq successfully ",data:items})
        }

     })
  }, 
  getbyid : (req,res) =>{
    Faq_model.findById(req.params.id,(err,item) =>{
        if(err){
            res.status(406).json({message : "failed to Get Faq by id "})
        }
        else{
            res.status(201).json({message : "Get Faq by id successfully ",data:item})
        }

  })
  },
  getbyname : (req,res) =>{
    Faq_model.find({name:req.query.name},(err,item) =>{
        if(err){
            res.status(406).json({message : "failed to Get Faq by name "})  
        }
        else{
            res.status(201).json({message : "Get Faq by name successfully ",data:item})           
        }
  })
},
update: function(req, res) {
    Faq_model.findByIdAndUpdate(req.params.id, req.body, { new: true }, //pour accepter le changement de la premiere fois},
        function(err, item) {
            if (err) {
                res.status(406).json({ message: "failed to update Faq" })


            } else {

                res.status(201).json({ message: " success of update", data: item })
            }
        })


},
delete: function(req, res) {
    Faq_model.findByIdAndRemove(req.params.id, function(err, item) {
        if (err) {
            res.status(406).json({ message: "failed to delete Faq" })


        } else {

            res.status(201).json({ message: " success of delete" })
        }
    })

}

})