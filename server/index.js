const express = require('express');
const app = express();
const port = 8000;
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('./models/user.model');
const jwt=require("jsonwebtoken");
const {nanoid}=require("nanoid");
require("dotenv").config()
const authRoutes = require("./routes/authRoutes");
const userRoutes=require("./routes/userRoutes")
const sendMessageRoutes=require("./routes/sendmsgRoutes")
mongoose.connect(process.env.MONGODB_URL).then(()=>{
    console.log('Connected to MongoDB');
}).catch((error)=>{
    console.log(error);
});

app.use(cors());
app.use(express.json());

app.use("/api/auth",authRoutes);
app.use("/api/user",userRoutes);
app.use("/api/sendmsg",sendMessageRoutes);


app.get('/', (req, res) => {
    res.send('Hello World');
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});