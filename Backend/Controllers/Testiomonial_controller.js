const Testimonial_model = require("../models/Testimonial_model") 


module.exports = ({
    create: (req,res) => {
        const Faq = new Testimonial_model(req.body)
        Faq.save(req.body,function(err,item){
            if(err){
                res.status(406).json({message : "failed to create an Testimonial "})
            }
            else{
                res.status(201).json({message : "Testimonial created successfully ", data:item})
            }

        })

    },
  getall : (res, req) => {
    Testimonial_model.find({},(err,item) =>{
        if(err){
           res.status(406).json({message : "failed to Get all Testimonial  "})
        }
        else{
           res.status(201).json({message : "Get all Testimonial successfully ",data:items})
        }

     })
  }, 
  getbyid : (req,res) =>{
    Testimonial_model.findById(req.params.id,(err,item) =>{
        if(err){
            res.status(406).json({message : "failed to Get Testimonial by id "})
        }
        else{
            res.status(201).json({message : "Get Testimonial by id successfully ",data:item})
        }

  })
  },
  getbyname : (req,res) =>{
    Testimonial_model.find({name:req.query.name},(err,item) =>{
        if(err){
            res.status(406).json({message : "failed to Get Testimonial by name "})  
        }
        else{
            res.status(201).json({message : "Get Testimonial by name successfully ",data:item})           
        }
  })
},
update: function(req, res) {
    Testimonial_model.findByIdAndUpdate(req.params.id, req.body, { new: true }, //pour accepter le changement de la premiere fois},
        function(err, item) {
            if (err) {
                res.status(406).json({ message: "failed to update Testimonial" })


            } else {

                res.status(201).json({ message: " success of update", data: item })
            }
        })


},
delete: function(req, res) {
    Testimonial_model.findByIdAndRemove(req.params.id, function(err, item) {
        if (err) {
            res.status(406).json({ message: "failed to delete Testimonial" })


        } else {

            res.status(201).json({ message: " success of delete" })
        }
    })

}

})