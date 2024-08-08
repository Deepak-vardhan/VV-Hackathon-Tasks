const fs =require("fs")

fs.unlink('./write.txt',(err)=>{
    if(err){
        console.log(err+' so not successfull')
        return;
    }
    console.log('Deletion successfull');
})