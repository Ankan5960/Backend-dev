
// var http = require('http');
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.write('<h1>hello world</h1>');
//   res.end();
// }).listen(8080);

var fs=require('fs');

fs.appendFile("2.NodeJs/demo.txt","And now foucse on backend devlopment.",(err)=>{
  if(err) throw err;
  console.log("file saved");
});

fs.readFile("2.NodeJs/demo.txt","utf8",(err,data)=>{
  if(err) throw err;
  console.log(data);
})

//console.log(module);