// Task 2
const http = require('http');
const os = require('os');
const pers = require('./personalmodule');
const { greeting } = require('./personalmodule');

http.createServer((request, response) => {
  response.writeHead(200, { "Content-Type": "text/html" });
  response.write(`<p>Date of request: ${new Date()}</p>
                  <p>${greeting(os.userInfo().username)}</p>`);
  response.end();
}).listen(8000);

console.log("Server is running at localhost:8000");
