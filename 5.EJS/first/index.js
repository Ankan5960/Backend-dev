import express from "express";
import ejs from "ejs";

var app=express();
var port=4000;
var weekStatus='weekday';
var workType=' work hard.';

function getWeek(req,res,next){
    var dayOfWeek = new Date().getDay();
    if(dayOfWeek===6 || dayOfWeek=== 0){
        weekStatus='weekend';
        workType=' have fun.'
    }
    else{
        weekStatus='weekday';
        workType=' work hard.';
    }
    next();
}

app.get('/',getWeek,(req,res)=>{
    res.render('index.ejs', {weekStatus: weekStatus, workType:workType});
})

app.listen(port,()=>{
    console.log(`running at 'http://localhost:4000/'`);
})