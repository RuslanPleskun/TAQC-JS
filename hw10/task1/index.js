// Task 1
const http = require('http');
const os = require('os');
const path = require('path');

http.createServer((request, response) => {
  response.writeHead(200, { "Content-Type": "text/html" });
  response.write(`<div><h1>System Information</h1>
                  <p>Current user name: ${os.userInfo().username}</p>
                  <p>OS type: ${os.type()}</p>
                  <p>System work time: ${(os.uptime() / 60).toFixed(2)} minutes</p>
                  <p>Current work directory: ${path.dirname(__filename)}</p>
                  <p>Server file name: ${path.basename(__filename)}</p></div>`);
  response.end();

}).listen(3000);              // 3000 port was used since port '5000' is already in use for some reason

console.log("Server is running at localhost:3000");
