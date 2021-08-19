const login=function(email,password){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({email:email,password:password});
        },5000);
    });
}
login("lekshmisv199","pass").then((user)=>{
    console.log(user);
})