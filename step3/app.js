let http = require("http");
let fs = require("fs");

let server = http.createServer(function(request, response){
   fs.readFile("./"+request.url, function(err, data){
    console.log(err, data);
    if(err){
        console.log(err);
        response.writeHead(404, {"Content-type":"text/plain"});
        response.write("requested file not found")
        response.end();
    }else{
        response.writeHead(200, {"Content-type":"text/html"});
        response.write(data+"")
        response.end();
    }
   })
});
// npm i -g nodemon
let port = 2020;
let host = "localhost";

server.listen(port, host, function(error){
    if(error){
        console.log(error)
    }else{
        console.log("webserver is now running on localhost:1010")
    }
})