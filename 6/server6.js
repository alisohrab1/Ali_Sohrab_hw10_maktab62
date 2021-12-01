const http = require('http');
const fs = require('fs');
const port = 5000;

http.createServer((req, res) => {

    if (req.url === '/' && req.method === 'GET') {
      
        fs.readFile('./weatherApp/index.html', 'utf-8', (err, page) => {
            if (err) {
                console.log(err);
                res.end("something went wrong....")
            } else {
                res.end(page)
            }
        });
    } else if (req.url === '/style.css' && req.method === 'GET') {
        fs.readFile('./weatherApp/style.css', 'utf-8', (err, style) => {
            if (err) {
                console.log(err);
                res.end('somthing went wrong ...')
            } else {
                res.end(style)
            }
        });
    }  else if (req.url === '/main.js' && req.method === 'GET') {
        fs.readFile('./weatherApp/main.js', 'utf-8', (err, style) => {
            if (err) {
                console.log(err);
                res.end('somthing went wrong ...')
            } else {
                res.end(style)
            }
        });
    }  
    else if (req.url === '/musk.jpg' && req.method === 'GET') {
        fs.readFile('./weatherApp/musk.jpg', (err, style) => {
            if (err) {
                console.log(err);
                res.end('somthing went wrong ...')
            } else {
                res.end(style)
            }
        });
    }
    else if (req.url === '/icon.png' && req.method === 'GET') {
        fs.readFile('./weatherApp/icon.png', (err, style) => {
            if (err) {
                console.log(err);
                res.end('somthing went wrong ...')
            } else {
                res.end(style)
            }
        });
    }



}).listen(port);