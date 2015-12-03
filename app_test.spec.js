var Babysitter = require('./app.js');

describe('Babysitter nightly charge calculator', function() {
	var babysitter;

	beforeEach(function(){
		babysitter = new Babysitter();
	});
	it('One hour of work from 5pm to 6pm', function() {
		var result = babysitter.calculate(17,18); // military time
		expect(result).toEqual(12);
	});

	it('Two hours of work from 5pm to 7pm', function() {
		var result = babysitter.calculate(17,19);
		expect(result).toEqual(24);
	});

	it('Five hours of work from 5pm to 9pm. Before bedtime.', function() {
		var result = babysitter.calculate(17,21);
		expect(result).toEqual(48);
	});

	it('Six hours of work from 5pm to 10pm. Before and after bedtime.', function() {
		var result = babysitter.calculate(17,22);
		expect(result).toEqual(56);
	});

	it('One hour of work after bedtime. 9pm to 10pm.', function() {
		var result = babysitter.calculate(21,22);
		expect(result).toEqual(8);
	});

	it('Three hours of work after bedtime. 9pm to midnight.', function() {
		var result = babysitter.calculate(21,0);
		expect(result).toEqual(24);
	});

	it('Seven hours of work before bedtime to midnight. 5pm to midnight.', function() {
		var result = babysitter.calculate(17,0);
		expect(result).toEqual(72);
	});

	it('One hour of work after midnight. Midnight to 1am.', function() {
		var result = babysitter.calculate(0,1);
		expect(result).toEqual(16);
	});

	it('Two hours of work. 11pm to 1am.', function() {
		var result = babysitter.calculate(23,1);
		expect(result).toEqual(24);
	});

	it('11 hours of work. 5pm to 4am.', function() {
		var result = babysitter.calculate(17,4);
		expect(result).toEqual(136);
	});

	it('Set bedtime to 5pm. 5pm to 6pm. Expect $8', function() {
		babysitter.setBedtime(17);
		var result = babysitter.calculate(17,18);
		expect(result).toEqual(8);
	});

	it('Set bedtime to 8pm. 6pm to 9pm. Expect $32.', function() {
		babysitter.setBedtime(20);
		var result = babysitter.calculate(18,21);
		expect(result).toEqual(32);
	});

	it('Set bedtime to 7pm. 5pm to midnight. Expect $64.', function() {
		babysitter.setBedtime(19);
		var result = babysitter.calculate(17,0);
		expect(result).toEqual(64);
	});

	it('Set bedtime to 7pm. 6pm to 2am. Expect $84.', function() {
		babysitter.setBedtime(19);
		var result = babysitter.calculate(18,2);
		expect(result).toEqual(84);
	});
});
