/*
 *
 * title: Handle Request Response
 * Description: Request response hande file
 * Author: Md Minarul islam
 * Date 3/6/2022
 *
 */

// dependencies
const url = require('url');
const { StringDecoder } = require('string_decoder');
const routes = require('../routes');
const { notFoundHanders } = require('../handlers/routeshandlers/notFoundHandler');
// module scaffolding
const hander = {};

hander.handleReqRes = (req, res) => {
    // handle Request Response
    // Request handle
    // get the url and parse it
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;
    const trimmedPath = path.replace(/^\/+|\/+$/g, '');
    const method = req.method.toLowerCase();
    const queryStringObject = parsedUrl.query;
    const headersObject = req.headers;

    // request propertis object
    const requestProperties = {
        parsedUrl,
        path,
        trimmedPath,
        method,
        queryStringObject,
        headersObject,
    };
    // Buffer decoder
    const decoder = new StringDecoder('utf-8');
    let realData = '';

    const chosenHandler = routes[trimmedPath] ? routes[trimmedPath] : notFoundHanders;

    req.on('data', (buffer) => {
        realData += decoder.write(buffer);
    });

    req.on('end', () => {
        realData += decoder.end();
        chosenHandler(requestProperties, (statusCode, payload) => {
            statusCode = typeof statusCode === 'number' ? statusCode : 500;
            payload = typeof payload === 'object' ? payload : {};

            const payloadString = JSON.stringify(payload);

            // return the final response
            res.writeHead(statusCode);
            res.end(payloadString);
        });
        // Response handle
        res.end('Hello world');
    });
};

module.exports = hander;
