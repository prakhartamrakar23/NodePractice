//general 

const http=require("http");
const fs=require("fs");

const html=fs.readFileSync("./index.html"  )
const server=http.createServer((request,response)=>{
    let path=request.url;
    if(path==='/'|| path.toLocaleLowerCase()==='/home'){
        response.end("You are in home page")
    }else if(path.toLocaleLowerCase()==='/about'){
        response.end("You are in about page")
    }else if(path.toLocaleLowerCase()==='/contact'){
        response.end("you are in contact page")
    }else{
        response.end("404 error ")
    }
})

server.listen(3500,'localhost',()=>{
    console.log("server has started  http://localhost:3500")
})