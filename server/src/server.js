import express from "express";
// import  *  as dotenv from 'dotennv'
import { config } from "dotenv";

//variables
const PORT = process.env.PORT || 5000;
//create app
const app = express();

//ends popint

app.get("/", (req, res) => {
  res.status(401).json({ message: "Hello, World" });
});

//start app
app.listen(PORT, () => console.log(`App is running on PORT ${PORT}`));
