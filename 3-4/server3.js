const http = require('http');
const port = 5000
http.createServer((request,response) => {
    if( request.url === "/" &&  request.method === "GET" ){
        console.log(request.url);
        response.end("HELLO WEB APP");
    }else if (request.url === "/about"&&  request.method === "GET" ){
        console.log(request.url);
        response.end("ABOUT");
    }else if (request.url === "/contact" &&  request.method === "GET" ){
        console.log(request.url);
        response.end("CONTACT");
    }else if (request.url === "/address" &&  request.method === "GET" ){
        console.log(request.url);
        response.end("ADRESS");
    }else{
        console.log(request.url);
        response.end("NOT FOUND")
    }

}).listen(port)