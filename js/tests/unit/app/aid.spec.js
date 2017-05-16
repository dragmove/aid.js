"use strict";

describe('aid.js', function () {
  // sample - http://jasmine.github.io/2.0/introduction.html

  describe('aid', function () {
    describe('.existy()', function () {
      it('input undefined, return false', function () {
        expect(aid.existy(undefined)).toEqual(false);
      });

      it('input "undefined", return true', function () {
        expect(aid.existy("undefined")).toEqual(true);
      });

      it('input null, return false', function () {
        expect(aid.existy(null)).toEqual(false);
      });

      it('input false, return true', function () {
        expect(aid.existy(false)).toEqual(true);
      });

      it('input true, return true', function () {
        expect(aid.existy(true)).toEqual(true);
      });

      it('input 0, return true', function () {
        expect(aid.existy(0)).toEqual(true);
      });

      it('input "", return true', function () {
        expect(aid.existy("")).toEqual(true);
      });

      it('input {}, return true', function () {
        expect(aid.existy({})).toEqual(true);
      });
    });

    describe('.isDefined()', function () {
      it('input undefined, return false', function () {
        expect(aid.isDefined(undefined)).toEqual(false);
      });

      it('input "undefined", return true', function () {
        expect(aid.isDefined("undefined")).toEqual(true);
      });

      it('input null, return false', function () {
        expect(aid.isDefined(null)).toEqual(false);
      });

      it('input false, return true', function () {
        expect(aid.isDefined(false)).toEqual(true);
      });

      it('input true, return true', function () {
        expect(aid.isDefined(true)).toEqual(true);
      });

      it('input 0, return true', function () {
        expect(aid.isDefined(0)).toEqual(true);
      });

      it('input "", return true', function () {
        expect(aid.isDefined("")).toEqual(true);
      });

      it('input {}, return true', function () {
        expect(aid.isDefined({})).toEqual(true);
      });
    });

    describe('.isBoolean()', function () {
      it('input undefined, return false', function () {
        expect(aid.isBoolean(undefined)).toEqual(false);
      });

      it('input "undefined", return false', function () {
        expect(aid.isBoolean("undefined")).toEqual(false);
      });

      it('input null, return false', function () {
        expect(aid.isBoolean(null)).toEqual(false);
      });

      it('input false, return true', function () {
        expect(aid.isBoolean(false)).toEqual(true);
      });

      it('input true, return true', function () {
        expect(aid.isBoolean(true)).toEqual(true);
      });

      it('input 0, return false', function () {
        expect(aid.isBoolean(0)).toEqual(false);
      });

      it('input "", return false', function () {
        expect(aid.isBoolean("")).toEqual(false);
      });

      it('input {}, return false', function () {
        expect(aid.isBoolean({})).toEqual(false);
      });
    });

    describe('.isNumber()', function () {
      it('input undefined, return false', function () {
        expect(aid.isNumber(undefined)).toEqual(false);
      });

      it('input "undefined", return false', function () {
        expect(aid.isNumber("undefined")).toEqual(false);
      });

      it('input null, return false', function () {
        expect(aid.isNumber(null)).toEqual(false);
      });

      it('input false, return false', function () {
        expect(aid.isNumber(false)).toEqual(false);
      });

      it('input true, return false', function () {
        expect(aid.isNumber(true)).toEqual(false);
      });

      it('input "", return false', function () {
        expect(aid.isNumber("")).toEqual(false);
      });

      it('input {}, return false', function () {
        expect(aid.isNumber({})).toEqual(false);
      });

      it('input 0, return true', function () {
        expect(aid.isNumber(0)).toEqual(true);
      });

      it('input -1, return true', function () {
        expect(aid.isNumber(-1)).toEqual(true);
      });

      it('input Infinity, return true', function () {
        expect(aid.isNumber(Infinity)).toEqual(true);
      });

      it('input NaN, return true', function () {
        expect(aid.isNumber(NaN)).toEqual(true);
      });

      it('input Number.NaN, return true', function () {
        expect(aid.isNumber(Number.NaN)).toEqual(true);
      });

      it('input Number.MAX_VALUE, return true', function () {
        expect(aid.isNumber(Number.MAX_VALUE)).toEqual(true);
      });

      it('input Number.MIN_VALUE, return true', function () {
        expect(aid.isNumber(Number.MIN_VALUE)).toEqual(true);
      });

      it('input Number.POSITIVE_INFINITY, return true', function () {
        expect(aid.isNumber(Number.POSITIVE_INFINITY)).toEqual(true);
      });

      it('input Number.NEGATIVE_INFINITY, return true', function () {
        expect(aid.isNumber(Number.NEGATIVE_INFINITY)).toEqual(true);
      });
    });

    describe('.isInteger()', function () {
      it('input undefined, return false', function () {
        expect(aid.isInteger(undefined)).toEqual(false);
      });

      it('input "undefined", return false', function () {
        expect(aid.isInteger("undefined")).toEqual(false);
      });

      it('input null, return false', function () {
        expect(aid.isInteger(null)).toEqual(false);
      });

      it('input false, return false', function () {
        expect(aid.isInteger(false)).toEqual(false);
      });

      it('input true, return false', function () {
        expect(aid.isInteger(true)).toEqual(false);
      });

      it('input "", return false', function () {
        expect(aid.isInteger("")).toEqual(false);
      });

      it('input {}, return false', function () {
        expect(aid.isInteger({})).toEqual(false);
      });

      it('input infinity, return true', function () {
        expect(aid.isInteger(Infinity)).toEqual(false);
        expect(aid.isInteger(-Infinity)).toEqual(false);
      });

      it('input float, return true', function () {
        expect(aid.isInteger(-0.99)).toEqual(false);
        expect(aid.isInteger(0.99)).toEqual(false);
      });

      it('input int, return true', function () {
        expect(aid.isInteger(-99)).toEqual(true);
        expect(aid.isInteger(0)).toEqual(true);
        expect(aid.isInteger(99)).toEqual(true);
      });
    });

    describe('.isString()', function () {
      it('input undefined, return false', function () {
        expect(aid.isString(undefined)).toEqual(false);
      });

      it('input "undefined", return true', function () {
        expect(aid.isString("undefined")).toEqual(true);
      });

      it('input null, return false', function () {
        expect(aid.isString(null)).toEqual(false);
      });

      it('input false, return true', function () {
        expect(aid.isString(false)).toEqual(false);
      });

      it('input true, return true', function () {
        expect(aid.isString(true)).toEqual(false);
      });

      it('input 0, return false', function () {
        expect(aid.isString(0)).toEqual(false);
      });

      it('input "", return true', function () {
        expect(aid.isString("")).toEqual(true);
      });

      it('input {}, return false', function () {
        expect(aid.isString({})).toEqual(false);
      });
    });

    describe('.isArray()', function () {
      it('input undefined, return false', function () {
        expect(aid.isArray(undefined)).toEqual(false);
      });

      it('input "undefined", return false', function () {
        expect(aid.isArray("undefined")).toEqual(false);
      });

      it('input null, return false', function () {
        expect(aid.isArray(null)).toEqual(false);
      });

      it('input false, return false', function () {
        expect(aid.isArray(false)).toEqual(false);
      });

      it('input true, return false', function () {
        expect(aid.isArray(true)).toEqual(false);
      });

      it('input 0, return false', function () {
        expect(aid.isArray(0)).toEqual(false);
      });

      it('input "", return false', function () {
        expect(aid.isArray("")).toEqual(false);
      });

      it('input {}, return false', function () {
        expect(aid.isArray({})).toEqual(false);
      });

      it('input [], return true', function () {
        expect(aid.isArray([])).toEqual(true);
      });
    });

    describe('.isObject()', function () {
      it('input undefined, return false', function () {
        expect(aid.isObject(undefined)).toEqual(false);
      });

      it('input "undefined", return false', function () {
        expect(aid.isObject("undefined")).toEqual(false);
      });

      it('input null, return false', function () {
        expect(aid.isObject(null)).toEqual(false);
      });

      it('input false, return false', function () {
        expect(aid.isObject(false)).toEqual(false);
      });

      it('input true, return false', function () {
        expect(aid.isObject(true)).toEqual(false);
      });

      it('input 0, return false', function () {
        expect(aid.isObject(0)).toEqual(false);
      });

      it('input "", return false', function () {
        expect(aid.isObject("")).toEqual(false);
      });

      it('input {}, return true', function () {
        expect(aid.isObject({})).toEqual(true);
      });

      it('input [], return false', function () {
        expect(aid.isObject([])).toEqual(false);
      });
    });

    describe('.isFunction()', function () {
      it('input undefined, return false', function () {
        expect(aid.isFunction(undefined)).toEqual(false);
      });

      it('input "undefined", return false', function () {
        expect(aid.isFunction("undefined")).toEqual(false);
      });

      it('input null, return false', function () {
        expect(aid.isFunction(null)).toEqual(false);
      });

      it('input false, return false', function () {
        expect(aid.isFunction(false)).toEqual(false);
      });

      it('input true, return false', function () {
        expect(aid.isFunction(true)).toEqual(false);
      });

      it('input 0, return false', function () {
        expect(aid.isFunction(0)).toEqual(false);
      });

      it('input "", return false', function () {
        expect(aid.isFunction("")).toEqual(false);
      });

      it('input {}, return false', function () {
        expect(aid.isFunction({})).toEqual(false);
      });

      it('input [], return false', function () {
        expect(aid.isFunction([])).toEqual(false);
      });

      it('input function(){}, return true', function () {
        expect(aid.isFunction(function () {
        })).toEqual(true);
      });

      it('input literal function, return true', function () {
        var func = function () {
        };
        expect(aid.isFunction(func)).toEqual(true);
      });
    });

    describe('.isRegExp()', function () {
      it('input undefined, return false', function () {
        expect(aid.isRegExp(undefined)).toEqual(false);
      });

      it('input "undefined", return false', function () {
        expect(aid.isRegExp("undefined")).toEqual(false);
      });

      it('input null, return false', function () {
        expect(aid.isRegExp(null)).toEqual(false);
      });

      it('input false, return false', function () {
        expect(aid.isRegExp(false)).toEqual(false);
      });

      it('input true, return false', function () {
        expect(aid.isRegExp(true)).toEqual(false);
      });

      it('input 0, return false', function () {
        expect(aid.isRegExp(0)).toEqual(false);
      });

      it('input "", return false', function () {
        expect(aid.isRegExp("")).toEqual(false);
      });

      it('input {}, return false', function () {
        expect(aid.isRegExp({})).toEqual(false);
      });

      it('input [], return false', function () {
        expect(aid.isRegExp([])).toEqual(false);
      });

      it('input function(){}, return false', function () {
        expect(aid.isRegExp(function () {
        })).toEqual(false);
      });

      it('input RegExp object, return true', function () {
        expect(aid.isRegExp(new RegExp('^aid'))).toEqual(true);
      });

      it('input RegExp literal, return true', function () {
        expect(aid.isRegExp(/^aid/)).toEqual(true);
      });
    });

    describe('.extend()', function () {
      it('whether destination parameter type is not object or instance of object, throw Error.', function () {
        expect(function () {
          aid.extend(undefined, {say: 'hello, world'});
        }).toThrowError();

        expect(function () {
          aid.extend(null, {say: 'hello, world'});
        }).toThrowError();

        expect(function () {
          aid.extend(false, {say: 'hello, world'});
        }).toThrowError();

        expect(function () {
          aid.extend(true, {say: 'hello, world'});
        }).toThrowError();

        expect(function () {
          aid.extend(0, {say: 'hello, world'});
        }).toThrowError();

        expect(function () {
          aid.extend("", {say: 'hello, world'});
        }).toThrowError();

        expect(function () {
          aid.extend(NaN, {say: 'hello, world'});
        }).toThrowError();
      });

      it('if source parameter type is not object type, throw Error.', function () {
        expect(function () {
          aid.extend({}, undefined);
        }).toThrowError();

        expect(function () {
          aid.extend({}, null);
        }).not.toThrowError();

        expect(function () {
          aid.extend({}, false);
        }).toThrowError();

        expect(function () {
          aid.extend({}, true);
        }).toThrowError();

        expect(function () {
          aid.extend({}, 0);
        }).toThrowError();

        expect(function () {
          aid.extend({}, '');
        }).toThrowError();

        expect(function () {
          aid.extend({}, NaN);
        }).toThrowError();
      });

      it('input two objects, return extended object', function () {
        var destination = {
            name: 'destination',
            type: 'json'
          },
          source = {
            name: 'source',
            say: 'hello, world',
            sayHello: function () {
              return 'hello';
            }
          };

        aid.extend(destination, source);

        expect(destination.name).toEqual('source');
        expect(destination.type).toEqual('json');
        expect(destination.say).toEqual('hello, world');
        expect(destination.sayHello).toBeDefined();
      });

      it('input prototype of class function, object has methods. return extended class function', function () {
        function Destination() {
          this.name = 'destination';
          this.type = 'json';
        };

        var source = {
          getName: function () {
            return this.name;
          },
          getType: function () {
            return this.type;
          }
        };

        aid.extend(Destination.prototype, source);

        var destination = new Destination();

        expect(destination.name).toEqual('destination');
        expect(destination.hasOwnProperty('name')).toBeTruthy();

        expect(destination.type).toEqual('json');
        expect(destination.hasOwnProperty('type')).toBeTruthy();

        expect(destination.getName).toBeDefined();
        expect(destination.hasOwnProperty('getName')).toBeFalsy();

        expect(destination.getType).toBeDefined();
        expect(destination.hasOwnProperty('getType')).toBeFalsy();
      });
    });

    describe('.inherit()', function () {
      var Parent = function () {
        this.name = 'daddy';
      };
      Parent.prototype.getName = function () {
        return this.name;
      };

      var Child = function () {
        this.name = 'son';
      };

      aid.inherit(Child, Parent);

      var child = new Child();

      it('child has getName() method', function () {
        expect(typeof child.getName).toEqual('function');
      });

      it('child.getName() is "son"', function () {
        expect(child.getName()).toEqual('son');
      });

      it('child.hasOwnProperty("name") is true', function () {
        expect(child.hasOwnProperty('name')).toEqual(true);
      });
    });

    describe('.namespace()', function () {
      it('if namespace parameter type is not string, throw Error.', function () {
        expect(function () {
          aid.namespace(undefined);
        }).toThrowError();

        expect(function () {
          aid.namespace(null);
        }).toThrowError();

        expect(function () {
          aid.namespace(false);
        }).toThrowError();

        expect(function () {
          aid.namespace(true);
        }).toThrowError();

        expect(function () {
          aid.namespace(0);
        }).toThrowError();

        expect(function () {
          aid.namespace([]);
        }).toThrowError();

        expect(function () {
          aid.namespace(NaN);
        }).toThrowError();
      });

      it('if parent parameter type is not object or null or undefined, throw Error.', function () {
        expect(function () {
          var obj = {};
          aid.namespace('first.second', obj);
        }).not.toThrowError();

        expect(function () {
          aid.namespace('first.second', undefined);
        }).not.toThrowError();

        expect(function () {
          aid.namespace('first.second', null);
        }).not.toThrowError();

        expect(function () {
          aid.namespace('first.second', false);
        }).toThrowError();

        expect(function () {
          aid.namespace('first.second', true);
        }).toThrowError();

        expect(function () {
          aid.namespace('first.second', 0);
        }).toThrowError();

        expect(function () {
          aid.namespace('first.second', []);
        }).toThrowError();

        expect(function () {
          aid.namespace('first.second', NaN);
        }).toThrowError();
      });

      it('input aid.second.third string, set aid.second.third object', function () {
        aid.namespace('aid.second.third');
        expect(aid.second.third).toBeDefined();
      });

      it('input first.second string, set first.second object', function () {
        aid.namespace('first.second');
        expect(first).toBeDefined();
        expect(first.second).toBeDefined();
      });

      it('input first.second.third.fourth string, set first.second.third.fourth object', function () {
        aid.namespace('first.second.third.fourth');
        expect(first.second.third.fourth).toBeDefined();
      });

      it('input first.second.third.fourth string, set first.second.third.fourth object', function () {
        var p = {};
        aid.namespace('first.second.third', p);
        expect(p.first.second.third).toBeDefined();
      });
    });

    describe('.borrow()', function () {
      var borrower = {},
        donor = {
          say: function () {
            return 'hello, world';
          }
        };

      beforeEach(function () {
        borrower = {};
      });

      it('if borrower parameter is not Object type, throw TypeError', function () {
        expect(function () {
          aid.borrow(undefined, donor, 'say');
        }).toThrowError(Error);

        expect(function () {
          aid.borrow(null, donor, 'say');
        }).toThrowError(Error);

        expect(function () {
          aid.borrow(false, donor, 'say');
        }).toThrowError(Error);

        expect(function () {
          aid.borrow(true, donor, 'say');
        }).toThrowError(Error);

        expect(function () {
          aid.borrow('', donor, 'say');
        }).toThrowError(Error);

        expect(function () {
          aid.borrow(0, donor, 'say');
        }).toThrowError(Error);

        expect(function () {
          aid.borrow(NaN, donor, 'say');
        }).toThrowError(Error);

        expect(function () {
          aid.borrow([], donor, 'say');
        }).toThrowError(Error);
      });

      it('if donor parameter is not Object type, throw TypeError', function () {
        expect(function () {
          aid.borrow(borrower, undefined, 'say');
        }).toThrowError(Error);

        expect(function () {
          aid.borrow(borrower, null, 'say');
        }).toThrowError(Error);

        expect(function () {
          aid.borrow(borrower, false, 'say');
        }).toThrowError(Error);

        expect(function () {
          aid.borrow(borrower, true, 'say');
        }).toThrowError(Error);

        expect(function () {
          aid.borrow(borrower, '', 'say');
        }).toThrowError(Error);

        expect(function () {
          aid.borrow(borrower, 0, 'say');
        }).toThrowError(Error);

        expect(function () {
          aid.borrow(borrower, NaN, 'say');
        }).toThrowError(Error);

        expect(function () {
          aid.borrow(borrower, [], 'say');
        }).toThrowError(Error);
      });

      it('if functionName parameter is not String type, throw TypeError', function () {
        expect(function () {
          aid.borrow(borrower, donor, undefined);
        }).toThrowError(Error);

        expect(function () {
          aid.borrow(borrower, donor, null);
        }).toThrowError(Error);

        expect(function () {
          aid.borrow(borrower, donor, false);
        }).toThrowError(Error);

        expect(function () {
          aid.borrow(borrower, donor, true);
        }).toThrowError(Error);

        expect(function () {
          aid.borrow(borrower, donor, 0);
        }).toThrowError(Error);

        expect(function () {
          aid.borrow(borrower, donor, NaN);
        }).toThrowError(Error);

        expect(function () {
          aid.borrow(borrower, donor, {});
        }).toThrowError(Error);

        expect(function () {
          aid.borrow(borrower, donor, []);
        }).toThrowError(Error);
      });

      it('if donor has not function with functionName, throw Error', function () {
        expect(function () {
          aid.borrow(borrower, donor, 'hello');
        }).toThrowError(Error);
      });

      it('if borrower already has function with functionName, throw Error', function () {
        borrower = {
          say: function () {
            return "this method is borrower's";
          }
        };

        expect(function () {
          aid.borrow(borrower, donor, 'say');
        }).toThrowError(Error);

        borrower = {};

        expect(function () {
          aid.borrow(borrower, donor, 'say');
        }).not.toThrowError(Error);
      });

      it('after input borrower, donor, "say" parameters, borrower has say method', function () {
        expect(borrower.say).not.toBeDefined();

        aid.borrow(borrower, donor, 'say');

        expect(borrower.say).toBeDefined();

        expect(borrower.say()).toEqual('hello, world');
      });
    });

    describe('.bind()', function () {
      // TODO
    });

    describe('.compose()', function () {
      // TODO
    });

    describe('.not()', function () {
      // TODO
    });

    describe('.each()', function () {
      // TODO
    });

    describe('.truthy()', function () {
      // TODO
    });

    describe('.falsy()', function () {
      // TODO
    });

    describe('.createStack()', function () {
      var stack = aid.createStack();

      it('created Stack is exist', function () {
        expect(stack).not.toEqual(null);
      });

      it('new stack.length() is 0', function () {
        expect(stack.length()).toEqual(0);
      });

      it('new stack.peek() is undefined', function () {
        expect(stack.peek()).toEqual(undefined);
      });

      it('after execute stack.push("foo"), stack.length() is increased', function () {
        stack.push('foo');
        expect(stack.length()).toEqual(1);
        expect(stack.peek()).toEqual('foo');

        stack.push('bar');
        expect(stack.length()).toEqual(2);
        expect(stack.peek()).toEqual('bar');
      });

      it('after execute stack.pop(), stack.length() is decreased.', function () {
        var val = stack.pop();
        expect(val).toEqual('bar');
        expect(stack.peek()).toEqual('foo');
        expect(stack.length()).toEqual(1);

        val = stack.pop();
        expect(val).toEqual('foo');
        expect(stack.peek()).toEqual(undefined);
        expect(stack.length()).toEqual(0);

        val = stack.pop();
        expect(val).toEqual(undefined);
        expect(stack.length()).toEqual(0);
      });

      it('after execute stack.clear(), stack.length() is 0.', function () {
        for (var i = 0; i < 5; ++i) {
          stack.push(i);
        }
        expect(stack.length()).toEqual(5);

        stack.clear();
        expect(stack.length()).toEqual(0);

        var val = stack.pop();
        expect(val).toEqual(undefined);
      });
    });

    describe('.createQueue()', function () {
      // TODO
    });

    describe('.createLinkedList()', function () {
      var linkedList = aid.createLinkedList();

      it('created LinkedList is exist', function () {
        expect(linkedList).not.toEqual(null);
      });

      it('getAllNodes() return head node, when LinkedList created.', function () {
        var node = linkedList.getAllNodes();
        expect(node[0]).toEqual(linkedList.head);
      });

      // TODO
    });
  });
});