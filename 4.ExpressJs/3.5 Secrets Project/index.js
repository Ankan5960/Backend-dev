//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from "express";
import bodyParser from "body-parser"; 
import {dirname} from "path";
import {fileURLToPath} from "url"

var __dirname=dirname(fileURLToPath(import.meta.url));

var app=express();
var port=3030;
var isTruePassword=false;

app.use(bodyParser.urlencoded({extended:true}));

function passwordChech(req,res,next){
    if(req.body['password']=='ankan00')
        isTruePassword=true;
    else 
        isTruePassword=false;
    next();
}
app.use(passwordChech);

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/public/index.html')
});


app.post('/check',(req,res)=>{
    if(isTruePassword)
        res.sendFile(__dirname+'/public/secret.html');
    else{  
        res.sendFile(__dirname+'/public/index.html')
    }
      
})

app.listen(port,()=>{
    console.log(`Listening on port 'http://localhost:${port}'`);
});
