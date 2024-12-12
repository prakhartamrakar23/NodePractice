import fs from "fs"
try {
    fs.readFileSync("p.txt","utf-8")
    console.log(data);
    
} catch (error) {
    console.log(error);
    
}