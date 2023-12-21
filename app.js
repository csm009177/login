import http from 'http';
import fs from 'fs';
import path from 'path';

const server = http.createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/') {
        fs.readFile('./index.html', 'utf8', (err, data) => {
            if (err) {
                console.error('Error reading index.html:', err);
                res.writeHead(500);
                res.end('Internal Server Error');
                return;
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });
    } else if (req.method === 'POST' && req.url === '/saveData') {
        let body = '';
        req.on('data', chunk => {
            body += chunk;
        });

        req.on('end', () => {
            try {
                const userData = JSON.parse(body);
                fs.writeFile('./index.json', JSON.stringify(userData, null, 2), err => {
                    if (err) {
                        console.error('Error writing to index.json:', err);
                        res.writeHead(500);
                        res.end('Internal Server Error');
                        return;
                    }
                    res.writeHead(200);
                    res.end('Data saved successfully');
                });
            } catch (parseError) {
                console.error('Error parsing JSON:', parseError);
                res.writeHead(400);
                res.end('Bad Request');
            }
        });
    } else {
        res.writeHead(404);
        res.end('Not Found');
    }
});

const PORT = 3111;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
