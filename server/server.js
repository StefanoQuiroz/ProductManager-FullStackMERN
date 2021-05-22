require("dotenv").config()
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000; //||respaldo
const cors = require('cors');

//Mongodb
const connectDB = require("./config/connectDB")
connectDB();
//require("./config/connectDB")();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use("/api", require("./routes/api"))


app.listen(PORT, ()=>{
    console.log(`Listen on Port: ${PORT}`);
})

