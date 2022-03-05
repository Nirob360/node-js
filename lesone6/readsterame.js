/* eslint-disable comma-dangle */
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('<!DOCTYPE html> <html lang="en"> <head> <title>Document</title>  </head>');
        res.write(
            '<body> <form action="/process" method="post">  <input name="message" type="text" /> </form> </body> </html>'
        );
        res.end();
    } else if (req.url === '/process' && req.method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        req.on('end', () => {
            console.log('stream finish');
            const parseBody = Buffer.concat(body).toString();
            console.log(parseBody);
            res.write('Thank you for submiting');
            res.end();
        });
    } else {
        res.write('page not found 404...');
        res.end();
    }
});

server.listen(3000);

console.log('lisitentin on 3000');
