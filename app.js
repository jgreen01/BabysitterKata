var prompt = require('prompt');

var Babysitter = function() {};

Babysitter.prototype.calculate = function(start, end) {
	return 12 * (end-start);
};

module.exports = Babysitter;
