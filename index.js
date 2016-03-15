'use strict';
var vendorPrefixes = require('vendor-prefixes');
var regexForPrefixes = new RegExp('^(' + vendorPrefixes().join('|') + ')([a-z\-]+)$', 'i');
module.exports = function (css) {
    	if (typeof css !== 'string') {
        	throw new TypeError('Expected a string');
    }

    var res = regexForPrefixes.exec(css);
    return res && res[2] || css;
};
