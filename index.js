/*
 *
 * title: Uptime monitoring Aplication
 * Description: A Restfull API to monitor up or down time of user defined links
 * Author: Md Minarul islam
 * Date 3/6/2022
 *
 */

// dependencies
const http = require('http');
const { handleReqRes } = require('./helpers/handleRqRes');
const enviroment = require('./helpers/env');
const data = require('./lib/data');

// app object -module scaffolding
const app = {};

// testing file syestem
// todo deler after test
data.delete('test', 'newFile', (err) => {
    console.log(err);
});

// Create server
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(enviroment.port, () => {
        console.log(`lisitening to port ${enviroment.port}`);
    });
};

// handle Request Response
app.handleReqRes = handleReqRes;

// start the server
app.createServer();
