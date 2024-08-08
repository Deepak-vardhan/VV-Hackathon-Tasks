const { log } = require('console');
var fs = require('fs');
 fs.readFile('./mesage.txt',(error,data)=>{
    if(error){
        console.log("Error at file reaading");
    }
    else
    console.log(data.toString());
});
var data = fs.readFileSync('./mesage2.txt')
console.log(data.toString());
console.log("file read sucessfully (it is printed by console log)");


