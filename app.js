var prompt = require('prompt');

var Babysitter = function() {};

Babysitter.prototype.bedtime = 21; // 9pm
Babysitter.prototype.midnight = 0;

Babysitter.prototype.calculate = function(start, end) {

	if(start >= this.bedtime) {
		return 8 * (end - start);
	}
	if(end > this.bedtime) {
		return (8 * (end - this.bedtime)) + (12 * (this.bedtime - start));
	} 
	else {
		return 12 * (end-start);
	}
};

module.exports = Babysitter;
