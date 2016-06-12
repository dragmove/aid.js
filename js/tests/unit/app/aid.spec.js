'use strict';
describe('aid.js', function () {
  // sample - http://jasmine.github.io/2.0/introduction.html

  describe('aid', function () {
    describe('.existy()', function () {
      it('input undefined, return false', function () {
        expect( aid.existy(undefined) ).toEqual(false);
      });

      it('input "undefined", return true', function () {
        expect( aid.existy("undefined") ).toEqual(true);
      });

      it('input null, return false', function () {
        expect( aid.existy(null) ).toEqual(false);
      });

      it('input false, return true', function () {
        expect( aid.existy(false) ).toEqual(true);
      });

      it('input true, return true', function () {
        expect( aid.existy(true) ).toEqual(true);
      });

      it('input 0, return true', function () {
        expect( aid.existy(0) ).toEqual(true);
      });

      it('input "", return true', function () {
        expect( aid.existy("") ).toEqual(true);
      });

      it('input {}, return true', function () {
        expect( aid.existy({}) ).toEqual(true);
      });
    });

    describe('.isDefined()', function () {
      it('input undefined, return false', function () {
        expect( aid.isDefined(undefined) ).toEqual(false);
      });

      it('input "undefined", return true', function () {
        expect( aid.isDefined("undefined") ).toEqual(true);
      });

      it('input null, return false', function () {
        expect( aid.isDefined(null) ).toEqual(false);
      });

      it('input false, return true', function () {
        expect( aid.isDefined(false) ).toEqual(true);
      });

      it('input true, return true', function () {
        expect( aid.isDefined(true) ).toEqual(true);
      });

      it('input 0, return true', function () {
        expect( aid.isDefined(0) ).toEqual(true);
      });

      it('input "", return true', function () {
        expect( aid.isDefined("") ).toEqual(true);
      });

      it('input {}, return true', function () {
        expect( aid.isDefined({}) ).toEqual(true);
      });
    });

    describe('.isBoolean()', function () {
      it('input undefined, return false', function () {
        expect( aid.isBoolean(undefined) ).toEqual(false);
      });

      it('input "undefined", return false', function () {
        expect( aid.isBoolean("undefined") ).toEqual(false);
      });
      
      it('input null, return false', function () {
        expect( aid.isBoolean(null) ).toEqual(false);
      });

      it('input false, return true', function () {
        expect( aid.isBoolean(false) ).toEqual(true);
      });

      it('input true, return true', function () {
        expect( aid.isBoolean(true) ).toEqual(true);
      });

      it('input 0, return false', function () {
        expect( aid.isBoolean(0) ).toEqual(false);
      });

      it('input "", return false', function () {
        expect( aid.isBoolean("") ).toEqual(false);
      });

      it('input {}, return false', function () {
        expect( aid.isBoolean({}) ).toEqual(false);
      });
    });

    describe('.isNumber()', function () {
      it('input undefined, return false', function () {
        expect( aid.isNumber(undefined) ).toEqual(false);
      });

      it('input "undefined", return false', function () {
        expect( aid.isNumber("undefined") ).toEqual(false);
      });
      
      it('input null, return false', function () {
        expect( aid.isNumber(null) ).toEqual(false);
      });

      it('input false, return false', function () {
        expect( aid.isNumber(false) ).toEqual(false);
      });

      it('input true, return false', function () {
        expect( aid.isNumber(true) ).toEqual(false);
      });

      it('input "", return false', function () {
        expect( aid.isNumber("") ).toEqual(false);
      });

      it('input {}, return false', function () {
        expect( aid.isNumber({}) ).toEqual(false);
      });

      it('input 0, return true', function () {
        expect( aid.isNumber(0) ).toEqual(true);
      });

      it('input -1, return true', function () {
        expect( aid.isNumber(-1) ).toEqual(true);
      });

      it('input Infinity, return true', function () {
        expect( aid.isNumber(Infinity) ).toEqual(true);
      });

      it('input NaN, return true', function () {
        expect( aid.isNumber(NaN) ).toEqual(true);
      });

      it('input Number.NaN, return true', function () {
        expect( aid.isNumber(Number.NaN) ).toEqual(true);
      });

      it('input Number.MAX_VALUE, return true', function () {
        expect( aid.isNumber(Number.MAX_VALUE) ).toEqual(true);
      });

      it('input Number.MIN_VALUE, return true', function () {
        expect( aid.isNumber(Number.MIN_VALUE) ).toEqual(true);
      });

      it('input Number.POSITIVE_INFINITY, return true', function () {
        expect( aid.isNumber(Number.POSITIVE_INFINITY) ).toEqual(true);
      });

      it('input Number.NEGATIVE_INFINITY, return true', function () {
        expect( aid.isNumber(Number.NEGATIVE_INFINITY) ).toEqual(true);
      });
    });

    describe('.isString()', function () {
      it('input undefined, return false', function () {
        expect( aid.isString(undefined) ).toEqual(false);
      });

      it('input "undefined", return true', function () {
        expect( aid.isString("undefined") ).toEqual(true);
      });
      
      it('input null, return false', function () {
        expect( aid.isString(null) ).toEqual(false);
      });

      it('input false, return true', function () {
        expect( aid.isString(false) ).toEqual(false);
      });

      it('input true, return true', function () {
        expect( aid.isString(true) ).toEqual(false);
      });

      it('input 0, return false', function () {
        expect( aid.isString(0) ).toEqual(false);
      });

      it('input "", return true', function () {
        expect( aid.isString("") ).toEqual(true);
      });

      it('input {}, return false', function () {
        expect( aid.isString({}) ).toEqual(false);
      });
    });

    describe('.isArray()', function () {
      it('input undefined, return false', function () {
        expect( aid.isArray(undefined) ).toEqual(false);
      });

      it('input "undefined", return false', function () {
        expect( aid.isArray("undefined") ).toEqual(false);
      });
      
      it('input null, return false', function () {
        expect( aid.isArray(null) ).toEqual(false);
      });

      it('input false, return false', function () {
        expect( aid.isArray(false) ).toEqual(false);
      });

      it('input true, return false', function () {
        expect( aid.isArray(true) ).toEqual(false);
      });

      it('input 0, return false', function () {
        expect( aid.isArray(0) ).toEqual(false);
      });

      it('input "", return false', function () {
        expect( aid.isArray("") ).toEqual(false);
      });

      it('input {}, return false', function () {
        expect( aid.isArray({}) ).toEqual(false);
      });

      it('input [], return true', function () {
        expect( aid.isArray([]) ).toEqual(true);
      });
    });

    describe('.isObject()', function () {
      it('input undefined, return false', function () {
        expect( aid.isObject(undefined) ).toEqual(false);
      });

      it('input "undefined", return false', function () {
        expect( aid.isObject("undefined") ).toEqual(false);
      });
      
      it('input null, return false', function () {
        expect( aid.isObject(null) ).toEqual(false);
      });

      it('input false, return false', function () {
        expect( aid.isObject(false) ).toEqual(false);
      });

      it('input true, return false', function () {
        expect( aid.isObject(true) ).toEqual(false);
      });

      it('input 0, return false', function () {
        expect( aid.isObject(0) ).toEqual(false);
      });

      it('input "", return false', function () {
        expect( aid.isObject("") ).toEqual(false);
      });

      it('input {}, return true', function () {
        expect( aid.isObject({}) ).toEqual(true);
      });

      it('input [], return false', function () {
        expect( aid.isObject([]) ).toEqual(false);
      });
    });

    describe('.isFunction()', function () {
      it('input undefined, return false', function () {
        expect( aid.isFunction(undefined) ).toEqual(false);
      });

      it('input "undefined", return false', function () {
        expect( aid.isFunction("undefined") ).toEqual(false);
      });
      
      it('input null, return false', function () {
        expect( aid.isFunction(null) ).toEqual(false);
      });

      it('input false, return false', function () {
        expect( aid.isFunction(false) ).toEqual(false);
      });

      it('input true, return false', function () {
        expect( aid.isFunction(true) ).toEqual(false);
      });

      it('input 0, return false', function () {
        expect( aid.isFunction(0) ).toEqual(false);
      });

      it('input "", return false', function () {
        expect( aid.isFunction("") ).toEqual(false);
      });

      it('input {}, return false', function () {
        expect( aid.isFunction({}) ).toEqual(false);
      });

      it('input [], return false', function () {
        expect( aid.isFunction([]) ).toEqual(false);
      });

      it('input function(){}, return true', function () {
        expect( aid.isFunction(function(){}) ).toEqual(true);
      });

      it('input literal function, return true', function () {
        var func = function() {};
        expect( aid.isFunction(func) ).toEqual(true);
      });
    });

    describe('.inherit()', function() {
      var Parent = function() {
        this.name = 'daddy';
      };
      Parent.prototype.getName = function() {
        return this.name;
      };

      var Child = function() {
        this.name = 'son';
      };

      aid.inherit(Child, Parent);

      var child = new Child();

      it('child has getName() method', function () {
        expect( typeof child.getName ).toEqual('function');
      });

      it('child.getName() is "son"', function () {
        expect( child.getName() ).toEqual( 'son' );
      });

      it('child.hasOwnProperty("name") is true', function () {
        expect( child.hasOwnProperty('name') ).toEqual( true );
      });
    });

    describe('.createStack()', function () {
      var stack = aid.createStack();

      it('created Stack is exist', function () {
        expect( stack ).not.toEqual(null);
      });

      it('new statck.length() is 0', function () {
        expect( stack.length() ).toEqual(0);
      });

      it('new stack.peek() is undefined', function () {
        expect( stack.peek() ).toEqual(undefined);
      });

      it('after execute stack.push("foo"), stack.length() is increased', function () {
        stack.push('foo');
        expect( stack.length() ).toEqual(1);
        expect( stack.peek() ).toEqual('foo');

        stack.push('bar');
        expect( stack.length() ).toEqual(2);
        expect( stack.peek() ).toEqual('bar');
      });

      it('after execute stack.pop(), stack.length() is decreased.', function () {
        var val = stack.pop();
        expect( val ).toEqual('bar');
        expect( stack.peek() ).toEqual('foo');
        expect( stack.length() ).toEqual(1);

        val = stack.pop();
        expect( val ).toEqual('foo');
        expect( stack.peek() ).toEqual(undefined);
        expect( stack.length() ).toEqual(0);

        val = stack.pop();
        expect( val ).toEqual(undefined);
        expect( stack.length() ).toEqual(0);
      });

      it('after execute stack.clear(), stack.length() is 0.', function () {
        for(var i=0; i<5; ++i) {
          stack.push(i);
        }
        expect( stack.length() ).toEqual(5);

        stack.clear();
        expect( stack.length() ).toEqual(0);

        var val = stack.pop();
        expect( val ).toEqual(undefined);
      });
    });

    describe('.createQueue()', function () {
      // TODO
    });

    describe('.createLinkedList()', function () {
      // TODO
    });
  });
});