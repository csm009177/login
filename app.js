import http from 'http';
import fs from 'fs';

const htmlPath = './index.html';
const jsPath = './index.js';
const jsonPath = './index.json';

const serv = http.createServer((req,res)=>{
  if (req.method === 'GET' && req.url === '/') {
    // Read the join.html file
    fs.readFile(htmlPath, 'utf8', (err, data) => {
        // Set response header and send the file content
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    })
  }
})

// Define port number
const port = 3217;

// Start the server
serv.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});