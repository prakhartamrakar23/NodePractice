const fs=require('fs')
const http=require('http')

const html=fs.readFileSync('./index.html').toString();
let products=JSON.parse(fs.readFileSync('./data.json','utf-8'))
let productListHtml=fs.readFileSync('./product-list.html','utf-8');

let productHtmlArray=products.map((prod)=>{
    let output=productListHtml.replace('{{IMAGE}}',prod.images);
    output=output.replace('{{%TITLE%}}',prod.title);
    output=output.replace('{{%BRAND%}}',prod.brand);
    output=output.replace('{{%DESCRIPTION%}}',prod.description);
    output=output.replace('{{%CATEGORY%}}',prod.category);
    output=output.replace('{{%RATING%}}',prod.rating);
    output=output.replace('{{%PRICE%}}',prod.price);

    return output;
})

const server=http.createServer((request,response)=>{
let url=request.url;
if (url==='/'|| url.toLowerCase()==='/home') {
    response.writeHead(200);
    response.end(html.replace('{{%CONTENT%}}','You are in home page'))
}
else if(url.toLowerCase()==='/about'){
    response.writeHead(200);
    response.end(html.replace('{{%CONTENT%}}','You are in about page'))
}else if(url.toLowerCase()==='/product'){
    response.writeHead(200);

    let productResponse= html.replace('{{%CONTENT%}}',productHtmlArray.join(''));
    response.end(productResponse);
}
else if(url.toLowerCase()==='/contact'){
    response.writeHead(200);
    response.end(html.replace('{{%CONTENT%}}','You are in contact page'))
}else{
    response.writeHead(404);
    response.end(html.replace('{{%CONTENT%}}','404 error  page not found'))
}
})
server.listen(6550,'localhost',()=>{
    console.log("Server has started :http://localhost:6550 ")
})