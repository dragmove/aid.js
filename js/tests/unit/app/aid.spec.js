'use strict';

describe('aid.js', function() {
  // sample - http://jasmine.github.io/2.0/introduction.html

  describe('aid', function() {
    describe('.existy()', function() {
      it('input undefined, return false', function() {
        expect(aid.existy(undefined)).toEqual(false);
      });

      it('input "undefined", return true', function() {
        expect(aid.existy('undefined')).toEqual(true);
      });

      it('input null, return false', function() {
        expect(aid.existy(null)).toEqual(false);
      });

      it('input false, return true', function() {
        expect(aid.existy(false)).toEqual(true);
      });

      it('input true, return true', function() {
        expect(aid.existy(true)).toEqual(true);
      });

      it('input 0, return true', function() {
        expect(aid.existy(0)).toEqual(true);
      });

      it('input "", return true', function() {
        expect(aid.existy('')).toEqual(true);
      });

      it('input {}, return true', function() {
        expect(aid.existy({})).toEqual(true);
      });
    });

    describe('.isDefined()', function() {
      it('input undefined, return false', function() {
        expect(aid.isDefined(undefined)).toEqual(false);
      });

      it('input "undefined", return true', function() {
        expect(aid.isDefined('undefined')).toEqual(true);
      });

      it('input null, return false', function() {
        expect(aid.isDefined(null)).toEqual(false);
      });

      it('input false, return true', function() {
        expect(aid.isDefined(false)).toEqual(true);
      });

      it('input true, return true', function() {
        expect(aid.isDefined(true)).toEqual(true);
      });

      it('input 0, return true', function() {
        expect(aid.isDefined(0)).toEqual(true);
      });

      it('input "", return true', function() {
        expect(aid.isDefined('')).toEqual(true);
      });

      it('input {}, return true', function() {
        expect(aid.isDefined({})).toEqual(true);
      });
    });

    describe('.isBoolean()', function() {
      it('input undefined, return false', function() {
        expect(aid.isBoolean(undefined)).toEqual(false);
      });

      it('input "undefined", return false', function() {
        expect(aid.isBoolean('undefined')).toEqual(false);
      });

      it('input null, return false', function() {
        expect(aid.isBoolean(null)).toEqual(false);
      });

      it('input false, return true', function() {
        expect(aid.isBoolean(false)).toEqual(true);
      });

      it('input true, return true', function() {
        expect(aid.isBoolean(true)).toEqual(true);
      });

      it('input 0, return false', function() {
        expect(aid.isBoolean(0)).toEqual(false);
      });

      it('input "", return false', function() {
        expect(aid.isBoolean('')).toEqual(false);
      });

      it('input {}, return false', function() {
        expect(aid.isBoolean({})).toEqual(false);
      });
    });

    describe('.isNumber()', function() {
      it('input undefined, return false', function() {
        expect(aid.isNumber(undefined)).toEqual(false);
      });

      it('input "undefined", return false', function() {
        expect(aid.isNumber('undefined')).toEqual(false);
      });

      it('input null, return false', function() {
        expect(aid.isNumber(null)).toEqual(false);
      });

      it('input false, return false', function() {
        expect(aid.isNumber(false)).toEqual(false);
      });

      it('input true, return false', function() {
        expect(aid.isNumber(true)).toEqual(false);
      });

      it('input "", return false', function() {
        expect(aid.isNumber('')).toEqual(false);
      });

      it('input {}, return false', function() {
        expect(aid.isNumber({})).toEqual(false);
      });

      it('input 0, return true', function() {
        expect(aid.isNumber(0)).toEqual(true);
      });

      it('input -1, return true', function() {
        expect(aid.isNumber(-1)).toEqual(true);
      });

      it('input Infinity, return true', function() {
        expect(aid.isNumber(Infinity)).toEqual(true);
      });

      it('input NaN, return false', function() {
        expect(aid.isNumber(NaN)).toEqual(false);
      });

      it('input Number.NaN, return false', function() {
        expect(aid.isNumber(Number.NaN)).toEqual(false);
      });

      it('input Number.MAX_VALUE, return true', function() {
        expect(aid.isNumber(Number.MAX_VALUE)).toEqual(true);
      });

      it('input Number.MIN_VALUE, return true', function() {
        expect(aid.isNumber(Number.MIN_VALUE)).toEqual(true);
      });

      it('input Number.POSITIVE_INFINITY, return true', function() {
        expect(aid.isNumber(Number.POSITIVE_INFINITY)).toEqual(true);
      });

      it('input Number.NEGATIVE_INFINITY, return true', function() {
        expect(aid.isNumber(Number.NEGATIVE_INFINITY)).toEqual(true);
      });
    });

    describe('.isInteger()', function() {
      it('input undefined, return false', function() {
        expect(aid.isInteger(undefined)).toEqual(false);
      });

      it('input "undefined", return false', function() {
        expect(aid.isInteger('undefined')).toEqual(false);
      });

      it('input null, return false', function() {
        expect(aid.isInteger(null)).toEqual(false);
      });

      it('input false, return false', function() {
        expect(aid.isInteger(false)).toEqual(false);
      });

      it('input true, return false', function() {
        expect(aid.isInteger(true)).toEqual(false);
      });

      it('input "", return false', function() {
        expect(aid.isInteger('')).toEqual(false);
      });

      it('input {}, return false', function() {
        expect(aid.isInteger({})).toEqual(false);
      });

      it('input infinity, return true', function() {
        expect(aid.isInteger(Infinity)).toEqual(false);
        expect(aid.isInteger(-Infinity)).toEqual(false);
      });

      it('input float, return true', function() {
        expect(aid.isInteger(-0.99)).toEqual(false);
        expect(aid.isInteger(0.99)).toEqual(false);
      });

      it('input int, return true', function() {
        expect(aid.isInteger(-99)).toEqual(true);
        expect(aid.isInteger(0)).toEqual(true);
        expect(aid.isInteger(99)).toEqual(true);
      });
    });

    describe('.isString()', function() {
      it('input undefined, return false', function() {
        expect(aid.isString(undefined)).toEqual(false);
      });

      it('input "undefined", return true', function() {
        expect(aid.isString('undefined')).toEqual(true);
      });

      it('input null, return false', function() {
        expect(aid.isString(null)).toEqual(false);
      });

      it('input false, return true', function() {
        expect(aid.isString(false)).toEqual(false);
      });

      it('input true, return true', function() {
        expect(aid.isString(true)).toEqual(false);
      });

      it('input 0, return false', function() {
        expect(aid.isString(0)).toEqual(false);
      });

      it('input "", return true', function() {
        expect(aid.isString('')).toEqual(true);
      });

      it('input {}, return false', function() {
        expect(aid.isString({})).toEqual(false);
      });
    });

    describe('.isArray()', function() {
      it('input undefined, return false', function() {
        expect(aid.isArray(undefined)).toEqual(false);
      });

      it('input "undefined", return false', function() {
        expect(aid.isArray('undefined')).toEqual(false);
      });

      it('input null, return false', function() {
        expect(aid.isArray(null)).toEqual(false);
      });

      it('input false, return false', function() {
        expect(aid.isArray(false)).toEqual(false);
      });

      it('input true, return false', function() {
        expect(aid.isArray(true)).toEqual(false);
      });

      it('input 0, return false', function() {
        expect(aid.isArray(0)).toEqual(false);
      });

      it('input "", return false', function() {
        expect(aid.isArray('')).toEqual(false);
      });

      it('input {}, return false', function() {
        expect(aid.isArray({})).toEqual(false);
      });

      it('input [], return true', function() {
        expect(aid.isArray([])).toEqual(true);
      });
    });

    describe('.isObject()', function() {
      it('input undefined, return false', function() {
        expect(aid.isObject(undefined)).toEqual(false);
      });

      it('input "undefined", return false', function() {
        expect(aid.isObject('undefined')).toEqual(false);
      });

      it('input null, return false', function() {
        expect(aid.isObject(null)).toEqual(false);
      });

      it('input false, return false', function() {
        expect(aid.isObject(false)).toEqual(false);
      });

      it('input true, return false', function() {
        expect(aid.isObject(true)).toEqual(false);
      });

      it('input 0, return false', function() {
        expect(aid.isObject(0)).toEqual(false);
      });

      it('input "", return false', function() {
        expect(aid.isObject('')).toEqual(false);
      });

      it('input {}, return true', function() {
        expect(aid.isObject({})).toEqual(true);
      });

      it('input [], return false', function() {
        expect(aid.isObject([])).toEqual(false);
      });
    });

    describe('.isFunction()', function() {
      it('input undefined, return false', function() {
        expect(aid.isFunction(undefined)).toEqual(false);
      });

      it('input "undefined", return false', function() {
        expect(aid.isFunction('undefined')).toEqual(false);
      });

      it('input null, return false', function() {
        expect(aid.isFunction(null)).toEqual(false);
      });

      it('input false, return false', function() {
        expect(aid.isFunction(false)).toEqual(false);
      });

      it('input true, return false', function() {
        expect(aid.isFunction(true)).toEqual(false);
      });

      it('input 0, return false', function() {
        expect(aid.isFunction(0)).toEqual(false);
      });

      it('input "", return false', function() {
        expect(aid.isFunction('')).toEqual(false);
      });

      it('input {}, return false', function() {
        expect(aid.isFunction({})).toEqual(false);
      });

      it('input [], return false', function() {
        expect(aid.isFunction([])).toEqual(false);
      });

      it('input function(){}, return true', function() {
        expect(aid.isFunction(function() {})).toEqual(true);
      });

      it('input literal function, return true', function() {
        var func = function() {};
        expect(aid.isFunction(func)).toEqual(true);
      });
    });

    describe('.isRegExp()', function() {
      it('input undefined, return false', function() {
        expect(aid.isRegExp(undefined)).toEqual(false);
      });

      it('input "undefined", return false', function() {
        expect(aid.isRegExp('undefined')).toEqual(false);
      });

      it('input null, return false', function() {
        expect(aid.isRegExp(null)).toEqual(false);
      });

      it('input false, return false', function() {
        expect(aid.isRegExp(false)).toEqual(false);
      });

      it('input true, return false', function() {
        expect(aid.isRegExp(true)).toEqual(false);
      });

      it('input 0, return false', function() {
        expect(aid.isRegExp(0)).toEqual(false);
      });

      it('input "", return false', function() {
        expect(aid.isRegExp('')).toEqual(false);
      });

      it('input {}, return false', function() {
        expect(aid.isRegExp({})).toEqual(false);
      });

      it('input [], return false', function() {
        expect(aid.isRegExp([])).toEqual(false);
      });

      it('input function(){}, return false', function() {
        expect(aid.isRegExp(function() {})).toEqual(false);
      });

      it('input RegExp object, return true', function() {
        expect(aid.isRegExp(new RegExp('^aid'))).toEqual(true);
      });

      it('input RegExp literal, return true', function() {
        expect(aid.isRegExp(/^aid/)).toEqual(true);
      });
    });

    describe('.extend()', function() {
      var ERROR_MSG = 'destination parameter type of aid.extend() must be instance of Object, and object type.';

      it('whether destination parameter type is not object or instance of object, throw Error', function() {
        expect(function() {
          aid.extend(undefined, { say: 'hello, world' });
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          aid.extend(null, { say: 'hello, world' });
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          aid.extend(false, { say: 'hello, world' });
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          aid.extend(true, { say: 'hello, world' });
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          aid.extend(0, { say: 'hello, world' });
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          aid.extend('', { say: 'hello, world' });
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          aid.extend(NaN, { say: 'hello, world' });
        }).toThrowError(TypeError, ERROR_MSG);
      });

      it('if source parameter type is not object type, throw Error', function() {
        var ERROR_MSG = 'source parameter type of aid.extend() must be object type.';

        expect(function() {
          aid.extend({}, undefined);
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          aid.extend({}, null);
        }).not.toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          aid.extend({}, false);
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          aid.extend({}, true);
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          aid.extend({}, 0);
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          aid.extend({}, '');
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          aid.extend({}, NaN);
        }).toThrowError(TypeError, ERROR_MSG);
      });

      it('input two objects, return extended object', function() {
        var destination = {
            name: 'destination',
            type: 'json'
          },
          source = {
            name: 'source',
            say: 'hello, world',
            sayHello: function() {
              return 'hello';
            }
          };

        aid.extend(destination, source);

        expect(destination.name).toEqual('source');
        expect(destination.type).toEqual('json');
        expect(destination.say).toEqual('hello, world');
        expect(destination.sayHello).toBeDefined();
      });

      it('input prototype of class function, object has methods. return extended class function', function() {
        function Destination() {
          this.name = 'destination';
          this.type = 'json';
        }

        var source = {
          getName: function() {
            return this.name;
          },
          getType: function() {
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

      it('child has getName() method', function() {
        expect(typeof child.getName).toEqual('function');
      });

      it('child.getName() is "son"', function() {
        expect(child.getName()).toEqual('son');
      });

      it('child.hasOwnProperty("name") is true', function() {
        expect(child.hasOwnProperty('name')).toEqual(true);
      });
    });

    describe('.namespace()', function() {
      it('if namespace parameter type is not string, throw Error', function() {
        var ERROR_MSG = 'namespace parameter type of aid.namespace() must be String.';

        expect(function() {
          aid.namespace(undefined);
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          aid.namespace(null);
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          aid.namespace(false);
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          aid.namespace(true);
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          aid.namespace(0);
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          aid.namespace([]);
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          aid.namespace(NaN);
        }).toThrowError(TypeError, ERROR_MSG);
      });

      it('if parent parameter type is not object or null or undefined, throw Error', function() {
        var ERROR_MSG = 'parent parameter type of aid.namespace() must be Object or null or undefined.';

        expect(function() {
          var obj = {};
          aid.namespace('first.second', obj);
        }).not.toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          aid.namespace('first.second', undefined);
        }).not.toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          aid.namespace('first.second', null);
        }).not.toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          aid.namespace('first.second', false);
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          aid.namespace('first.second', true);
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          aid.namespace('first.second', 0);
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          aid.namespace('first.second', []);
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          aid.namespace('first.second', NaN);
        }).toThrowError(TypeError, ERROR_MSG);
      });

      it('input aid.second.third string, set aid.second.third object', function() {
        aid.namespace('aid.second.third');
        expect(aid.second.third).toBeDefined();
      });

      it('input first.second string, set first.second object', function() {
        aid.namespace('first.second');
        expect(first).toBeDefined();
        expect(first.second).toBeDefined();
      });

      it('input first.second.third.fourth string, set first.second.third.fourth object', function() {
        aid.namespace('first.second.third.fourth');
        expect(first.second.third.fourth).toBeDefined();
      });

      it('input first.second.third.fourth string, set first.second.third.fourth object', function() {
        var p = {};
        aid.namespace('first.second.third', p);
        expect(p.first.second.third).toBeDefined();
      });
    });

    describe('.borrow()', function() {
      var borrower = {},
        donor = {
          say: function() {
            return 'hello, world';
          }
        };

      beforeEach(function() {
        borrower = {};
      });

      it('if borrower parameter is not Object type, throw TypeError', function() {
        var ERROR_MSG = 'borrower, donor parameter type of aid.borrow() must be Object.';

        expect(function() {
          aid.borrow(undefined, donor, 'say');
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          aid.borrow(null, donor, 'say');
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          aid.borrow(false, donor, 'say');
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          aid.borrow(true, donor, 'say');
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          aid.borrow('', donor, 'say');
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          aid.borrow(0, donor, 'say');
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          aid.borrow(NaN, donor, 'say');
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          aid.borrow([], donor, 'say');
        }).toThrowError(TypeError, ERROR_MSG);
      });

      it('if donor parameter is not Object type, throw TypeError', function() {
        var ERROR_MSG = 'borrower, donor parameter type of aid.borrow() must be Object.';

        expect(function() {
          aid.borrow(borrower, undefined, 'say');
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          aid.borrow(borrower, null, 'say');
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          aid.borrow(borrower, false, 'say');
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          aid.borrow(borrower, true, 'say');
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          aid.borrow(borrower, '', 'say');
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          aid.borrow(borrower, 0, 'say');
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          aid.borrow(borrower, NaN, 'say');
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          aid.borrow(borrower, [], 'say');
        }).toThrowError(TypeError, ERROR_MSG);
      });

      it('if functionName parameter is not String type, throw TypeError', function() {
        var ERROR_MSG = 'functionName parameter type of aid.borrow() must be String.';

        expect(function() {
          aid.borrow(borrower, donor, undefined);
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          aid.borrow(borrower, donor, null);
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          aid.borrow(borrower, donor, false);
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          aid.borrow(borrower, donor, true);
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          aid.borrow(borrower, donor, 0);
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          aid.borrow(borrower, donor, NaN);
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          aid.borrow(borrower, donor, {});
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          aid.borrow(borrower, donor, []);
        }).toThrowError(TypeError, ERROR_MSG);
      });

      it('if donor has not function with functionName, throw Error', function() {
        var ERROR_MSG = 'donor object parameter of aid.borrow() has not function with functionName.';

        expect(function() {
          aid.borrow(borrower, donor, 'hello');
        }).toThrowError(Error, ERROR_MSG);
      });

      it('if borrower already has function with functionName, throw Error', function() {
        var ERROR_MSG = 'borrower object parameter of aid.borrow() already has function with functionName.';

        borrower = {
          say: function() {
            return "this method is borrower's";
          }
        };

        expect(function() {
          aid.borrow(borrower, donor, 'say');
        }).toThrowError(Error, ERROR_MSG);

        borrower = {};

        expect(function() {
          aid.borrow(borrower, donor, 'say');
        }).not.toThrowError(Error, ERROR_MSG);
      });

      it('after input borrower, donor, "say" parameters, borrower has say method', function() {
        expect(borrower.say).not.toBeDefined();

        aid.borrow(borrower, donor, 'say');

        expect(borrower.say).toBeDefined();

        expect(borrower.say()).toEqual('hello, world');
      });
    });

    describe('.bind()', function() {
      it('if func parameter is not Function type, throw TypeError', function() {
        var ERROR_MSG = 'func parameter type of aid.bind() must be Function.';

        expect(function() {
          aid.bind(undefined);
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          aid.bind(null);
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          aid.bind(false);
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          aid.bind(true);
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          aid.bind(0);
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          aid.bind(NaN);
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          aid.bind('');
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          aid.bind({});
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          aid.bind([]);
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          aid.bind(/^aid/);
        }).toThrowError(TypeError, ERROR_MSG);
      });

      it('return value type is function', function() {
        var obj = {
          title: 'obj - aid.js',
          getTitle: function() {
            return this.title;
          }
        };

        var getObjTitle = aid.bind(obj.getTitle, obj);

        expect(aid.isFunction(getObjTitle)).toBeTruthy();
      });
    });

    describe('.compose()', function() {
      it('func_a parameter type is not function, throw Error', function() {
        expect(function() {
          aid.compose(undefined, function() {});
        }).toThrowError();

        expect(function() {
          aid.compose(null, function() {});
        }).toThrowError();

        expect(function() {
          aid.compose(false, function() {});
        }).toThrowError();

        expect(function() {
          aid.compose(true, function() {});
        }).toThrowError();

        expect(function() {
          aid.compose(0, function() {});
        }).toThrowError();

        expect(function() {
          aid.compose(NaN, function() {});
        }).toThrowError();

        expect(function() {
          aid.compose('', function() {});
        }).toThrowError();

        expect(function() {
          aid.compose([], function() {});
        }).toThrowError();

        expect(function() {
          aid.compose({}, function() {});
        }).toThrowError();
      });

      it('func_b parameter type is not function, throw Error', function() {
        expect(function() {
          aid.compose(function() {}, undefined);
        }).toThrowError();

        expect(function() {
          aid.compose(function() {}, null);
        }).toThrowError();

        expect(function() {
          aid.compose(function() {}, false);
        }).toThrowError();

        expect(function() {
          aid.compose(function() {}, true);
        }).toThrowError();

        expect(function() {
          aid.compose(function() {}, 0);
        }).toThrowError();

        expect(function() {
          aid.compose(function() {}, NaN);
        }).toThrowError();

        expect(function() {
          aid.compose(function() {}, '');
        }).toThrowError();

        expect(function() {
          aid.compose(function() {}, []);
        }).toThrowError();

        expect(function() {
          aid.compose(function() {}, {});
        }).toThrowError();
      });

      it('return value type is function', function() {
        var isNotNaN = aid.compose(function(object) {
          return !object;
        }, isNaN);

        var isFunction = aid.isFunction(isNotNaN);

        expect(isFunction).toBeTruthy();
      });
    });

    describe('.not()', function() {
      it('func parameter type is not function, throw Error', function() {
        expect(function() {
          aid.not(undefined);
        }).toThrowError();

        expect(function() {
          aid.not(null);
        }).toThrowError();

        expect(function() {
          aid.not(false);
        }).toThrowError();

        expect(function() {
          aid.not(true);
        }).toThrowError();

        expect(function() {
          aid.not(0);
        }).toThrowError();

        expect(function() {
          aid.not('');
        }).toThrowError();

        expect(function() {
          aid.not(NaN);
        }).toThrowError();
      });

      it('func parameter type is function, does not throw Error', function() {
        expect(function() {
          aid.not(function() {
            return true;
          });
        }).not.toThrowError();
      });

      it('negate aid.existy', function() {
        var notExisty = aid.not(aid.existy);

        it('return function', function() {
          expect(aid.isFunction(notExisty)).toEqual(true);
        });

        it('input undefined to aid.not(aid.existy), return true', function() {
          expect(notExisty(undefined)).toEqual(true);
        });

        it('input "undefined" to aid.not(aid.existy), return false', function() {
          expect(notExisty('undefined')).toEqual(false);
        });

        it('input null to aid.not(aid.existy), return true', function() {
          expect(notExisty(null)).toEqual(true);
        });

        it('input false to aid.not(aid.existy), return false', function() {
          expect(notExisty(false)).toEqual(false);
        });

        it('input true to aid.not(aid.existy), return false', function() {
          expect(notExisty(true)).toEqual(false);
        });

        it('input 0 to aid.not(aid.existy), return false', function() {
          expect(notExisty(0)).toEqual(false);
        });

        it('input "" to aid.not(aid.existy), return false', function() {
          expect(notExisty('')).toEqual(false);
        });

        it('input {} to aid.not(aid.existy), return false', function() {
          expect(notExisty({})).toEqual(false);
        });
      });

      it('negate isNaN', function() {
        var isNotNaN = aid.not(isNaN);

        it('input undefined to aid.not(isNaN), return false', function() {
          expect(isNotNaN(undefined)).toEqual(false);
        });

        it('input 0 to aid.not(isNaN), return true', function() {
          expect(isNotNaN(0)).toEqual(true);
        });
      });
    });

    describe('.each()', function() {
      it('whether dataCanLoop parameter is not string or array, throw TypeError', function() {
        expect(function() {
          aid.each(undefined, function() {}, null);
        }).toThrowError(Error);

        expect(function() {
          aid.each(null, function() {}, null);
        }).toThrowError(Error);

        expect(function() {
          aid.each(false, function() {}, null);
        }).toThrowError(Error);

        expect(function() {
          aid.each(true, function() {}, null);
        }).toThrowError(Error);

        expect(function() {
          aid.each('', function() {}, null);
        }).not.toThrowError(Error);

        expect(function() {
          aid.each(0, function() {}, null);
        }).toThrowError(Error);

        expect(function() {
          aid.each(NaN, function() {}, null);
        }).toThrowError(Error);

        expect(function() {
          aid.each([], function() {}, null);
        }).not.toThrowError(Error);
      });

      it('input string, apply functions based on characters', function() {
        var result = [];

        aid.each(
          'aid.js',
          function(v) {
            result.push(v);
          },
          null
        );

        expect(result.join('')).toEqual('aid.js');
      });

      it('input array, apply functions based on elements', function() {
        var result = [];

        aid.each(
          [1, 2, 3, 4, 5],
          function(v) {
            result.push(v);
          },
          null
        );

        expect(result.join('')).toEqual('12345');
      });
    });

    describe('.truthy()', function() {
      var isBoolRegex = /true|false/;

      it('input undefined, return booblean', function() {
        expect(aid.truthy(undefined)).toMatch(isBoolRegex);
      });

      it('input "undefined", return booblean', function() {
        expect(aid.truthy('undefined')).toMatch(isBoolRegex);
      });

      it('input null, return booblean', function() {
        expect(aid.truthy(null)).toMatch(isBoolRegex);
      });

      it('input false, return booblean', function() {
        expect(aid.truthy(false)).toMatch(isBoolRegex);
      });

      it('input true, return booblean', function() {
        expect(aid.truthy(true)).toMatch(isBoolRegex);
      });

      it('input 0, return booblean', function() {
        expect(aid.truthy(0)).toMatch(isBoolRegex);
      });

      it('input "", return booblean', function() {
        expect(aid.truthy('')).toMatch(isBoolRegex);
      });

      it('input [], return booblean', function() {
        expect(aid.truthy([])).toMatch(isBoolRegex);
      });

      it('input function, return booblean', function() {
        expect(aid.truthy(function() {})).toMatch(isBoolRegex);
      });

      it('input {}, return booblean', function() {
        expect(aid.truthy({})).toMatch(isBoolRegex);
      });
    });

    describe('.falsy()', function() {
      var isBoolRegex = /true|false/;

      it('input undefined, return booblean', function() {
        expect(aid.falsy(undefined)).toMatch(isBoolRegex);
      });

      it('input "undefined", return booblean', function() {
        expect(aid.falsy('undefined')).toMatch(isBoolRegex);
      });

      it('input null, return booblean', function() {
        expect(aid.falsy(null)).toMatch(isBoolRegex);
      });

      it('input false, return booblean', function() {
        expect(aid.falsy(false)).toMatch(isBoolRegex);
      });

      it('input true, return booblean', function() {
        expect(aid.falsy(true)).toMatch(isBoolRegex);
      });

      it('input 0, return booblean', function() {
        expect(aid.falsy(0)).toMatch(isBoolRegex);
      });

      it('input "", return booblean', function() {
        expect(aid.falsy('')).toMatch(isBoolRegex);
      });

      it('input [], return booblean', function() {
        expect(aid.falsy([])).toMatch(isBoolRegex);
      });

      it('input function, return booblean', function() {
        expect(aid.falsy(function() {})).toMatch(isBoolRegex);
      });

      it('input {}, return booblean', function() {
        expect(aid.falsy({})).toMatch(isBoolRegex);
      });
    });

    describe('.nth()', function() {
      it('whether dataCanLoop parameter type is not string or array, throw TypeError', function() {
        expect(function() {
          aid.nth(undefined, 0);
        }).toThrowError();

        expect(function() {
          aid.nth(null, 0);
        }).toThrowError();

        expect(function() {
          aid.nth(false, 0);
        }).toThrowError();

        expect(function() {
          aid.nth(true, 0);
        }).toThrowError();

        expect(function() {
          aid.nth(0, 0);
        }).toThrowError();

        expect(function() {
          aid.nth({}, 0);
        }).toThrowError();
      });

      it('input string, return nth character', function() {
        expect(aid.nth('string', 0)).toEqual('s');
        expect(aid.nth('string', 1)).toEqual('t');
        expect(aid.nth('string', 2)).toEqual('r');
      });

      it('input array, return nth element', function() {
        expect(aid.nth([0, 'str', true], 0)).toEqual(0);
        expect(aid.nth([0, 'str', true], 1)).toEqual('str');
        expect(aid.nth([0, 'str', true], 2)).toEqual(true);
      });

      it('index value is out of bounds of dataCanLoop parameter, return null', function() {
        expect(aid.nth('string', -1)).toEqual(null);
        expect(aid.nth('string', 99)).toEqual(null);

        expect(aid.nth([0, 'str', true], -1)).toEqual(null);
        expect(aid.nth([0, 'str', true], 99)).toEqual(null);
      });
    });

    describe('.allOf()', function() {
      it('return true when values are all true', function() {
        expect(aid.allOf(true)).toBe(true);
        expect(aid.allOf(true, true)).toBe(true);
      });

      it('return false when values are not all true', function() {
        expect(aid.allOf(false)).toBe(false);
        expect(aid.allOf(1)).toBe(false);
        expect(aid.allOf('aid')).toBe(false);
        expect(aid.allOf([])).toBe(false);
        expect(aid.allOf(function() {})).toBe(false);
        expect(aid.allOf({})).toBe(false);
        expect(aid.allOf(/^aid/)).toBe(false);

        expect(aid.allOf(true, false)).toBe(false);
        expect(aid.allOf(false, true)).toBe(false);
        expect(aid.allOf(1, 1)).toBe(false);
        expect(aid.allOf('aid', 'aid')).toBe(false);
        expect(aid.allOf([], [])).toBe(false);
        expect(aid.allOf(function() {}, function() {})).toBe(false);
        expect(aid.allOf({}, {})).toBe(false);
        expect(aid.allOf(/^aid/, /^aid/)).toBe(false);
      });
    });

    describe('.anyOf()', function() {
      it('return true when some value is true', function() {
        expect(aid.anyOf(true)).toBe(true);

        expect(aid.anyOf(true, false)).toBe(true);
        expect(aid.anyOf(true, 1)).toBe(true);
        expect(aid.anyOf(true, 'aid')).toBe(true);
        expect(aid.anyOf(true, [])).toBe(true);
        expect(aid.anyOf(true, function() {})).toBe(true);
        expect(aid.anyOf(true, {})).toBe(true);
        expect(aid.anyOf(true, /^aid/)).toBe(true);
      });

      it('return false when any values are not true', function() {
        expect(aid.anyOf(false)).toBe(false);
        expect(aid.anyOf(1)).toBe(false);
        expect(aid.anyOf('aid')).toBe(false);
        expect(aid.anyOf([])).toBe(false);
        expect(aid.anyOf(function() {})).toBe(false);
        expect(aid.anyOf({})).toBe(false);
        expect(aid.anyOf(/^aid/)).toBe(false);

        expect(aid.anyOf(false, false)).toBe(false);
        expect(aid.anyOf(1, 1)).toBe(false);
        expect(aid.anyOf('aid', 'aid')).toBe(false);
        expect(aid.anyOf([], [])).toBe(false);
        expect(aid.anyOf(function() {}, function() {})).toBe(false);
        expect(aid.anyOf({}, {})).toBe(false);
        expect(aid.anyOf(/^aid/, /^aid/)).toBe(false);
      });
    });

    describe('.constant()', function() {
      it('input value, return value intactly', function() {
        var obj = { name: 'obj' },
          func = function() {
            return null;
          };

        expect(aid.constant(obj)()).toEqual(obj);
        expect(aid.constant(func)()).toEqual(func);

        expect(aid.constant(undefined)()).toEqual(undefined);
        expect(aid.constant(null)()).toEqual(null);
        expect(aid.constant(false)()).toEqual(false);
        expect(aid.constant(0)()).toEqual(0);
        expect(aid.constant('str')()).toEqual('str');
      });
    });

    describe('.plucker()', function() {
      it('whether field parameter type is not string or number, throw Error', function() {
        expect(function() {
          aid.plucker(undefined, 0);
        }).toThrowError();

        expect(function() {
          aid.plucker(null);
        }).toThrowError();

        expect(function() {
          aid.plucker(false);
        }).toThrowError();

        expect(function() {
          aid.plucker(true);
        }).toThrowError();

        expect(function() {
          aid.plucker([]);
        }).toThrowError();

        expect(function() {
          aid.plucker({});
        }).toThrowError();

        expect(function() {
          aid.plucker(function() {});
        }).toThrowError();
      });

      it('if field parameter type is string or number, does not throw Error', function() {
        expect(function() {
          aid.plucker('title');
        }).not.toThrowError();

        expect(function() {
          aid.plucker(0);
        }).not.toThrowError();
      });

      it('return function', function() {
        var getTitle = aid.plucker('title');

        it('obj parameter type is not object or array or string, throw Error', function() {
          expect(function() {
            getTitle(undefined);
          }).toThrowError();

          expect(function() {
            getTitle(null);
          }).toThrowError();

          expect(function() {
            getTitle(false);
          }).toThrowError();

          expect(function() {
            getTitle(true);
          }).toThrowError();

          expect(function() {
            getTitle(function() {});
          }).toThrowError();
        });
      });

      it('return function', function() {
        var getTitle = aid.plucker('title');

        it('pluck field of object (if object has field)', function() {
          var obj = {
            title: 'aid.js',
            description: 'A bundle of Javascript util Library for help developers. No dependency to other Libraries.'
          };

          expect(getTitle(obj)).toEqual('aid.js');
        });

        it('pluck field of object (if object has not field)', function() {
          var obj = {
            description: 'A bundle of Javascript util Library for help developers. No dependency to other Libraries.'
          };

          expect(getTitle(obj)).toEqual(undefined);
        });
      });

      it('return function', function() {
        var getFirst = aid.plucker(0),
          getUnknown = aid.plucker(9999),
          getLength = aid.plucker('length');

        it('pluck character of string (if string is not empty)', function() {
          var str = 'aid.js';
          expect(getFirst(str)).toEqual('a');
        });

        it('pluck character of string (if string is empty)', function() {
          var str = '';
          expect(getFirst(str)).toEqual(undefined);
          expect(getUnknown(str)).toEqual(undefined);
        });

        it('pluck property of string', function() {
          var str = 'aid.js';
          expect(getLength(str)).toEqual(6);
        });
      });

      it('return function', function() {
        var getFirst = aid.plucker(0),
          getUnknown = aid.plucker(9999),
          getLength = aid.plucker('length');

        it('pluck element of array (if array has element)', function() {
          var arr = [1, 2, 3, 4, 5];
          expect(getFirst(arr)).toEqual(1);
        });

        it('pluck element of array (if array has not element)', function() {
          var arr = [];
          expect(getFirst(arr)).toEqual(undefined);
          expect(getUnknown(arr)).toEqual(undefined);
        });

        it('pluck property of array', function() {
          var arr = [1, 2, 3, 4, 5];
          expect(getLength(arr)).toEqual(5);
        });
      });
    });

    describe('.best()', function() {
      it('if conditionFunc parameter type is not function, throw Error', function() {
        var ERROR_MSG = 'conditionFunc parameter type of aid.best() must be Function.';

        expect(function() {
          aid.best(undefined, []);
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          aid.best(null, []);
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          aid.best(false, []);
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          aid.best(true, []);
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          aid.best(99, []);
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          aid.best('', []);
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          aid.best([], []);
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          aid.best({}, []);
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          aid.best(function() {}, []);
        }).not.toThrowError(TypeError, ERROR_MSG);
      });

      it('if array parameter type is not array, throw Error', function() {
        var ERROR_MSG = 'array parameter type of aid.best() must be Array.';

        expect(function() {
          aid.best(function() {}, undefined);
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          aid.best(function() {}, null);
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          aid.best(function() {}, false);
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          aid.best(function() {}, true);
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          aid.best(function() {}, 99);
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          aid.best(function() {}, '');
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          aid.best(function() {}, {});
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          aid.best(function() {}, []);
        }).not.toThrowError(TypeError, ERROR_MSG);
      });

      it('find best value from array with condition', function() {
        var val = aid.best(
          function(x, y) {
            return x > y;
          },
          [2, 4, 1, 5, 3]
        );

        expect(val).toEqual(5);
      });

      it('find best value from array with condition', function() {
        var val = aid.best(
          function(x, y) {
            return x < y;
          },
          [2, 4, 1, 5, 3]
        );

        expect(val).toEqual(1);
      });
    });

    describe('.iterateUntil()', function() {
      // TODO
    });

    describe('.curry()', function() {
      // TODO
    });

    describe('.curry2()', function() {
      it('func parameter type is not function, throw Error', function() {
        expect(function() {
          aid.curry2(undefined);
        }).toThrowError();

        expect(function() {
          aid.curry2(null);
        }).toThrowError();

        expect(function() {
          aid.curry2(false);
        }).toThrowError();

        expect(function() {
          aid.curry2(true);
        }).toThrowError();

        expect(function() {
          aid.curry2(0);
        }).toThrowError();

        expect(function() {
          aid.curry2('');
        }).toThrowError();

        expect(function() {
          aid.curry2([]);
        }).toThrowError();

        expect(function() {
          aid.curry2(NaN);
        }).toThrowError();

        expect(function() {
          aid.curry2(parseInt);
        }).not.toThrowError();
      });

      it('return function', function() {
        var parseBinaryStr = aid.curry2(parseInt)(2);
        expect(aid.isFunction(parseBinaryStr)).toBe(true);
      });

      it('return function can use curried function', function() {
        var parseBinaryStr = aid.curry2(parseInt)(2);
        expect(parseBinaryStr('111')).toEqual(7);
      });
    });

    describe('.curryAll()', function() {
      it('func parameter type is not function, throw Error', function() {
        expect(function() {
          aid.curryAll(undefined);
        }).toThrowError();

        expect(function() {
          aid.curryAll(null);
        }).toThrowError();

        expect(function() {
          aid.curryAll(false);
        }).toThrowError();

        expect(function() {
          aid.curryAll(true);
        }).toThrowError();

        expect(function() {
          aid.curryAll(0);
        }).toThrowError();

        expect(function() {
          aid.curryAll('');
        }).toThrowError();

        expect(function() {
          aid.curryAll([]);
        }).toThrowError();

        expect(function() {
          aid.curryAll(NaN);
        }).toThrowError();

        expect(function() {
          aid.curryAll(Math.max);
        }).not.toThrowError();
      });

      it('return function', function() {
        var curriedMax = aid.curryAll(Math.max, 2);
        expect(aid.isFunction(curriedMax)).toBe(true);
      });

      it('return function if arguments are not filled', function() {
        var curriedMax = aid.curryAll(Math.max, 2),
          notFilledMax = curriedMax(1);

        expect(aid.isFunction(notFilledMax)).toBe(true);
      });

      it('return result if arguments are filled', function() {
        var curriedMax = aid.curryAll(Math.max, 2),
          notFilledMax = curriedMax(1),
          result = notFilledMax(99);

        expect(result).toBe(99);
        expect(curriedMax(1, 99)).toBe(99);
      });
    });

    describe('.rest()', function() {
      var rest = [];

      beforeEach(function() {
        rest = [];
      });

      it('func parameter type is not function, throw Error', function() {
        expect(function() {
          aid.rest(undefined);
        }).toThrowError();

        expect(function() {
          aid.rest(null);
        }).toThrowError();

        expect(function() {
          aid.rest(false);
        }).toThrowError();

        expect(function() {
          aid.rest(true);
        }).toThrowError();

        expect(function() {
          aid.rest(0);
        }).toThrowError();

        expect(function() {
          aid.rest('');
        }).toThrowError();

        expect(function() {
          aid.rest([]);
        }).not.toThrowError();

        expect(function() {
          aid.rest(NaN);
        }).toThrowError();

        expect(function() {
          aid.rest(function() {});
        }).toThrowError();
      });

      it('return empty array if array has no arguments', function() {
        rest = aid.rest([], 3);
        expect(rest).toEqual([]);
      });

      it('return array has rest arguments', function() {
        rest = aid.rest([1, 2, 3, 4, 5]);
        expect(rest).toEqual([2, 3, 4, 5]);
      });

      it('return array has rest arguments from beginIndex', function() {
        rest = aid.rest([1, 2, 3, 4, 5], 2);
        expect(rest).toEqual([3, 4, 5]);
      });

      it('return empty array if beginIndex >= length of array', function() {
        rest = aid.rest([1, 2, 3, 4, 5], 5);
        expect(rest).toEqual([]);

        rest = aid.rest([1, 2, 3, 4, 5], 99);
        expect(rest).toEqual([]);
      });
    });

    describe('.pipeline()', function() {
      var seed = null;

      function negative(n) {
        return n * -1;
      }

      function half(n) {
        return n / 2;
      }

      beforeEach(function() {
        seed = null;
      });

      it('return seed value if input only seed value', function() {
        seed = aid.pipeline(99);
        expect(seed).toEqual(99);
      });

      it('rest parameters type is not function, throw Error', function() {
        expect(function() {
          aid.pipeline(99, undefined);
        }).toThrowError();

        expect(function() {
          aid.pipeline(99, null);
        }).toThrowError();

        expect(function() {
          aid.pipeline(99, false);
        }).toThrowError();

        expect(function() {
          aid.pipeline(99, true);
        }).toThrowError();

        expect(function() {
          aid.pipeline(99, 0);
        }).toThrowError();

        expect(function() {
          aid.pipeline(99, '');
        }).toThrowError();

        expect(function() {
          aid.pipeline(99, []);
        }).toThrowError();

        expect(function() {
          aid.pipeline(99, NaN);
        }).toThrowError();

        expect(function() {
          aid.pipeline(99, negative);
        }).not.toThrowError();
      });

      it('return value from pipe functions', function() {
        seed = aid.pipeline(99, negative);
        expect(seed).toEqual(-99);

        seed = aid.pipeline(80, negative, half);
        expect(seed).toEqual(-40);
      });
    });

    describe('.lazyChain()', function() {
      it('return object', function() {
        it('has invoke function', function() {
          var lazy = aid.lazyChain([3, 2, 1]);

          expect(lazy.invoke).toBeDefined();
          expect(aid.isFunction(lazy.invoke)).toBe(true);
        });

        it('has force function', function() {
          var lazy = aid.lazyChain([3, 2, 1]);

          expect(lazy.force).toBeDefined();
          expect(aid.isFunction(lazy.force)).toEqual(true);
        });
      });

      it('return object throw error when call force if target argument has not method', function() {
        var lazy = aid.lazyChain([3, 2, 1]).invoke('nonexistentMethod');

        expect(function() {
          lazy.force();
        }).toThrowError();
      });

      it('return value, when call force', function() {
        var lazyAdd99 = aid.lazyChain([3, 2, 1]).invoke('concat', [99]);
        expect(lazyAdd99.force()).toEqual([3, 2, 1, 99]);
      });

      it('return object can use with aid.pipeline', function() {
        function double(array) {
          return array.map(function(v) {
            return v * 2;
          });
        }

        function lazyReverseAndNegative(array) {
          return aid
            .lazyChain(array)
            .invoke('reverse')
            .invoke('map', function(v) {
              return v * -1;
            });
        }

        expect(aid.pipeline([1, 2, 3], double, lazyReverseAndNegative).force()).toEqual([-6, -4, -2]);
      });
    });

    describe('.eq()', function() {
      it('input equal primitive values, return true', function() {
        expect(aid.eq(undefined)(undefined)).toEqual(true);

        expect(aid.eq(null)(null)).toEqual(true);

        expect(aid.eq(true)(true)).toEqual(true);

        expect(aid.eq(99)(99)).toEqual(true);

        expect(aid.eq('aid')('aid')).toEqual(true);

        // TODO: Test Symbol
      });

      it('input one reference, return true', function() {
        var arr = [],
          obj = {},
          date = new Date(),
          regex = new RegExp();

        var func = function() {};

        var instance = new func();

        expect(aid.eq(arr)(arr)).toEqual(true);

        expect(aid.eq(obj)(obj)).toEqual(true);

        expect(aid.eq(date)(date)).toEqual(true);

        expect(aid.eq(regex)(regex)).toEqual(true);

        expect(aid.eq(func)(func)).toEqual(true);

        expect(aid.eq(instance)(instance)).toEqual(true);

        // TODO: Test Map, Set, WeakMap, WeakSet
      });
    });

    describe('.alt()', function() {
      it('func_a parameter type is not function, throw Error', function() {
        expect(function() {
          aid.alt(undefined, function() {});
        }).toThrowError();

        expect(function() {
          aid.alt(null, function() {});
        }).toThrowError();

        expect(function() {
          aid.alt(false, function() {});
        }).toThrowError();

        expect(function() {
          aid.alt(true, function() {});
        }).toThrowError();

        expect(function() {
          aid.alt(0, function() {});
        }).toThrowError();

        expect(function() {
          aid.alt(NaN, function() {});
        }).toThrowError();

        expect(function() {
          aid.alt('', function() {});
        }).toThrowError();

        expect(function() {
          aid.alt([], function() {});
        }).toThrowError();

        expect(function() {
          aid.alt({}, function() {});
        }).toThrowError();

        expect(function() {
          aid.alt(new RegExp('^aid'), function() {});
        }).toThrowError();

        expect(function() {
          aid.alt(/^aid/, function() {});
        }).toThrowError();
      });

      it('func_b parameter type is not function, throw Error', function() {
        expect(function() {
          aid.alt(function() {}, undefined);
        }).toThrowError();

        expect(function() {
          aid.alt(function() {}, null);
        }).toThrowError();

        expect(function() {
          aid.alt(function() {}, false);
        }).toThrowError();

        expect(function() {
          aid.alt(function() {}, true);
        }).toThrowError();

        expect(function() {
          aid.alt(function() {}, 0);
        }).toThrowError();

        expect(function() {
          aid.alt(function() {}, NaN);
        }).toThrowError();

        expect(function() {
          aid.alt(function() {}, '');
        }).toThrowError();

        expect(function() {
          aid.alt(function() {}, []);
        }).toThrowError();

        expect(function() {
          aid.alt(function() {}, {});
        }).toThrowError();

        expect(function() {
          aid.alt(function() {}, new RegExp('^aid'));
        }).toThrowError();

        expect(function() {
          aid.alt(function() {}, /^aid/);
        }).toThrowError();
      });

      it('return func_b(value) if func_a(value) is undefined or null or false', function() {
        var func_a = function(val) {
            return val;
          },
          func_b = function(val) {
            return !val;
          };

        var alt = aid.alt(func_a, func_b);

        expect(alt(undefined)).toEqual(func_b(undefined));
        expect(alt(null)).toEqual(func_b(null));
        expect(alt(false)).toEqual(func_b(false));
      });

      it('return func_a(value) if func_a(value) is not undefined or null or false', function() {
        var func_a = function(val) {
            return val;
          },
          func_b = function(val) {
            return !val;
          };

        var alt = aid.alt(func_a, func_b);

        expect(alt(true)).toEqual(func_a(true));
        expect(alt(0)).toEqual(func_a(0));
        expect(alt(NaN)).toEqual(func_a(NaN));
        expect(alt('')).toEqual(func_a(''));
        expect(alt([])).toEqual(func_a([]));
        expect(alt({})).toEqual(func_a({}));
        expect(alt(new RegExp('^aid'))).toEqual(func_a(new RegExp('^aid')));
        expect(alt(/^aid/)).toEqual(func_a(/^aid/));
      });
    });

    describe('.seq()', function() {
      // TODO: write test spec
    });

    describe('.createStack()', function() {
      var stack = aid.createStack();

      it('created Stack is exist', function() {
        expect(stack).not.toEqual(null);
      });

      it('new stack.length() is 0', function() {
        expect(stack.length()).toEqual(0);
      });

      it('new stack.peek() is undefined', function() {
        expect(stack.peek()).toEqual(undefined);
      });

      it('after execute stack.push("foo"), stack.length() is increased', function() {
        stack.push('foo');
        expect(stack.length()).toEqual(1);
        expect(stack.peek()).toEqual('foo');

        stack.push('bar');
        expect(stack.length()).toEqual(2);
        expect(stack.peek()).toEqual('bar');
      });

      it('after execute stack.pop(), stack.length() is decreased', function() {
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

      it('after execute stack.clear(), stack.length() is 0', function() {
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

    describe('.createQueue()', function() {
      // TODO - createQueue
    });

    describe('.createLinkedList()', function() {
      var linkedList = aid.createLinkedList();

      it('created LinkedList is exist', function() {
        expect(linkedList).not.toEqual(null);
      });

      it('getAllNodes() return head node, when LinkedList created', function() {
        var node = linkedList.getAllNodes();
        expect(node[0]).toEqual(linkedList.head);
      });

      /// TODO - createLinkedList
    });
  });
});
