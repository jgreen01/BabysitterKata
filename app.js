var prompt = require('prompt');

var Babysitter = function() {};

Babysitter.prototype.timeHash = {17: 0, 18: 1, 19: 2, 20: 3, 21: 4, 22: 5, 23: 6, 0: 7, 1: 8, 2: 9, 3: 10, 4: 11};
Babysitter.prototype.bedtime = 4; // 9pm
Babysitter.prototype.midnight = 7;

Babysitter.prototype.calculate = function(start, end) {
	start = this._fixTime(start);
	end = this._fixTime(end);

	if(start >= this.midnight) {
		return 16 * (end - start);
	}
	else if(end > this.midnight) {
		return (16 * (end - this.midnight)) + (8 * (this.midnight - start));
	}
	else if(start >= this.bedtime) {
		return 8 * (end - start);
	}
	else if(end > this.bedtime) {
		return (8 * (end - this.bedtime)) + (12 * (this.bedtime - start));
	} 
	else {
		return 12 * (end-start);
	}
};

Babysitter.prototype._fixTime = function(time) {
	return this.timeHash[time];
};

module.exports = Babysitter;
