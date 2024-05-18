///////for file handeling
var fs=require('fs');

fs.appendFile("demo.txt","And now foucse on backend devlopment.",(err)=>{
  if(err) throw err;
  console.log("file saved");
});

fs.readFile("summer.html","utf8",(err,data)=>{
  if(err) throw err;
  console.log(data);
})

