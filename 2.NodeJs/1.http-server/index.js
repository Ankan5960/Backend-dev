var http=require('http');

var server=http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":'text/html'});
    res.write("<h1>Hello World");
    res.end();
})

server.listen(3030,()=>{
    console.log(`server is running at : 'http://localhost:3030/'`);
})