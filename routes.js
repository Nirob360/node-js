/*
 *
 * title: Routes
 * Description: Aplication Routes
 * Author: Md Minarul islam
 * Date 3/6/2022
 *
 */

// dependencies
const { sampleHanders } = require('./handlers/routeshandlers/sampleHandlers');

const routes = {
    sample: sampleHanders,
};

module.exports = routes;
