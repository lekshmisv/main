const mongoose=require('mongoose');

const studentSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true,
        trim:true,
    },
    age:{
        type:Number,
        require:true,
        trim:true,
    },
    rollno:{
        type:Number,
        require:true,
        trim:true,
    },
    batch:{
        type:String,
        require:true,
        trim:true,
    }
});
const student=mongoose.model('student',studentSchema);
module.exports=student;