const fs =require("fs")
const path=require("path")

//read file by sync
try{
const data=fs.readFileSync("Test.txt",'utf-8');
console.log(data);
}catch(err){
    console.log(err); 
}
console.log("hello");

