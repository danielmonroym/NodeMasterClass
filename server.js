const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
//Route files
const bootcamps = require('./routes/bootcamps');
// Load .env vars
dotenv.config({
  path: "./config/config.env",
});

const app = express();

//app.get("/", (req, res) => {
  //Cambiar status
  // res.status(400).send('Error');
  //res.send("Hello from express");
//});


// Dev logging middleware
if(process.env.NODE_ENV ==="development"){
    app.use(morgan('dev'));
}

// Mount routers

app.use('/api/v1/bootcamps', bootcamps);
const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
