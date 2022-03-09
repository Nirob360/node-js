/*
 *
 * title: Not Found
 * Description: Not Found  handlers file
 * Author: Md Minarul islam
 * Date 3/6/2022
 *
 */

// module scaffolding
const handler = {};

handler.notFoundHanders = (requestProperties, callback) => {
    console.log(requestProperties);
    callback(404, {
        message: 'Your Requestd URL Not Found!',
    });
};

module.exports = handler;
