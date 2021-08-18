console.log("started");
function login(email,password,callback){
    setTimeout(()=>{
        callback({email:"lekshmisv1998",password:"pass"});
    },5000);
    
}
function fetchpic(email,callback){
    setTimeout(()=>{
callback({data: "data"})
    },5000);
 
}
function fetchdata(data,callback){
    setTimeout(()=>{
        callback("data");
    },5000);
}

//callback
login("lekshmisv1998","pass",(user)=>{
    console.log(user);
    fetchpic(user.email,(data)=>{
        console.log(data);
    });
    fetchdata(user.data,(string)=>{
        console.log(string);
    });
});
console.log("ended");