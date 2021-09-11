 REPL method (Read , Execute , Process , Loop)
 
 
 knshika@optimus  ~/.../Devsnest Backend proj/Day 05   main  node
Welcome to Node.js v14.17.0.
Type ".help" for more information.
> 1+1
2
> 1+"1"
'11'
> var fs = require("fs");
undefined
> fs.mkdirSync('basic');
undefined
> fs.writeFileSync('basic/temp.txt',"I just created a file in basic folder using node",(err)=>{
... if(err){
..... console.log(err);
..... }
... })
undefined
> fs.appendFileSync('basic/temp.txt',", this is some appended using append file function");
undefined
> fs.readFileSync('basic/temp.txt');
<Buffer 49 20 6a 75 73 74 20 63 72 65 61 74 65 64 20 61 20 66 69 6c 65 20 69 6e 20 62 61 73 69 63 20 66 6f 6c 64 65 72 20 75 73 69 6e 67 20 6e 6f 64 65 2c 20 ... 48 more bytes>
> fs.readFileSync('basic/temp.txt','utf-8');
'I just created a file in basic folder using node, this is some appended using append file function'
> var data = fs.readFileSync('basic/temp.txt','utf-8');
undefined
> console.log(data);
I just created a file in basic folder using node, this is some appended using append file function
undefined
> fs.renameSync('basic/temp.txt','basic/data.txt');
undefined
> fs.writeFileSync('basic/temp.txt',"gonna delete anyway");
undefined
> fs.unlinkSync('basic/temp.txt');
undefined
> fs.mkdirSync('junk');
undefined
> fs.rmdirSync('junk');
undefined
> .exit
 knshika@optimus  ~/.../Devsnest Backend proj/Day 05   main ●  

