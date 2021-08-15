const express=require('express');
const app=express();
app.listen(3000,(error)=>{
    if(error){
        return console.log(error);
    }
    console.log('App running on localhost 3000');
});

app.get('/',(req,res)=>{
    res.send("hello world");
});