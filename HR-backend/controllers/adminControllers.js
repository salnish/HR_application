const jwt = require('json-web-token');
const bcrypt = require('bcryptjs');
const User = require('../models/user');

const addEmployee =async(req,res,next)=>{
    try{
        console.log(req.body)
        const {name,email,phone,password,empId}=req.body;
        if(!name||!email||!phone||!password||!empId){
            res.status(400)
            throw new Error('please add all the fields')
        }
    
        const userExists = await User.findOne({email});
    
        if(userExists){
            res.status(400);
            throw new Error('user already exists');
        }
    
        const salt =await bcrypt.genSalt(10);
        req.body.password=await bcrypt.hash(password,salt);
    
        const user = await User.create(req.body);
    
        if(user){
            res.status(201).json({
                id:user.id,
                name:user.name,
                email:user.email,
                empId:user.empId
            })
        } else {
            res.status(400);
            throw new Error('Invalid user data');
        }
    }catch(error){
        res.status(400);
        next(error)
    }
}


module.exports ={
    addEmployee
}