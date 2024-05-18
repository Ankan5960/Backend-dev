
import http from "http";
import url from "url";
import fs from "fs";

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

