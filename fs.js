var fs = require('fs');

// fs.writeFile('MyCode.txt',"My Nodejs Code", function(err){
//     if(err) throw err;
//     console.log("File Created")
// })

// fs.readFile('db.json','utf-8',function(err,data){
//     if(err) throw err;
//     console.log(data)

// })

fs.rename('sample.txt','First.txt',function(err){
    if(err) throw err;
    console.log('File renamed')
})