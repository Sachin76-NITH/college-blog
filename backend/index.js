const express=require("express");
const app=express();
const bodyParser = require('body-parser');
const mongoose =require("mongoose")
const cors=require("cors")
app.use(cors());
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
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
// app.use(express.json({limit: '25mb'}));
// app.use(express.urlencoded({limit: '25mb', extended: true}));



// Routes

app.use("/",authRoutes)
app.use('/', tweetRoutes);

