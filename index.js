const express = require("express");
const connectDB = require("./models/connectDB");
const User = require("./models/user");

const app = express();

app.use(express.json());

connectDB();

app.post("/register",async(req,res)=>{
    const data = req.body;
    // Checks
    if(data?.name?.trim()=="") return res.send("Name Required!!");
    if(data.password?.length < 8 )return res.send("Password of length 8 Required!!");
    const isUser = await User.findOne({email:data.email})
    console.log(isUser);
    if(isUser) return res.send(isUser);

    const newUser = await User.create(data)
    res.send(newUser);
})

const port = 5000
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})