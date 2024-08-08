const { log } = require('console');
var fs = require('fs');
//  fs.mkdir('./New folder',(error)=>{
//     if(error){
//         console.log("Error at folder creation that is "+error);
//     return;
//     }
// console.log("Folder creation successfull");
// });

//for deleting an empty folder

fs.rmdir('./New folder',(error)=>{
    if(error){
        console.log("Error at folder deletion that is "+error);
    return;
    }
console.log("Folder deletion successfull");
})


