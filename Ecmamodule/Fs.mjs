import fs from "fs";
//it work asynchronosly
console.log("At the start...");
fs.appendFile('p.txt',"\n enjoying",(err)=>{
    err ? console.log(err) : console.log("success...")
});

