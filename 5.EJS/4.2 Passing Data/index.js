import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

var totalWord=0;

app.get("/", (req, res) => {
  res.render('index.ejs');
});

app.post("/submit", (req, res) => {
  var totalWord=(req.body["fName"]+req.body["lName"]).length;

  res.render('index.ejs',{number:totalWord})
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

