const http = require('http');
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });
} else {
  const server = http.createServer((req, res) => {
    res.writeHead(200, {
      'Content-Type': 'text/plain',
      'Connection': 'keep-alive'
    });

    // Simulate some work
    const start = Date.now();
    let sum = 0; 
    for (let i = 0; i < 100000000; i++) {
      sum += i; 
    }
    const end = Date.now();
    console.log(`Worker ${process.pid} : Processing time ${end - start}ms, Result ${sum}`);

    res.end('Hello World!');
  });

  server.listen(3000);
  console.log(`Worker ${process.pid} started`);
}
