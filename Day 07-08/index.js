const express = require('express');
const app = express();
const bodyParser = require("body-parser");

// //CRUD

// const slash = (req,res)=>{
//     res.send('may be it worked');
// }

// //security , performance , edge cases 
// app.get('/',(req,res)=>{
//     //db update
//     res.status(200); //201 , 400, 500
//     res.json(req.query)
//     res.send();
//     // res.sendStatus(500).send("database not connected");
// });
// // app.put('/',slash);
// // app.post('/',slash);
// // app.delete('/',slash);


// app.get('/products',(req,res)=>{
//     // http://localhost:5000/products?limit=10&q=something
//     //encodeURIComponent("comp")->proper comp of url convert (console of browser)
//     res.send(req.query.q); // after?
// })

// app.get('/ab?cd',slash) // /abcd or /  (optional)
// app.get('/a(be)?cd',slash) // /abcd or /
// app.get(/a/,slash) // must start with a
// app.get(/.*fly$/,slash) // must end with fly
// app.get('/ab+cd',slash) // /abbbbbcd  (any no of time)
// app.get('/ab*cd',slash) // /abrandomcd (any thing after that)
// app.get('/users/:userId/books/:bookId',(req,res)=>{
//     res.send(req.params); //para which we fetch
// }) //user and book id are dynamic


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