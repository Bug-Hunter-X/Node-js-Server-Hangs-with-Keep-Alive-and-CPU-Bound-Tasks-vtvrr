# Node.js Server Hang with Keep-Alive and CPU-Bound Task

This repository demonstrates a bug where a Node.js server hangs when it keeps the connection alive and performs CPU-intensive operations. The server creates a long-running loop that simulates a CPU-bound task. This prevents the server from responding to subsequent requests and eventually leads to a hang.

## How to Reproduce

1. Clone this repository.
2. Run `node bug.js`.
3. Open your browser and access `http://localhost:3000`. You'll receive the response.
4. Open multiple tabs and try accessing the same URL. 
5. After some time, the server will become unresponsive and requests might stop responding or time out.

## Solution

The solution involves using asynchronous operations or worker threads to prevent blocking the main event loop during CPU-intensive work. The `bugSolution.js` shows an example using asynchronous work.  This prevents the main thread from freezing and ensures the server remains responsive.