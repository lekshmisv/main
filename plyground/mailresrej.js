const mail=(mail)=>{
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            if(mail=="lekshmi"){
               res("sucess...")
            }else{
                rej("err occur")
            }
        },5000);
    });
}
mail("lekshmi").then((email)=>{
    console.log(email);
}).catch((error)=>{
    console.log(error);
});