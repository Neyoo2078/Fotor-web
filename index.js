
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import router from "./Router/router.js";
import dotenv from "dotenv"

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000

const CONNECTION_URL = process.env.CONNECTION_URL
app.use(bodyParser.json({limit:"30mb", extented: true}));
app.use(bodyParser.urlencoded({limit:"30mb", extented: true}));
app.use(cors())

app.use("/fotor",router)

app.use("/",(req,res)=>{
    res.send(" app is running fine")
})

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{ app.listen( PORT, ()=>{ console.log("app connected op port 5000")})})
.catch((err)=>{
    console.log(err.message)
})

