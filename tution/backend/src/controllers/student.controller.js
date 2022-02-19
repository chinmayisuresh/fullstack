const express=require('express');
const router=express.Router();
const students = require('../data/student')
const Students=require('../models/student.model');
const mongoose=require('mongoose');

const db = mongoose.connection;

db.once('open', async () => {
    if((await Students.countDocuments().exec()) > 0){
        return;
    }
    Students.insertMany(students).then((res)=> res.json('Students added successfully')).catch(err => res.status(400).json('Error: ' + err))
})

router.get("/",async(req,res)=>{
    try{
        const user=await Students.find();
        const total=user.length;
        const total_pages=Math.ceil(user.length/5);

        const page = Number.parseInt(req.query.page)
        const limit = Number.parseInt(req.query.limit)

        const startIndex = (page - 1) * limit;
        const endIndex =  page * limit;
        

        const user1=user.slice(startIndex,endIndex);
            
        return res.status(200).send(user1);
    }
    catch(e){
           return res.send(e.message);
    }
    
})

router.get("/grade",async(req,res)=>{
    try{
        const user=await Students.find().sort({'grade':1});
        const total=user.length;
        const total_pages=Math.ceil(user.length/5);

        const page = Number.parseInt(req.query.page)
        const limit = Number.parseInt(req.query.limit)

        const startIndex = (page - 1) * limit;
        const endIndex =  page * limit;
        

        var user1=user.slice(startIndex,endIndex);
        return res.status(200).send(user1);
    }
    catch(e){
           return res.send(e.message);
    }
})

router.get("/gender",async(req,res)=>{
    try{
        const gender=Number.parseInt(req.query.gender);
        if(gender==0){
            var name='m';
        }
        else{
            var name='f';
        }
         const user=await Students.find({'gender':{$eq:name}});
        
        
       const total=user.length;
      const total_pages=Math.ceil(user.length/5);

        const page = Number.parseInt(req.query.page)
        const limit = Number.parseInt(req.query.limit)
        
        

        const startIndex = (page - 1) * limit;
        const endIndex =  page * limit;
        

        const user1=user.slice(startIndex,endIndex);
        
        return res.status(200).send(user1);
    }
    catch(e){
           return res.send(e.message);
    }
    
})

router.get("/age",async(req,res)=>{
    try{
        const user=await Students.find().sort({'age':1});
        const total=user.length;
        const total_pages=Math.ceil(user.length/5);

        const page = Number.parseInt(req.query.page)
        const limit = Number.parseInt(req.query.limit)

        const startIndex = (page - 1) * limit;
        const endIndex =  page * limit;
        

        const user1=user.slice(startIndex,endIndex);
            
        return res.status(200).send(user1);
    }
    catch(e){
           return res.send(e.message);
    }
    
})

router.get('/search',async(req,res)=>{
    try{
    const name=req.query.name;
    const user=await Students.findOne({full_name:name})
    return res.status(200).send(user);
    }
    catch(e){
        return res.send(e.message);
    }

})





module.exports=router;