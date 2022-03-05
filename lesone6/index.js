// const fs = require('fs');

// const ourReadtream = fs.createReadStream(`${__dirname}/bigData.txt`, 'utf-8');
// const ourWriteStream = fs.createWriteStream(`${__dirname}/output.txt`, 'utf-8');

// // nodejs event syestem core

// // ourReadtream.on('data', (chunk) => {
// //     ourWriteStream.write(chunk);
// // });

// //* ******* Best parctice node js for read and write data */
// ourReadtream.pipe(ourWriteStream);
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const myReadStream = fs.createReadStream(`${__dirname}/bigData.txt`, 'utf-8');
    myReadStream.pipe(res);
});

server.listen(3000);

console.log('lisitening on port 3000');
