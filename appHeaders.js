'use strict';

const commonHeaders = require("./commonHeaders.json");

module.exports.appHeaders = (event, _context, callback) => {
    const response = event.Records[0].cf.response;
    response.headers = {...commonHeaders, ...response.headers};
    callback(null, response);
};
