let fs = require("fs");

/*
fs.readFile("data.txt", function(error, data){
    if(error){
        console.log(error);
    }else{
        console.log(data);
    }
});
*/
var data = fs.readFileSync("data.txt");
console.log(data.toString());
