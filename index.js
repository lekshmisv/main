const express = require('express');
const mainrouter = require('./router/router');
const app = express();

app.use('/',mainrouter);  //http:localhost:3000/home/


app.listen(3000,(error,result)=>{
    if(error){
        return console.log(error);
    
} 
       
    console.log('App running on localhost 3000');
    });
    

