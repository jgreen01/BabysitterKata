var Babysitter = require('./app.js');

describe('Babysitter nightly charge calculator', function() {
	var babysitter = new Babysitter();

	it('One hour of work from 5pm to 6pm', function() {
		var result = babysitter.calculate(17,18); // military time
		expect(result).toEqual(12);
	});

	it('Two hours of work from 5pm to 7pm', function() {
		var result = babysitter.calculate(17,19);
		expect(result).toEqual(24);
	});

	it('Four hours of work from 5pm to 9pm. Before bedtime.', function() {
		var result = babysitter.calculate(17,21);
		expect(result).toEqual(48);
	});

	it('Five hours of work from 5pm to 10pm. Before and after bedtime.', function() {
		var result = babysitter.calculate(17,22);
		expect(result).toEqual(56);
	});

	it('One hour of work after bedtime. 9pm to 10pm.', function() {
		var result = babysitter.calculate(21,22);
		expect(result).toEqual(8);
	});
});
