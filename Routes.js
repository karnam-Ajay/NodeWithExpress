const express = require('express');

// creating app with express
const app = express();

//How to use middleware
app.use((req,res,next)=>{
    console.log("middleware started");
    next();
})

app.use((req,res,next)=>{
    console.log("middleware started 2nd time");
    next();
})

//Expressjs is a npm package and it is a frame work
// It takes care of everything from Request to providing Response

//Creating Routes with express
app.get("/",(req,res)=>{
    res.send("Home Screen page after reload");
});

app.get("/profile",(req,res)=>{
    res.send("Profile Screen page");
});

// making port 3000 to listen
app.listen(3000)
