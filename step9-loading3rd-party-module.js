let request = require("request");
request("https://www.ibm.com/in-en/index.html" ,function(error, data){
    if(error){
        console.log(error)
    }else{
        console.log(data)
    }
});