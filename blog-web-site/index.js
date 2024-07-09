import express from "express";
import ejs from "ejs";

const app=express();
const port=3030;

app.use(express.static('public'));

app.get('/',(req,res)=>{
    res.render("body.ejs");
})

app.listen(port,()=>{
    console.log(`app is running 'http://localhost:${port}'`)
});