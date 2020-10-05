'use strict';

const commonHeaders = require("./commonHeaders.json");

module.exports.appHeaders = (event, _context, callback) => {
    console.log("inside appheaders")
    const response = event.Records[0].cf.response;
    console.log("response", response)
    response.headers = {...commonHeaders, ...response.headers};
    console.log("updated headers". response.headers)
    callback(null, response);
};
