const http = require('http');

const server = http.createServer((req, res) => {
  // Keep the connection alive
  res.writeHead(200, {
    'Content-Type': 'text/plain',
    'Connection': 'keep-alive'
  });

  // Simulate some work
  for (let i = 0; i < 100000000; i++) {
    // Do nothing
  }

  res.end('Hello World!');
});

server.listen(3000);