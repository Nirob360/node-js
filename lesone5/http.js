const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('hello programars');
        res.write(' How are you doing?');
        res.end();
    } else if (req.url === '/about') {
        res.write('this is about page');
        res.write(' second line of code node js');
        res.end();
    } else {
        res.write('page not found 404...');
        res.end();
    }
});

server.listen(3000);

console.log('lisitentin on 3000');
