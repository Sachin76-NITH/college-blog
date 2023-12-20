const express=require("express");
const app=express();
const bodyParser = require('body-parser');
const mongoose =require("mongoose")
const cors=require("cors")

const dotenv=require("dotenv");
dotenv.config();
const authRoutes = require("./routes/AuthRoutes.js")
const tweetRoutes = require("./routes/tweetRoutes.js")
const PORT=process.env.PORT|| 5050;


mongoose.connect(process.env.CONNECTION_URL)
.then(()=>app.listen(PORT,()=> console.log(`server is running on port :${PORT}`)))
.catch((error)=>console.log(error.message));



// app.use(express.json({ limit: '10mb' }));





app.use(express.json())
app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));
app.use(cors());
// app.use(express.json({limit: '25mb'}));
// app.use(express.urlencoded({limit: '25mb', extended: true}));



// Routes

app.use("/",authRoutes)
app.use('/', tweetRoutes);

