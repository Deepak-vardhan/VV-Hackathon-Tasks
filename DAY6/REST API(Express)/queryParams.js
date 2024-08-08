const { log } = require('console');
const express=require('express');

const app=express();
app.listen(1080,()=>{
    console.log("Server Created");
})

app.get('/',(req,res)=>{
if(req.query.city){
    res.send(`<h1>Hello Welcome to ${req.query.city}</h1>`)
}
else{
    res.send("Msg recieved at get");
}
})

