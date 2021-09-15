const express = require('express');
const app = express();

//CRUD

const slash = (req,res)=>{
    res.send('may be it worked');
}

//security , performance , edge cases 
app.get('/',(req,res)=>{
    //db update
    res.status(200); //201 , 400, 500
    res.json(req.query)
    res.send();
    // res.sendStatus(500).send("database not connected");
});
// app.put('/',slash);
// app.post('/',slash);
// app.delete('/',slash);


app.get('/products',(req,res)=>{
    // http://localhost:5000/products?limit=10&q=something
    //encodeURIComponent("comp")->proper comp of url convert (console of browser)
    res.send(req.query.q); // after?
})

app.get('/ab?cd',slash) // /abcd or /  (optional)
app.get('/a(be)?cd',slash) // /abcd or /
app.get(/a/,slash) // must start with a
app.get(/.*fly$/,slash) // must end with fly
app.get('/ab+cd',slash) // /abbbbbcd  (any no of time)
app.get('/ab*cd',slash) // /abrandomcd (any thing after that)
app.get('/users/:userId/books/:bookId',(req,res)=>{
    res.send(req.params); //para which we fetch
}) //user and book id are dynamic

app.listen(5000);