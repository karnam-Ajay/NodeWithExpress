const fs = require('fs');

//Writing data into a file
fs.writeFile("Hello.txt","Writing data into file using writeFile",(err)=>{
    if (err) {
        console.log(err);
    }else{
        console.log("data written successfully!");
    }
});

//Renaming file name
fs.rename("Hello.txt","Write.txt",(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("file renamed");
    }
})

//Copy file
fs.copyFile("Write.txt","./copyDir/Copy1.txt",(err)=>{
    if (err) {
        console.error(err);
    }else{
        console.log("data copied");
    }
})

//Delete the file
fs.unlink("Copy.txt",(err)=>{
    if (err) {
        console.error(err);
    }else{
        console.log("file deleted");
    }
})

//Removing a Directory
// {recursive:true}: by default it will be false, if it is true the directory will be removed
fs.rm("./myCode",{recursive:true},(err)=>{
    if (err) {
        console.error(err);
    }else{
        console.log("directory removed");
    }
})


// How to read file 
fs.readFile("Write.txt",'utf8',(err,data)=>{
    if (err) {
        console.error(err);
    }else{
        console.log(data);
        
    }
})