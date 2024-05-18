import express from "express";
var app=express();
var port = 3003;

app.get('/',(req,res)=>{
    res.send("<h1>This is main</h1>")
})

app.post('/register',(req,res)=>{
    res.sendStatus(201);
})

app.put('/user/ankan',(req,res)=>{
    res.sendStatus(200);
})

app.patch('/user/ankan',(req,res)=>{
    res.sendStatus(200);
})

app.delete('/user/ankan',(req,res)=>{
    res.sendStatus(200);
})

app.listen(port,()=>{
    console.log(`server is running at : 'http://localhost:${port}/'`);
})