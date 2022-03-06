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

// app object -module scaffolding
const app = {};

// configuration
app.config = {
    port: 3000,
};

// Create server
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(app.config.port, () => {
        console.log(`lisitening to port ${app.config.port}`);
    });
};

// handle Request Response
app.handleReqRes = (req, res) => {
    // Response handle
    res.end('Hello world, how are you?');
};

// start the server
app.createServer();
