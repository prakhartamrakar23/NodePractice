const fs=require('fs')
//it is used to take input from node js
const input=process.argv;

if (input[2]=='add') {
 fs.writeFileSync(input[3],input[4])   
}else if(input[2]=='remove'){
    fs.unlinkSync(input[3])// it is used to delete file 
}
else{
    console.log('invalid input');
    
}