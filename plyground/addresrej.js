const add=(a,b)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if ((a>=1 && a<=100) && (b>=1 && b<=100)){
                resolve(a+b);
                
            } else {
                reject("Number is not between 1 and 100");
                
            }
        },5000);
    });
}
/* add(50,700).then((sum)=>{
    console.log(sum);
}).catch((error)=>{
    console.log(error);
})*/
async function display(){
    const result = await add(50,50);
    console.log(result);
}
display();