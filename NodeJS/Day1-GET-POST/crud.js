const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

const dbPath = path.join(__dirname, 'db.json');

// GET all items

router.get('/get/data',(req,res) => {
    try{
        const fileData = fs.readFileSync(dbPath,'utf8')
        const db = JSON.parse(fileData)
        return res.status(200).json({message:'success',data:db})

    }catch(error){
        console.log("error",error)
        return res.status(500).json({message:'error',error:error.message})
    }
})

router.post('/data',(req,res)=>{
   const {id,name,age} = req.body;
   if(!id || !name || !age){
    return res.status(400).json({message:'id,name,age are required fields'});
   

   }
   const fileData = fs.readFileSync(dbPath,'utf8');

   const data = JSON.parse(fileData);
   data.push({id,age,name});
   fs.writeFileSync(dbPath,JSON.stringify(data));

   return res.status(201).json({message:'success',data:data});
});

module.exports = router;