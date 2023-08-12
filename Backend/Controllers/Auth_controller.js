const user_model = require("../models/User_models")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const JWT_SECRET = process.env.JWT_SECRET
const RT_SECRET = process.env.RT_SECRET

const generateAccessToken = (user)=>{
return jwt.sign({id:user._id,email:user.email},JWT_SECRET,{expiresIn:"1m"})
}
const generateRefreshToken = (user)=>{
    return jwt.sign({id:user._id,email:user.email},RT_SECRET,{expiresIn:"4m"})
} 
let refreshtokens = []
module.exports={
    login:async(req,res)=>{
        const user = await user_model.findOne({email:req.body.email})
        if(!user){
            res.status(406).json({message:"email not exist"})
        }else{
            const validPassword = await bcrypt.compareSync(req.body.password,user.password)
            if(!validPassword){
                res.status(406).json({message:"password incorrect"})
            }else{           
                 const Token = generateAccessToken(user)
                const RefreshToken = generateRefreshToken(user)
                refreshtokens.push(RefreshToken)           
              res.status(200).json({message:"welcome",data:user,AT:Token,RT:RefreshToken})
            }
        }
    },
    RefreshToken:(req,res,next)=>{
        const RefreshToken = req.body.token       
      if(!RefreshToken) return res.status(401).json("you are not authenticated")
        if(!refreshtokens.includes(RefreshToken)){
            return res.status(401).json("refresh token is not valid")
        }
        jwt.verify(RefreshToken,RT_SECRET,(err,user)=>{
            err && console.log(err)
            refreshtokens = refreshtokens.filter((token)=>token!==RefreshToken)
            const newToken = generateAccessToken(user)
            const newRefreshToken = generateRefreshToken(user)           
     refreshtokens.push(newRefreshToken)       
         res.status(200).json({AT:newToken,RT:newRefreshToken})
        })
    },
    logout:(req,res)=>{
        const RefreshToken = req.body.token
        refreshtokens = refreshtokens.filter((token)=>token!==RefreshToken)    
     res.status(200).json("you are logout")
    }}
