/////normal Show an Html line in local Host
// var http = require('http');

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.write('<h1>hello world</h1>');
//   res.end();
// }).listen(8080);

///////for file handeling
// var fs=require('fs');

// fs.appendFile("2.NodeJs/demo.txt","And now foucse on backend devlopment.",(err)=>{
//   if(err) throw err;
//   console.log("file saved");
// });

// fs.readFile("2.NodeJs/summer.html","utf8",(err,data)=>{
//   if(err) throw err;
//   console.log(data);
// })

//////url learning given and url and return orginal date
// var url = require('url');
// var adr = 'http://localhost:8080/default.htm?year=?&month=?&date=?';
// var q = url.parse(adr, true);

// console.log(q.host); //returns 'localhost:8080'
// console.log(q.pathname); //returns '/default.htm'
// console.log(q.search); //returns '?year=2017&month=february'

// var qdata = q.query; //returns an object: { year: 2017, month: 'february' }
// var date=new Date();
// qdata.year=date.getFullYear();
// const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
// qdata.month=month[date.getMonth()];
// qdata.date=date.getDate();
// console.log(qdata.year,qdata.month,qdata.date); //returns 'february'


var http = require('http');
var url = require('url');
var fs = require('fs');

var server=http.createServer(function (req, res) {
  var q = url.parse(req.url, true);
  var filename = q.pathname.slice(1,q.pathname.length);
  console.log(filename);
  fs.readFile(filename, "utf8", function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("<h1>404 Not Found</h1>");
    } 
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
});
server.listen(8080,()=>{
  console.log(`server is running at : 'http://localhost:8080/'`);
});

