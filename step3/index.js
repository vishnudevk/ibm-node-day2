let http = require("http");
let fs = require("fs");

let server = http.createServer(function(request, response){
   
    if(request.url === '/'){
        response.writeHead(200, { "Content-type" : "text/html" });
        let htmlcontent = fs.readFileSync("./home.html");
        response.end(htmlcontent.toString());
    }else if(request.url === '/batman.html'){
       // response.writeHead(200, { "Content-type" : "text/html" });
        let htmlcontent = fs.readFileSync("./batman.html");
        response.end(htmlcontent.toString());
    }else if(request.url === '/superman.html'){
       // response.writeHead(200, { "Content-type" : "text/html" });
        let htmlcontent = fs.readFileSync("./superman.html");
        response.end(htmlcontent.toString());
    }else if(request.url === '/contact.html'){
       // response.writeHead(200, { "Content-type" : "text/html" });
        let htmlcontent = fs.readFileSync("./contact.html");
        response.end(htmlcontent.toString());
    }else{
        response.writeHead(404, { "Content-type" : "text/plain" });
        response.end("404 : no donuts for you");
    }
    // response.write("<h1> hello from IBM webserver </h1>");
    console.log(request.url);
});
// npm i -g nodemon
let port = "1010";
let host = "localhost";

server.listen(port, host, function(error){
    if(error){
        console.log(error)
    }else{
        console.log("webserver is now running on localhost:1010")
    }
})