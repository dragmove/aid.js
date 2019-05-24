'use strict';

describe('aid.js', function() {
  describe('aid.math', function() {
    var math = aid.math;

    describe('.getSizeAspectFill()', function() {
      it('input arguments are not Number type, throw TypeError.', function() {
        var ERROR_MSG = '[aid.math.getSizeAspectFill] Type of parameters must be Number.';

        expect(function() {
          math.getSizeAspectFill(undefined, 1, 1, 1);
          math.getSizeAspectFill(1, undefined, 1, 1);
          math.getSizeAspectFill(1, 1, undefined, 1);
          math.getSizeAspectFill(1, 1, 1, undefined);
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          math.getSizeAspectFill(null, 1, 1, 1);
          math.getSizeAspectFill(1, null, 1, 1);
          math.getSizeAspectFill(1, 1, null, 1);
          math.getSizeAspectFill(1, 1, 1, null);
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          math.getSizeAspectFill(false, 1, 1, 1);
          math.getSizeAspectFill(1, false, 1, 1);
          math.getSizeAspectFill(1, 1, false, 1);
          math.getSizeAspectFill(1, 1, 1, false);
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          math.getSizeAspectFill(true, 1, 1, 1);
          math.getSizeAspectFill(1, true, 1, 1);
          math.getSizeAspectFill(1, 1, true, 1);
          math.getSizeAspectFill(1, 1, 1, true);
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          math.getSizeAspectFill('', 1, 1, 1);
          math.getSizeAspectFill(1, '', 1, 1);
          math.getSizeAspectFill(1, 1, '', 1);
          math.getSizeAspectFill(1, 1, 1, '');
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          math.getSizeAspectFill({}, 1, 1, 1);
          math.getSizeAspectFill(1, {}, 1, 1);
          math.getSizeAspectFill(1, 1, {}, 1);
          math.getSizeAspectFill(1, 1, 1, {});
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          math.getSizeAspectFill([], 1, 1, 1);
          math.getSizeAspectFill(1, [], 1, 1);
          math.getSizeAspectFill(1, 1, [], 1);
          math.getSizeAspectFill(1, 1, 1, []);
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          math.getSizeAspectFill(function() {}, 1, 1, 1);
          math.getSizeAspectFill(1, function() {}, 1, 1);
          math.getSizeAspectFill(1, 1, function() {}, 1);
          math.getSizeAspectFill(1, 1, 1, function() {});
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          math.getSizeAspectFill(new RegExp('^aid'), 1, 1, 1);
          math.getSizeAspectFill(1, new RegExp('^aid'), 1, 1);
          math.getSizeAspectFill(1, 1, new RegExp('^aid'), 1);
          math.getSizeAspectFill(1, 1, 1, new RegExp('^aid'));
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          math.getSizeAspectFill(/^aid/, 1, 1, 1);
          math.getSizeAspectFill(1, /^aid/, 1, 1);
          math.getSizeAspectFill(1, 1, /^aid/, 1);
          math.getSizeAspectFill(1, 1, 1, /^aid/);
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          math.getSizeAspectFill(1, 1, 1, 1);
          math.getSizeAspectFill(1, 1, 1, 1);
          math.getSizeAspectFill(1, 1, 1, 1);
          math.getSizeAspectFill(1, 1, 1, 1);
        }).not.toThrowError(TypeError, ERROR_MSG);
      });

      it('return object has width, height variables', function() {
        var size = math.getSizeAspectFill(1, 1, 1, 1);

        expect(aid.isObject(size)).toBeTruthy();
        expect(aid.isNumber(size.width)).toBeTruthy();
        expect(aid.isNumber(size.height)).toBeTruthy();
      });
    });

    describe('.getSizeAspectFit()', function() {
      it('input arguments are not Number type, throw TypeError.', function() {
        var ERROR_MSG = '[aid.math.getSizeAspectFit] Type of parameters must be Number.';

        expect(function() {
          math.getSizeAspectFit(undefined, 1, 1, 1);
          math.getSizeAspectFit(1, undefined, 1, 1);
          math.getSizeAspectFit(1, 1, undefined, 1);
          math.getSizeAspectFit(1, 1, 1, undefined);
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          math.getSizeAspectFit(null, 1, 1, 1);
          math.getSizeAspectFit(1, null, 1, 1);
          math.getSizeAspectFit(1, 1, null, 1);
          math.getSizeAspectFit(1, 1, 1, null);
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          math.getSizeAspectFit(false, 1, 1, 1);
          math.getSizeAspectFit(1, false, 1, 1);
          math.getSizeAspectFit(1, 1, false, 1);
          math.getSizeAspectFit(1, 1, 1, false);
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          math.getSizeAspectFit(true, 1, 1, 1);
          math.getSizeAspectFit(1, true, 1, 1);
          math.getSizeAspectFit(1, 1, true, 1);
          math.getSizeAspectFit(1, 1, 1, true);
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          math.getSizeAspectFit('', 1, 1, 1);
          math.getSizeAspectFit(1, '', 1, 1);
          math.getSizeAspectFit(1, 1, '', 1);
          math.getSizeAspectFit(1, 1, 1, '');
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          math.getSizeAspectFit({}, 1, 1, 1);
          math.getSizeAspectFit(1, {}, 1, 1);
          math.getSizeAspectFit(1, 1, {}, 1);
          math.getSizeAspectFit(1, 1, 1, {});
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          math.getSizeAspectFit([], 1, 1, 1);
          math.getSizeAspectFit(1, [], 1, 1);
          math.getSizeAspectFit(1, 1, [], 1);
          math.getSizeAspectFit(1, 1, 1, []);
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          math.getSizeAspectFit(function() {}, 1, 1, 1);
          math.getSizeAspectFit(1, function() {}, 1, 1);
          math.getSizeAspectFit(1, 1, function() {}, 1);
          math.getSizeAspectFit(1, 1, 1, function() {});
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          math.getSizeAspectFit(new RegExp('^aid'), 1, 1, 1);
          math.getSizeAspectFit(1, new RegExp('^aid'), 1, 1);
          math.getSizeAspectFit(1, 1, new RegExp('^aid'), 1);
          math.getSizeAspectFit(1, 1, 1, new RegExp('^aid'));
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          math.getSizeAspectFit(/^aid/, 1, 1, 1);
          math.getSizeAspectFit(1, /^aid/, 1, 1);
          math.getSizeAspectFit(1, 1, /^aid/, 1);
          math.getSizeAspectFit(1, 1, 1, /^aid/);
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          math.getSizeAspectFit(1, 1, 1, 1);
          math.getSizeAspectFit(1, 1, 1, 1);
          math.getSizeAspectFit(1, 1, 1, 1);
          math.getSizeAspectFit(1, 1, 1, 1);
        }).not.toThrowError(TypeError, ERROR_MSG);
      });

      it('return object has width, height variables', function() {
        var size = math.getSizeAspectFit(1, 1, 1, 1);

        expect(aid.isObject(size)).toBeTruthy();
        expect(aid.isNumber(size.width)).toBeTruthy();
        expect(aid.isNumber(size.height)).toBeTruthy();
      });
    });

    describe('.getSizeWidthFit()', function() {
      it('input arguments are not Number type, throw TypeError.', function() {
        var ERROR_MSG = '[aid.math.getSizeWidthFit] Type of parameters must be Number.';

        expect(function() {
          math.getSizeWidthFit(undefined, 1, 1, 1);
          math.getSizeWidthFit(1, undefined, 1, 1);
          math.getSizeWidthFit(1, 1, undefined, 1);
          math.getSizeWidthFit(1, 1, 1, undefined);
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          math.getSizeWidthFit(null, 1, 1, 1);
          math.getSizeWidthFit(1, null, 1, 1);
          math.getSizeWidthFit(1, 1, null, 1);
          math.getSizeWidthFit(1, 1, 1, null);
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          math.getSizeWidthFit(false, 1, 1, 1);
          math.getSizeWidthFit(1, false, 1, 1);
          math.getSizeWidthFit(1, 1, false, 1);
          math.getSizeWidthFit(1, 1, 1, false);
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          math.getSizeWidthFit(true, 1, 1, 1);
          math.getSizeWidthFit(1, true, 1, 1);
          math.getSizeWidthFit(1, 1, true, 1);
          math.getSizeWidthFit(1, 1, 1, true);
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          math.getSizeWidthFit('', 1, 1, 1);
          math.getSizeWidthFit(1, '', 1, 1);
          math.getSizeWidthFit(1, 1, '', 1);
          math.getSizeWidthFit(1, 1, 1, '');
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          math.getSizeWidthFit({}, 1, 1, 1);
          math.getSizeWidthFit(1, {}, 1, 1);
          math.getSizeWidthFit(1, 1, {}, 1);
          math.getSizeWidthFit(1, 1, 1, {});
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          math.getSizeWidthFit([], 1, 1, 1);
          math.getSizeWidthFit(1, [], 1, 1);
          math.getSizeWidthFit(1, 1, [], 1);
          math.getSizeWidthFit(1, 1, 1, []);
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          math.getSizeWidthFit(function() {}, 1, 1, 1);
          math.getSizeWidthFit(1, function() {}, 1, 1);
          math.getSizeWidthFit(1, 1, function() {}, 1);
          math.getSizeWidthFit(1, 1, 1, function() {});
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          math.getSizeWidthFit(new RegExp('^aid'), 1, 1, 1);
          math.getSizeWidthFit(1, new RegExp('^aid'), 1, 1);
          math.getSizeWidthFit(1, 1, new RegExp('^aid'), 1);
          math.getSizeWidthFit(1, 1, 1, new RegExp('^aid'));
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          math.getSizeWidthFit(/^aid/, 1, 1, 1);
          math.getSizeWidthFit(1, /^aid/, 1, 1);
          math.getSizeWidthFit(1, 1, /^aid/, 1);
          math.getSizeWidthFit(1, 1, 1, /^aid/);
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          math.getSizeWidthFit(1, 1, 1, 1);
          math.getSizeWidthFit(1, 1, 1, 1);
          math.getSizeWidthFit(1, 1, 1, 1);
          math.getSizeWidthFit(1, 1, 1, 1);
        }).not.toThrowError(TypeError, ERROR_MSG);
      });

      it('return object has width, height variables', function() {
        var size = math.getSizeWidthFit(1, 1, 1, 1);

        expect(aid.isObject(size)).toBeTruthy();
        expect(aid.isNumber(size.width)).toBeTruthy();
        expect(aid.isNumber(size.height)).toBeTruthy();
      });
    });

    describe('.isEpsilonEqual()', function() {
      it('arguments are not Number type, throw TypeError.', function() {
        expect(function() {
          math.isEpsilonEqual(1, undefined);
          math.isEpsilonEqual(undefined, 1);
        }).toThrowError(TypeError);

        expect(function() {
          math.isEpsilonEqual(1, null);
          math.isEpsilonEqual(null, 1);
        }).toThrowError(TypeError);

        expect(function() {
          math.isEpsilonEqual(1, false);
          math.isEpsilonEqual(false, 1);
        }).toThrowError(TypeError);

        expect(function() {
          math.isEpsilonEqual(1, true);
          math.isEpsilonEqual(true, 1);
        }).toThrowError(TypeError);

        expect(function() {
          math.isEpsilonEqual(1, '');
          math.isEpsilonEqual('', 1);
        }).toThrowError(TypeError);

        expect(function() {
          math.isEpsilonEqual(1, {});
          math.isEpsilonEqual({}, 1);
        }).toThrowError(TypeError);

        expect(function() {
          math.isEpsilonEqual(1, []);
          math.isEpsilonEqual([], 1);
        }).toThrowError(TypeError);

        expect(function() {
          math.isEpsilonEqual(1, function() {});
          math.isEpsilonEqual(function() {}, 1);
        }).toThrowError(TypeError);

        expect(function() {
          math.isEpsilonEqual(1, new RegExp('^aid'));
          math.isEpsilonEqual(new RegExp('^aid'), 1);
        }).toThrowError(TypeError);

        expect(function() {
          math.isEpsilonEqual(1, /^aid/);
          math.isEpsilonEqual(/^aid/, 1);
        }).toThrowError(TypeError);
      });

      it('return true, when Number.EPSILON > Math.abs(number_a - number_b)', function() {
        expect(math.isEpsilonEqual(0.1 + 0.2, 0.3)).toBe(true);
      });
    });

    describe('.isIndexInLoop()', function() {
      it('throw Error, input 1 or 2 or 3 parameters.', function() {
        expect(function() {
          math.isIndexInLoop(8);
        }).toThrowError(Error);

        expect(function() {
          math.isIndexInLoop(8, 5);
        }).toThrowError(Error);

        expect(function() {
          math.isIndexInLoop(8, 5, 6);
        }).toThrowError(Error);
      });

      it('throw TypeError, input arguments are not Number type.', function() {
        expect(function() {
          math.isIndexInLoop(8, 5, 6, undefined);
        }).toThrowError(TypeError);

        expect(function() {
          math.isIndexInLoop(8, 5, 6, null);
        }).toThrowError(TypeError);

        expect(function() {
          math.isIndexInLoop(8, 5, 6, false);
        }).toThrowError(TypeError);

        expect(function() {
          math.isIndexInLoop(8, 5, 6, true);
        }).toThrowError(TypeError);

        expect(function() {
          math.isIndexInLoop(8, 5, 6, '');
        }).toThrowError(TypeError);

        expect(function() {
          math.isIndexInLoop(8, 5, 6, {});
        }).toThrowError(TypeError);

        expect(function() {
          math.isIndexInLoop(8, 5, 6, []);
        }).toThrowError(TypeError);

        expect(function() {
          math.isIndexInLoop(8, 5, 6, function() {});
        }).toThrowError(TypeError);

        expect(function() {
          math.isIndexInLoop(8, 5, 6, new RegExp('^aid'));
        }).toThrowError(TypeError);

        expect(function() {
          math.isIndexInLoop(8, 5, 6, /^aid/);
        }).toThrowError(TypeError);
      });

      it('return false, when searchIndex is not in (6, 7, 8, 1, 2) in 1 ~ 8.', function() {
        expect(math.isIndexInLoop(8, 5, 6, 3)).toEqual(false);
        expect(math.isIndexInLoop(8, 5, 6, 4)).toEqual(false);
        expect(math.isIndexInLoop(8, 5, 6, 5)).toEqual(false);
      });
      it('return true, when searchIndex is in (6, 7, 8, 1, 2) in 1 ~ 8.', function() {
        expect(math.isIndexInLoop(8, 5, 6, 6)).toEqual(true);
        expect(math.isIndexInLoop(8, 5, 6, 7)).toEqual(true);
        expect(math.isIndexInLoop(8, 5, 6, 8)).toEqual(true);
        expect(math.isIndexInLoop(8, 5, 6, 1)).toEqual(true);
        expect(math.isIndexInLoop(8, 5, 6, 2)).toEqual(true);
      });

      it('return false, when searchIndex is not in (4, 1) in 1 ~ 4.', function() {
        expect(math.isIndexInLoop(4, 2, 4, 2)).toEqual(false);
        expect(math.isIndexInLoop(4, 2, 4, 3)).toEqual(false);
      });

      it('return true, when searchIndex is in (4, 1) in 1 ~ 4.', function() {
        expect(math.isIndexInLoop(4, 2, 4, 4)).toEqual(true);
        expect(math.isIndexInLoop(4, 2, 4, 1)).toEqual(true);
      });

      it('return true, when searchIndex is in (3, 4, 1, 2) in 1 ~ 4.', function() {
        expect(math.isIndexInLoop(4, 4, 3, 3)).toEqual(true);
        expect(math.isIndexInLoop(4, 4, 3, 4)).toEqual(true);
        expect(math.isIndexInLoop(4, 4, 3, 1)).toEqual(true);
        expect(math.isIndexInLoop(4, 4, 3, 2)).toEqual(true);
      });
    });

    describe('.getLoopedLastIndex()', function() {
      it('throw Error, input 1 or 2 parameters.', function() {
        expect(function() {
          math.getLoopedLastIndex(8);
        }).toThrowError(Error);

        expect(function() {
          math.getLoopedLastIndex(8, 1);
        }).toThrowError(Error);
      });

      it('throw TypeError, input arguments are not Number type.', function() {
        expect(function() {
          math.getLoopedLastIndex(8, 1, undefined);
        }).toThrowError(TypeError);

        expect(function() {
          math.getLoopedLastIndex(8, 1, null);
        }).toThrowError(TypeError);

        expect(function() {
          math.getLoopedLastIndex(8, 1, false);
        }).toThrowError(TypeError);

        expect(function() {
          math.getLoopedLastIndex(8, 1, true);
        }).toThrowError(TypeError);

        expect(function() {
          math.getLoopedLastIndex(8, 1, '');
        }).toThrowError(TypeError);

        expect(function() {
          math.getLoopedLastIndex(8, 1, {});
        }).toThrowError(TypeError);

        expect(function() {
          math.getLoopedLastIndex(8, 1, []);
        }).toThrowError(TypeError);

        expect(function() {
          math.getLoopedLastIndex(8, 1, function() {});
        }).toThrowError(TypeError);

        expect(function() {
          math.getLoopedLastIndex(8, 1, new RegExp('^aid'));
        }).toThrowError(TypeError);

        expect(function() {
          math.getLoopedLastIndex(8, 1, /^aid/);
        }).toThrowError(TypeError);
      });

      it('return 7, when firstIndex is 7, loopGap is 1 in 1 ~ 8.', function() {
        expect(math.getLoopedLastIndex(8, 1, 7)).toEqual(7);
      });
      it('return 8, when firstIndex is 7, loopGap is 2 in 1 ~ 8.', function() {
        expect(math.getLoopedLastIndex(8, 2, 7)).toEqual(8);
      });
      it('return 1, when firstIndex is 7, loopGap is 3 in 1 ~ 8.', function() {
        expect(math.getLoopedLastIndex(8, 3, 7)).toEqual(1);
      });
      it('return 2, when firstIndex is 7, loopGap is 4 in 1 ~ 8.', function() {
        expect(math.getLoopedLastIndex(8, 4, 7)).toEqual(2);
      });
      it('return 3, when firstIndex is 7, loopGap is 5 in 1 ~ 8.', function() {
        expect(math.getLoopedLastIndex(8, 5, 7)).toEqual(3);
      });
      it('return 4, when firstIndex is 7, loopGap is 6 in 1 ~ 8.', function() {
        expect(math.getLoopedLastIndex(8, 6, 7)).toEqual(4);
      });
      it('return 5, when firstIndex is 7, loopGap is 7 in 1 ~ 8.', function() {
        expect(math.getLoopedLastIndex(8, 7, 7)).toEqual(5);
      });
      it('return 6, when firstIndex is 7, loopGap is 8 in 1 ~ 8.', function() {
        expect(math.getLoopedLastIndex(8, 8, 7)).toEqual(6);
      });
    });

    describe('.getReverseLoopedFirstIndex()', function() {
      it('throw Error, input 1 or 2 parameters.', function() {
        expect(function() {
          math.getReverseLoopedFirstIndex(8);
        }).toThrowError(Error);

        expect(function() {
          math.getReverseLoopedFirstIndex(8, 1);
        }).toThrowError(Error);
      });

      it('throw TypeError, input arguments are not Number type.', function() {
        expect(function() {
          math.getReverseLoopedFirstIndex(8, 1, undefined);
        }).toThrowError(TypeError);

        expect(function() {
          math.getReverseLoopedFirstIndex(8, 1, null);
        }).toThrowError(TypeError);

        expect(function() {
          math.getReverseLoopedFirstIndex(8, 1, false);
        }).toThrowError(TypeError);

        expect(function() {
          math.getReverseLoopedFirstIndex(8, 1, true);
        }).toThrowError(TypeError);

        expect(function() {
          math.getReverseLoopedFirstIndex(8, 1, '');
        }).toThrowError(TypeError);

        expect(function() {
          math.getReverseLoopedFirstIndex(8, 1, {});
        }).toThrowError(TypeError);

        expect(function() {
          math.getReverseLoopedFirstIndex(8, 1, []);
        }).toThrowError(TypeError);

        expect(function() {
          math.getReverseLoopedFirstIndex(8, 1, function() {});
        }).toThrowError(TypeError);

        expect(function() {
          math.getReverseLoopedFirstIndex(8, 1, new RegExp('^aid'));
        }).toThrowError(TypeError);

        expect(function() {
          math.getReverseLoopedFirstIndex(8, 1, /^aid/);
        }).toThrowError(TypeError);
      });

      it('return 2, when lastIndex is 2, loopGap is 1 in 1 ~ 8.', function() {
        expect(math.getReverseLoopedFirstIndex(8, 1, 2)).toEqual(2);
      });
      it('return 1, when lastIndex is 2, loopGap is 2 in 1 ~ 8.', function() {
        expect(math.getReverseLoopedFirstIndex(8, 2, 2)).toEqual(1);
      });
      it('return 8, when lastIndex is 2, loopGap is 3 in 1 ~ 8.', function() {
        expect(math.getReverseLoopedFirstIndex(8, 3, 2)).toEqual(8);
      });
      it('return 7, when lastIndex is 2, loopGap is 4 in 1 ~ 8.', function() {
        expect(math.getReverseLoopedFirstIndex(8, 4, 2)).toEqual(7);
      });
      it('return 6, when lastIndex is 2, loopGap is 5 in 1 ~ 8.', function() {
        expect(math.getReverseLoopedFirstIndex(8, 5, 2)).toEqual(6);
      });
      it('return 5, when lastIndex is 2, loopGap is 6 in 1 ~ 8.', function() {
        expect(math.getReverseLoopedFirstIndex(8, 6, 2)).toEqual(5);
      });
      it('return 4, when lastIndex is 2, loopGap is 7 in 1 ~ 8.', function() {
        expect(math.getReverseLoopedFirstIndex(8, 7, 2)).toEqual(4);
      });
      it('return 3, when lastIndex is 2, loopGap is 8 in 1 ~ 8.', function() {
        expect(math.getReverseLoopedFirstIndex(8, 8, 2)).toEqual(3);
      });
    });

    describe('.factorial()', function() {
      it('throw TypeError, input argument is not Integer Number type.', function() {
        expect(function() {
          math.factorial(undefined);
        }).toThrowError(TypeError);

        expect(function() {
          math.factorial(null);
        }).toThrowError(TypeError);

        expect(function() {
          math.factorial(false);
        }).toThrowError(TypeError);

        expect(function() {
          math.factorial(true);
        }).toThrowError(TypeError);

        expect(function() {
          math.factorial('');
        }).toThrowError(TypeError);

        expect(function() {
          math.factorial(0.5);
        }).toThrowError(TypeError);

        expect(function() {
          math.factorial({});
        }).toThrowError(TypeError);

        expect(function() {
          math.factorial([]);
        }).toThrowError(TypeError);

        expect(function() {
          math.factorial(function() {});
        }).toThrowError(TypeError);

        expect(function() {
          math.factorial(new RegExp('^aid'));
        }).toThrowError(TypeError);

        expect(function() {
          math.factorial(/^aid/);
        }).toThrowError(TypeError);
      });

      it('return 1, when factorial param is minus value', function() {
        expect(math.factorial(-99)).toEqual(1);
      });
      it('return 1, when factorial param is 0', function() {
        expect(math.factorial(0)).toEqual(1);
      });
      it('return 1, when factorial param is 1', function() {
        expect(math.factorial(1)).toEqual(1);
      });
      it('return 2, when factorial param is 2', function() {
        expect(math.factorial(2)).toEqual(2);
      });
      it('return 3, when factorial param is 3', function() {
        expect(math.factorial(3)).toEqual(6);
      });
      it('return 120, when factorial param is 5', function() {
        expect(math.factorial(5)).toEqual(120);
      });
    });

    describe('.getObjForPagination()', function() {
      it('throw Error, input 1 or 2 or 3 parameters.', function() {
        expect(function() {
          math.getObjForPagination(10);
        }).toThrowError(Error);

        expect(function() {
          math.getObjForPagination(10, 10);
        }).toThrowError(Error);

        expect(function() {
          math.getObjForPagination(10, 10, 10);
        }).toThrowError(Error);
      });

      it('throw TypeError, input arguments are not Int Number type.', function() {
        expect(function() {
          math.getObjForPagination(undefined, 10, 10, 1);
        }).toThrowError(TypeError);

        expect(function() {
          math.getObjForPagination(10, null, 10, 1);
        }).toThrowError(TypeError);

        expect(function() {
          math.getObjForPagination(10, 10, true, 1);
        }).toThrowError(TypeError);

        expect(function() {
          math.getObjForPagination(10, 10, '10', 1);
        }).toThrowError(TypeError);
      });

      it('throw TypeError, input arguments are not positive Int Number type.', function() {
        expect(function() {
          math.getObjForPagination(-1, 10, 10, 1);
        }).toThrowError(TypeError);

        expect(function() {
          math.getObjForPagination(10, 0, 10, 1);
        }).toThrowError(TypeError);

        expect(function() {
          math.getObjForPagination(10, 10, 0, 1);
        }).toThrowError(TypeError);

        expect(function() {
          math.getObjForPagination(10, 10, 10, -1);
        }).toThrowError(TypeError);
      });

      it('return obj has pagination infos, when input arguments.', function() {
        expect(math.getObjForPagination(1, 10, 5, 1)).toEqual({
          totalPostNum: 1,
          displayPostNumPerPage: 10,
          displayPaginationBtnNum: 5,
          pageIndex: 1,
          totalPageNum: 1,
          prevPageIndex: 0,
          firstPageIndex: 1,
          lastPageIndex: 1,
          nextPageIndex: 0
        });

        expect(math.getObjForPagination(15, 10, 5, 1)).toEqual({
          totalPostNum: 15,
          displayPostNumPerPage: 10,
          displayPaginationBtnNum: 5,
          pageIndex: 1,
          totalPageNum: 2,
          prevPageIndex: 0,
          firstPageIndex: 1,
          lastPageIndex: 2,
          nextPageIndex: 0
        });

        expect(math.getObjForPagination(39, 10, 5, 1)).toEqual({
          totalPostNum: 39,
          displayPostNumPerPage: 10,
          displayPaginationBtnNum: 5,
          pageIndex: 1,
          totalPageNum: 4,
          prevPageIndex: 0,
          firstPageIndex: 1,
          lastPageIndex: 4,
          nextPageIndex: 0
        });
      });
    });

    describe('.degreeToRadian()', function() {
      it('if func parameter type is not Number, throw Error.', function() {
        expect(function() {
          math.degreeToRadian(undefined);
        }).toThrowError();

        expect(function() {
          math.degreeToRadian(null);
        }).toThrowError();

        expect(function() {
          math.degreeToRadian(false);
        }).toThrowError();

        expect(function() {
          math.degreeToRadian(true);
        }).toThrowError();

        expect(function() {
          math.degreeToRadian(0);
        }).not.toThrowError();

        expect(function() {
          math.degreeToRadian('');
        }).toThrowError();

        expect(function() {
          math.degreeToRadian([]);
        }).toThrowError();

        expect(function() {
          math.degreeToRadian(NaN);
        }).toThrowError();

        expect(function() {
          math.degreeToRadian(function() {});
        }).toThrowError();
      });

      it('return number when input number', function() {
        var radian = math.degreeToRadian(90);
        expect(aid.isNumber(radian)).toBe(true);
      });
    });

    describe('.radianToDegree()', function() {
      it('if func parameter type is not Number, throw Error.', function() {
        expect(function() {
          math.radianToDegree(undefined);
        }).toThrowError();

        expect(function() {
          math.radianToDegree(null);
        }).toThrowError();

        expect(function() {
          math.radianToDegree(false);
        }).toThrowError();

        expect(function() {
          math.radianToDegree(true);
        }).toThrowError();

        expect(function() {
          math.radianToDegree(0);
        }).not.toThrowError();

        expect(function() {
          math.radianToDegree('');
        }).toThrowError();

        expect(function() {
          math.radianToDegree([]);
        }).toThrowError();

        expect(function() {
          math.radianToDegree(NaN);
        }).toThrowError();

        expect(function() {
          math.radianToDegree(function() {});
        }).toThrowError();
      });

      it('return number when input number', function() {
        var degree = math.radianToDegree(90);
        expect(aid.isNumber(degree)).toBe(true);
      });
    });

    describe('.getHeightOfRightTriangle()', function() {
      it('input arguments are not Object type, throw TypeError.', function() {
        var ERROR_MSG = '[aid.math.getHeightOfRightTriangle] Type of parameters must be Number.';

        expect(function() {
          math.getHeightOfRightTriangle(undefined, 30);
          math.getHeightOfRightTriangle(100, undefined);
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          math.getHeightOfRightTriangle(null, 30);
          math.getHeightOfRightTriangle(100, null);
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          math.getHeightOfRightTriangle(false, 30);
          math.getHeightOfRightTriangle(100, false);
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          math.getHeightOfRightTriangle(true, 30);
          math.getHeightOfRightTriangle(100, true);
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          math.getHeightOfRightTriangle('', 30);
          math.getHeightOfRightTriangle(100, '');
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          math.getHeightOfRightTriangle([], 30);
          math.getHeightOfRightTriangle(100, []);
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          math.getHeightOfRightTriangle(function() {}, 30);
          math.getHeightOfRightTriangle(100, function() {});
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          math.getHeightOfRightTriangle(new RegExp('^aid'), 30);
          math.getHeightOfRightTriangle(100, new RegExp('^aid'));
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          math.getHeightOfRightTriangle(/^aid/, 30);
          math.getHeightOfRightTriangle(100, /^aid/);
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          math.getHeightOfRightTriangle(100, 30);
        }).not.toThrowError(TypeError, ERROR_MSG);
      });

      it('acuteAngleDegree parameter is greater than or equal to 90, throw Error.', function() {
        var ERROR_MSG =
          '[aid.math.getHeightOfRightTriangle] acuteAngleDegree parameter cannot greater than or equal to 90.';

        expect(function() {
          math.getHeightOfRightTriangle(100, 90);
        }).toThrowError(Error, ERROR_MSG);

        expect(function() {
          math.getHeightOfRightTriangle(100, 180);
        }).toThrowError(Error, ERROR_MSG);
      });

      it('return number', function() {
        var degree = math.getHeightOfRightTriangle(100, 30);

        expect(aid.isNumber(degree)).toBe(true);
      });
    });

    describe('.getDistanceBetweenTwoPoints()', function() {
      var point1 = {
          x: 0,
          y: 0
        },
        point2 = {
          x: 100,
          y: 100
        };

      it('input arguments are not Object type, throw TypeError.', function() {
        var ERROR_MSG = '[aid.math.getDistanceBetweenTwoPoints] Type of parameters must be Object.';

        expect(function() {
          math.getDistanceBetweenTwoPoints(undefined, point2);
          math.getDistanceBetweenTwoPoints(point1, undefined);
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          math.getDistanceBetweenTwoPoints(null, point2);
          math.getDistanceBetweenTwoPoints(point1, null);
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          math.getDistanceBetweenTwoPoints(false, point2);
          math.getDistanceBetweenTwoPoints(point1, false);
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          math.getDistanceBetweenTwoPoints(true, point2);
          math.getDistanceBetweenTwoPoints(point1, true);
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          math.getDistanceBetweenTwoPoints('', point2);
          math.getDistanceBetweenTwoPoints(point1, '');
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          math.getDistanceBetweenTwoPoints([], point2);
          math.getDistanceBetweenTwoPoints(point1, []);
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          math.getDistanceBetweenTwoPoints(function() {}, point2);
          math.getDistanceBetweenTwoPoints(point1, function() {});
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          math.getDistanceBetweenTwoPoints(new RegExp('^aid'), point2);
          math.getDistanceBetweenTwoPoints(point1, new RegExp('^aid'));
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          math.getDistanceBetweenTwoPoints(/^aid/, point2);
          math.getDistanceBetweenTwoPoints(point1, /^aid/);
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          math.getDistanceBetweenTwoPoints(1, point2);
          math.getDistanceBetweenTwoPoints(point1, 1);
        }).toThrowError(TypeError, ERROR_MSG);
      });

      it('input arguments are not object has x, y property of Number type, throw Error.', function() {
        var ERROR_MSG =
          '[aid.math.getDistanceBetweenTwoPoints] Type of parameters must be Object that has x, y properties.';

        expect(function() {
          math.getDistanceBetweenTwoPoints({}, point2);
          math.getDistanceBetweenTwoPoints(point1, {});
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          math.getDistanceBetweenTwoPoints(
            {
              foo: 0,
              bar: 0
            },
            point2
          );

          math.getDistanceBetweenTwoPoints(point1, {
            foo: 0,
            bar: 0
          });
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          math.getDistanceBetweenTwoPoints(
            {
              x: 0
            },
            point2
          );

          math.getDistanceBetweenTwoPoints(point1, {
            y: 0
          });
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          math.getDistanceBetweenTwoPoints(
            {
              x: 0,
              y: NaN
            },
            point2
          );

          math.getDistanceBetweenTwoPoints(point1, {
            x: NaN,
            y: 0
          });
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          math.getDistanceBetweenTwoPoints(point1, point2);
        }).not.toThrowError(TypeError, ERROR_MSG);
      });

      it('return number.', function() {
        var distance = math.getDistanceBetweenTwoPoints(point1, point2);

        expect(aid.isNumber(distance)).toBeTruthy();
      });
    });

    describe('.getOrthogonalPointBetweenLineAndSomePoint()', function() {
      var point1 = {
          x: 0,
          y: 0
        },
        point2 = {
          x: 100,
          y: 100
        },
        somePoint = {
          x: 50,
          y: 100
        };

      it('input arguments are not Object type, throw TypeError.', function() {
        var ERROR_MSG = '[aid.math.getOrthogonalPointBetweenLineAndSomePoint] Type of parameters must be Object.';

        expect(function() {
          math.getOrthogonalPointBetweenLineAndSomePoint(undefined, point2, somePoint);
          math.getOrthogonalPointBetweenLineAndSomePoint(point1, undefined, somePoint);
          math.getOrthogonalPointBetweenLineAndSomePoint(point1, point2, undefined);
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          math.getOrthogonalPointBetweenLineAndSomePoint(null, point2, somePoint);
          math.getOrthogonalPointBetweenLineAndSomePoint(point1, null, somePoint);
          math.getOrthogonalPointBetweenLineAndSomePoint(point1, point2, null);
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          math.getOrthogonalPointBetweenLineAndSomePoint(false, point2, somePoint);
          math.getOrthogonalPointBetweenLineAndSomePoint(point1, false, somePoint);
          math.getOrthogonalPointBetweenLineAndSomePoint(point1, point2, false);
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          math.getOrthogonalPointBetweenLineAndSomePoint(true, point2, somePoint);
          math.getOrthogonalPointBetweenLineAndSomePoint(point1, true, somePoint);
          math.getOrthogonalPointBetweenLineAndSomePoint(point1, point2, true);
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          math.getOrthogonalPointBetweenLineAndSomePoint('', point2, somePoint);
          math.getOrthogonalPointBetweenLineAndSomePoint(point1, '', somePoint);
          math.getOrthogonalPointBetweenLineAndSomePoint(point1, point2, '');
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          math.getOrthogonalPointBetweenLineAndSomePoint([], point2, somePoint);
          math.getOrthogonalPointBetweenLineAndSomePoint(point1, [], somePoint);
          math.getOrthogonalPointBetweenLineAndSomePoint(point1, point2, []);
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          math.getOrthogonalPointBetweenLineAndSomePoint(function() {}, point2, somePoint);
          math.getOrthogonalPointBetweenLineAndSomePoint(point1, function() {}, somePoint);
          math.getOrthogonalPointBetweenLineAndSomePoint(point1, point2, function() {});
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          math.getOrthogonalPointBetweenLineAndSomePoint(new RegExp('^aid'), point2, somePoint);
          math.getOrthogonalPointBetweenLineAndSomePoint(point1, new RegExp('^aid'), somePoint);
          math.getOrthogonalPointBetweenLineAndSomePoint(point1, point2, new RegExp('^aid'));
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          math.getOrthogonalPointBetweenLineAndSomePoint(/^aid/, point2, somePoint);
          math.getOrthogonalPointBetweenLineAndSomePoint(point1, /^aid/, somePoint);
          math.getOrthogonalPointBetweenLineAndSomePoint(point1, point2, /^aid/);
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          math.getOrthogonalPointBetweenLineAndSomePoint(1, point2, somePoint);
          math.getOrthogonalPointBetweenLineAndSomePoint(point1, 1, somePoint);
          math.getOrthogonalPointBetweenLineAndSomePoint(point1, point2, 1);
        }).toThrowError(TypeError, ERROR_MSG);
      });

      it('input arguments are not object has x, y property of Number type, throw Error.', function() {
        var ERROR_MSG =
          '[aid.math.getOrthogonalPointBetweenLineAndSomePoint] Type of parameters must be Object that has x, y properties.';

        expect(function() {
          math.getOrthogonalPointBetweenLineAndSomePoint({}, point2, somePoint);
          math.getOrthogonalPointBetweenLineAndSomePoint(point1, {}, somePoint);
          math.getOrthogonalPointBetweenLineAndSomePoint(point1, point2, {});
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          math.getOrthogonalPointBetweenLineAndSomePoint(
            {
              foo: 0,
              bar: 0
            },
            point2,
            somePoint
          );

          math.getOrthogonalPointBetweenLineAndSomePoint(
            point1,
            {
              foo: 0,
              bar: 0
            },
            somePoint
          );

          math.getOrthogonalPointBetweenLineAndSomePoint(point1, point2, {
            foo: 0,
            bar: 0
          });
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          math.getOrthogonalPointBetweenLineAndSomePoint(
            {
              x: 0
            },
            point2,
            somePoint
          );

          math.getOrthogonalPointBetweenLineAndSomePoint(
            point1,
            {
              y: 0
            },
            somePoint
          );

          math.getOrthogonalPointBetweenLineAndSomePoint(point1, point2, {
            x: 0
          });
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          math.getOrthogonalPointBetweenLineAndSomePoint(
            {
              x: 0,
              y: NaN
            },
            point2,
            somePoint
          );

          math.getOrthogonalPointBetweenLineAndSomePoint(
            point1,
            {
              x: NaN,
              y: 0
            },
            somePoint
          );

          math.getOrthogonalPointBetweenLineAndSomePoint(point1, point2, {
            x: NaN,
            y: 0
          });
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          math.getOrthogonalPointBetweenLineAndSomePoint(point1, point2, somePoint);
        }).not.toThrowError(TypeError, ERROR_MSG);
      });

      it('return null, when collinearPoint1 is equal to collinearPoint2.', function() {
        var point = math.getOrthogonalPointBetweenLineAndSomePoint(
          {
            x: 99,
            y: 99
          },
          {
            x: 99,
            y: 99
          },
          somePoint
        );

        expect(point).toBeNull();
      });

      it('return object has x, y properties.', function() {
        var point = math.getOrthogonalPointBetweenLineAndSomePoint(point1, point2, somePoint);

        expect(aid.isObject(point)).toBeTruthy();
        expect(aid.isNumber(point.x)).toBeTruthy();
        expect(aid.isNumber(point.y)).toBeTruthy();
      });
    });

    describe('.getRandomPositiveNegative()', function() {
      it('return -1 or 1', function() {
        var val = math.getRandomPositiveNegative();
        expect(val === -1 || val === 1).toBeTruthy();
      });
    });

    describe('.getRandomFloat()', function() {
      it('input arguments are not Number type, throw TypeError.', function() {
        var ERROR_MSG = '[aid.math.getRandomFloat] Type of parameters must be Number.';

        expect(function() {
          math.getRandomFloat(undefined, 99.999);
          math.getRandomFloat(99.999, undefined);
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          math.getRandomFloat(null, 99.999);
          math.getRandomFloat(99.999, null);
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          math.getRandomFloat(false, 99.999);
          math.getRandomFloat(99.999, false);
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          math.getRandomFloat('aid.js', 99.999);
          math.getRandomFloat(99.999, 'aid.js');
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          math.getRandomFloat({}, 99.999);
          math.getRandomFloat(99.999, {});
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          math.getRandomFloat([], 99.999);
          math.getRandomFloat(99.999, []);
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          math.getRandomFloat(new RegExp('^aid'), 99.999);
          math.getRandomFloat(99.999, new RegExp('^aid'));
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          math.getRandomFloat(/^aid/, 99.999);
          math.getRandomFloat(99.999, /^aid/);
        }).toThrowError(TypeError, ERROR_MSG);
      });

      it('return random Float number.', function() {
        var val = math.getRandomFloat(-99.999, 99.999);
        expect(val >= -99.999 && val < 99.999).toBeTruthy();
      });
    });

    describe('.getRandomInt()', function() {
      it('input arguments are not Integer Number type, throw TypeError.', function() {
        var ERROR_MSG = '[aid.math.getRandomInt] Type of parameters must be Integer Number.';

        expect(function() {
          math.getRandomInt(undefined, 99);
          math.getRandomInt(99, undefined);
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          math.getRandomInt(null, 99);
          math.getRandomInt(99, null);
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          math.getRandomInt(false, 99);
          math.getRandomInt(99, false);
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          math.getRandomInt('aid.js', 99);
          math.getRandomInt(99, 'aid.js');
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          math.getRandomInt({}, 99);
          math.getRandomInt(99, {});
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          math.getRandomInt([], 99);
          math.getRandomInt(99, []);
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          math.getRandomInt(new RegExp('^aid'), 99);
          math.getRandomInt(99, new RegExp('^aid'));
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          math.getRandomInt(/^aid/, 99);
          math.getRandomInt(99, /^aid/);
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          math.getRandomInt(-99, 99.999);
          math.getRandomInt(-99.999, 99);
        }).toThrowError(TypeError, ERROR_MSG);
      });

      it('return random Int number.', function() {
        var val = math.getRandomInt(-99, 99);

        expect(aid.isInteger(val)).toBeTruthy();
        expect(val >= -99 && val <= 99).toBeTruthy();
      });
    });

    describe('.remap()', function() {
      it('if func parameter type is not function, throw Error', function() {
        var ERROR_MSG = '[aid.math.remap] Type of parameters must be Number.';

        expect(function() {
          math.remap(undefined, 0, 1, 0, 100);
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          math.remap(0.5, null, 1, 0, 100);
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          math.remap(0.5, false, 1, 0, 100);
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          math.remap(0.5, true, 1, 0, 100);
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          math.remap(0.5, 0, 1, 0, 100);
        }).not.toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          math.remap(0.5, 0, 1, 'aid.js', 100);
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          math.remap(0.5, 0, 1, 0, []);
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          math.remap(0.5, 0, 1, 0, NaN);
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          math.remap(0.5, 0, 1, 0, function() {});
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          math.remap(0.5, 0, 1, 0, /aid.js/);
        }).toThrowError(TypeError, ERROR_MSG);
      });

      it('return remaped value', function() {
        expect(math.remap(0, -1, 1, 0, 100)).toEqual(50);
        expect(math.remap(0.5, 0, 1, 0, 100)).toEqual(50);
        expect(math.remap(0, -100, 100, 0, 10)).toEqual(5);
        expect(math.remap(50, 0, 100, 0, 10)).toEqual(5);
      });
    });

    describe('.gt()', function() {
      it('return function if input only one parameter.', function() {
        expect(function() {
          aid.isFunction(math.gt(undefined));
        }).toBeTruthy();

        expect(function() {
          aid.isFunction(math.gt(null));
        }).toBeTruthy();

        expect(function() {
          aid.isFunction(math.gt(false));
        }).toBeTruthy();

        expect(function() {
          aid.isFunction(math.gt(true));
        }).toBeTruthy();

        expect(function() {
          aid.isFunction(math.gt(0));
        }).toBeTruthy();

        expect(function() {
          aid.isFunction(math.gt(''));
        }).toBeTruthy();

        expect(function() {
          aid.isFunction(math.gt([]));
        }).toBeTruthy();

        expect(function() {
          aid.isFunction(math.gt(NaN));
        }).toBeTruthy();

        expect(function() {
          aid.isFunction(math.gt(function() {}));
        }).toBeTruthy();
      });

      it('if arguments are not Number type, throw Error.', function() {
        expect(function() {
          aid.isFunction(math.gt(undefined)(99));
        }).toThrowError();

        expect(function() {
          aid.isFunction(math.gt(null)(99));
        }).toThrowError();

        expect(function() {
          aid.isFunction(math.gt(false)(99));
        }).toThrowError();

        expect(function() {
          aid.isFunction(math.gt(true)(99));
        }).toThrowError();

        expect(function() {
          aid.isFunction(math.gt(0)(99));
        }).not.toThrowError();

        expect(function() {
          aid.isFunction(math.gt('')(99));
        }).toThrowError();

        expect(function() {
          aid.isFunction(math.gt([])(99));
        }).toThrowError();

        expect(function() {
          aid.isFunction(math.gt(NaN)(99));
        }).toThrowError();

        expect(function() {
          aid.isFunction(math.gt(function() {})(99));
        }).toThrowError();

        expect(function() {
          aid.isFunction(math.gt(99)(undefined));
        }).toThrowError();

        expect(function() {
          aid.isFunction(math.gt(99)(null));
        }).toThrowError();

        expect(function() {
          aid.isFunction(math.gt(99)(false));
        }).toThrowError();

        expect(function() {
          aid.isFunction(math.gt(99)(true));
        }).toThrowError();

        expect(function() {
          aid.isFunction(math.gt(99)(0));
        }).not.toThrowError();

        expect(function() {
          aid.isFunction(math.gt(99)(''));
        }).toThrowError();

        expect(function() {
          aid.isFunction(math.gt(99)([]));
        }).toThrowError();

        expect(function() {
          aid.isFunction(math.gt(99)(NaN));
        }).toThrowError();

        expect(function() {
          aid.isFunction(math.gt(99)(function() {}));
        }).toThrowError();
      });

      it('if lhs argument is greater than rhs argument, return true.', function() {
        expect(math.gt(-1)(-1)).toEqual(false);
        expect(math.gt(-1)(-9)).toEqual(false);
        expect(math.gt(0)(0)).toEqual(false);
        expect(math.gt(1)(1)).toEqual(false);
        expect(math.gt(9)(1)).toEqual(false);
        expect(math.gt(-9)(-1)).toEqual(true);
        expect(math.gt(1)(9)).toEqual(true);
      });
    });

    describe('.lt()', function() {
      it('return function if input only one parameter.', function() {
        expect(function() {
          aid.isFunction(math.lt(undefined));
        }).toBeTruthy();

        expect(function() {
          aid.isFunction(math.lt(null));
        }).toBeTruthy();

        expect(function() {
          aid.isFunction(math.lt(false));
        }).toBeTruthy();

        expect(function() {
          aid.isFunction(math.lt(true));
        }).toBeTruthy();

        expect(function() {
          aid.isFunction(math.lt(0));
        }).toBeTruthy();

        expect(function() {
          aid.isFunction(math.lt(''));
        }).toBeTruthy();

        expect(function() {
          aid.isFunction(math.lt([]));
        }).toBeTruthy();

        expect(function() {
          aid.isFunction(math.lt(NaN));
        }).toBeTruthy();

        expect(function() {
          aid.isFunction(math.lt(function() {}));
        }).toBeTruthy();
      });

      it('if arguments are not Number type, throw Error.', function() {
        expect(function() {
          aid.isFunction(math.lt(undefined)(99));
        }).toThrowError();

        expect(function() {
          aid.isFunction(math.lt(null)(99));
        }).toThrowError();

        expect(function() {
          aid.isFunction(math.lt(false)(99));
        }).toThrowError();

        expect(function() {
          aid.isFunction(math.lt(true)(99));
        }).toThrowError();

        expect(function() {
          aid.isFunction(math.lt(0)(99));
        }).not.toThrowError();

        expect(function() {
          aid.isFunction(math.lt('')(99));
        }).toThrowError();

        expect(function() {
          aid.isFunction(math.lt([])(99));
        }).toThrowError();

        expect(function() {
          aid.isFunction(math.lt(NaN)(99));
        }).toThrowError();

        expect(function() {
          aid.isFunction(math.lt(function() {})(99));
        }).toThrowError();

        expect(function() {
          aid.isFunction(math.lt(99)(undefined));
        }).toThrowError();

        expect(function() {
          aid.isFunction(math.lt(99)(null));
        }).toThrowError();

        expect(function() {
          aid.isFunction(math.lt(99)(false));
        }).toThrowError();

        expect(function() {
          aid.isFunction(math.lt(99)(true));
        }).toThrowError();

        expect(function() {
          aid.isFunction(math.lt(99)(0));
        }).not.toThrowError();

        expect(function() {
          aid.isFunction(math.lt(99)(''));
        }).toThrowError();

        expect(function() {
          aid.isFunction(math.lt(99)([]));
        }).toThrowError();

        expect(function() {
          aid.isFunction(math.lt(99)(NaN));
        }).toThrowError();

        expect(function() {
          aid.isFunction(math.lt(99)(function() {}));
        }).toThrowError();
      });

      it('if lhs argument is less than rhs argument, return true.', function() {
        expect(math.lt(-1)(-1)).toEqual(false);
        expect(math.lt(-1)(-9)).toEqual(true);
        expect(math.lt(0)(0)).toEqual(false);
        expect(math.lt(1)(1)).toEqual(false);
        expect(math.lt(9)(1)).toEqual(true);
        expect(math.lt(-9)(-1)).toEqual(false);
        expect(math.lt(1)(9)).toEqual(false);
      });
    });

    describe('.gte()', function() {
      it('return function if input only one parameter.', function() {
        expect(function() {
          aid.isFunction(math.gte(undefined));
        }).toBeTruthy();

        expect(function() {
          aid.isFunction(math.gte(null));
        }).toBeTruthy();

        expect(function() {
          aid.isFunction(math.gte(false));
        }).toBeTruthy();

        expect(function() {
          aid.isFunction(math.gte(true));
        }).toBeTruthy();

        expect(function() {
          aid.isFunction(math.gte(0));
        }).toBeTruthy();

        expect(function() {
          aid.isFunction(math.gte(''));
        }).toBeTruthy();

        expect(function() {
          aid.isFunction(math.gte([]));
        }).toBeTruthy();

        expect(function() {
          aid.isFunction(math.gte(NaN));
        }).toBeTruthy();

        expect(function() {
          aid.isFunction(math.gte(function() {}));
        }).toBeTruthy();
      });

      it('if arguments are not Number type, throw Error.', function() {
        expect(function() {
          aid.isFunction(math.gte(undefined)(99));
        }).toThrowError();

        expect(function() {
          aid.isFunction(math.gte(null)(99));
        }).toThrowError();

        expect(function() {
          aid.isFunction(math.gte(false)(99));
        }).toThrowError();

        expect(function() {
          aid.isFunction(math.gte(true)(99));
        }).toThrowError();

        expect(function() {
          aid.isFunction(math.gte(0)(99));
        }).not.toThrowError();

        expect(function() {
          aid.isFunction(math.gte('')(99));
        }).toThrowError();

        expect(function() {
          aid.isFunction(math.gte([])(99));
        }).toThrowError();

        expect(function() {
          aid.isFunction(math.gte(NaN)(99));
        }).toThrowError();

        expect(function() {
          aid.isFunction(math.gte(function() {})(99));
        }).toThrowError();

        expect(function() {
          aid.isFunction(math.gte(99)(undefined));
        }).toThrowError();

        expect(function() {
          aid.isFunction(math.gte(99)(null));
        }).toThrowError();

        expect(function() {
          aid.isFunction(math.gte(99)(false));
        }).toThrowError();

        expect(function() {
          aid.isFunction(math.gte(99)(true));
        }).toThrowError();

        expect(function() {
          aid.isFunction(math.gte(99)(0));
        }).not.toThrowError();

        expect(function() {
          aid.isFunction(math.gte(99)(''));
        }).toThrowError();

        expect(function() {
          aid.isFunction(math.gte(99)([]));
        }).toThrowError();

        expect(function() {
          aid.isFunction(math.gte(99)(NaN));
        }).toThrowError();

        expect(function() {
          aid.isFunction(math.gte(99)(function() {}));
        }).toThrowError();
      });

      it('if lhs argument is greater than equal rhs argument, return true.', function() {
        expect(math.gte(-1)(-1)).toEqual(true);
        expect(math.gte(-1)(-9)).toEqual(false);
        expect(math.gte(0)(0)).toEqual(true);
        expect(math.gte(1)(1)).toEqual(true);
        expect(math.gte(9)(1)).toEqual(false);
        expect(math.gte(-9)(-1)).toEqual(true);
        expect(math.gte(1)(9)).toEqual(true);
      });
    });

    describe('.lte()', function() {
      it('return function if input only one parameter.', function() {
        expect(function() {
          aid.isFunction(math.lte(undefined));
        }).toBeTruthy();

        expect(function() {
          aid.isFunction(math.lte(null));
        }).toBeTruthy();

        expect(function() {
          aid.isFunction(math.lte(false));
        }).toBeTruthy();

        expect(function() {
          aid.isFunction(math.lte(true));
        }).toBeTruthy();

        expect(function() {
          aid.isFunction(math.lte(0));
        }).toBeTruthy();

        expect(function() {
          aid.isFunction(math.lte(''));
        }).toBeTruthy();

        expect(function() {
          aid.isFunction(math.lte([]));
        }).toBeTruthy();

        expect(function() {
          aid.isFunction(math.lte(NaN));
        }).toBeTruthy();

        expect(function() {
          aid.isFunction(math.lte(function() {}));
        }).toBeTruthy();
      });

      it('if arguments are not Number type, throw Error.', function() {
        expect(function() {
          aid.isFunction(math.lte(undefined)(99));
        }).toThrowError();

        expect(function() {
          aid.isFunction(math.lte(null)(99));
        }).toThrowError();

        expect(function() {
          aid.isFunction(math.lte(false)(99));
        }).toThrowError();

        expect(function() {
          aid.isFunction(math.lte(true)(99));
        }).toThrowError();

        expect(function() {
          aid.isFunction(math.lte(0)(99));
        }).not.toThrowError();

        expect(function() {
          aid.isFunction(math.lte('')(99));
        }).toThrowError();

        expect(function() {
          aid.isFunction(math.lte([])(99));
        }).toThrowError();

        expect(function() {
          aid.isFunction(math.lte(NaN)(99));
        }).toThrowError();

        expect(function() {
          aid.isFunction(math.lte(function() {})(99));
        }).toThrowError();

        expect(function() {
          aid.isFunction(math.lte(99)(undefined));
        }).toThrowError();

        expect(function() {
          aid.isFunction(math.lte(99)(null));
        }).toThrowError();

        expect(function() {
          aid.isFunction(math.lte(99)(false));
        }).toThrowError();

        expect(function() {
          aid.isFunction(math.lte(99)(true));
        }).toThrowError();

        expect(function() {
          aid.isFunction(math.lte(99)(0));
        }).not.toThrowError();

        expect(function() {
          aid.isFunction(math.lte(99)(''));
        }).toThrowError();

        expect(function() {
          aid.isFunction(math.lte(99)([]));
        }).toThrowError();

        expect(function() {
          aid.isFunction(math.lte(99)(NaN));
        }).toThrowError();

        expect(function() {
          aid.isFunction(math.lte(99)(function() {}));
        }).toThrowError();
      });

      it('if lhs argument is less than equal rhs argument, return true.', function() {
        expect(math.lte(-1)(-1)).toEqual(true);
        expect(math.lte(-1)(-9)).toEqual(true);
        expect(math.lte(0)(0)).toEqual(true);
        expect(math.lte(1)(1)).toEqual(true);
        expect(math.lte(9)(1)).toEqual(true);
        expect(math.lte(-9)(-1)).toEqual(false);
        expect(math.lte(1)(9)).toEqual(false);
      });
    });
  });
});
