const express=require('express');

const app=express();
app.listen(5000,()=>{
    console.log("Server created");
})

app.get('/',(req,res)=>{
    res.send("<h1>Hello recieved get request</h1>")
    
})
app.put('/',(req,res)=>{
    res.send("Hello recieved put request")
    
})
app.post('/',(req,res)=>{
    res.send("Hello recieved post request")
    
})
app.delete('/',(req,res)=>{
    res.send("Hello recieved delete request")
    
})