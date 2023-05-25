import express from "express";
import colors from "colors";
// rest object
const app = express();

// rest api - url pattern
app.get("/", (req, res) => {
  // res.send({message:'welcome to ecom app'}) aliter in html
  res.send("<h1>welcome to ecomm app</h1>");
}); //for home

// PORT
const PORT = 8080;

// run listen
app.listen(PORT, () => {
  console.log(`server running ${PORT}`.bgCyan.white);
});
