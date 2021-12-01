const http = require("http");
const fs = require("fs");
const port = 5000;


http.createServer((req, res) => {
    if (req.url === "/" && req.method === "GET") {
      res.end(`HELLO WORLD!`);
    } else if (req.url === "/1" && req.method === "GET") {
        
        fs.readFile("./sample.json" , "utf8" , (err,data) => {
            if(err){
                console.log(err);
                res.end("ERROR OCCURRED")
            }else{
                res.end(data)

            }
        })
    }
  })
  .listen(port);
