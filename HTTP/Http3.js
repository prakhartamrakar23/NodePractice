//using html

const http=require("http");
const fs=require("fs");

const html=fs.readFileSync("./index.html"  ).toString();
const server=http.createServer((request,response)=>{
    let path=request.url;

    if(path==='/'|| path.toLocaleLowerCase()==='/home'){
        response.end(html.replace('{{%CONTENT%}}','You are in Home Page'))
    }else if(path.toLocaleLowerCase()==='/about'){
        response.end(html.replace('{{%CONTENT%}}','You are in About Page'))
    }else if(path.toLocaleLowerCase()==='/contact'){
        response.end(html.replace('{{%CONTENT%}}','You are in Contact Page'))
    }else{
        response.end(html.replace('{{%CONTENT%}}','404 error page not found'))
    }
})

server.listen(6500,'localhost',()=>{
    console.log("server has started  http://localhost:6500")
})