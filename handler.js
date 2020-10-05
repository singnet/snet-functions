'use strict';

const commonHeaders = require("./commonHeaders.json");

module.exports.handler = (event, _context, callback) => {
    //Get contents of response
    const response = event.Records[0].cf.response;
    response.headers = {...commonHeaders, ...response.headers};
    callback(null, response);
};
