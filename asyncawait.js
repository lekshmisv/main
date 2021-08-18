const login=function(email,password){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("logged in");
        },5000);
    });
}
async function displayresult(){
    const data=await login("lekshmisv","pass");
    console.log(data);
}
displayresult();