let fs = require('fs');

fs.appendFile('temp/greetings.txt','good afternoon ! ', function(error){
    if(error){
        console.log(error)
    }else{
        console.log("file updated")
    }
});