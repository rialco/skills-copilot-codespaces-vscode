// Create web server
// 1. create a server
// 2. start the server
// 3. handle requests
// 4. respond to requests

const http = require('http');
const fs = require('fs');
const url = require('url');

// 1. create a server
const server = http.createServer((req, res) => {
  // 3. handle requests
  const pathName = req.url;
  // const pathName = req.url;

  if (pathName === '/' || pathName === '/overview') {
    res.end('This is the OVERVIEW');
  } else if (pathName === '/product') {
    res.end('This is the PRODUCT');
  } else {
    res.writeHead(404, {
      'Content-type': 'text/html',
      'my-own-header': 'hello-world'
    });
    res.end('<h1>Page not found!</h1>');
  }
});

// 2. start the server
server.listen(8000)