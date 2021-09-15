const express = require('express');
const app = express();
const bodyParser = require("body-parser");

//day 8 middleware

const checkAdmin = (req,res,next)=>{
    console.log("this is middlewave");
    // if(req.query.auth === 'knshi'){  //http://localhost:5000/?auth=knshi
    if(req.query.admin === 'true'){  //http://localhost:5000/?admin=true
        next()
    }else{
        res.status(401).send("should be admin")
        //status code -> for catch() fun in fetch() or axios()
    };
}

const sendRes = (req,res)=>{
    res.status(200)
    res.json(req.query)
}

// app.use(checkAdmin)  //fun as middlewave for every function
// app.use(bodyParser.urlencoded({extended:true})) //to get data in req.body;
// app.use(bodyParser.json())

app.use(express.urlencoded()) //to get data in req.body;
app.use(express.json({extended:true}))


app.get('/',checkAdmin,sendRes);

app.post('/',(req,res)=>{
    console.log('req.body ->', req.body);
    res.json({text:req.body})
    //need to install body-parser to make this work
})

app.listen(5000);

//expess.js document (guide and getting started)