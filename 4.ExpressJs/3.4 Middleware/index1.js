import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 4000;


//bodyParser is a middleware use it on express.
app.use(bodyParser.urlencoded({ extended: true }))

//morgan is a middle ware
// app.use(morgan('tiny'));
app.use(bodyParser.json());

//custom middleware. 
function bandNameGenerator(req,res,next){
  //bandname=req.body["street"]+req.body["pet"];
  res.send(`<h1>Your band name is:</h1><h2>${req.body["street"]+req.body["pet"]}✌️</h2>`);
  next();
}
// app.use(bandNameGenerator);

function logger(req,res,next){
  console.log(req.method);
  next();
}

app.use(logger);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post('/submit',bandNameGenerator,(req,res)=>{
  
  //console.log(req.body);
})

app.listen(port, () => {
  console.log(`Listening on port 'http://localhost:${port}'`);
});
