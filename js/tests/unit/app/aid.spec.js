'use strict';
describe('JASMINE UNIT TEST', function() {
	// sample - http://jasmine.github.io/2.0/introduction.html

	// test value
	describe('true', function() {
		it('is true', function() {
			expect( true ).toBe( true );
		});

		it('is not false', function() {
			expect( true ).not.toBe( false );
		});
	});

	// test asynchronous function
	describe('asynchronous function', function() {
		var done;
	
		beforeEach(function() {
			done = false;

			var asyncFunc = function() {
				window.setTimeout(function() {
					done = true;
				}, 500);
			};

			runs(asyncFunc);

			//latch function, optional timeout message, optional timeout
			waitsFor(function() {
				return done;
			}, 'The asyncFunc function should be done by now.', 1000);

		});
	
		it('set "done" true.', function() {
			expect(done).toBe(true);
		});
	});

	// test regex
	describe('jasmine "toMatch" matcher', function() {
		var msg = 'foo bar baz';
		expect(msg).toMatch(/bar/);
	});

	// test function in other js file 
	describe('td.testFunc', function() {
		it('return true', function() {
			expect( td.testFunc() ).toBe( true );
		});

		it('tracks the number of times it was called.', function() {
			spyOn(td, 'testFunc');
			td.testFunc();
			td.testFunc();
			td.testFunc();
			expect( td.testFunc.callCount ).toBe( 3 );
		});
	});

	// test ajax function in other js file 
	describe('td.testAjaxGetCareer', function() {
		var successCallback,
			errorCallback;

		beforeEach(function() {
			successCallback = jasmine.createSpy();
			errorCallback = jasmine.createSpy();
		});

		afterEach(function() {
			successCallback = null;
			errorCallback = null;
		});

		it('should execute the success function on success', function() {
			spyOn($, 'ajax').andCallFake( function(options) {
				options.success();
			});
			td.testAjaxGetCareer('http://agile-oasis-5771.herokuapp.com/data/careers', successCallback);
			expect(successCallback).toHaveBeenCalled();
		});

		it('should execute the error function on fail', function() {
			spyOn($, 'ajax').andCallFake( function(options) {
				options.error();
			});
			td.testAjaxGetCareer('http://agile-oasis-5771.herokuapp.com/data/careers', successCallback, errorCallback);
			expect(errorCallback).toHaveBeenCalled();
		});
		
		it('should make a real Ajax request', function() {
			td.testAjaxGetCareer('http://agile-oasis-5771.herokuapp.com/data/careers', successCallback);
			waitsFor(function() {
				return successCallback.callCount > 0;
			});
			runs(function() {
				expect(successCallback).toHaveBeenCalled();
			})
		});
	});

	// test instance method in other js file 
	describe('td.testPerson', function() {
		it('has getName()', function() {
			var testPerson = new td.testPerson();
			spyOn(testPerson, 'getName');
			expect(testPerson.getName).toBeDefined();

			testPerson.getName();
			expect( testPerson.getName ).toHaveBeenCalled();
		});
	});

	// test invocation
	describe('td.testParent', function() {
		var parent = null,
			child = null;
	
		beforeEach(function() {
			parent = new td.testParent();
			child = new td.testChild();
		});
	
		afterEach(function() {
			parent = null;
			child = null;
		});

		it('call setLastName(). then, td.testChild call setLastName().', function() {
			var spy = spyOn(child, 'setLastName');
			parent.setChild(child);
			parent.setLastName('kim');

			expect(spy).toHaveBeenCalled();
		});

		it('call setLastName() with argument "kim". then, td.testChild call setLastName().', function() {
			var spy = spyOn(child, 'setLastName');
			parent.setChild(child);
			parent.setLastName('kim');

			expect(spy).toHaveBeenCalledWith('kim');
		});

		it('call setLastName("kim").andCallThrough. then, td.testChild getLastName() return "kim".', function() {
			spyOn(child, 'setLastName').andCallThrough();
			parent.setChild(child);
			parent.setLastName('kim');

			expect(child.getLastName()).toBe('kim');
		});
	});
});