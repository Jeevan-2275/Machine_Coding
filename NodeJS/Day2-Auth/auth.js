const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();

const dbPath  = path.join(__dirname,'auth.json');
console.log("path",dbPath);

router.post('/sighup',(req,res) => {
    
})