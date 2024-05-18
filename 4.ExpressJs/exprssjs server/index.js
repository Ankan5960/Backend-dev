import express from "express";
const app=express();
var port= 3000;

app.get('/',(req,res)=>{
    res.send("<h1>hello World</h1>");
    // console.log(req.rawHeaders);
});

app.get('/home',(req,res)=>{
    res.send('<h2>This is home</h1>');
})

app.get('/contect',(req,res)=>{
    res.send('<h1>Ankan Maity</h1><p>Mob:- 8509640363<p>')  
})

app.listen(3000,()=>{
    console.log(`app is running in http://localhost:${port}/`);
});



//to want to see which port is listening then 
//linux-  sudo lsof -i -P -n | grep LISTEN
//Window- netstat -ano | findstr("LISTENING")