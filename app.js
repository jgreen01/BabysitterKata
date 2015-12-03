var Babysitter = function() {
	this._chargeArray = [12, 12, 12, 12, 8, 8, 8, 16, 16, 16, 16];
};

Babysitter.prototype._timeHash = {	17: 0, // military time
					18: 1, // to index
					19: 2, 
					20: 3, 
					21: 4, 
					22: 5, 
					23: 6, 
					0: 7, 
					1: 8, 
					2: 9, 
					3: 10, 
					4: 11	};

Babysitter.prototype.setBedtime = function(time) {
	var bedtime = this._timeToIndex(time);
	for(var i = bedtime; i < this._timeToIndex(0); i++){
		this._chargeArray[i] = 8;
	}
};

Babysitter.prototype.calculate = function(start, end) {
	var	startIndex = this._timeToIndex(start),
		endIndex = this._timeToIndex(end);

	return this._calculateCharge(startIndex,endIndex);
};

Babysitter.prototype._timeToIndex = function(time) {
	return this._timeHash[time];
};

Babysitter.prototype._calculateCharge = function(start, end) {
	var charge = 0;

	for(var i = start; i < end; i++)
		charge += this._chargeArray[i];

	return charge;
};

module.exports = Babysitter;
