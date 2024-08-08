const fs=require('fs')
fs.appendFile('./write.txt','This was appended',(err)=>{
  if(err)
{    console.log(err);
  return;
}
console.log('Appended sucessfully');
})

fs.writeFile('./write.txt',"This is written by using writefile",{flag:'a+'},(err)=>{
    if(err){
        console.log("Write not succesfull");
    }
    else{
        console.log("Write sucessfull (This is written by using writefile)");
    }
})
try {
    fs.writeFileSync('./test.txt', "This is wrttien by using writefilesync");
    console.log('file written successfully(This is wrttien by using writefilesync)');
  } catch (err) {
    console.error(err);
  }
console.log("File write methods completed")

