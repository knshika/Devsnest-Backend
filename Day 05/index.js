// var fs = require("fs");
// fs.mkdirSync('basic1');
// fs.writeFileSync('basic1/temp.txt',"I just created a file in basic folder using node",(err)=>{if(err){
//    console.log(err);
//      }});
// fs.appendFileSync('basic1/temp.txt',", this is some appended using append file function"); 
// var data = fs.readFileSync('basic1/temp.txt','utf-8');
// console.log(data);
// fs.renameSync('basic1/temp.txt','basic1/data.txt');

// //directly running node in js folder and implementing in terminal;

var Test = require('./require_test');
var obj = new Test();
var returned_val = obj.print();
console.log(returned_val);


//read arguements in node.js