const express = require('express');
const app= express();
const path = require('path');

// console.log(__dirname); get full directory of the folder 

app.set("views",path.join(__dirname,"views"));
app.set("view engine", "jade");

//day 9  -- sending static file

app.use('/',(req,res)=>{
    // res.sendFile(path.join(__dirname,"public/guide.txt"),'test.txt') //render the file
    // res.download(path.join(__dirname,"public/test.json"),'hello.json') //download the file when the command is run
    // res.sendFile(path.join(__dirname,"public/bird-thumbnail.jpg"),'test.jpg') 
    // res.render('index',{title:"Express"}) //sending dynamic file --using jade(or ejs) torender html

    res
    .status(201)
    .cookie("token","test",{
        expire:new Date(Date.now()+8*3600000)
    })
    .cookie("hello","hello")
    .redirect(301,"/admin")
})

//listens at port 
app.listen(5001);