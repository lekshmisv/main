const express = require('express');
const router = new express.Router();
const Student=require('../model/student');

router.get('/',(req,res)=>{
      res.json({
             message:"hlo world"
      });
});

router.post('/',(req,res)=>{
      const{name,age,rollno,batch}=req.body;
      const newStd=new Student({
            name,
            age,
            rollno,
            batch

      });
      newStd.save((err,result)=>{
            if(err){
                  res.json({message:"Inserted failed",Error:err})
            }
            res.json({message:"Inserted sucessfully",data:result});
      })

      //res.json({message:"data has been served",data:{name:name,age:age}})
      /* res.json({message:"data has been served",data:{
            name,
            age
      } */
});

router.get('/viewData',async(req,res)=>{
      const std=await Student.find();
      //const std=await Student.findById({_id:'612a1afdd36bdc109a566cb1'});
      if (!std) {
            return res.json({message:"No std in the db"});
      }
      res.json({data:std})

     // console.log(std);
});
router.put('/stdUpdate',async(req,res)=>{
const std=await Student.findByIdAndUpdate({_id:'612a52d2464fde0d6b4b9605'},{
      name:"sree",
      age:25
})
if (!std) {
      return res.json({message:"No std in the db"});
}
res.json({data:std})

});

router.delete('/stdDelete',async(req,res)=>{
const id=req.query.id
const std=await Student.findByIdAndDelete({_id:id})
if (!std) {
      return res.json({message:"No std in the db"});
}
//res.json({data:std})
res.json({message:"Deleted Sucessfully"})
});



router.get('/user',async(req,res)=>{
  //const std=await Student.find({_id:'612a1afdd36bdc109a566cb1'})
      const std=await Student.find()
      if (!std) {
            return res.json({message:"No std in t he db"});
            
      }
      res.json({data:std})
})

module.exports=router;

