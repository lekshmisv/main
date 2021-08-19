let data={
    message:"Iam..",
    data:{
    name:"lechu",
    age:22,
    batch:"mca"
    }
};
let stringdata=JSON.stringify(data)
let stringg=`{"message":"Iam..","data":{"name":"lechu","age":22,"batch":"mca"}}`
let parsedata=JSON.parse(stringg);
console.log(typeof stringdata);
console.log(typeof parsedata)