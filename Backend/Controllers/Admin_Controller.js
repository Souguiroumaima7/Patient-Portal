const admin_model  = require ("../models/Admin_model")


module.exports={

    register:(req,res)=>{

        
           const admin = new admin_model(req.body)
           admin.save(req.body,(err,item)=>{
            if(err){
                res.status(406).json({message:"failed to save admin "+err})
            }else{
                res.status(201).json({message:"admin saved successfully",data:item})
            }
           })
         },
            getall:(req,res)=>{
            admin_model.find({},(err,items)=>{
                if(err){
                    res.status(406).json({message:"failed to get all registered admin"})
                }else{
                 res.status(201).json({message:"list of registered admin",data:items }) 
                }
            })
        },
        getById:(req,res)=>{
            admin_model.findById(req.params.id,(err,item)=>{
                if(err){
                    res.status(406).json({message:"cannot get admin by this id"})
                }else{
                    res.status(201).json({message:"admin",data:item})
                }
            }) 
        },
        getByName:(req,res)=>{
            admin_model.find({firstname:req.query.firstname},(err,items)=>{
             if(err){
                res.status(406).json({message:"failed to get admin by this name"}+err)
             }else{
                 res.status(201).json({message:"admin",data:items})
             }
            })
        },
        update:(req,res)=>{
            admin_model.findByIdAndUpdate(req.params.id,req.body,{new:true},(err,item)=>{
                if(err){
                    res.status(406).json({message:"failed to updated admin"})
                }else{
                    res.status(200).json({message:"admin updated successuffly",data:item})
                }
            })
        },
        delete:(req,res)=>{
            admin_model.findByIdAndRemove(req.params.body, (err)=>{
                if(err){
                    res.status(406).json({message:"failed to deleted admin"})
                }else{
                    res.status(201).json({message:"admin deleted successuffly"})
                }
            })
        }
           
}      
