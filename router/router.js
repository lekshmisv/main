const express = require('express');
const router = new express.Router();

router.get('/',(req,res)=>{
       res.send("hlo world")
});
module.exports=router;

