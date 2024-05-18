import express from "express";
import morgan from "morgan";

const app = express();
const port = 3040;

app.use(morgan('tiny'));

app.get("/", (req, res) => {
  res.send("<h1>hello world</h1>");
});

app.listen(port, () => {
  console.log(`Listening on port 'http://localhost:${port}'`);
});
