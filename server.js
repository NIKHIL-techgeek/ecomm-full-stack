import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";

// configure env
dotenv.config();


//database config
connectDB();

// rest object
const app = express();

// middleware
// reques , respon - json 
app.use(express.json());
app.use(morgan('dev'));

// rest api - url pattern
app.get("/", (req, res) => {
  // res.send({message:'welcome to ecom app'}) aliter in html
  res.send("<h1>welcome to ecomm app</h1>");
}); //for home

// PORT
const PORT = process.env.PORT || 8080;

// run listen
app.listen(PORT, () => {
  console.log(
    `server running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan
      .white
  );
});
