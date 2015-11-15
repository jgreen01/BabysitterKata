var Babysitter = function() {};

Babysitter.prototype.timeHash = {17: 0, 18: 1, 19: 2, 20: 3, 21: 4, 22: 5, 23: 6, 0: 7, 1: 8, 2: 9, 3: 10, 4: 11};
Babysitter.prototype.chargeArray = [12, 12, 12, 12, 8, 8, 8, 16, 16, 16, 16];

Babysitter.prototype.calculate = function(start, end) {
	start = this._fixTime(start);
	end = this._fixTime(end);

	var charge = 0;

	for(var i = start; i < end; i++) {
		charge += this.chargeArray[i];
	}

	return charge;
};

Babysitter.prototype._fixTime = function(time) {
	return this.timeHash[time];
};

module.exports = Babysitter;
