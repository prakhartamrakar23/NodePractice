const http=require("http")
const server=http.createServer((request,response)=>{
    console.log("new request received...");
    
    response.end("hello from server")
})
server.listen(3500,'localhost',()=>{
    console.log("server has started! http://localhost:3500")
});