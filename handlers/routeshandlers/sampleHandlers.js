/*
 *
 * title: Sample handler
 * Description: A sample handlers file
 * Author: Md Minarul islam
 * Date 3/6/2022
 *
 */

// module scaffolding
const handler = {};

handler.sampleHanders = (requestProperties, callback) => {
    console.log(requestProperties);
    callback(200, {
        message: 'This is a sample URL',
    });
};

module.exports = handler;
