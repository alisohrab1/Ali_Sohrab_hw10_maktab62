const http = require('http');
const fs = require('fs');
const port = 5000;

http.createServer((req, res) => {
    if(req.url === "/" && req.method === "GET") {
     
        fs.readFile("index.html", "utf-8" , (err,page) => {
            if(err){
                console.log(err);
                res.end("ERROR");
            } else {
                res.end(page)
            }
        })
    }

}).listen(port);