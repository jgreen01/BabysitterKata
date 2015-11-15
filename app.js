var prompt = require('prompt');

var Babysitter = function() {
	var bedtime = 21; // 9pm
};

Babysitter.prototype.calculate = function(start, end) {
	return 12 * (end-start);
};

module.exports = Babysitter;
