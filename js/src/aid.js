(function() {
  'use strict';

  // Establish the global object, `window` (`self`) in the browser, `global`
  // on the server, or `this` in some virtual machines. We use `self`
  // instead of `window` for `WebWorker` support.
  var global =
    (typeof self == 'object' && self.self === self && self) ||
    (typeof global == 'object' && global.global === global && global) ||
    this ||
    {};

  var _slice = Array.prototype.slice;

  var aid = {},
    operator = {},
    platform = {},
    browser = {},
    string = {},
    math = {},
    date = {},
    array = {},
    object = {},
    element = {},
    file = {},
    clipboard = {},
    monad = {}; // https://en.wikipedia.org/wiki/Monad_(functional_programming)

  /**
   * get object is null/undefined or other
   *
   * @static
   * @method existy
   * @param {Object} obj
   * @returns {Boolean} return boolean
   * @example
   * console.log( aid.existy(undefined) ); // false
   * console.log( aid.existy(null) ); // false
   * console.log( aid.existy('') ); // true
   */
  aid.existy = function existy(obj) {
    return obj != null;
  };

  /**
   * check object is defined
   *
   * @static
   * @method isDefined
   * @param {Object} obj
   * @returns {Boolean} return boolean
   * @example
   * console.log( aid.isDefined(undefined) ); // false
   * console.log( aid.isDefined(null) ); // false
   * console.log( aid.isDefined(0) ); // true
   */
  aid.isDefined = function isDefined(obj) {
    if (obj === null || typeof obj === 'undefined') return false;

    return true;
  };

  /**
   * check object type is Boolean
   *
   * @static
   * @method isBoolean
   * @param {Object} obj
   * @returns {Boolean} return boolean
   * @example
   * console.log( aid.isBoolean(false) ); // true
   */
  aid.isBoolean = function isBoolean(obj) {
    if (!aid.isDefined(obj)) return false;

    return obj.constructor === Boolean;
  };

  /**
   * check object type is Number
   *
   * @static
   * @method isNumber
   * @param {Object} obj
   * @returns {Boolean} return boolean
   * @example
   * console.log( aid.isNumber(-1) ); // true
   */
  aid.isNumber = function isNumber(obj) {
    if (!aid.isDefined(obj)) return false;

    return !isNaN(obj) && obj.constructor === Number;
  };

  /**
   * check object type is Integer Number
   *
   * @static
   * @method isInteger
   * @param {Object} obj
   * @returns {Boolean} return boolean
   * @example
   * console.log( aid.isInteger(-1) ); // true
   */
  aid.isInteger = function isInteger(obj) {
    if (!aid.isNumber(obj)) return false;

    // https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger
    return isFinite(obj) && Math.floor(obj) === obj;
  };

  /**
   * check object type is String
   *
   * @static
   * @method isString
   * @param {Object} obj
   * @returns {Boolean} return boolean
   * @example
   * console.log( aid.isString('') ); // true
   */
  aid.isString = function isString(obj) {
    if (!aid.isDefined(obj)) return false;

    return obj.constructor === String;
  };

  /**
   * check object type is Array
   *
   * @static
   * @method isArray
   * @param {Object} obj
   * @returns {Boolean} return boolean
   * @example
   * console.log( aid.isArray([]) ); // true
   */
  aid.isArray = function isArray(obj) {
    if (!aid.isDefined(obj)) return false;

    return obj.constructor === Array;
  };

  /**
   * check object type is Object
   *
   * @static
   * @method isObject
   * @param {Object} obj
   * @returns {Boolean} return boolean
   * @example
   * console.log( aid.isObject({}) ); // true
   */
  aid.isObject = function isObject(obj) {
    if (!aid.isDefined(obj)) return false;

    return obj.constructor === Object;
  };

  /**
   * check object type is Function
   *
   * @static
   * @method isFunction
   * @param {Object} obj
   * @returns {Boolean} return boolean
   * @example
   * console.log( aid.isFunction(function(){}) ); // true
   */
  aid.isFunction = function isFunction(obj) {
    if (!aid.isDefined(obj)) return false;

    return obj.constructor === Function;
  };

  /**
   * check object type is RegExp
   *
   * @static
   * @method isRegExp
   * @param {Object} obj
   * @returns {Boolean} return boolean
   * @example
   * console.log( aid.isRegExp(new RegExp('^aid')) ); // true
   * console.log( aid.isRegExp(/^aid/) ); // true
   */
  aid.isRegExp = function isRegExp(obj) {
    if (!aid.isDefined(obj)) return false;

    return obj.constructor === RegExp;
  };

  /**
   * extend function
   *
   * @static
   * @method extend
   * @param {Object} prototype of class function, or object has variables or methods.
   * @param {Object} object has variables or methods
   * @example
   * function Destination() {
   *   this.name = 'destination';
   *   this.type = 'json';
   * };
   *
   * var source = {
   *   getName: function() { return this.name; },
   *   getType: function() { return this.type; }
   * };
   *
   * aid.extend(Destination.prototype, source);
   *
   * var destination = new Destination();
   * console.log( destination.getName() ); // 'destination'
   * console.log( destination.getType() ); // 'json'
   */
  aid.extend = function extend(destination, source) {
    if (
      !(destination instanceof Object) ||
      !(typeof destination === 'object')
    ) {
      throw new TypeError(
        'destination parameter type of aid.extend() must be instance of Object, and object type.'
      );
    }

    if (!(typeof source === 'object'))
      throw new TypeError(
        'source parameter type of aid.extend() must be object type.'
      );

    for (var key in source) {
      if (source.hasOwnProperty(key)) {
        destination[key] = source[key];
      }
    }

    return destination;
  };

  /**
   * inherit Class function
   *
   * @static
   * @method inherit
   * @param {class} ChildClass - child class function
   * @param {class} ParentClass - parent class function
   * @example
   */
  aid.inherit = (function() {
    // use closure, protect gabarge collection.
    var F = function() {};

    return function inherit(ChildClass, ParentClass) {
      F.prototype = ParentClass.prototype;

      ChildClass.prototype = new F();
      ChildClass.prototype.constructor = ChildClass;
      ChildClass.super = ParentClass.prototype;
    };
  })();

  /**
   * create namespace
   *
   * @static
   * @method namespace
   * @param {String} namespace
   * @param {Object} parent
   * @returns {Object} return object
   * @example
   * aid.namespace('first.second.third'); // create first.second.third object
   */
  aid.namespace = function(namespace, parent) {
    if (!aid.isString(namespace))
      throw new TypeError(
        'namespace parameter type of aid.namespace() must be String.'
      );

    if (!(aid.isObject(parent) || !aid.isDefined(parent))) {
      throw new TypeError(
        'parent parameter type of aid.namespace() must be Object or null or undefined.'
      );
    }

    var ns = parent || global;

    if (namespace) {
      var parts = namespace.split('.');

      for (var i = 0, max = parts.length; i < max; i++) {
        if (!ns[parts[i]]) ns[parts[i]] = {};
        ns = ns[parts[i]];
      }
    }

    return ns;
  };

  /**
   * borrow method from donor object
   *
   * @static
   * @method borrow
   * @param {Object} borrower
   * @param {Object} donor
   * @param {String} functionName
   * @example
   * var borrower = {}, donor = { say: function() { return 'hello, world'; } };
   * aid.borrow(borrower, donor, 'say');
   * console.log( borrower.say() ); // 'hello, world'
   */
  aid.borrow = function borrow(borrower, donor, functionName) {
    if (!aid.isObject(borrower) || !aid.isObject(donor))
      throw new TypeError(
        'borrower, donor parameter type of aid.borrow() must be Object.'
      );

    if (!aid.isString(functionName))
      throw new TypeError(
        'functionName parameter type of aid.borrow() must be String.'
      );

    if (!aid.isDefined(donor[functionName]))
      throw new Error(
        'donor object parameter of aid.borrow() has not function with functionName.'
      );

    if (aid.isDefined(borrower[functionName]))
      throw new Error(
        'borrower object parameter of aid.borrow() already has function with functionName.'
      );

    borrower[functionName] = function() {
      var args = _slice.call(arguments);
      return donor[functionName].apply(this, args);
    };
  };

  /**
   * return function bind context and parameters
   *
   * @static
   * @method bind
   * @param {Function} func
   * @param {Object} context
   * @returns {Function} return function
   * @example
   * this.title = 'global - aid.js';
   * var obj = { title: 'obj - aid.js', getTitle: function() { return this.title; } };
   * var getObjTitle = bind(obj.getTitle, obj), getGlobalTitle = bind(obj.getTitle, window);
   * console.log( getObjTitle() ); // 'obj - aid.js';
   * console.log( getGlobalTitle() ); // 'global - aid.js';
   */
  aid.bind = function bind(func, context) {
    if (!aid.isFunction(func))
      throw new TypeError(
        'func parameter type of aid.bind() must be Function.'
      );

    return function() {
      return func.apply(context, arguments);
    };
  };

  /**
   * return function composed function_a and function_b
   *
   * @static
   * @method compose
   * @param {Function} func_a
   * @param {Function} func_b
   * @returns {Function} return function
   * @example
   * var isNotNaN = aid.compose(aid.operator['!'], isNaN);
   * console.log( isNotNaN(0) ); // true
   */
  aid.compose = function compose(func_a, func_b) {
    if (!aid.isFunction(func_a) || !aid.isFunction(func_b)) {
      throw new TypeError(
        'func_a, func_b parameter type of aid.compose() must be Function.'
      );
    }

    return function() {
      return func_a(func_b.apply(null, arguments));
    };
  };

  /**
   * return function negate object parameter
   *
   * @static
   * @method not
   * @param {Function} func
   * @returns {Function} return function
   * @example
   * var isNotNaN = aid.not(isNaN);
   * console.log( isNotNaN(0) ); // true
   */
  aid.not = function not(func) {
    if (!aid.isFunction(func))
      throw new TypeError('func parameter type of aid.not() must be Function.');

    return function() {
      return !func.apply(null, arguments);
    };
  };

  /**
   * each method for data can loop
   *
   * @static
   * @method each
   * @param {Array or String} dataCanLoop
   * @param {Function} func
   * @param {Object} context
   * @example
   * var result = [];
   * aid.each('aid.js', function(v) { result.push(v); }, null);
   * console.log( result.join('') ); // 'aid.js'
   */
  aid.each = function each(dataCanLoop, func, context) {
    if (!(aid.isArray(dataCanLoop) || aid.isString(dataCanLoop))) {
      throw new TypeError(
        'dataCanLoop parameter type of aid.each() must be Array or String.'
      );
    }

    var _context = aid.existy(context) ? context : null;

    for (var i = 0, max = dataCanLoop.length; i < max; i++) {
      func.call(_context, dataCanLoop[i]);
    }
  };

  /**
   * check object is truthy
   *
   * @static
   * @method truthy
   * @param {Object} obj
   * @returns {Boolean} return boolean
   * @example
   * console.log( aid.truthy(true) ); // true
   * console.log( aid.truthy([]) ); // true
   * console.log( aid.truthy(0) ); // false
   * console.log( aid.truthy('') ); // false
   */
  aid.truthy = function truthy(obj) {
    return !!obj;
  };

  /**
   * check object is falsy
   *
   * @static
   * @method falsy
   * @param {Object} obj
   * @returns {Boolean} return boolean
   * @example
   * console.log( aid.falsy(true) ); // false
   * console.log( aid.falsy([]) ); // false
   * console.log( aid.falsy(0) ); // true
   * console.log( aid.falsy('') ); // true
   */
  aid.falsy = function falsy(obj) {
    return !!!obj;
  };

  /**
   * get indexed value of array or string
   *
   * @static
   * @method nth
   * @param {Array or String} dataCanLoop
   * @param {Number} index
   * @example
   * console.log( aid.nth('string', 1) ); // 't'
   * console.log( aid.nth('string', -1) ); // null
   * console.log( aid.nth([0, 'str', true], 2) ); // true
   * console.log( aid.nth([0, 'str', true], 99) ); // null
   */
  aid.nth = function nth(dataCanLoop, index) {
    if (!(aid.isArray(dataCanLoop) || aid.isString(dataCanLoop))) {
      throw new TypeError(
        'dataCanLoop parameter type of aid.nth() must be Array or String.'
      );
    }

    if (!aid.isInteger(index))
      throw new TypeError(
        'index parameter type of aid.nth() must be Integer Number.'
      );

    return index < 0 || index > dataCanLoop.length - 1
      ? null
      : dataCanLoop[index];
  };

  /**
   * check all arguments are true
   *
   * @static
   * @method allOf
   * @returns {Boolean} return boolean
   * @example
   * console.log( aid.allOf(true, true) ); // true
   * console.log( aid.allOf(true, false) ); // false
   */
  aid.allOf = function allOf(/*args*/) {
    var args = _slice.call(arguments);

    return args.every(function(val) {
      return val === true;
    });
  };

  /**
   * check some argument is true
   *
   * @static
   * @method anyOf
   * @returns {Boolean} return boolean
   * @example
   * console.log( anyOf(true, false) ); // true
   * console.log( anyOf(false, false) ); // false
   */
  aid.anyOf = function anyOf(/*args*/) {
    var args = _slice.call(arguments);

    return args.some(function(val) {
      return val === true;
    });
  };

  /**
   * return function always return constant value
   * http://underscorejs.org/#constant
   *
   * @static
   * @method constant
   * @param {Object} obj
   * @returns {Function} return function
   * @example
   * var obj = {name: 'aid.js'};
   * console.log( aid.constant(obj)() === obj ); // true
   */
  aid.constant = function constant(obj) {
    return function() {
      return obj;
    };
  };

  /**
   * return function pluck field of object, array, string
   *
   * @static
   * @method plucker
   * @param {String or Number} field of object, array, string
   * @returns {Function} return function
   * @example
   * var getTitle = aid.plucker('title');
   * var obj = {title: 'aid.js', description: 'A bundle of Javascript util Library for help developers. No dependency to other Libraries.'};
   * console.log( getTitle(obj) ); // 'aid.js'
   *
   * var getFirst = aid.plucker(0);
   * var str = 'aid.js';
   * console.log( getFirst(str) ); // 'a'
   *
   * var getLength = aid.plucker('length');
   * var arr = [1, 2, 3, 4, 5];
   * console.log( getLength(arr) ); // 5
   */
  aid.plucker = function plucker(field) {
    if (!(aid.isString(field) || aid.isNumber(field))) {
      throw new TypeError(
        'field parameter type of aid.plucker() must be String or Number.'
      );
    }

    return function(obj) {
      if (!(aid.isObject(obj) || aid.isArray(obj) || aid.isString(obj))) {
        throw new TypeError(
          'obj parameter type of function (get from aid.plucker()) must be Object or Array or String.'
        );
      }

      return obj[field];
    };
  };

  /**
   * return best(optimized by condition function) value.
   *
   * @static
   * @method best
   * @param {Function} condition function to find best value.
   * @param {Array} array
   * @example
   * console.log( aid.best(function(x, y) { return x > y; }, [2, 4, 1, 5, 3]) ); // 5
   */
  aid.best = function best(conditionFunc, array) {
    if (!aid.isFunction(conditionFunc))
      throw new TypeError(
        'conditionFunc parameter type of aid.best() must be Function.'
      );

    if (!aid.isArray(array))
      throw new TypeError('array parameter type of aid.best() must be Array.');

    return array.reduce(function(previousValue, currentValue) {
      return conditionFunc(previousValue, currentValue)
        ? previousValue
        : currentValue;
    });
  };

  /**
   * return array has values filtered
   *
   * @static
   * @method iterateUntil
   * @param {Function} function return value
   * @param {Function} function has condition
   * @param {Object} initial value
   * @returns {Array} return array has values filtered.
   * @example
   * console.log( aid.iterateUntil(function(n) { return n + n; }, function(n) { return n <= 1042 }, 1) ); // [2, 4, 8, 16, 32, 64, 128, 256, 512, 1024]
   */
  aid.iterateUntil = function iterateUntil(
    calculateFunc,
    conditionFunc,
    initialValue
  ) {
    if (!aid.isFunction(calculateFunc))
      throw new TypeError(
        'calculateFunc parameter type of aid.iterateUntil() must be Function.'
      );

    if (!aid.isFunction(conditionFunc))
      throw new TypeError(
        'conditionFunc parameter type of aid.iterateUntil() must be Function.'
      );

    var array = [],
      result = calculateFunc(initialValue);

    while (conditionFunc(result)) {
      array.push(result);
      result = calculateFunc(result);
    }

    return array;
  };

  /**
   * curry function can use one parameter
   *
   * @static
   * @method curry
   * @param {Function} function
   * @returns {Function} return function
   * @example
   */
  aid.curry = function curry(func) {
    if (!aid.isFunction(func))
      throw new TypeError(
        'func parameter type of aid.curry() must be Function.'
      );

    return function(arg) {
      return func(arg);
    };
  };

  /**
   * curry function can use two parameter
   *
   * @static
   * @method curry2
   * @param {Function} function
   * @returns {Function} return function
   * @example
   * var parseBinaryStr = aid.curry2(parseInt)(2);
   * console.log( parseBinaryStr('111') ); // 7
   */
  aid.curry2 = function curry2(func) {
    if (!aid.isFunction(func))
      throw new TypeError(
        'func parameter type of aid.curry2() must be Function.'
      );

    return function(secondArg) {
      return function(firstArg) {
        return func(firstArg, secondArg);
      };
    };
  };

  /**
   * curry function for variadic functions.
   *
   * @static
   * @method curryAll
   * @param {Function} function
   * @param {Number} minimum number of arguments to curry
   * @returns {Function} return function
   * @example
   * console.log( curryAll(Math.max, 2)(1, 99) ); // 99
   * console.log( curryAll(Math.max, 2)(1)(99) ); // 99
   */
  aid.curryAll = function curryAll(func, curryArgsNum) {
    if (!aid.isFunction(func))
      throw new TypeError(
        'func parameter type of aid.curryAll() must be Function.'
      );

    var arity = curryArgsNum || func.length;

    return function curried() {
      var args = _slice.call(arguments),
        context = this;

      return args.length >= arity
        ? func.apply(context, args)
        : function() {
            var rest = _slice.call(arguments);
            return curried.apply(context, args.concat(rest));
          };
    };
  };

  /**
   * rest
   * // refer to _.rest function of underscore.js - https://github.com/jashkenas/underscore/blob/master/underscore.js
   *
   * @static
   * @method rest
   * @param {Array} array
   * @param {Number} begin index to slice arguments.
   * @returns {Array} return array
   * @example
   * var array = [1, 2, 3, 4, 5];
   * console.log( aid.rest(array) ); // [2, 3, 4, 5]
   * console.log( aid.rest(array, 2) ); // [3, 4, 5]
   */
  aid.rest = function rest(array, beginIndex) {
    if (!aid.isArray(array))
      throw new TypeError('array parameter type of aid.rest() must be Array.');

    var begin = !aid.existy(beginIndex) ? 1 : beginIndex;

    return _slice.call(array, begin);
  };

  /**
   * pipeline
   *
   * @static
   * @method pipeline
   * @param {Object} seed
   * @returns {Object} return value
   * @example
   * function negative(n) { return n * -1; }
   * function half(n) { return n / 2; }
   * function negativeHalf(n) { return aid.pipeline(n, negative, half); }
   * console.log( aid.pipeline(80, negative) ); // -80
   * console.log( negativeHalf(80) ); // 80 * -1 / 2
   */
  aid.pipeline = function pipeline(seed /* args */) {
    var restArgs = aid.rest(_slice.call(arguments));

    aid.each(
      restArgs,
      function(value) {
        if (!aid.isFunction(value))
          throw new TypeError(
            'rest parameters type of aid.pipeline() must be Function.'
          );
      },
      null
    );

    return restArgs.reduce(function(prev, current) {
      return current(prev);
    }, seed);
  };

  /**
   * lazyChain
   *
   * @static
   * @method lazyChain
   * @param {Object} object
   * @returns {Object} return {invoke, force}
   * @example
   * var lazy = aid.lazyChange([2, 1, 3]).invoke('concat', [7, 7, 8, 9, 0]).invoke('sort');
   * console.log( lazy.force() ); // [0, 1, 2, 3, 7, 7, 8, 9]
   *
   * // with aid.pipeline
   * function double(array) { return array.map(function(v) { return v * 2; }); }
   * function lazyReverseAndNegative(array) { return aid.lazyChain(array).invoke('reverse').invoke('map', function(v) { return v * -1; }); }
   * console.log( aid.pipeline([1, 2, 3], double, lazyReverseAndNegative).force() ); // [-6, -4, -2]
   */
  aid.lazyChain = function lazyChain(obj) {
    var calls = [];

    return {
      invoke: function(methodName /*, args */) {
        var args = aid.rest(_slice.call(arguments));

        calls.push(function(target) {
          var method = target[methodName];

          if (!aid.isDefined(method)) {
            throw Error(
              target.constructor.name + ' has not ' + methodName + ' method.'
            );
          }

          return method.apply(target, args);
        });

        return this;
      },

      force: function() {
        return calls.reduce(function(ret, thunk) {
          return thunk(ret);
        }, obj);
      }
    };
  };

  /**
   * check two parameters are equal
   *
   * @static
   * @method eq
   * @param {Object} obj
   * @param {Object} obj
   * @returns {Boolean} return boolean
   * @example
   * console.log( aid.eq(99)(99) ); // true
   */
  aid.eq = aid.curry2(function(lhs, rhs) {
    return lhs === rhs;
  });

  /**
   * identity combinator
   *
   * @static
   * @method identity
   * @param {Object} value
   * @returns {Object} return value
   * @example
   * TODO:
   */
  aid.identity = function identity(value) {
    return value;
  };

  /**
   * tab combinator
   *
   * @static
   * @method tab
   * @param {Function} function
   * @returns {Function} return function
   * @example
   * TODO:
   */
  aid.tab = function tab(func) {
    if (!aid.isFunction(func)) {
      throw new TypeError('func parameter type of aid.tab() must be Function.');
    }

    return function(value) {
      func(value);

      return value;
    };
  };

  /**
   * alt combinator
   *
   * @static
   * @method alt
   * @param {Function} func_a
   * @param {Function} func_b
   * @returns {Function} return function
   * @example
   * var alt = aid.alt(function(val) { return val; }, function(val) { return !val; });
   * console.log( alt(false) ); // true
   */
  aid.alt = function alt(func_a, func_b) {
    if (!aid.isFunction(func_a) || !aid.isFunction(func_b)) {
      throw new TypeError(
        'func_a, func_b parameter type of aid.alt() must be Function.'
      );
    }

    return function(value) {
      var result_a = func_a(value);

      // undefined, null, false
      if (!aid.isDefined(result_a) || result_a === false) return func_b(value);

      return result_a;
    };
  };

  /**
   * seq combinator
   *
   * @static
   * @method seq
   * @param {Function} functions
   * @returns {Function} return function
   * @example
   * var seq = aid.seq(function(val) { console.log(val); }, function(val) { console.log(val / -1) });
   * seq(99); // 99, -99
   */
  aid.seq = function seq(/* functions */) {
    var funcs = _slice.call(arguments);

    funcs.forEach(function(func) {
      if (!aid.isFunction(func))
        throw new TypeError('aid.seq() requires function parameters.');
    });

    return function(value) {
      funcs.forEach(function(func) {
        func.call(null, value);
      });
    };
  };

  /**
   * fork(join) combinator
   *
   * @static
   * @method fork
   * @param {Function} join
   * @param {Function} func_a
   * @param {Function} func_b
   * @returns {Function} return function
   * @example
   * var fork = aid.fork(function(val_a, val_b) { return [val_a, val_b]; }, function(val) { return val; }, function(val) { return !val; });
   * console.log( fork(true) ); // [true, false]
   */
  aid.fork = function fork(join, func_a, func_b) {
    if (
      !aid.isFunction(join) ||
      !aid.isFunction(func_a) ||
      !aid.isFunction(func_b)
    ) {
      throw new TypeError(
        'join, func_a, func_b parameter type of aid.fork() must be Function.'
      );
    }

    return function(value) {
      return join.call(
        null,
        func_a.call(null, value),
        func_b.call(null, value)
      );
    };
  };

  /*
   * Data Structure
   */
  // Stack
  var Stack = function() {
    this._dataStore = [];
    this._top = 0;
  };

  Stack.prototype.push = function push(element) {
    if (this._top < 0) this._top = 0;
    this._dataStore[this._top++] = element;
  };

  Stack.prototype.pop = function pop() {
    return this._dataStore[--this._top];
  };

  Stack.prototype.peek = function peek() {
    return this._dataStore[this._top - 1];
  };

  Stack.prototype.length = function length() {
    return this._top > 0 ? this._top : 0;
  };

  Stack.prototype.clear = function clear() {
    this._dataStore = [];
    this._top = 0;
  };

  aid.createStack = function() {
    return new Stack();
  };

  // Queue
  var Queue = function() {
    this._dataStore = [];
  };

  Queue.prototype.enqueue = function enqueue(element) {
    this._dataStore.push(element);
  };

  Queue.prototype.dequeue = function dequeue() {
    return this._dataStore.shift();
  };

  Queue.prototype.front = function front() {
    return this._dataStore[0];
  };

  Queue.prototype.rear = function rear() {
    return this._dataStore[this._dataStore.length - 1];
  };

  Queue.prototype.length = function length() {
    return this._dataStore.length;
  };

  Queue.prototype.isEmpty = function isEmpty() {
    if (this._dataStore.length <= 0) return true;
    return false;
  };

  aid.createQueue = function createQueue() {
    return new Queue();
  };

  // LinkedList node
  var LinkedListNode = function(data) {
    this.data = data;
    this.next = null;
  };

  // LinkedList
  var LinkedList = function() {
    this.head = new LinkedListNode('head');
  };

  LinkedList.prototype.find = function find(data) {
    var node = this.head;
    while (node.data !== data) {
      node = node.next;
      if (node === null) return node;
    }
    return node;
  };

  LinkedList.prototype.findPrevious = function findPrevious(data) {
    if (this.head.data === data) return null;

    var node = this.head;
    while (node.next !== null && node.next.data !== data) {
      node = node.next;
    }
    return node;
  };

  LinkedList.prototype.insert = function insert(data, prevNodeData) {
    var insertNode = new LinkedListNode(data),
      prevNode = this.find(prevNodeData);

    insertNode.next = prevNode.next;
    prevNode.next = insertNode;
  };

  LinkedList.prototype.remove = function remove(data) {
    var prevNode = this.findPrevious(data);

    if (prevNode.next !== null) {
      prevNode.next = prevNode.next.next;
    }
  };

  LinkedList.prototype.getAllNodes = function getAllNodes() {
    var nodes = [this.head],
      node = this.head;

    while (node.next !== null) {
      nodes.push(node.next);
      node = node.next;
    }
    return nodes;
  };

  aid.createLinkedList = function createLinkedList() {
    return new LinkedList();
  };

  /**
   * plus(+) operator
   *
   * @static
   * @method +
   * @param {Object} object_a
   * @param {Object} object_b
   * @returns {Object} return object
   * @example
   * var plus = aid.operator['+'];
   * console.log( plus(1, 2) ); // 3
   */
  operator['+'] = function plus(object_a, object_b) {
    return object_a + object_b;
  };

  /**
   * identity(===) operator
   *
   * @static
   * @method ===
   * @param {Object} object_a
   * @param {Object} object_b
   * @returns {Boolean} return boolean
   * @example
   * var identity = aid.operator['==='];
   * console.log( identity(1, 1) ); // true
   */
  operator['==='] = function identity(object_a, object_b) {
    return object_a === object_b;
  };

  /**
   * logical not(!) operator
   *
   * @static
   * @method !
   * @param {Object} obj
   * @returns {Boolean} return boolean
   * @example
   * var isNotNaN = aid.compose(aid.operator['!'], isNaN);
   * console.log( isNotNaN(0) ); // true
   */
  operator['!'] = function not(obj) {
    return !obj;
  };

  /**
   * is window platform
   *
   * @static
   * @method isWindow
   * @param {String} userAgent
   * @returns {Boolean} return boolean
   * @example
   * console.log( aid.platform.isWindow(window.navigator.userAgent) );
   */
  platform.isWindow = function isWindow(userAgent) {
    return /Windows/i.test(userAgent);
  };

  /**
   * is Macintosh platform
   *
   * @static
   * @method isMac
   * @param {String} userAgent
   * @returns {Boolean} return boolean
   * @example
   * console.log( aid.platform.isMac(window.navigator.userAgent) );
   */
  platform.isMac = function isMac(userAgent) {
    return /Macintosh/i.test(userAgent);
  };

  /**
   * is iOS platform
   * http://stackoverflow.com/questions/9038625/detect-if-device-is-ios/9039885#9039885
   *
   * @static
   * @method isIOS
   * @param {string} userAgent
   * @returns {Boolean} return boolean
   * @example
   * console.log( aid.platform.isIOS(window.navigator.userAgent) );
   */
  platform.isIOS = function isIOS(userAgent) {
    return /iPad|iPhone|iPod/.test(userAgent) && !global.MSStream;
  };

  /**
   * is Android platform
   *
   * @static
   * @method isAndroid
   * @param {String} userAgent
   * @returns {Boolean} return boolean
   * @example
   * console.log( aid.platform.isAndroid(window.navigator.userAgent) );
   */
  platform.isAndroid = function isAndroid(userAgent) {
    return /android/i.test(userAgent);
  };

  /**
   * is IE browser
   *
   * @static
   * @method isIE
   * @param {String} userAgent
   * @returns {Boolean} return boolean
   * @example
   * console.log( aid.browser.isIE(window.navigator.userAgent) );
   */
  browser.isIE = function isIE(userAgent) {
    return /msie/i.test(userAgent) || /trident/i.test(userAgent);
  };

  /**
   * is Edge browser
   *
   * @static
   * @method isEdge
   * @param {String} userAgent
   * @returns {Boolean} return boolean
   * @example
   * console.log( aid.browser.isEdge(window.navigator.userAgent) );
   */
  browser.isEdge = function isEdge(userAgent) {
    return /Gecko/i.test(userAgent) && /Edge/i.test(userAgent);
  };

  /**
   * is Firefox browser
   *
   * @static
   * @method isFF
   * @param {String} userAgent
   * @returns {Boolean} return boolean
   * @example
   * console.log( aid.browser.isFF(window.navigator.userAgent) );
   */
  browser.isFF = function isFF(userAgent) {
    return /Firefox/i.test(userAgent);
  };

  /**
   * is Opera browser
   *
   * @static
   * @method isOpera
   * @param {string} userAgent
   * @returns {Boolean} return boolean
   * @example
   * console.log( aid.browser.isOpera(window.navigator.userAgent) );
   */
  browser.isOpera = function isOpera(userAgent) {
    return /Opera/i.test(userAgent) || /OPR\//i.test(userAgent);
  };

  /**
   * is Chrome browser
   *
   * @static
   * @method isChrome
   * @param {String} userAgent
   * @returns {Boolean} return boolean
   * @example
   * console.log( aid.browser.isChrome(window.navigator.userAgent) );
   */
  browser.isChrome = function isChrome(userAgent) {
    return (
      !browser.isEdge(userAgent) &&
      !browser.isOpera(userAgent) &&
      /Chrome/i.test(userAgent)
    );
  };

  /**
   * is Safari browser
   *
   * @static
   * @method isSafari
   * @param {String} userAgent
   * @returns {Boolean} return boolean
   * @example
   * console.log( aid.browser.isSafari(window.navigator.userAgent) );
   */
  browser.isSafari = function isSafari(userAgent) {
    return !/Chrome/i.test(userAgent) && /Safari/i.test(userAgent);
  };

  /**
   * get IE version
   *
   * @static
   * @method getIEVersion
   * @param {string} userAgent
   * @returns {Number} return version float number
   * @example
   * console.log( aid.browser.getIEVersion(window.navigator.userAgent) );
   */
  browser.getIEVersion = function getIEVersion(userAgent) {
    if (browser.isIE(userAgent)) {
      if (/msie (\d+\.\d+);/i.test(userAgent)) return parseFloat(RegExp.$1, 10);
      if (/trident.*rv:(\d+)\.(\d+)/i.test(userAgent))
        return parseFloat(RegExp.$1, 10);
    }

    return -1;
  };

  /**
   * get Firefox version
   *
   * @static
   * @method getFFVersion
   * @param {string} userAgent
   * @returns {Number} return version float number
   * @example
   * console.log( aid.browser.getFFVersion(window.navigator.userAgent) );
   */
  browser.getFFVersion = function getFFVersion(userAgent) {
    if (browser.isFF(userAgent)) {
      if (/Firefox[\/\s](\d+\.\d+)/i.test(userAgent))
        return parseFloat(RegExp.$1, 10);
    }

    return -1;
  };

  /**
   * get Opera version
   *
   * @static
   * @method getOperaVersion
   * @param {String} userAgent
   * @returns {Number} return version float number
   * @example
   * console.log( aid.browser.getOperaVersion(window.navigator.userAgent) );
   */
  browser.getOperaVersion = function getOperaVersion(userAgent) {
    if (browser.isOpera(userAgent)) {
      if (/Opera/i.test(userAgent)) {
        if (/Version[\/\s](\d+\.\d+)/i.test(userAgent))
          return parseFloat(RegExp.$1, 10);
        if (/Opera[\/\s](\d+\.\d+)/i.test(userAgent))
          return parseFloat(RegExp.$1, 10);
      }

      if (/OPR[\/\s](\d+\.\d+)/i.test(userAgent))
        return parseFloat(RegExp.$1, 10);
    }

    return -1;
  };

  /**
   * get Chrome version
   *
   * @static
   * @method getChromeVersion
   * @param {String} userAgent
   * @returns {Number} return version float number
   * @example
   * console.log( aid.browser.getChromeVersion(window.navigator.userAgent) );
   */
  browser.getChromeVersion = function getChromeVersion(userAgent) {
    if (browser.isChrome(userAgent)) {
      if (/Chrome[\/\s](\d+\.\d+)/i.test(userAgent))
        return parseFloat(RegExp.$1, 10);
    }

    return -1;
  };

  /**
   * get Safari version
   *
   * @static
   * @method getSafariVersion
   * @param {String} userAgent
   * @returns {Number} return version float number
   * @example
   * console.log( aid.browser.getSafariVersion(window.navigator.userAgent) );
   */
  browser.getSafariVersion = function getSafariVersion(userAgent) {
    if (browser.isSafari(userAgent)) {
      if (/Version[\/\s](\d+\.\d+)/i.test(userAgent))
        return parseFloat(RegExp.$1, 10);
    }

    return -1;
  };

  /**
   * get IE browser Compatibility info object.
   *
   * @static
   * @method getIECompatibility
   * @param {String} optionUserAgent
   * @returns {Object} return { isIE: Boolean, isCompatibilityMode: Boolean, compatibilityVersion: Number }
   * @example
   * console.log( aid.browser.getIECompatibility() );
   * console.log( aid.browser.getIECompatibility('mozilla/5.0 (windows nt 6.1; wow64) applewebkit/537.36 (khtml, like gecko) hrome/39.0.2171.65 safari/537.36') );
   */
  browser.getIECompatibility = function getIECompatibility(optionUserAgent) {
    var ua = optionUserAgent
        ? optionUserAgent
        : global.navigator.userAgent.toLowerCase(),
      regex_msie = /msie/i,
      regex_msie7 = /msie 7/i,
      regex_msie8 = /msie 8/i,
      regex_msie9 = /msie 9/i,
      regex_msie10 = /msie 10/i,
      regex_msie11 = /rv:11[\.0-9]{0,}/,
      regex_trident = /trident/i,
      regex_trident7 = /trident\/7/;

    if (!regex_msie.test(ua) && !regex_msie11.test(ua)) {
      // not IE
      return {
        isIE: false,
        isCompatibilityMode: false,
        compatibilityVersion: -1
      };
    }

    if (regex_msie11.test(ua) && regex_trident7.test(ua)) {
      // IE11 standard
      return {
        isIE: true,
        isCompatibilityMode: false,
        compatibilityVersion: -1
      };
    }

    if (regex_msie.test(ua) && regex_trident7.test(ua)) {
      // IE11 compatibility mode
      if (regex_msie7.test(ua))
        return {
          isIE: true,
          isCompatibilityMode: true,
          compatibilityVersion: 7
        };

      if (regex_msie8.test(ua))
        return {
          isIE: true,
          isCompatibilityMode: true,
          compatibilityVersion: 8
        };

      if (regex_msie9.test(ua))
        return {
          isIE: true,
          isCompatibilityMode: true,
          compatibilityVersion: 9
        };

      if (regex_msie10.test(ua))
        return {
          isIE: true,
          isCompatibilityMode: true,
          compatibilityVersion: 10
        };
    }

    if (regex_msie7.test(ua) && regex_trident.test(ua)) {
      // IE8 ~ 10 compatibility mode
      return {
        isIE: true,
        isCompatibilityMode: true,
        compatibilityVersion: 7
      };
    }

    // IE8 ~ 10 standard
    return {
      isIE: true,
      isCompatibilityMode: false,
      compatibilityVersion: -1
    };
  };

  /**
   * is browser support draggable attribute of element.
   *
   * @static
   * @method isSupportDraggable
   * @returns {Boolean} return boolean
   * @example
   * console.log( aid.browser.isSupportDraggable() );
   */
  browser.isSupportDraggable = function isSupportDraggable() {
    var div = document.createElement('div');

    return 'draggable' in div;
  };

  /**
   * is browser support element methods related drag(ondragstart, ondrop, etc...).
   *
   * @static
   * @method isSupportDragAndDrop
   * @returns {Boolean} return boolean
   * @example
   * console.log( aid.browser.isSupportDragAndDrop() );
   */
  browser.isSupportDragAndDrop = function isSupportDragAndDrop() {
    var div = document.createElement('div');

    return 'ondragstart' in div && 'ondrop' in div;
  };

  /**
   * is browser support html5 File API.
   *
   * @static
   * @method isSupportFileApi
   * @returns {Boolean} return boolean
   * @example
   * console.log( aid.browser.isSupportFileApi() );
   */
  browser.isSupportFileApi = function isSupportFileApi() {
    return !!(
      global.File &&
      global.FileReader &&
      global.FileList &&
      global.Blob
    );
  };

  /**
   * is chrome extension.
   *
   * @static
   * @method isChromeExtension
   * @param {string} userAgent
   * @returns {Boolean} return boolean
   * @example
   * console.log( aid.browser.isChromeExtension(window.navigator.userAgent) );
   */
  browser.isChromeExtension = function isChromeExtension(userAgent) {
    if (browser.isChrome(userAgent) && global.chrome) {
      if (!global.chrome.cookies) {
        if (global.chrome.experimental)
          global.chrome.cookies = global.chrome.experimental.cookies;
      }

      if (global.chrome.cookies) return true;

      return false;
    }

    return false;
  };

  /**
   * get cookie
   *
   * @static
   * @method getCookie
   * @param {String} key
   * @returns {String} return string
   * @example
   * console.log( aid.browser.getCookie('sampleCookieKey') );
   */
  browser.getCookie = function getCookie(key) {
    var cookieArr = document.cookie.split('; '),
      splitArr = [],
      keyStr = '',
      valueStr = '';

    for (var i = 0, max = cookieArr.length; i < max; ++i) {
      splitArr = cookieArr[i].split('=');
      keyStr = splitArr[0];
      valueStr = global.decodeURIComponent(splitArr[1]);

      if (keyStr === key) return valueStr;
    }

    return null;
  };

  /**
   * set cookie
   *
   * @static
   * @method setCookie
   * @param {String} key
   * @param {String} value
   * @param {Number} expireSecond
   * @param {String} path
   * @param {String} domain
   * @example
   * aid.browser.setCookie('sampleCookieKey', 'sampleValue', 3600, '/samplePath', 'sample.com');
   */
  browser.setCookie = function setCookie(
    key,
    value,
    expireSecond,
    path,
    domain
  ) {
    var expires = '',
      pathStr = '; path=' + (path ? path : '/'),
      domainStr = domain ? '; domain=' + domain : '';

    if (expireSecond) {
      var date = new Date();
      date.setTime(date.getTime() + expireSecond * 1000);

      expires = '; expires=' + date.toGMTString();
    }

    document.cookie =
      key +
      '=' +
      global.encodeURIComponent(value) +
      pathStr +
      domainStr +
      expires;
  };

  /**
   * trim string
   *
   * @static
   * @method trim
   * @param {String} str
   * @returns {String} return trimmed string
   * @example
   * console.log( aid.string.trim('   foo   ') ); // 'foo'
   */
  string.trim = function trim(str) {
    if (!aid.isString(str))
      throw new TypeError('string.trim() requires String parameter.');

    return str.replace(/^\s+/, '').replace(/\s+$/, '');
  };

  /**
   * check string has unique characters
   *
   * @static
   * @method hasUniqueChars
   * @param {String} str
   * @returns {Boolean} return boolean
   * @example
   * console.log( aid.string.hasUniqueChars('abcdea') ); // false
   */
  string.hasUniqueChars = function hasUniqueChars(str) {
    if (!aid.isString(str))
      throw new TypeError('string.hasUniqueChars() requires String parameter.');

    if (!str.length) return true;

    var obj = {},
      char = '';
    for (var i = 0, max = str.length; i < max; i++) {
      char = str.charAt(i);

      if (obj[char] === true) return false;
      obj[char] = true;
    }

    return true;
  };

  /**
   * get extension(png, jpg ...) string.
   *
   * @static
   * @method getFileExtension
   * @param {String} fileName
   * @returns {String} return string
   * @example
   * console.log( aid.string.getFileExtension('aid.png') ); // png
   */
  string.getFileExtension = function getFileExtension(fileName) {
    if (!aid.isString(fileName))
      throw new TypeError(
        'string.getFileExtension() requires String parameter.'
      );

    if (fileName.length <= 0) return '';

    var lastDotIndex = fileName.lastIndexOf('.'),
      extension = fileName.substr(lastDotIndex + 1);

    return extension;
  };

  /**
   * check email string.
   *
   * @static
   * @method isEmail
   * @param {String} emailStr
   * @returns {Boolean} return boolean
   * @example
   * console.log( aid.string.isEmail('dragmove@gmail.com') ); // true
   */
  string.isEmail = function isEmail(emailStr) {
    if (!aid.isString(emailStr))
      throw new TypeError('string.isEmail() requires String parameter.');

    // html5 form email check regex - https://www.w3.org/TR/html5/forms.html#e-mail-state-(type=email)
    var emailRegex = new RegExp(
      "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$"
    );
    return emailRegex.exec(emailStr) ? true : false;
  };

  /**
   * check iframe string.
   *
   * @static
   * @method isIFrame
   * @param {String} iframeStr
   * @returns {Boolean} return boolean
   * @example
   * console.log( aid.string.isIFrame('<iframe src=""></iframe>') ); // true
   */
  string.isIFrame = function isIFrame(iframeStr) {
    if (!aid.isString(iframeStr))
      throw new TypeError('string.isIFrame() requires String parameter.');

    return /^(<iframe).*(<\/iframe>|\/>)$/.test(iframeStr);
  };

  /**
   * get param value from uri.
   *
   * @static
   * @method getUriParam
   * @param {String} uri
   * @param {String} parameterName
   * @returns {String} return string
   * @example
   * console.log( aid.string.getUriParam('http://www.google.com?name=foo&age=99&address=seoul', 'name') ); // 'foo'
   */
  string.getUriParam = function getUriParam(uri, parameterName) {
    if (!aid.isString(uri) || !aid.isString(parameterName)) {
      throw new TypeError('string.getUriParam() requires String parameters.');
    }

    if (uri.length < 1) return '';
    uri = uri.split('#')[0];

    var tmpArr = uri.split('?');
    if (tmpArr.length < 2) return '';

    var paramStr = tmpArr[1],
      params = paramStr.split('&');

    for (
      var param = '',
        eqIndex = -1,
        keyStr = '',
        valueStr = '',
        i = 0,
        max = params.length;
      i < max;
      ++i
    ) {
      param = params[i];

      eqIndex = param.indexOf('=');
      if (eqIndex >= 0) {
        keyStr = param.substr(0, eqIndex);
        valueStr = param.substr(eqIndex + 1);

        if (keyStr === parameterName) return valueStr;
      }
    }

    return '';
  };

  /**
   * get param values from uri.
   *
   * @static
   * @method getUriParams
   * @param {String} uri
   * @returns {Object} return object
   * @example
   * console.log( aid.string.getUriParams('http://www.google.com?name=foo&age=99&address=seoul') ); // {name: 'foo', age: '99', address: 'seoul'}
   */
  string.getUriParams = function getUriParams(uri) {
    if (!aid.isString(uri))
      throw new TypeError('string.getUriParams() requires String parameter.');

    if (uri.length < 1) return null;
    uri = uri.split('#')[0];

    var tmpArr = uri.split('?');
    if (tmpArr.length < 2) return null;

    var paramStr = tmpArr[1],
      params = paramStr.split('&');

    if (params.length <= 0) return null;

    var obj = {};
    for (
      var param = '',
        eqIndex = -1,
        keyStr = '',
        valueStr = '',
        i = 0,
        max = params.length;
      i < max;
      ++i
    ) {
      param = params[i];

      eqIndex = param.indexOf('=');
      if (eqIndex >= 0) {
        keyStr = param.substr(0, eqIndex);
        valueStr = param.substr(eqIndex + 1);

        if (keyStr) obj[keyStr] = valueStr;
      }
    }

    if (aid.object.isEmpty(obj)) return null;

    return obj;
  };

  /**
   * get uri combined parameters
   *
   * @static
   * @method getUriCombinedParams
   * @param {String} uri
   * @param {Object} parameters
   * @returns {String} return string
   * @example
   * console.log( aid.string.getUriCombinedParams('http://www.google.com', {name: "foo", age: "99", address: "seoul"}) ) // http://www.google.com?name=foo&age=99&address=seoul
   */
  string.getUriCombinedParams = function getUriCombinedParams(uri, parameters) {
    if (!aid.isString(uri))
      throw new TypeError(
        'uri parameter type of string.getUriCombinedParams() must be String.'
      );

    if (!aid.isObject(parameters))
      throw new TypeError(
        'parameters parameter type of string.getUriCombinedParams() must be Object.'
      );

    if (!uri) return '';
    if (!parameters) return uri;

    var str = '';
    for (var key in parameters) {
      str += '&' + key + '=' + String(parameters[key]);
    }

    if (str === '') return uri;

    var tmpArr = uri.split('#'),
      hashStr = aid.isDefined(tmpArr[1]) ? '#' + tmpArr[1] : '';

    uri = tmpArr[0];
    uri =
      (uri.indexOf('?') >= 0 ? uri + str : uri + '?' + str.substr(1)) + hashStr;

    return uri;
  };

  /**
   * check youtube video id.
   *
   * @static
   * @method isValidYoutubeVideoId
   * @param {String} youtubeId
   * @returns {Boolean} return boolean
   * @example
   * console.log( aid.string.isValidYoutubeVideoId('mYIfiQlfaas') ); // true
   */
  string.isValidYoutubeVideoId = function isValidYoutubeVideoId(youtubeId) {
    if (!aid.isString(youtubeId))
      throw new TypeError(
        'youtubeId parameter type of string.isValidYoutubeVideoId() must be String.'
      );

    var regex = /^(\w|-|_){11}$/;
    return regex.exec(youtubeId) ? true : false;
  };

  /**
   * check youtube uri is valid.
   *
   * @static
   * @method getObjCheckYoutubeURI
   * @param {String} uri
   * @returns {Object} return { type:'youtube', uri: String, youtubeId: String, isValidURI: Boolean }
   * @example
   * console.log( aid.string.getObjCheckYoutubeURI('https://www.youtube.com/watch?v=mYIfiQlfaas') ); // // {type: "youtube", uri: "https://www.youtube.com/watch?v=mYIfiQlfaas", youtubeId: "mYIfiQlfaas", isValidURI: true}
   * console.log( aid.string.getObjCheckYoutubeURI('https://youtu.be/mYIfiQlfaas') ); // {type: "youtube", uri: "https://youtu.be/mYIfiQlfaas", youtubeId: "mYIfiQlfaas", isValidURI: true}
   * console.log( aid.string.getObjCheckYoutubeURI('https://www.youtube.com/embed/mYIfiQlfaas') ); // {type: "youtube", uri: "https://www.youtube.com/embed/mYIfiQlfaas", youtubeId: "mYIfiQlfaas", isValidURI: true}
   */
  string.getObjCheckYoutubeURI = function getObjCheckYoutubeURI(uri) {
    if (!aid.isString(uri))
      throw new TypeError(
        'uri parameter type of string.getObjCheckYoutubeURI() must be String.'
      );

    var YOUTUBE_REGEXES = {
      watch: /^(?:(?:https?:)?\/\/)?(?:www\.)?youtube\.com\/watch/,
      embed: /^(?:(?:https?:)?\/\/)?(?:www\.)?youtube\.com\/(?:embed\/((?:\w|-|_){11}))/,
      v: /^(?:(?:https?:)?\/\/)?(?:www\.)?youtube\.com\/(?:v\/((?:\w|-|_){11}))/,
      'youtu.be': /^(?:(?:https?:)?\/\/)?(?:www\.)?youtu\.be\/((?:\w|-|_){11})/
    };

    var uriType = null;
    for (var key in YOUTUBE_REGEXES) {
      var val = YOUTUBE_REGEXES[key];
      if (!val) continue;

      var flag = YOUTUBE_REGEXES[key].exec(uri) ? true : false;
      if (flag) {
        uriType = key;
        break;
      }
    }

    var youtubeId = '',
      tmpArr = [];
    switch (uriType) {
      case 'watch':
        youtubeId = string.getUriParam(uri, 'v') || '';
        break;

      case 'embed':
        tmpArr = uri.split('?')[0].split('/');
        youtubeId = tmpArr[tmpArr.length - 1] || '';
        break;

      case 'v':
        tmpArr = uri.split('?')[0].split('/');
        youtubeId = tmpArr[tmpArr.length - 1] || '';
        break;

      case 'youtu.be':
        tmpArr = uri.split('?')[0].split('/');
        youtubeId = tmpArr[tmpArr.length - 1] || '';
        break;

      default:
    }

    var isValidURI =
      youtubeId !== '' && string.isValidYoutubeVideoId(youtubeId);

    return {
      type: 'youtube',
      uri: uri,
      youtubeId: youtubeId,
      isValidURI: isValidURI
    };
  };

  /**
   * check twitch uri is valid.
   *
   * @static
   * @method getObjCheckTwitchURI
   * @param {String} uri
   * @returns {Object} return { type:'twitch', uri: String, channelName: String, videoId: Boolean, isChatting: Boolean, isValidURI: Boolean }
   * @example
   * console.log(aid.string.getObjCheckTwitchURI('https://www.twitch.tv/surrenderhs/chat?popout=')); // {channelName: "surrenderhs", isChatting: true, isValidURI: true, type: "twitch", uri: "https://www.twitch.tv/surrenderhs/chat?popout=", videoId: ""}
   * console.log(aid.string.getObjCheckTwitchURI('https://www.twitch.tv/surrenderhs')); // {channelName: "surrenderhs", isChatting: false, isValidURI: true, type: "twitch", uri: "https://www.twitch.tv/surrenderhs", videoId: ""}
   * console.log(aid.string.getObjCheckTwitchURI('www.twitch.tv/surrenderhs')); // {channelName: "surrenderhs", isChatting: false, isValidURI: true, type: "twitch", uri: "www.twitch.tv/surrenderhs", videoId: ""}
   * console.log(aid.string.getObjCheckTwitchURI('twitch.tv/surrenderhs')); // {channelName: "surrenderhs", isChatting: false, isValidURI: true, type: "twitch", uri: "twitch.tv/surrenderhs", videoId: ""}
   * console.log(aid.string.getObjCheckTwitchURI('https://player.twitch.tv/?channel=surrenderhs')); // {channelName: "surrenderhs", isChatting: false, isValidURI: true, type: "twitch", uri: "https://player.twitch.tv/?channel=surrenderhs", videoId: ""}
   * console.log(aid.string.getObjCheckTwitchURI('player.twitch.tv/?channel=surrenderhs')); // {channelName: "surrenderhs", isChatting: false, isValidURI: true, type: "twitch", uri: "player.twitch.tv/?channel=surrenderhs", videoId: ""}
   * console.log(aid.string.getObjCheckTwitchURI('https://www.twitch.tv/surrenderhs/v/56097351')); // {channelName: "surrenderhs", isChatting: false, isValidURI: true, type: "twitch", uri: "https://www.twitch.tv/surrenderhs/v/56097351", videoId: "56097351"}
   * console.log(aid.string.getObjCheckTwitchURI('www.twitch.tv/surrenderhs/v/56097351')); // {channelName: "surrenderhs", isChatting: false, isValidURI: true, type: "twitch", uri: "www.twitch.tv/surrenderhs/v/56097351", videoId: "56097351"}
   * console.log(aid.string.getObjCheckTwitchURI('https://player.twitch.tv/?video=v56097351')); // {channelName: "surrenderhs", isChatting: false, isValidURI: true, type: "twitch", uri: "https://player.twitch.tv/?video=v56097351", videoId: "56097351"}
   * console.log(aid.string.getObjCheckTwitchURI('player.twitch.tv/?video=v56097351')); // {channelName: "surrenderhs", isChatting: false, isValidURI: true, type: "twitch", uri: "player.twitch.tv/?video=v56097351", videoId: "56097351"}
   */
  string.getObjCheckTwitchURI = function getObjCheckTwitchURI(uri) {
    /*
     + Live Video
     https://www.twitch.tv/surrenderhs // channel link
     https://player.twitch.tv/?channel=surrenderhs // iframe, Flash player
     https://www.twitch.tv/surrenderhs/chat?popout= // iframe chatting

     + Past Video
     https://www.twitch.tv/surrenderhs/v/56097351 // channel link
     https://player.twitch.tv/?video=v56097351 // iframe, Flash player

     + URI TEST
     https://www.twitch.tv/surrenderhs
     www.twitch.tv/surrenderhs
     twitch.tv/surrenderhs

     https://player.twitch.tv/?channel=surrenderhs
     player.twitch.tv/?channel=surrenderhs

     https://www.twitch.tv/surrenderhs/v/56097351
     www.twitch.tv/surrenderhs/v/56097351

     https://player.twitch.tv/?video=v56097351
     player.twitch.tv/?video=v56097351
     */

    if (!aid.isString(uri))
      throw new TypeError(
        'uri parameter type of string.getObjCheckTwitchURI() must be String.'
      );

    var TWITCH_REGEXES = {
      liveChannel: /^(?:(?:https?:)?\/\/)?(?:www\.)?twitch\.tv\/([a-zA-Z0-9][\w]{2,24})$/,
      liveVideo: /^(?:(?:https?:)?\/\/)?player\.twitch\.tv\/\?channel\=([a-zA-Z0-9][\w]{2,24})$/,
      chatting: /^(?:(?:https?:)?\/\/)?(?:www\.)?twitch\.tv\/([a-zA-Z0-9][\w]{2,24})\/chat/,
      pastChannel: /^(?:(?:https?:)?\/\/)?(?:www\.)?twitch\.tv\/([a-zA-Z0-9][\w]{2,24})\/v\/(\d+)/,
      pastVideo: /^(?:(?:https?:)?\/\/)?player\.twitch\.tv\/\?video\=v(\d+)/
    };

    var channelName = '',
      videoId = '',
      isChatting = false,
      isValidURI = false;

    var uriType = null;
    for (var key in TWITCH_REGEXES) {
      var val = TWITCH_REGEXES.hasOwnProperty(key);
      if (!val) continue;

      var flag = TWITCH_REGEXES[key].exec(uri) ? true : false;
      if (flag) {
        uriType = key;
        isValidURI = true;
        break;
      }
    }

    var tmpArr = [];
    switch (uriType) {
      // https://www.twitch.tv/surrenderhs
      case 'liveChannel':
        tmpArr = TWITCH_REGEXES[uriType].exec(uri);
        channelName = tmpArr[1];
        break;

      // https://player.twitch.tv/?channel=surrenderhs
      case 'liveVideo':
        tmpArr = TWITCH_REGEXES[uriType].exec(uri);
        channelName = tmpArr[1];
        break;

      // https://www.twitch.tv/surrenderhs/chat?popout=
      case 'chatting':
        tmpArr = TWITCH_REGEXES[uriType].exec(uri);
        channelName = tmpArr[1];
        isChatting = true;
        break;

      // https://www.twitch.tv/surrenderhs/v/56097351
      case 'pastChannel':
        tmpArr = TWITCH_REGEXES[uriType].exec(uri);
        channelName = tmpArr[1];
        videoId = tmpArr[2];
        break;

      // https://player.twitch.tv/?video=v56097351
      case 'pastVideo':
        tmpArr = TWITCH_REGEXES[uriType].exec(uri);
        videoId = tmpArr[1];
        break;

      default:
    }

    isValidURI = channelName || videoId ? true : false;

    return {
      type: 'twitch',
      uri: uri,
      channelName: channelName,
      videoId: videoId,
      isChatting: isChatting,
      isValidURI: isValidURI
    };
  };

  /**
   * get prefixed document property string
   *
   * @static
   * @method getDocumentPrefixedProperty
   * @param {String} propertyName
   * @param {Boolean} isPropertyFirstCharToUpperCase
   * @returns {String} return string
   * @example
   * console.log( aid.string.getDocumentPrefixedProperty('visibilityState', true) ); // return 'visibilityState' or 'webkitVisibilityState' or 'mozVisibilityState' or 'msVisibilityState' or 'oVisibilityState'.
   * console.log( aid.string.getDocumentPrefixedProperty('12345', false) ); // if browser doesn't have property, return ''.
   */
  string.getDocumentPrefixedProperty = function getDocumentPrefixedProperty(
    propertyName,
    isPropertyFirstCharToUpperCase
  ) {
    if (!aid.isString(propertyName))
      throw new TypeError(
        'propertyName parameter type of string.getDocumentPrefixedProperty() must be String.'
      );

    if (!aid.isBoolean(isPropertyFirstCharToUpperCase))
      throw new TypeError(
        'isPropertyFirstCharToUpperCase parameter type of string.getDocumentPrefixedProperty() must be Boolean.'
      );

    if (propertyName in global.document) return propertyName;

    var PREFIXES = ['webkit', 'moz', 'ms', 'o'],
      isPropFirstCharUppercase =
        isPropertyFirstCharToUpperCase === true ? true : false;

    var prop = '';
    for (var i = 0, max = PREFIXES.length; i < max; i++) {
      prop = isPropFirstCharUppercase
        ? propertyName.charAt(0).toUpperCase() + propertyName.slice(1)
        : propertyName;

      prop = PREFIXES[i] + prop;
      if (prop in document) return prop;
    }

    return '';
  };

  /**
   * get prefixed element style property string
   *
   * @static
   * @method getElementPrefixedStyle
   * @returns {String} return string
   * @example
   * console.log( aid.string.getElementPrefixedStyle('transform', true) ); // return 'transform' or 'wekitTransform' or 'mozTransform' or 'msTransform' or 'oTransform'.
   * console.log( aid.string.getElementPrefixedStyle('12345', false) ); // if browser doesn't have style property, return ''.
   */
  string.getElementPrefixedStyle = function getElementPrefixedStyle(
    propertyName,
    isPropertyFirstCharToUpperCase
  ) {
    if (!aid.isString(propertyName))
      throw new TypeError(
        'propertyName parameter type of string.getElementPrefixedStyle() must be String.'
      );

    if (!aid.isBoolean(isPropertyFirstCharToUpperCase))
      throw new TypeError(
        'isPropertyFirstCharToUpperCase parameter type of string.getElementPrefixedStyle() must be Boolean.'
      );

    var style = global.document.createElement('div').style;
    if (propertyName in style) return propertyName;

    var PREFIXES = ['webkit', 'moz', 'ms', 'o'],
      isPropFirstCharUppercase =
        isPropertyFirstCharToUpperCase === true ? true : false;

    var prop = '';
    for (var i = 0, max = PREFIXES.length; i < max; i++) {
      prop = isPropFirstCharUppercase
        ? propertyName.charAt(0).toUpperCase() + propertyName.slice(1)
        : propertyName;

      prop = PREFIXES[i] + prop;
      if (prop in style) return prop;
    }

    return '';
  };

  /**
   * null, undefined to empty string. if parameter is not null or undefined, return parameter.
   *
   * @static
   * @method absentToEmpty
   * @param {String} absentableStr
   * @returns {String} return string
   * @example
   * console.log( aid.string.absentToEmpty(null) ); // null to ''.
   * console.log( aid.string.absentToEmpty(undefined) ); // undefined to ''.
   * console.log( aid.string.absentToEmpty('javascript') ); // if parameter is exist, return parameter.
   */
  string.absentToEmpty = function absentToEmpty(absentableStr) {
    if (!aid.existy(absentableStr) || !aid.isString(absentableStr)) return '';

    return absentableStr;
  };

  /**
   * convert number to string type with commas.
   * http://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
   *
   * @static
   * @method numberWithCommas
   * @param {Number} number
   * @returns {String} return string
   * @example
   * console.log( aid.string.numberWithCommas(1000000) ); // '1,000,000'
   */
  string.numberWithCommas = function numberWithCommas(number) {
    if (!aid.isInteger(number))
      throw new TypeError(
        'string.numberWithCommas() requires Integer Number parameter.'
      );

    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  /**
   * convert 'translate(0px, 0px)' or 'translateX(0px)' or 'translateY(0px)' format string to { x: 0, y: 0 }.
   *
   * @static
   * @method getPositionFromTranslateStr
   * @param {String} str
   * @returns {Object} return object
   * @example
   * console.log( aid.string.getPositionFromTranslateStr('translate(99px)') ); // {x: 99, y: 0}
   * console.log( aid.string.getPositionFromTranslateStr('translate(99px, 999px)') ); // {x: 99, y: 999}
   * console.log( aid.string.getPositionFromTranslateStr('translateX(99px)') ); // {x: 99, y: 0}
   * console.log( aid.string.getPositionFromTranslateStr('translateY(99px)') ); // {x: 0, y: 99}
   */
  string.getPositionFromTranslateStr = function getPositionFromTranslateStr(
    str
  ) {
    if (!aid.isString(str))
      throw new TypeError(
        'string.getPositionFromTranslateStr() requires String parameter.'
      );

    var obj = {
      x: 0,
      y: 0
    };
    if (!aid.isDefined(str)) return obj;

    var values = str.match(/[+-]?(\d*\.)?\d+/g);
    if (values.length <= 0) return obj;

    if (/translateX/g.test(str)) {
      obj.x = parseFloat(values[0], 10);
      return obj;
    }

    if (/translateY/g.test(str)) {
      obj.y = parseFloat(values[0], 10);
      return obj;
    }

    obj.x = parseFloat(values[0], 10);
    if (values.length > 1) obj.y = parseFloat(values[1], 10);

    return obj;
  };

  /**
   * get flag string is palindrome.
   *
   * @static
   * @method isPalindrome
   * @param {String} str
   * @returns {Boolean} return boolean
   * @example
   * console.log( aid.string.isPalindrome('abcdeedcba') ); // true
   * console.log( aid.string.isPalindrome('motor') ); // false
   */
  string.isPalindrome = function isPalindrome(str) {
    if (!aid.isString(str))
      throw new TypeError('string.isPalindrome() requires String parameter.');

    if (str.length <= 1) return true;

    if (str.slice(0, 1) !== str.slice(-1)) return false;

    return aid.string.isPalindrome(str.slice(-1, 1));
  };

  /**
   * get aspectFill content size
   *
   * @static
   * @method getSizeAspectFill
   * @param {Number} srcWidth
   * @param {Number} srcHeight
   * @param {Number} fillWidth
   * @param {Number} fillHeight
   * @returns {Object} return { width: Number, height: Number }
   * @example
   * console.log( aid.math.getSizeAspectFill(960, 640, window.innerWidth, window.innerHeight) );
   */
  math.getSizeAspectFill = function getSizeAspectFill(
    srcWidth,
    srcHeight,
    fillWidth,
    fillHeight
  ) {
    var isNumber = aid.isNumber;
    if (
      !isNumber(srcWidth) ||
      !isNumber(srcHeight) ||
      !isNumber(fillWidth) ||
      !isNumber(fillHeight)
    ) {
      throw new TypeError(
        'math.getSizeAspectFill() requires Number parameters.'
      );
    }

    var modifiedSizeW = fillWidth,
      modifiedSizeH = Math.ceil((fillWidth / srcWidth) * srcHeight);

    if (modifiedSizeH < fillHeight) {
      modifiedSizeW = Math.ceil((fillHeight / srcHeight) * srcWidth);
      modifiedSizeH = fillHeight;
    }

    return {
      width: modifiedSizeW,
      height: modifiedSizeH
    };
  };

  /**
   * get aspectFit content size
   *
   * @static
   * @method getSizeAspectFit
   * @param {Number} srcWidth
   * @param {Number} srcHeight
   * @param {Number} fitWidth
   * @param {Number} fitHeight
   * @returns {Object} return { width: Number, height: Number }
   * @example
   * console.log( aid.math.getSizeAspectFit(960, 640, window.innerWidth, window.innerHeight) );
   */
  math.getSizeAspectFit = function getSizeAspectFit(
    srcWidth,
    srcHeight,
    fitWidth,
    fitHeight
  ) {
    var isNumber = aid.isNumber;
    if (
      !isNumber(srcWidth) ||
      !isNumber(srcHeight) ||
      !isNumber(fitWidth) ||
      !isNumber(fitHeight)
    ) {
      throw new TypeError(
        'math.getSizeAspectFit() requires Number parameters.'
      );
    }

    var ratio = Math.min(fitWidth / srcWidth, fitHeight / srcHeight),
      modifiedSizeW = Math.ceil(srcWidth * ratio),
      modifiedSizeH = Math.ceil(srcHeight * ratio);

    return {
      width: modifiedSizeW,
      height: modifiedSizeH
    };
  };

  /**
   * get widthFit content size
   *
   * @static
   * @method getSizeWidthFit
   * @param {Number} srcWidth
   * @param {Number} srcHeight
   * @param {Number} fitWidth
   * @returns {Object} return { width: Number, height: Number }
   * @example
   * console.log( aid.math.getSizeWidthFit(960, 640, window.innerWidth) );
   */
  math.getSizeWidthFit = function getSizeWidthFit(
    srcWidth,
    srcHeight,
    fitWidth
  ) {
    var isNumber = aid.isNumber;
    if (!isNumber(srcWidth) || !isNumber(srcHeight) || !isNumber(fitWidth)) {
      throw new TypeError('math.getSizeWidthFit() requires Number parameters.');
    }

    var modifiedSizeW = fitWidth,
      modifiedSizeH = Math.ceil((fitWidth / srcWidth) * srcHeight);

    return {
      width: modifiedSizeW,
      height: modifiedSizeH
    };
  };

  /**
   * get flag whether 2 numbers are equal by Number.EPSILON (2.220446049250313e-16)
   *
   * @static
   * @method isEpsilonEqual
   * @param {Number} number_a
   * @param {Number} number_b
   * @returns {Boolean} return boolean
   * @example
   * console.log( aid.math.isEpsilonEqual(0.1 + 0.2, 0.3) );
   */
  math.isEpsilonEqual = function isEpsilonEqual(number_a, number_b) {
    if (!aid.isNumber(number_a) || !aid.isNumber(number_b)) {
      throw new TypeError('math.isEpsilonEqual() requires Number parameters.');
    }

    var epsilon = aid.isDefined(Number.EPSILON)
      ? Number.EPSILON
      : 2.220446049250313e-16;

    return Math.abs(number_a - number_b) < epsilon;
  };

  /**
   * get flag that looped values in 1 ~ totalLength has searchIndex.
   * value increases from startIndex to (firstIndex + loopGap - 1).
   * if value is bigger than totalLength, change value to 1.
   * if searchIndex in values, return true.
   * otherwise, return false.
   *
   * @static
   * @method isIndexInLoop
   * @param {Number} totalLength
   * @param {Number} loopGap
   * @param {Number} firstIndex
   * @param {Number} searchIndex
   * @returns {Boolean} return boolean
   * @example
   * console.log( aid.math.isIndexInLoop(8, 5, 6, 3) ); // false
   * console.log( aid.math.isIndexInLoop(8, 5, 6, 6) ); // true
   */
  math.isIndexInLoop = function isIndexInLoop(
    totalLength,
    loopGap,
    firstIndex,
    searchIndex
  ) {
    if (arguments.length < 4)
      throw new Error('math.isIndexInLoop() requires 4 parameters.');

    var isInteger = aid.isInteger;
    if (
      !isInteger(totalLength) ||
      !isInteger(loopGap) ||
      !isInteger(firstIndex) ||
      !isInteger(searchIndex)
    ) {
      throw new TypeError(
        'math.isIndexInLoop() requires Integer Number parameters.'
      );
    }

    if (totalLength < 1 || firstIndex < 1) {
      throw new Error(
        'totalLength, firstIndex parameter of math.isIndexInLoop() cannot smaller than 1.'
      );
    }

    if (loopGap > totalLength) {
      throw new Error(
        'loopGap parameter of math.isIndexInLoop() cannot bigger than totalLength parameter.'
      );
    }

    var index = firstIndex;
    for (var i = 0; i < loopGap; i++) {
      if (index === searchIndex) return true;
      index = index + 1 > totalLength ? 1 : index + 1;
    }

    return false;
  };

  /**
   * get looped index from firstIndex in 1 ~ totalLength.
   * value increases from firstIndex to (firstIndex + loopGap - 1).
   * if value is bigger than totalLength, change value to 1. and, return value.
   *
   * @static
   * @method getLoopedLastIndex
   * @param {Number} totalLength
   * @param {Number} loopGap
   * @param {Number} firstIndex
   * @returns {Number} return Int Number
   * @example
   * console.log( aid.math.getLoopedLastIndex(8, 1, 7) ); // 7
   * console.log( aid.math.getLoopedLastIndex(8, 4, 7) ); // 2
   */
  math.getLoopedLastIndex = function getLoopedLastIndex(
    totalLength,
    loopGap,
    firstIndex
  ) {
    if (arguments.length < 3)
      throw new Error('math.getLoopedLastIndex() requires 3 parameters.');

    var isInteger = aid.isInteger;
    if (
      !isInteger(totalLength) ||
      !isInteger(loopGap) ||
      !isInteger(firstIndex)
    ) {
      throw new TypeError(
        'math.getLoopedLastIndex() requires Integer Number parameters.'
      );
    }

    if (totalLength < 1 || firstIndex < 1) {
      throw new Error(
        'totalLength, firstIndex parameter of math.getLoopedLastIndex() cannot smaller than 1.'
      );
    }

    if (loopGap > totalLength || firstIndex > totalLength) {
      throw new Error(
        'loopGap, firstIndex parameter of math.getLoopedLastIndex() cannot bigger than totalLength parameter.'
      );
    }

    var index = firstIndex;
    for (var i = 0; i < loopGap - 1; i++) {
      index = index + 1 > totalLength ? 1 : index + 1;
    }

    return index;
  };

  /**
   * get reverse looped index from lastIndex in 1 ~ totalLength.
   * value decreases from lastIndex to (lastIndex - loopGap - 1).
   * if value is smaller than 0, change value to totalLength. and return value.
   *
   * @static
   * @method getReverseLoopedFirstIndex
   * @param {Number} totalLength
   * @param {Number} loopGap
   * @param {Number} firstIndex
   * @returns {Number} return Int Number
   * @example
   * console.log( aid.math.getReverseLoopedFirstIndex(8, 4, 2) ); // 7
   * console.log( aid.math.getReverseLoopedFirstIndex(8, 8, 2) ); // 3
   */
  math.getReverseLoopedFirstIndex = function getReverseLoopedFirstIndex(
    totalLength,
    loopGap,
    lastIndex
  ) {
    if (arguments.length < 3)
      throw new Error(
        'math.getReverseLoopedFirstIndex() requires 3 parameters.'
      );

    var isInteger = aid.isInteger;
    if (
      !isInteger(totalLength) ||
      !isInteger(loopGap) ||
      !isInteger(lastIndex)
    ) {
      throw new TypeError(
        'math.getReverseLoopedFirstIndex() requires Integer Number parameters.'
      );
    }

    if (totalLength < 1 || lastIndex < 1) {
      throw new Error(
        'totalLength, lastIndex parameter of math.getReverseLoopedFirstIndex() cannot smaller than 1.'
      );
    }

    if (loopGap > totalLength || lastIndex > totalLength) {
      throw new Error(
        'loopGap, lastIndex parameter of math.getReverseLoopedFirstIndex() cannot bigger than totalLength parameter.'
      );
    }

    var index = lastIndex;
    for (var i = 0; i < loopGap - 1; i++) {
      index = index - 1 < 1 ? totalLength : index - 1;
    }

    return index;
  };

  /**
   * get factorial value
   *
   * @static
   * @method factorial
   * @param {Number} Int number
   * @returns {Number} return Int Number
   * @example
   * console.log( aid.math.factorial(-99) ); // 1
   * console.log( aid.math.factorial(5) ); // 5 * 4 * 3 * 2 * 1 = 120
   */
  math.factorial = function factorial(number) {
    if (!aid.isInteger(number))
      throw new TypeError(
        'math.factorial() requires Integer Number parameter.'
      );

    if (number < 1) return 1;
    return number * aid.math.factorial(number - 1);
  };

  /**
   * get board pagination info object.
   *
   * @static
   * @method getObjForPagination
   * @param {Number} totalPostNum
   * @param {Number} displayPostNumPerPage
   * @param {Number} displayPaginationBtnNum
   * @param {Number} pageIndex
   * @returns {Object} return object
   * @example
   * console.log( aid.math.getObjForPagination(39, 10, 5, 1) ); // {totalPostNum: 39, displayPostNumPerPage: 10, displayPaginationBtnNum: 5, pageIndex: 1, totalPageNum: 4, prevPageIndex: 0, firstPageIndex: 1, lastPageIndex: 4, nextPageIndex: 0}
   */
  math.getObjForPagination = function getObjForPagination(
    totalPostNum,
    displayPostNumPerPage,
    displayPaginationBtnNum,
    pageIndex
  ) {
    if (arguments.length < 4)
      throw new Error('math.getObjForPagination() requires 4 parameters.');

    var isInteger = aid.isInteger;
    if (
      !isInteger(totalPostNum) ||
      !isInteger(displayPostNumPerPage) ||
      !isInteger(displayPaginationBtnNum) ||
      !isInteger(pageIndex)
    ) {
      throw new TypeError(
        'math.getObjForPagination() requires Integer Number parameters.'
      );
    }

    if (
      totalPostNum <= 0 ||
      displayPostNumPerPage <= 0 ||
      displayPaginationBtnNum <= 0 ||
      pageIndex <= 0
    ) {
      throw new TypeError(
        'math.getObjForPagination() requires positive Integer Number parameters.'
      );
    }

    var totalPageNum = Math.ceil(totalPostNum / displayPostNumPerPage);
    if (pageIndex < 1) pageIndex = 1;
    if (pageIndex > totalPageNum) pageIndex = totalPageNum;

    var paginationBtnGroupIndex = Math.floor(
        (pageIndex - 1) / displayPaginationBtnNum
      ),
      prevPageIndex = paginationBtnGroupIndex * displayPaginationBtnNum,
      firstPageIndex = paginationBtnGroupIndex * displayPaginationBtnNum + 1,
      lastPageIndex = firstPageIndex + displayPaginationBtnNum - 1,
      nextPageIndex = lastPageIndex + 1;

    if (lastPageIndex > totalPageNum) lastPageIndex = totalPageNum;
    if (nextPageIndex > totalPageNum) nextPageIndex = 0;

    return {
      totalPostNum: totalPostNum,
      displayPostNumPerPage: displayPostNumPerPage,
      displayPaginationBtnNum: displayPaginationBtnNum,
      pageIndex: pageIndex,

      totalPageNum: totalPageNum,
      prevPageIndex: prevPageIndex,
      firstPageIndex: firstPageIndex,
      lastPageIndex: lastPageIndex,
      nextPageIndex: nextPageIndex
    };
  };

  /**
   * convert degree to radian.
   *
   * @static
   * @method degreeToRadian
   * @param {Number} degree
   * @returns {Number} return number
   * @example
   * console.log( aid.math.degreeToRadian(90) ); // 1.5707963267948966
   */
  math.degreeToRadian = function degreeToRadian(degree) {
    if (!aid.isNumber(degree))
      throw new TypeError('math.degreeToRadian() requires Number parameter.');

    return (degree * Math.PI) / 180;
  };

  /**
   * convert radian to radian.
   *
   * @static
   * @method radianToDegree
   * @param {Number} radian
   * @returns {Number} return number
   * @example
   * console.log( aid.math.radianToDegree(1.5707963267948966) ); // 90
   */
  math.radianToDegree = function radianToDegree(radian) {
    if (!aid.isNumber(radian))
      throw new TypeError('math.radianToDegree() requires Number parameter.');

    return (radian * 180) / Math.PI;
  };

  /**
   * get height of right triangle from base line width, acute angle
   *
   * @static
   * @method getHeightOfRightTriangle
   * @param {Number} baseLineWidth
   * @param {Number} acuteAngleDegree
   * @returns {Number} return number
   * @example
   * console.log( aid.math.getHeightOfRightTriangle(100, 30) ); // 57.73502691896256
   */
  math.getHeightOfRightTriangle = function getHeightOfRightTriangle(
    baseLineWidth,
    acuteAngleDegree
  ) {
    if (!aid.isNumber(baseLineWidth) || !aid.isNumber(acuteAngleDegree)) {
      throw new TypeError(
        'math.getHeightOfRightTriangle() requires Number parameters.'
      );
    }

    if (acuteAngleDegree >= 90)
      throw new Error(
        'acuteAngleDegree parameter of math.getHeightOfRightTriangle() cannot greater than or equal to 90.'
      );

    return baseLineWidth * Math.tan(math.degreeToRadian(acuteAngleDegree));
  };

  /**
   * get distance between two points
   *
   * @static
   * @method getDistanceBetweenTwoPoints
   * @param {Object} point1
   * @param {Object} point2
   * @returns {Number} return number
   * @example
   * var point1 = {x: 0, y: 0}
   * var point2 = {x: 100, y: 100};
   * console.log( aid.math.getDistanceBetweenTwoPoints(point1, point2) ); // 141.4213562373095
   */
  math.getDistanceBetweenTwoPoints = function getDistanceBetweenTwoPoints(
    point1,
    point2
  ) {
    if (!aid.isObject(point1) || !aid.isObject(point2)) {
      throw new TypeError(
        'math.getDistanceBetweenTwoPoints() requires Object parameters.'
      );
    }

    var isNumber = aid.isNumber;
    if (
      !isNumber(point1.x) ||
      !isNumber(point1.y) ||
      !isNumber(point2.x) ||
      !isNumber(point2.y)
    ) {
      throw new TypeError(
        'math.getDistanceBetweenTwoPoints() requires object parameters have x, y property.'
      );
    }

    var distance = Math.sqrt(
      Math.pow(point1.x - point2.x, 2) + Math.pow(point1.y - point2.y, 2)
    );

    return distance;
  };

  /**
   * get orthogonal point between line and some point
   *
   * @static
   * @method getOrthogonalPointBetweenLineAndSomePoint
   * @param {Object} collinearPoint1
   * @param {Object} collinearPoint2
   * @param {Object} somePoint
   * @returns {Object} return object
   * @example
   * var collinearPoint1 = {x: 0, y: 0};
   * var collinearPoint2 = {x: 100, y: 100};
   * var somePoint = {x: 50, y: 100};
   * console.log( aid.math.getOrthogonalPointBetweenLineAndSomePoint(collinearPoint1, collinearPoint2, somePoint) ); // {x: 75, y: 75}
   */
  math.getOrthogonalPointBetweenLineAndSomePoint = function getOrthogonalPointBetweenLineAndSomePoint(
    collinearPoint1,
    collinearPoint2,
    somePoint
  ) {
    var isObject = aid.isObject;
    if (
      !isObject(collinearPoint1) ||
      !isObject(collinearPoint2) ||
      !isObject(somePoint)
    ) {
      throw new TypeError(
        'math.getOrthogonalPointBetweenLineAndSomePoint() requires Object parameters.'
      );
    }

    var isNumber = aid.isNumber;
    if (
      !isNumber(collinearPoint1.x) ||
      !isNumber(collinearPoint1.y) ||
      !isNumber(collinearPoint2.x) ||
      !isNumber(collinearPoint2.y) ||
      !isNumber(somePoint.x) ||
      !isNumber(somePoint.y)
    ) {
      throw new TypeError(
        'math.getOrthogonalPointBetweenLineAndSomePoint() requires object parameters have x, y property.'
      );
    }

    if (
      collinearPoint1.x === collinearPoint2.x &&
      collinearPoint1.y === collinearPoint2.y
    ) {
      // collinearPoint1 is equal to collinearPoint2. no line.
      return null;
    }

    var diffX = collinearPoint2.x - collinearPoint1.x,
      diffY = collinearPoint2.y - collinearPoint1.y;

    if (diffX === 0)
      return {
        x: collinearPoint1.x,
        y: somePoint.y
      };

    if (diffY === 0)
      return {
        x: somePoint.x,
        y: collinearPoint1.y
      };

    var lineSlope = diffY / diffX,
      somePointLineSlope = -1 / lineSlope;

    var orthogonalPoint = {};
    orthogonalPoint.x =
      (somePointLineSlope * somePoint.x -
        lineSlope * collinearPoint1.x +
        collinearPoint1.y -
        somePoint.y) /
      (somePointLineSlope - lineSlope);
    orthogonalPoint.y =
      somePointLineSlope * (orthogonalPoint.x - somePoint.x) + somePoint.y;

    return orthogonalPoint;
  };

  /**
   * greater than
   *
   * @static
   * @method gt
   * @param {Number} number
   * @param {Number} number
   * @returns {Boolean} return boolean
   * @example
   * console.log( aid.math.gt(1)(9) ); // true
   */
  math.gt = aid.curry2(function(lhs, rhs) {
    if (!aid.allOf(aid.isNumber(lhs), aid.isNumber(rhs)))
      throw new TypeError('math.gt requires Number parameters');

    return lhs > rhs;
  });

  /**
   * less than
   *
   * @static
   * @method lt
   * @param {Number} number
   * @param {Number} number
   * @returns {Boolean} return boolean
   * @example
   * console.log( aid.math.lt(9)(1) ); // true
   */
  math.lt = aid.curry2(function(lhs, rhs) {
    if (!aid.allOf(aid.isNumber(lhs), aid.isNumber(rhs)))
      throw new TypeError('math.lt requires Number parameters');

    return lhs < rhs;
  });

  /**
   * greater than equal
   *
   * @static
   * @method gte
   * @param {Number} number
   * @param {Number} number
   * @returns {Boolean} return boolean
   * @example
   * console.log( aid.math.gte(1)(1) ); // true
   * console.log( aid.math.gte(1)(9) ); // true
   */
  math.gte = aid.curry2(function(lhs, rhs) {
    if (!aid.allOf(aid.isNumber(lhs), aid.isNumber(rhs)))
      throw new TypeError('math.gte requires Number parameters');

    return lhs >= rhs;
  });

  /**
   * less than equal
   *
   * @static
   * @method lte
   * @param {Number} number
   * @param {Number} number
   * @returns {Boolean} return boolean
   * @example
   * console.log( aid.math.lte(1)(1) ); // true
   * console.log( aid.math.lte(9)(1) ); // true
   */
  math.lte = aid.curry2(function(lhs, rhs) {
    if (!aid.allOf(aid.isNumber(lhs), aid.isNumber(rhs)))
      throw new TypeError('math.lte requires Number parameters');

    return lhs <= rhs;
  });

  /**
   * days name
   *
   * @static
   * @property date.DAYS
   * @returns {Array} return array
   * @example
   */
  date.DAYS = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ];

  /**
   * months name
   *
   * @static
   * @property date.MONTHS
   * @returns {Array} return array
   * @example
   */
  date.MONTHS = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  /**
   * 1 minutes to second unit (60 sec)
   *
   * @static
   * @property date.MIN_TO_SEC
   * @returns {Number} return Int number
   * @example
   */
  date.MIN_TO_SEC = 60;

  /**
   * 1 hour to second unit (60 * 60 = 3600 sec)
   *
   * @static
   * @property date.HOUR_TO_SEC
   * @returns {Number} return Int number
   * @example
   */
  date.HOUR_TO_SEC = 3600;

  /**
   * 1 day to second unit (60 * 60 * 24 = 86400 sec)
   *
   * @static
   * @property date.DAY_TO_SEC
   * @returns {Number} return Int number
   * @example
   */
  date.DAY_TO_SEC = 86400;

  /**
   * equal to Array.indexOf
   *
   * @static
   * @method indexOf
   * @param {Array} arr
   * @param {Object} target
   * @returns {Number} return Int number
   * @example
   * var arr = ['foo', 1, 'bar', 2, null, 99];
   * console.log( aid.array.indexOf(arr, undefined) ); // -1
   * console.log( aid.array.indexOf(arr, 99) ); // 5
   */
  array.indexOf = function indexOf(arr, target) {
    if (!aid.isArray(arr))
      throw new TypeError('array.indexOf() requires Number parameter.');

    for (var i = 0, max = arr.length; i < max; ++i) {
      if (arr[i] === target) return i;
    }

    return -1;
  };

  /**
   * get index of minimum number in Array.
   *
   * @static
   * @method indexOfMin
   * @param {Array} arr
   * @param {Number} startSearchIndex
   * @returns {Number} return Int number
   * @example
   * var arr = [18, 6, 66, 44, 9, 22, 14];
   * console.log( aid.array.indexOfMin(arr, 0) ); // 1
   * console.log( aid.array.indexOfMin(arr, 1) ); // 1
   * console.log( aid.array.indexOfMin(arr, 2) ); // 4
   * console.log( aid.array.indexOfMin(arr, 2) ); // 4
   * console.log( aid.array.indexOfMin(arr, 4) ); // 4
   * console.log( aid.array.indexOfMin(arr, 5) ); // 6
   * console.log( aid.array.indexOfMin(arr, 6) ); // 6
   */
  array.indexOfMin = function indexOfMin(arr, startSearchIndex) {
    if (!aid.isArray(arr) || !aid.isInteger(startSearchIndex)) return -1;

    var startIndex = startSearchIndex > 0 ? startSearchIndex : 0;
    if (arr.length <= startIndex) return -1;

    var minVal = arr[startIndex],
      minIndex = startIndex;

    for (var i = minIndex + 1, max = arr.length; i < max; i++) {
      if (arr[i] < minVal) {
        minVal = arr[i];
        minIndex = i;
      }
    }

    return minIndex;
  };

  /**
   * swap two elements in Array.
   *
   * @static
   * @method swap
   * @param {Array} arr
   * @param {Number} firstIndex
   * @param {Number} secondIndex
   * @returns {Array} return array or null
   * @example
   * var arr = [18, 6, 66, 44, 9, 22, 14];
   * console.log( aid.array.swap(arr, 0, 1) ); // [6, 18, 66, 44, 9, 22, 14]
   */
  array.swap = function swap(arr, firstIndex, secondIndex) {
    if (arguments.length !== 3) return null;

    if (
      !aid.isArray(arr) ||
      !aid.isInteger(firstIndex) ||
      !aid.isInteger(secondIndex)
    )
      return null;

    if (
      firstIndex < 0 ||
      firstIndex >= arr.length ||
      secondIndex < 0 ||
      secondIndex >= arr.length
    )
      return null;

    var tmp = arr[firstIndex];
    arr[firstIndex] = arr[secondIndex];
    arr[secondIndex] = tmp;

    return arr;
  };

  /**
   * apply selection sort in Array.
   *
   * @static
   * @method selectionSort
   * @param {Array} arr
   * @returns {Array} return array or null
   * @example
   * var arr = [18, 6, 66, 44, 9, 22, 14];
   * console.log( aid.array.selectionSort(arr) ); // [6, 9, 14, 18, 22, 44, 66]
   */
  array.selectionSort = function selectionSort(arr) {
    if (!aid.isArray(arr) || arr.length <= 0) return null;

    var minIndex = 0;
    for (var i = 0, max = arr.length - 1; i < max; i++) {
      minIndex = array.indexOfMin(arr, i);
      array.swap(arr, i, minIndex);
    }

    return arr;
  };

  /**
   * apply insertion sort in Array.
   * https://ko.khanacademy.org/computing/computer-science/algorithms/insertion-sort/a/insertion-sort
   *
   * @static
   * @method insertionSort
   * @param {Array} arr
   * @returns {Array} return array or null
   * @example
   * var arr = [18, 6, 66, 44, 9, 22, 14];
   * console.log( aid.array.insertionSort(arr) ); // [6, 9, 14, 18, 22, 44, 66]
   */
  array.insertionSort = function insertionSort(arr) {
    if (!aid.isArray(arr) || arr.length <= 0) return null;

    var value;
    for (var i = 1, max = arr.length; i < max; i++) {
      value = arr[i];

      for (var j = i - 1; j >= 0 && arr[j] > value; j--) {
        arr[j + 1] = arr[j];
      }
      arr[j + 1] = value;
    }

    return arr;
  };

  /**
   * merge sort to startIndex ~ middleIndex elements, and middleIndex ~ endIndex elements.
   * this function is only used by aid.array.mergeSort function.
   *
   * @static
   * @method merge
   * @param {Array} arr
   * @param {Number} startIndex
   * @param {Number} middleIndex
   * @param {Number} endIndex
   * @returns {Array} return array or null
   * @example
   */
  array.merge = function merge(arr, startIndex, middleIndex, endIndex) {
    if (!aid.isArray(arr) || arr.length <= 0) return null;

    if (startIndex > middleIndex || middleIndex > endIndex) return null;

    var i = startIndex,
      j = middleIndex + 1,
      k = startIndex,
      tmpArr = [];

    // compare startIndex ~ middleIndex datas, and middleIndex + 1 ~ endIndex datas.
    while (i <= middleIndex && j <= endIndex) {
      if (arr[i] <= arr[j]) {
        tmpArr[k++] = arr[i++];
      } else {
        tmpArr[k++] = arr[j++];
      }
    }

    if (i > middleIndex) {
      // set rest right array
      for (var r = j; r <= endIndex; r++) {
        tmpArr[k] = arr[r];
        k++;
      }
    } else {
      // set rest left array
      for (var l = i; l <= middleIndex; l++) {
        tmpArr[k] = arr[l];
        k++;
      }
    }

    // set sorted values to arr.
    for (var n = startIndex; n <= endIndex; n++) {
      arr[n] = tmpArr[n];
    }

    return arr;
  };

  /**
   * apply merge sort in Array.
   * https://ko.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/analysis-of-merge-sort
   *
   * @static
   * @method mergeSort
   * @param {Array} arr
   * @param {Number} startIndex
   * @param {Number} endIndex
   * @returns {Array} return array or null
   * @example
   * var arr = [18, 6, 66, 44, 9, 22, 14];
   * console.log( aid.array.mergeSort(arr, 0, arr.length - 1) ); // [6, 9, 14, 18, 22, 44, 66]
   */
  array.mergeSort = function mergeSort(arr, startIndex, endIndex) {
    if (!aid.isArray(arr) || arr.length <= 0) return null;

    if (arr.length <= 1 || startIndex === endIndex) return null;

    if (startIndex + 1 === endIndex) {
      if (arr[startIndex] > arr[endIndex]) {
        aid.array.swap(arr, startIndex, endIndex);
      }

      return arr;
    }

    var middleIndex = Math.floor((startIndex + endIndex) / 2);

    aid.array.mergeSort(arr, startIndex, middleIndex);
    aid.array.mergeSort(arr, middleIndex + 1, endIndex);

    aid.array.merge(arr, startIndex, middleIndex, endIndex);

    return arr;
  };

  /**
   * quick sort with use pivot value.
   * this function is only used by aid.array.quickSort function.
   *
   * @static
   * @method getPivotIndexAfterPartition
   * @param {Array} arr
   * @param {Number} startIndex
   * @param {Number} endIndex
   * @returns {Number} return index of pivot (between group that less or equal to the pivot, and group that greater than the pivot). Int Number.
   * @example
   * var arr = [18, 6, 66, 44, 9, 22, 14];
   * console.log( aid.array.getPivotIndexAfterPartition(arr, 0, arr.length - 1) ); // [6, 9, 14, 44, 18, 22, 66]
   */
  array.getPivotIndexAfterPartition = function getPivotIndexAfterPartition(
    arr,
    startIndex,
    endIndex
  ) {
    if (!aid.isArray(arr) || arr.length <= 0) return -1;

    if (startIndex > endIndex) return -1;

    if (arr.length <= 1) return 0;

    var pivot = arr[endIndex],
      swapIndex = startIndex;

    for (var i = startIndex; i < endIndex; i++) {
      if (arr[i] <= pivot) {
        aid.array.swap(arr, i, swapIndex);
        swapIndex++;
      }
    }

    if (endIndex !== swapIndex) aid.array.swap(arr, endIndex, swapIndex);

    return swapIndex;
  };

  /**
   * apply quick sort in Array.
   * https://ko.khanacademy.org/computing/computer-science/algorithms/quick-sort/a/overview-of-quicksort
   *
   * @static
   * @method quickSort
   * @param {Array} arr
   * @param {Number} startIndex
   * @param {Number} endIndex
   * @returns {Array} return array or null
   * @example
   * var arr = [18, 6, 66, 44, 9, 22, 14];
   * console.log( aid.array.quickSort(arr, 0, arr.length - 1) ); // [6, 9, 14, 18, 22, 44, 66]
   */
  array.quickSort = function quickSort(arr, startIndex, endIndex) {
    if (!aid.isArray(arr) || arr.length <= 0) return null;

    if (arr.length <= 1 || startIndex === endIndex) return null;

    if (startIndex < endIndex) {
      var pivotIndex = aid.array.getPivotIndexAfterPartition(
        arr,
        startIndex,
        endIndex
      );

      aid.array.quickSort(arr, startIndex, pivotIndex - 1);
      aid.array.quickSort(arr, pivotIndex + 1, endIndex);
    }

    return arr;
  };

  /**
   * remove element in Array, and return cloned Array.
   *
   * @static
   * @method remove
   * @param {Array} arr
   * @param {Object} target
   * @returns {Array} return array
   * @example
   * var arr = [1, 2, 3, 4, 5, 99];
   * console.log( aid.array.remove(arr, 99) ); // [1, 2, 3, 4, 5]
   */
  array.remove = function remove(arr, target) {
    if (!aid.isArray(arr))
      throw new TypeError(
        'arr parameter type of array.remove() must be Array.'
      );

    var clonedArr = arr.slice(0),
      index = array.indexOf(clonedArr, target);
    if (index >= 0) clonedArr.splice(index, 1);

    return clonedArr;
  };

  /**
   * get 2 x 2 Matrix Array
   *
   * @static
   * @method getMatrixArr
   * @param {Number} rowNum
   * @param {Number} columnNum
   * @param {Object} initialVal
   * @returns {Array} return array
   * @example
   * console.log( aid.array.getMatrixArr(2, 2, 0) ); // [ [0, 0], [0, 0] ]
   */
  array.getMatrixArr = function getMatrixArr(rowNum, columnNum, initialVal) {
    if (!aid.isInteger(rowNum) || !aid.isInteger(columnNum)) {
      throw new TypeError(
        'rowNum, columnNum parameter of array.getMatrixArr() must be Integer Number.'
      );
    }

    if (arguments.length !== 3)
      throw Error('array.getMatrixArr() requires 3 parameters.');

    var arr = [],
      columns = [];
    for (var i = 0; i < rowNum; ++i) {
      columns = [];

      for (var j = 0; j < columnNum; ++j) {
        columns[j] = initialVal;
      }

      arr[i] = columns;
    }

    return arr;
  };

  /**
   * binary search version of Array.indexOf
   *
   * @static
   * @method binaryIndexOf
   * @param {Array} sortedArray
   * @param {Object} target
   * @returns {Number} return Int number
   * @example
   * var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
   * console.log( aid.array.binaryIndexOf(arr, 7) ); // 7
   */
  array.binaryIndexOf = function binaryIndexOf(sortedArray, target) {
    if (!aid.isArray(sortedArray) || sortedArray.length <= 0) return -1;

    var first = 0,
      last = sortedArray.length - 1,
      middle;

    while (first <= last) {
      middle = Math.floor((first + last) / 2);

      if (target === sortedArray[middle]) {
        return middle;
      } else {
        if (target < sortedArray[middle]) {
          last = middle - 1;
        } else {
          first = middle + 1;
        }
      }
    }

    return -1;
  };

  /**
   * get object has property in array.
   * this object is first matched element in array by value or regex.
   *
   * @static
   * @method getFirstObjectHasProperty
   * @param {Array} arrayHasObjects
   * @param {String} propertyKey
   * @param {Object} findPropertyValueOrRegex
   * @returns {Object} return object
   * @example
   * var arrayHasObjects = [{ no: 11 }, { no: 22 }];
   * console.log( aid.array.getFirstObjectHasProperty(arrayHasObjects, 'index', 11) ); // null
   * console.log( aid.array.getFirstObjectHasProperty(arrayHasObjects, 'no', 11) ); // {no: 11}
   * console.log( aid.array.getFirstObjectHasProperty(arrayHasObjects, 'no', new RegExp('^1')) ); // {no: 11}
   * console.log( aid.array.getFirstObjectHasProperty(arrayHasObjects, 'no', /^(1)\d/) ); // {no: 11}
   */
  array.getFirstObjectHasProperty = function getFirstObjectHasProperty(
    arrayHasObjects,
    propertyKey,
    findPropertyValueOrRegex
  ) {
    if (!aid.isArray(arrayHasObjects) || arrayHasObjects.length <= 0)
      return null;

    if (!aid.isString(propertyKey)) return null;

    var obj,
      result = null;
    for (var i = 0, max = arrayHasObjects.length; i < max; ++i) {
      obj = arrayHasObjects[i];
      if (!obj.hasOwnProperty(propertyKey)) continue;

      if (aid.isRegExp(findPropertyValueOrRegex)) {
        if (findPropertyValueOrRegex.test(obj[propertyKey])) {
          result = obj;
          break;
        }
      } else {
        if (obj[propertyKey] === findPropertyValueOrRegex) {
          result = obj;
          break;
        }
      }
    }

    return result;
  };

  /**
   * apply overlapped condition sort in array.
   *
   * @static
   * @method overlappedConditionSortByProperty
   * @param {Array} arrayHasObjects
   * @param {Array} sortConditions. condition is object has property, func property
   * @returns {Array} return array
   * @example
   * var arrayHasObjects = [{group: 3, level: 1, date: '2017-02-04T00:00:00.000Z'}, {group: 1, level: 1, date: '2017-01-01T00:00:00.000Z'}, {group: 2, level: 3, date: '2017-01-01T00:00:00.000Z'}, {group: 3, level: 1, date: '2017-01-03T00:00:00.000Z'}, {group: 2, level: 1, date: '2017-01-01T00:00:00.000Z'}, {group: 4, level: 1, date: '2017-01-01T00:00:00.000Z'}, {group: 3, level: 2, date: '2017-01-03T00:00:00.000Z'}, {group: 1, level: 2, date: '2017-01-01T00:00:00.000Z'}, {group: 3, level: 2, date: '2017-02-04T00:00:00.000Z'}, {group: 2, level: 2, date: '2017-01-01T00:00:00.000Z'}];
   * var result = array.overlappedConditionSortByProperty(arr, [
   * { property: 'group', func: function (a, b) { return a.group - b.group; } },
   * { property: 'level', func: function (a, b) { return a.level - b.level; } },
   * { property: 'date', func: function (a, b) { return new Date(a.date).getTime() - new Date(b.date).getTime(); } }
   * ]);
   * console.log(result); // [{group: 1, level: 1, date: '2017-01-01T00:00:00.000Z'}, {group: 1, level: 2, date: '2017-01-01T00:00:00.000Z'}, {group: 2, level: 1, date: '2017-01-01T00:00:00.000Z'}, {group: 2, level: 2, date: '2017-01-01T00:00:00.000Z'}, {group: 2, level: 3, date: '2017-01-01T00:00:00.000Z'}, {group: 3, level: 1, date: '2017-01-03T00:00:00.000Z'}, {group: 3, level: 1, date: '2017-02-04T00:00:00.000Z'}, {group: 3, level: 2, date: '2017-01-03T00:00:00.000Z'}, {group: 3, level: 2, date: '2017-02-04T00:00:00.000Z'}, {group: 4, level: 1, date: '2017-01-01T00:00:00.000Z'}]
   */
  array.overlappedConditionSortByProperty = function overlappedConditionSortByProperty(
    arrayHasObjects,
    sortConditions
  ) {
    if (!aid.isArray(arrayHasObjects)) return null;

    var datas = _slice.call(arrayHasObjects);

    if (datas.length <= 1) return datas;
    if (
      !aid.isDefined(sortConditions) ||
      !aid.isArray(sortConditions) ||
      sortConditions.length <= 0
    )
      return datas;

    var restArgs = aid.rest(_slice.call(arguments), 2),
      conditionIndex = restArgs.length >= 1 ? restArgs[0] : 0,
      condition = sortConditions[conditionIndex];

    if (conditionIndex <= 0) datas.sort(condition.func);

    if (sortConditions.length <= 1) return datas;

    // overlapped conditional sort
    if (conditionIndex < sortConditions.length - 1) {
      var prevProperty = condition.property,
        nextConditionIndex = conditionIndex + 1,
        nextCondition = sortConditions[nextConditionIndex];

      var memoObj = {},
        memoArr = [],
        arr;

      var obj, prop;
      for (var i = 0, max = datas.length; i < max; i++) {
        obj = datas[i];
        prop = String(obj[prevProperty]);

        if (!memoObj[prop]) {
          memoObj[prop] = [];
          memoArr.push(memoObj[prop]);
        }

        arr = memoObj[prop];
        arr.push(obj);
      }

      for (var j = 0, len = memoArr.length; j < len; j++) {
        arr = memoArr[j];
        arr.sort(nextCondition.func);

        memoArr[j] = array.overlappedConditionSortByProperty(
          arr,
          sortConditions,
          nextConditionIndex
        );
      }

      return memoArr.reduce(function(acc, curVal) {
        return acc.concat(curVal);
      });
    }

    return datas;
  };

  /**
   * check object has properties.
   *
   * @static
   * @method isEmpty
   * @param {Object} obj
   * @returns {Boolean} return boolean
   * @example
   */
  object.isEmpty = function isEmpty(obj) {
    if (!aid.isObject(obj))
      throw new TypeError(
        'obj parameter type of object.isEmpty() must be Object.'
      );

    for (var key in obj) {
      if (obj.hasOwnProperty(key)) return false;
    }

    return true;
  };

  /**
   * check element is in viewport entirely.
   *
   * @static
   * @method isEntirelyInViewport
   * @param {Element} ele
   * @returns {Boolean} return boolean
   * @example
   */
  element.isEntirelyInViewport = function isEntirelyInViewport(ele) {
    if (typeof jQuery === 'function' && ele instanceof jQuery) ele = ele.get(0);

    if (!ele) return false;

    var rect = ele.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (global.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (global.innerWidth || document.documentElement.clientWidth)
    );
  };

  /**
   * check element is in viewport partially.
   *
   * @static
   * @method isPartiallyInViewport
   * @param {Element} ele
   * @returns {Boolean} return boolean
   * @example
   */
  element.isPartiallyInViewport = function isPartiallyInViewport(ele) {
    if (typeof jQuery === 'function' && ele instanceof jQuery) ele = ele.get(0);

    if (!ele) return false;

    var rect = ele.getBoundingClientRect(),
      windowHeight =
        global.innerHeight || document.documentElement.clientHeight,
      windowWidth = global.innerWidth || document.documentElement.clientWidth;

    // http://stackoverflow.com/questions/325933/determine-whether-two-date-ranges-overlap
    var verticallyInView =
        rect.top <= windowHeight && rect.top + rect.height >= 0,
      horizontallyInView =
        rect.left <= windowWidth && rect.left + rect.width >= 0;

    return verticallyInView && horizontallyInView;
  };

  /**
   * create script file, and append to target element.
   *
   * @static
   * @method appendScriptFile
   * @param {String} fileUrl
   * @param {Element} targetElementToAppendFile
   * @param {Function} loadCompleteCallback
   * @example
   * aid.file.appendScriptFile('https://apis.google.com/js/client.js', document.head, function() { console.log('load script file completely'); });
   */
  file.appendScriptFile = function appendScriptFile(
    fileUrl,
    targetElementToAppend,
    loadCompleteCallback
  ) {
    // document.head, document.body
    var script = document.createElement('script');
    script.type = 'text/javascript';

    if (typeof loadCompleteCallback === 'function') {
      if (typeof script.onreadystatechange === 'undefined') {
        script.onload = loadCompleteCallback;
      } else {
        script.onreadystatechange = function() {
          if (
            script.readyState === 'loaded' ||
            script.readyState === 'complete'
          ) {
            script.onreadystatechange = null;
            loadCompleteCallback();
          }
        };
      }
    }

    script.src = fileUrl;

    var ele = targetElementToAppend;
    if (typeof jQuery === 'function' && ele instanceof jQuery) ele = ele.get(0);

    if (ele) {
      ele.appendChild(script);
    } else {
      var firstScript = document.getElementsByTagName('script')[0];
      firstScript.parentNode.insertBefore(script, firstScript);
    }
  };

  /**
   * writes text to the system clipboard.
   *
   * @static
   * @method copyText
   * @param {String} str
   * @param {Function} successCallback
   * @param {Function} errorCallback
   * @example
   * aid.clipboard.copyText('aid.js', function(str) { console.log(str); // 'aid.js' }, function(error) { console.log(error); });
   */
  clipboard.copyText = function copyText(str, successCallback, errorCallback) {
    if (!aid.isString(str))
      throw new TypeError(
        'str parameter type of clipboard.copyText() must be String.'
      );

    if (aid.isDefined(successCallback) && !aid.isFunction(successCallback))
      throw new TypeError(
        'successCallback parameter type of clipboard.copyText() must be undefined or null or Function.'
      );

    if (aid.isDefined(errorCallback) && !aid.isFunction(errorCallback))
      throw new TypeError(
        'errorCallback parameter type of clipboard.copyText() must be undefined or null or Function.'
      );

    if (!navigator.clipboard) {
      // fallback. no support Clipboard API
      var textArea = document.createElement('textarea');
      textArea.style.position = 'fixed';
      textArea.style.top = '-9999px';
      textArea.style.left = '-9999px';
      textArea.style.width = '2em'; // setting to 1px / 1em doesn't work as this gives a negative w/h on some browsers.
      textArea.style.height = '2em';
      textArea.value = str;
      document.body.appendChild(textArea);

      textArea.focus();
      textArea.select();

      try {
        // https://developer.mozilla.org/en-US/docs/Web/API/Document/execCommand
        var isSuccessCopy = document.execCommand('copy');
        if (isSuccessCopy) {
          if (successCallback) successCallback.call(null, str);
          return;
        }

        if (errorCallback)
          errorCallback.call(
            null,
            new Error(
              'clipboard.copyText() cannot copy string with using document.execCommand("copy").'
            )
          );
      } catch (error) {
        if (errorCallback) errorCallback.call(null, error);
      }

      document.body.removeChild(textArea);
    } else {
      // https://developer.mozilla.org/en-US/docs/Web/API/Clipboard
      navigator.clipboard.writeText(str).then(
        function() {
          if (successCallback) successCallback.call(null, str);
        },
        function(error) {
          if (errorCallback) errorCallback.call(null, error);
        }
      );
    }
  };

  /**
   * Identity monad
   *
   * @static
   * @method Identity
   * @param {Object} value
   * @example
   * TODO:
   */
  var Identity = function(value) {
    this._value = value;
  };

  Identity.prototype.bind = function(func) {
    return func(this._value);
  };

  Identity.prototype.toString = function() {
    return 'Identity (' + this._value + ')';
  };

  monad.Identity = Identity;

  /**
   * Empty monad
   *
   * @static
   * @method Empty
   * @example
   * TODO:
   */
  var Empty = function() {};

  Empty.prototype.map = function(func) {
    return this;
  };

  Empty.prototype.flatmap = function(_) {
    return new Empty();
  };

  Empty.prototype.toString = function() {
    return 'Empty ()';
  };

  monad.Empty = Empty;

  /**
   * Wrapper monad
   *
   * @static
   * @method Wrapper
   * @param {Object} value
   * @example
   * TODO:
   */
  var Wrapper = function(value) {
    this._value = value;
  };

  Wrapper.of = function(a) {
    return new Wrapper(a);
  };

  Wrapper.prototype.map = function(func) {
    return Wrapper.of(func(this._value));
  };

  Wrapper.prototype.join = function() {
    if (!(this._value instanceof Wrapper)) return this;

    return this._value.join();
  };

  Wrapper.prototype.get = function() {
    return this._value;
  };

  Wrapper.prototype.toString = function() {
    return 'Wrapper (' + this._value + ')';
  };

  monad.Wrapper = Wrapper;

  /**
   * Nothing monad
   *
   * @static
   * @method Nothing
   * @example
   * TODO:
   */
  var Nothing = function() {};

  Nothing.prototype.value = function(value) {
    throw new TypeError('Cannot extract the value of monad.Nothing.');
  };

  Nothing.prototype.map = function(func) {
    return this;
  };

  Nothing.prototype.getOrElse = function(other) {
    return other;
  };

  Nothing.prototype.filter = function(func) {
    return this._value;
  };

  Nothing.prototype.chain = function(func) {
    return this;
  };

  Nothing.prototype.toString = function() {
    return 'Maybe.Nothing';
  };

  monad.Nothing = Nothing;

  /**
   * Just monad
   *
   * @static
   * @method Just
   * @param {Object} value
   * @example
   * TODO:
   */
  var Just = function(value) {
    this._value = value;
  };

  Just.prototype.value = function(value) {
    throw this._value;
  };

  Just.prototype.map = function(func) {
    return Maybe.fromNullable(func(this._value));
  };

  Just.prototype.getOrElse = function() {
    return this._value;
  };

  Just.prototype.filter = function(func) {
    Maybe.fromNullable(func(this._value) ? this._value : null);
  };

  Just.prototype.chain = function(func) {
    return func(this._value);
  };

  Just.prototype.toString = function() {
    return 'Maybe.Just (' + this._value + ')';
  };

  monad.Just = Just;

  /**
   * Maybe monad
   *
   * @static
   * @method Maybe
   * @example
   * var uri = 'http://www.google.com'; // this uri has no parameters
   * var safeUriParams = aid.curry(function(uri) { return aid.monad.Maybe.fromNullable(aid.string.getUriParams(uri)); });
   * var safeName = safeUriParams(uri).map(function(params) { return params.name; });
   * var name = safeName.getOrElse('no parameter'); // 'no parameter'
   */
  var Maybe = function() {};

  Maybe.just = function(value) {
    return new Just(value);
  };

  Maybe.nothing = function() {
    return new Nothing();
  };

  Maybe.of = function(value) {
    return Maybe.just(value);
  };

  Maybe.fromNullable = function(value) {
    return aid.isDefined(value) ? Maybe.just(value) : Maybe.nothing();
  };

  monad.Maybe = Maybe;

  /**
   * Left monad
   *
   * @static
   * @method Left
   * @example
   * TODO:
   */
  var Left = function(value) {
    this._value = value;
  };

  Left.prototype.map = function(_) {
    return this;
  };

  Left.prototype.value = function() {
    throw new TypeError('Cannot extract the value of monad.Left(value).');
  };

  Left.prototype.getOrElse = function(other) {
    return other;
  };

  Left.prototype.orElse = function(func) {
    return func(this._value);
  };

  Left.prototype.chain = function(func) {
    return this;
  };

  Left.prototype.getOrElseThrow = function(a) {
    throw new Error(a);
  };

  Left.prototype.filter = function(func) {
    return this;
  };

  Left.prototype.toString = function() {
    return 'Either.Left (' + this._value + ')';
  };

  monad.Left = Left;

  /**
   * Right monad
   *
   * @static
   * @method Right
   * @example
   * TODO:
   */
  var Right = function(value) {
    this._value = value;
  };

  Right.prototype.map = function(func) {
    return Either.of(func(this._value));
  };

  Right.prototype.getOrElse = function(other) {
    return this._value;
  };

  Right.prototype.orElse = function() {
    return this;
  };

  Right.prototype.chain = function(func) {
    return func(this._value);
  };

  Right.prototype.getOrElseThrow = function(_) {
    return this._value;
  };

  Right.prototype.filter = function(func) {
    return Either.fromNullable(func(this._value) ? this._value : null);
  };

  Right.prototype.toString = function() {
    return 'Either.Right (' + this._value + ')';
  };

  monad.Right = Right;

  /**
   * Either monad
   *
   * @static
   * @method Either
   * @example
   * var decode = function(url) {
   *   try {
   *     var result = window.decodeURIComponent(url);
   *     return Either.of(result);
   *   } catch (error) {
   *     return Either.left(error);
   *   }
   * };
   * var trim = function(str) { return str.trim(); };
   * var split = function(str) { return str.split(''); };
   * var debug = aid.tab(function(value) { console.log('[debug] :', value)});
   *
   * var splitDecodedStr = function(str) {
   *   var result = Maybe.fromNullable(str)
   *
   *     // change Maybe(Just, Nothing) monad to Either(Left, Right) monad.
   *     .map(trim).map(debug)
   *     .chain(decode).map(debug).map(split)
   *
   *     // get success result or else value
   *     .getOrElse([]); // get successed value or replacement value // useful to get some value.
   *     // .orElse(func) // if fail, func(value of Either.left) // useful to do something.
   *
   *   return result;
   * };
   *
   * console.log(splitDecodedStrUseMonad(' % '));
   * console.log(splitDecodedStrUseMonad(' https%3A%2F%2Fgithub.com%2F '));
   */
  var Either = function(value) {
    this._value = value;
  };

  Either.left = function(value) {
    return new monad.Left(value);
  };

  Either.right = function(value) {
    return new monad.Right(value);
  };

  Either.fromNullable = function(value) {
    return aid.isDefined(value) ? Either.right(value) : Either.left(value);
    // return value !== null && value !== undefined ? Either.right(value) : Either.left(value);
  };

  Either.of = function(value) {
    return Either.right(value);
  };

  Either.prototype.value = function() {
    return this._value;
  };

  monad.Either = Either;

  /**
   * IO monad
   *
   * @static
   * @method IO
   * @example
   * TODO:
   */
  var IO = function(effect) {
    if (!aid.isFunction(effect))
      throw new TypeError(
        'effect parameter type of monad.IO() must be Function.'
      );

    this.effect = effect;
  };

  IO.of = function(a) {
    return new IO(function() {
      return a;
    });
  };

  IO.from = function(func) {
    return new IO(func);
  };

  IO.prototype.map = function(func) {
    var self = this;

    return new IO(function() {
      return func(self.effect());
    });
  };

  IO.prototype.chain = function(func) {
    return func(this.effect());
  };

  IO.prototype.run = function() {
    return this.effect();
  };

  monad.IO = IO;

  /*
   * export
   */
  aid.operator = operator;
  aid.platform = platform;
  aid.browser = browser;
  aid.string = string;
  aid.math = math;
  aid.date = date;
  aid.array = array;
  aid.object = object;
  aid.element = element;
  aid.file = file;
  aid.clipboard = clipboard;
  aid.monad = monad;

  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = aid;
    }
  } else if (typeof define === 'function' && define.amd) {
    define('aid', [], function() {
      return aid;
    });
  } else {
    global.aid = aid;
  }
})();
