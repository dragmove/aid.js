'use strict';

describe('aid.js', function () {
  describe('aid.math', function () {
    var math = aid.math;

    describe('.getSizeAspectFill()', function () {
      it('input arguments are not Number type, throw TypeError.', function () {
        var ERROR_MSG = 'math.getSizeAspectFill() requires Number parameters.';

        expect(function () {
          math.getSizeAspectFill(undefined, 1, 1, 1);
          math.getSizeAspectFill(1, undefined, 1, 1);
          math.getSizeAspectFill(1, 1, undefined, 1);
          math.getSizeAspectFill(1, 1, 1, undefined);
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function () {
          math.getSizeAspectFill(null, 1, 1, 1);
          math.getSizeAspectFill(1, null, 1, 1);
          math.getSizeAspectFill(1, 1, null, 1);
          math.getSizeAspectFill(1, 1, 1, null);
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function () {
          math.getSizeAspectFill(false, 1, 1, 1);
          math.getSizeAspectFill(1, false, 1, 1);
          math.getSizeAspectFill(1, 1, false, 1);
          math.getSizeAspectFill(1, 1, 1, false);
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function () {
          math.getSizeAspectFill(true, 1, 1, 1);
          math.getSizeAspectFill(1, true, 1, 1);
          math.getSizeAspectFill(1, 1, true, 1);
          math.getSizeAspectFill(1, 1, 1, true);
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function () {
          math.getSizeAspectFill('', 1, 1, 1);
          math.getSizeAspectFill(1, '', 1, 1);
          math.getSizeAspectFill(1, 1, '', 1);
          math.getSizeAspectFill(1, 1, 1, '');
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function () {
          math.getSizeAspectFill({}, 1, 1, 1);
          math.getSizeAspectFill(1, {}, 1, 1);
          math.getSizeAspectFill(1, 1, {}, 1);
          math.getSizeAspectFill(1, 1, 1, {});
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function () {
          math.getSizeAspectFill([], 1, 1, 1);
          math.getSizeAspectFill(1, [], 1, 1);
          math.getSizeAspectFill(1, 1, [], 1);
          math.getSizeAspectFill(1, 1, 1, []);
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function () {
          math.getSizeAspectFill(function () {}, 1, 1, 1);
          math.getSizeAspectFill(1, function () {}, 1, 1);
          math.getSizeAspectFill(1, 1, function () {}, 1);
          math.getSizeAspectFill(1, 1, 1, function () {});
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function () {
          math.getSizeAspectFill(new RegExp('^aid'), 1, 1, 1);
          math.getSizeAspectFill(1, new RegExp('^aid'), 1, 1);
          math.getSizeAspectFill(1, 1, new RegExp('^aid'), 1);
          math.getSizeAspectFill(1, 1, 1, new RegExp('^aid'));
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function () {
          math.getSizeAspectFill(/^aid/, 1, 1, 1);
          math.getSizeAspectFill(1, /^aid/, 1, 1);
          math.getSizeAspectFill(1, 1, /^aid/, 1);
          math.getSizeAspectFill(1, 1, 1, /^aid/);
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function () {
          math.getSizeAspectFill(1, 1, 1, 1);
          math.getSizeAspectFill(1, 1, 1, 1);
          math.getSizeAspectFill(1, 1, 1, 1);
          math.getSizeAspectFill(1, 1, 1, 1);
        }).not.toThrowError(TypeError, ERROR_MSG);
      });

      it('return object has width, height variables', function () {
        var size = math.getSizeAspectFill(1, 1, 1, 1);

        expect(aid.isObject(size)).toBeTruthy();
        expect(aid.isNumber(size.width)).toBeTruthy();
        expect(aid.isNumber(size.height)).toBeTruthy();
      });
    });

    describe('.getSizeAspectFit()', function () {
      it('input arguments are not Number type, throw TypeError.', function () {
        var ERROR_MSG = 'math.getSizeAspectFit() requires Number parameters.';

        expect(function () {
          math.getSizeAspectFit(undefined, 1, 1, 1);
          math.getSizeAspectFit(1, undefined, 1, 1);
          math.getSizeAspectFit(1, 1, undefined, 1);
          math.getSizeAspectFit(1, 1, 1, undefined);
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function () {
          math.getSizeAspectFit(null, 1, 1, 1);
          math.getSizeAspectFit(1, null, 1, 1);
          math.getSizeAspectFit(1, 1, null, 1);
          math.getSizeAspectFit(1, 1, 1, null);
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function () {
          math.getSizeAspectFit(false, 1, 1, 1);
          math.getSizeAspectFit(1, false, 1, 1);
          math.getSizeAspectFit(1, 1, false, 1);
          math.getSizeAspectFit(1, 1, 1, false);
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function () {
          math.getSizeAspectFit(true, 1, 1, 1);
          math.getSizeAspectFit(1, true, 1, 1);
          math.getSizeAspectFit(1, 1, true, 1);
          math.getSizeAspectFit(1, 1, 1, true);
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function () {
          math.getSizeAspectFit('', 1, 1, 1);
          math.getSizeAspectFit(1, '', 1, 1);
          math.getSizeAspectFit(1, 1, '', 1);
          math.getSizeAspectFit(1, 1, 1, '');
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function () {
          math.getSizeAspectFit({}, 1, 1, 1);
          math.getSizeAspectFit(1, {}, 1, 1);
          math.getSizeAspectFit(1, 1, {}, 1);
          math.getSizeAspectFit(1, 1, 1, {});
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function () {
          math.getSizeAspectFit([], 1, 1, 1);
          math.getSizeAspectFit(1, [], 1, 1);
          math.getSizeAspectFit(1, 1, [], 1);
          math.getSizeAspectFit(1, 1, 1, []);
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function () {
          math.getSizeAspectFit(function () {}, 1, 1, 1);
          math.getSizeAspectFit(1, function () {}, 1, 1);
          math.getSizeAspectFit(1, 1, function () {}, 1);
          math.getSizeAspectFit(1, 1, 1, function () {});
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function () {
          math.getSizeAspectFit(new RegExp('^aid'), 1, 1, 1);
          math.getSizeAspectFit(1, new RegExp('^aid'), 1, 1);
          math.getSizeAspectFit(1, 1, new RegExp('^aid'), 1);
          math.getSizeAspectFit(1, 1, 1, new RegExp('^aid'));
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function () {
          math.getSizeAspectFit(/^aid/, 1, 1, 1);
          math.getSizeAspectFit(1, /^aid/, 1, 1);
          math.getSizeAspectFit(1, 1, /^aid/, 1);
          math.getSizeAspectFit(1, 1, 1, /^aid/);
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function () {
          math.getSizeAspectFit(1, 1, 1, 1);
          math.getSizeAspectFit(1, 1, 1, 1);
          math.getSizeAspectFit(1, 1, 1, 1);
          math.getSizeAspectFit(1, 1, 1, 1);
        }).not.toThrowError(TypeError, ERROR_MSG);
      });

      it('return object has width, height variables', function () {
        var size = math.getSizeAspectFit(1, 1, 1, 1);

        expect(aid.isObject(size)).toBeTruthy();
        expect(aid.isNumber(size.width)).toBeTruthy();
        expect(aid.isNumber(size.height)).toBeTruthy();
      });
    });

    describe('.getSizeWidthFit()', function () {
      it('input arguments are not Number type, throw TypeError.', function () {
        var ERROR_MSG = 'math.getSizeWidthFit() requires Number parameters.';

        expect(function () {
          math.getSizeWidthFit(undefined, 1, 1, 1);
          math.getSizeWidthFit(1, undefined, 1, 1);
          math.getSizeWidthFit(1, 1, undefined, 1);
          math.getSizeWidthFit(1, 1, 1, undefined);
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function () {
          math.getSizeWidthFit(null, 1, 1, 1);
          math.getSizeWidthFit(1, null, 1, 1);
          math.getSizeWidthFit(1, 1, null, 1);
          math.getSizeWidthFit(1, 1, 1, null);
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function () {
          math.getSizeWidthFit(false, 1, 1, 1);
          math.getSizeWidthFit(1, false, 1, 1);
          math.getSizeWidthFit(1, 1, false, 1);
          math.getSizeWidthFit(1, 1, 1, false);
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function () {
          math.getSizeWidthFit(true, 1, 1, 1);
          math.getSizeWidthFit(1, true, 1, 1);
          math.getSizeWidthFit(1, 1, true, 1);
          math.getSizeWidthFit(1, 1, 1, true);
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function () {
          math.getSizeWidthFit('', 1, 1, 1);
          math.getSizeWidthFit(1, '', 1, 1);
          math.getSizeWidthFit(1, 1, '', 1);
          math.getSizeWidthFit(1, 1, 1, '');
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function () {
          math.getSizeWidthFit({}, 1, 1, 1);
          math.getSizeWidthFit(1, {}, 1, 1);
          math.getSizeWidthFit(1, 1, {}, 1);
          math.getSizeWidthFit(1, 1, 1, {});
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function () {
          math.getSizeWidthFit([], 1, 1, 1);
          math.getSizeWidthFit(1, [], 1, 1);
          math.getSizeWidthFit(1, 1, [], 1);
          math.getSizeWidthFit(1, 1, 1, []);
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function () {
          math.getSizeWidthFit(function () {}, 1, 1, 1);
          math.getSizeWidthFit(1, function () {}, 1, 1);
          math.getSizeWidthFit(1, 1, function () {}, 1);
          math.getSizeWidthFit(1, 1, 1, function () {});
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function () {
          math.getSizeWidthFit(new RegExp('^aid'), 1, 1, 1);
          math.getSizeWidthFit(1, new RegExp('^aid'), 1, 1);
          math.getSizeWidthFit(1, 1, new RegExp('^aid'), 1);
          math.getSizeWidthFit(1, 1, 1, new RegExp('^aid'));
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function () {
          math.getSizeWidthFit(/^aid/, 1, 1, 1);
          math.getSizeWidthFit(1, /^aid/, 1, 1);
          math.getSizeWidthFit(1, 1, /^aid/, 1);
          math.getSizeWidthFit(1, 1, 1, /^aid/);
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function () {
          math.getSizeWidthFit(1, 1, 1, 1);
          math.getSizeWidthFit(1, 1, 1, 1);
          math.getSizeWidthFit(1, 1, 1, 1);
          math.getSizeWidthFit(1, 1, 1, 1);
        }).not.toThrowError(TypeError, ERROR_MSG);
      });

      it('return object has width, height variables', function () {
        var size = math.getSizeWidthFit(1, 1, 1, 1);

        expect(aid.isObject(size)).toBeTruthy();
        expect(aid.isNumber(size.width)).toBeTruthy();
        expect(aid.isNumber(size.height)).toBeTruthy();
      });
    });

    describe('.isEpsilonEqual()', function () {
      it('arguments are not Number type, throw TypeError.', function () {
        expect(function () {
          math.isEpsilonEqual(1, undefined);
          math.isEpsilonEqual(undefined, 1);
        }).toThrowError(TypeError);

        expect(function () {
          math.isEpsilonEqual(1, null);
          math.isEpsilonEqual(null, 1);
        }).toThrowError(TypeError);

        expect(function () {
          math.isEpsilonEqual(1, false);
          math.isEpsilonEqual(false, 1);
        }).toThrowError(TypeError);

        expect(function () {
          math.isEpsilonEqual(1, true);
          math.isEpsilonEqual(true, 1);
        }).toThrowError(TypeError);

        expect(function () {
          math.isEpsilonEqual(1, '');
          math.isEpsilonEqual('', 1);
        }).toThrowError(TypeError);

        expect(function () {
          math.isEpsilonEqual(1, {});
          math.isEpsilonEqual({}, 1);
        }).toThrowError(TypeError);

        expect(function () {
          math.isEpsilonEqual(1, []);
          math.isEpsilonEqual([], 1);
        }).toThrowError(TypeError);

        expect(function () {
          math.isEpsilonEqual(1, function () {});
          math.isEpsilonEqual(function () {}, 1);
        }).toThrowError(TypeError);

        expect(function () {
          math.isEpsilonEqual(1, new RegExp('^aid'));
          math.isEpsilonEqual(new RegExp('^aid'), 1);
        }).toThrowError(TypeError);

        expect(function () {
          math.isEpsilonEqual(1, /^aid/);
          math.isEpsilonEqual(/^aid/, 1);
        }).toThrowError(TypeError);
      });

      it('return true, when Number.EPSILON > Math.abs(number_a - number_b)', function () {
        expect(math.isEpsilonEqual(0.1 + 0.2, 0.3)).toBe(true);
      });
    });

    describe('.isIndexInLoop()', function () {
      it('throw Error, input 1 or 2 or 3 parameters.', function () {
        expect(function () {
          math.isIndexInLoop(8);
        }).toThrowError(Error);

        expect(function () {
          math.isIndexInLoop(8, 5);
        }).toThrowError(Error);

        expect(function () {
          math.isIndexInLoop(8, 5, 6);
        }).toThrowError(Error);
      });

      it('throw TypeError, input arguments are not Number type.', function () {
        expect(function () {
          math.isIndexInLoop(8, 5, 6, undefined);
        }).toThrowError(TypeError);

        expect(function () {
          math.isIndexInLoop(8, 5, 6, null);
        }).toThrowError(TypeError);

        expect(function () {
          math.isIndexInLoop(8, 5, 6, false);
        }).toThrowError(TypeError);

        expect(function () {
          math.isIndexInLoop(8, 5, 6, true);
        }).toThrowError(TypeError);

        expect(function () {
          math.isIndexInLoop(8, 5, 6, '');
        }).toThrowError(TypeError);

        expect(function () {
          math.isIndexInLoop(8, 5, 6, {});
        }).toThrowError(TypeError);

        expect(function () {
          math.isIndexInLoop(8, 5, 6, []);
        }).toThrowError(TypeError);

        expect(function () {
          math.isIndexInLoop(8, 5, 6, function () {});
        }).toThrowError(TypeError);

        expect(function () {
          math.isIndexInLoop(8, 5, 6, new RegExp('^aid'))
        }).toThrowError(TypeError);

        expect(function () {
          math.isIndexInLoop(8, 5, 6, /^aid/);
        }).toThrowError(TypeError);
      });

      it('return false, when searchIndex is not in (6, 7, 8, 1, 2) in 1 ~ 8.', function () {
        expect(math.isIndexInLoop(8, 5, 6, 3)).toEqual(false);
        expect(math.isIndexInLoop(8, 5, 6, 4)).toEqual(false);
        expect(math.isIndexInLoop(8, 5, 6, 5)).toEqual(false);
      });
      it('return true, when searchIndex is in (6, 7, 8, 1, 2) in 1 ~ 8.', function () {
        expect(math.isIndexInLoop(8, 5, 6, 6)).toEqual(true);
        expect(math.isIndexInLoop(8, 5, 6, 7)).toEqual(true);
        expect(math.isIndexInLoop(8, 5, 6, 8)).toEqual(true);
        expect(math.isIndexInLoop(8, 5, 6, 1)).toEqual(true);
        expect(math.isIndexInLoop(8, 5, 6, 2)).toEqual(true);
      });

      it('return false, when searchIndex is not in (4, 1) in 1 ~ 4.', function () {
        expect(math.isIndexInLoop(4, 2, 4, 2)).toEqual(false);
        expect(math.isIndexInLoop(4, 2, 4, 3)).toEqual(false);
      });

      it('return true, when searchIndex is in (4, 1) in 1 ~ 4.', function () {
        expect(math.isIndexInLoop(4, 2, 4, 4)).toEqual(true);
        expect(math.isIndexInLoop(4, 2, 4, 1)).toEqual(true);
      });

      it('return true, when searchIndex is in (3, 4, 1, 2) in 1 ~ 4.', function () {
        expect(math.isIndexInLoop(4, 4, 3, 3)).toEqual(true);
        expect(math.isIndexInLoop(4, 4, 3, 4)).toEqual(true);
        expect(math.isIndexInLoop(4, 4, 3, 1)).toEqual(true);
        expect(math.isIndexInLoop(4, 4, 3, 2)).toEqual(true);
      });
    });

    describe('.getLoopedLastIndex()', function () {
      it('throw Error, input 1 or 2 parameters.', function () {
        expect(function () {
          math.getLoopedLastIndex(8);
        }).toThrowError(Error);

        expect(function () {
          math.getLoopedLastIndex(8, 1);
        }).toThrowError(Error);
      });

      it('throw TypeError, input arguments are not Number type.', function () {
        expect(function () {
          math.getLoopedLastIndex(8, 1, undefined);
        }).toThrowError(TypeError);

        expect(function () {
          math.getLoopedLastIndex(8, 1, null);
        }).toThrowError(TypeError);

        expect(function () {
          math.getLoopedLastIndex(8, 1, false);
        }).toThrowError(TypeError);

        expect(function () {
          math.getLoopedLastIndex(8, 1, true);
        }).toThrowError(TypeError);

        expect(function () {
          math.getLoopedLastIndex(8, 1, '');
        }).toThrowError(TypeError);

        expect(function () {
          math.getLoopedLastIndex(8, 1, {});
        }).toThrowError(TypeError);

        expect(function () {
          math.getLoopedLastIndex(8, 1, []);
        }).toThrowError(TypeError);

        expect(function () {
          math.getLoopedLastIndex(8, 1, function () {});
        }).toThrowError(TypeError);

        expect(function () {
          math.getLoopedLastIndex(8, 1, new RegExp('^aid'));
        }).toThrowError(TypeError);

        expect(function () {
          math.getLoopedLastIndex(8, 1, /^aid/);
        }).toThrowError(TypeError);
      });

      it('return 7, when firstIndex is 7, loopGap is 1 in 1 ~ 8.', function () {
        expect(math.getLoopedLastIndex(8, 1, 7)).toEqual(7);
      });
      it('return 8, when firstIndex is 7, loopGap is 2 in 1 ~ 8.', function () {
        expect(math.getLoopedLastIndex(8, 2, 7)).toEqual(8);
      });
      it('return 1, when firstIndex is 7, loopGap is 3 in 1 ~ 8.', function () {
        expect(math.getLoopedLastIndex(8, 3, 7)).toEqual(1);
      });
      it('return 2, when firstIndex is 7, loopGap is 4 in 1 ~ 8.', function () {
        expect(math.getLoopedLastIndex(8, 4, 7)).toEqual(2);
      });
      it('return 3, when firstIndex is 7, loopGap is 5 in 1 ~ 8.', function () {
        expect(math.getLoopedLastIndex(8, 5, 7)).toEqual(3);
      });
      it('return 4, when firstIndex is 7, loopGap is 6 in 1 ~ 8.', function () {
        expect(math.getLoopedLastIndex(8, 6, 7)).toEqual(4);
      });
      it('return 5, when firstIndex is 7, loopGap is 7 in 1 ~ 8.', function () {
        expect(math.getLoopedLastIndex(8, 7, 7)).toEqual(5);
      });
      it('return 6, when firstIndex is 7, loopGap is 8 in 1 ~ 8.', function () {
        expect(math.getLoopedLastIndex(8, 8, 7)).toEqual(6);
      });
    });

    describe('.getReverseLoopedFirstIndex()', function () {
      it('throw Error, input 1 or 2 parameters.', function () {
        expect(function () {
          math.getReverseLoopedFirstIndex(8);
        }).toThrowError(Error);

        expect(function () {
          math.getReverseLoopedFirstIndex(8, 1);
        }).toThrowError(Error);
      });

      it('throw TypeError, input arguments are not Number type.', function () {
        expect(function () {
          math.getReverseLoopedFirstIndex(8, 1, undefined);
        }).toThrowError(TypeError);

        expect(function () {
          math.getReverseLoopedFirstIndex(8, 1, null);
        }).toThrowError(TypeError);

        expect(function () {
          math.getReverseLoopedFirstIndex(8, 1, false);
        }).toThrowError(TypeError);

        expect(function () {
          math.getReverseLoopedFirstIndex(8, 1, true);
        }).toThrowError(TypeError);

        expect(function () {
          math.getReverseLoopedFirstIndex(8, 1, '');
        }).toThrowError(TypeError);

        expect(function () {
          math.getReverseLoopedFirstIndex(8, 1, {});
        }).toThrowError(TypeError);

        expect(function () {
          math.getReverseLoopedFirstIndex(8, 1, []);
        }).toThrowError(TypeError);

        expect(function () {
          math.getReverseLoopedFirstIndex(8, 1, function () {});
        }).toThrowError(TypeError);

        expect(function () {
          math.getReverseLoopedFirstIndex(8, 1, new RegExp('^aid'));
        }).toThrowError(TypeError);

        expect(function () {
          math.getReverseLoopedFirstIndex(8, 1, /^aid/);
        }).toThrowError(TypeError);
      });

      it('return 2, when lastIndex is 2, loopGap is 1 in 1 ~ 8.', function () {
        expect(math.getReverseLoopedFirstIndex(8, 1, 2)).toEqual(2);
      });
      it('return 1, when lastIndex is 2, loopGap is 2 in 1 ~ 8.', function () {
        expect(math.getReverseLoopedFirstIndex(8, 2, 2)).toEqual(1);
      });
      it('return 8, when lastIndex is 2, loopGap is 3 in 1 ~ 8.', function () {
        expect(math.getReverseLoopedFirstIndex(8, 3, 2)).toEqual(8);
      });
      it('return 7, when lastIndex is 2, loopGap is 4 in 1 ~ 8.', function () {
        expect(math.getReverseLoopedFirstIndex(8, 4, 2)).toEqual(7);
      });
      it('return 6, when lastIndex is 2, loopGap is 5 in 1 ~ 8.', function () {
        expect(math.getReverseLoopedFirstIndex(8, 5, 2)).toEqual(6);
      });
      it('return 5, when lastIndex is 2, loopGap is 6 in 1 ~ 8.', function () {
        expect(math.getReverseLoopedFirstIndex(8, 6, 2)).toEqual(5);
      });
      it('return 4, when lastIndex is 2, loopGap is 7 in 1 ~ 8.', function () {
        expect(math.getReverseLoopedFirstIndex(8, 7, 2)).toEqual(4);
      });
      it('return 3, when lastIndex is 2, loopGap is 8 in 1 ~ 8.', function () {
        expect(math.getReverseLoopedFirstIndex(8, 8, 2)).toEqual(3);
      });
    });

    describe('.factorial()', function () {
      it('throw TypeError, input argument is not Integer Number type.', function () {
        expect(function () {
          math.factorial(undefined);
        }).toThrowError(TypeError);

        expect(function () {
          math.factorial(null);
        }).toThrowError(TypeError);

        expect(function () {
          math.factorial(false);
        }).toThrowError(TypeError);

        expect(function () {
          math.factorial(true);
        }).toThrowError(TypeError);

        expect(function () {
          math.factorial('');
        }).toThrowError(TypeError);

        expect(function () {
          math.factorial(0.5);
        }).toThrowError(TypeError);

        expect(function () {
          math.factorial({});
        }).toThrowError(TypeError);

        expect(function () {
          math.factorial([]);
        }).toThrowError(TypeError);

        expect(function () {
          math.factorial(function () {});
        }).toThrowError(TypeError);

        expect(function () {
          math.factorial(new RegExp('^aid'));
        }).toThrowError(TypeError);

        expect(function () {
          math.factorial(/^aid/);
        }).toThrowError(TypeError);
      });

      it('return 1, when factorial param is minus value', function () {
        expect(math.factorial(-99)).toEqual(1);
      });
      it('return 1, when factorial param is 0', function () {
        expect(math.factorial(0)).toEqual(1);
      });
      it('return 1, when factorial param is 1', function () {
        expect(math.factorial(1)).toEqual(1);
      });
      it('return 2, when factorial param is 2', function () {
        expect(math.factorial(2)).toEqual(2);
      });
      it('return 3, when factorial param is 3', function () {
        expect(math.factorial(3)).toEqual(6);
      });
      it('return 120, when factorial param is 5', function () {
        expect(math.factorial(5)).toEqual(120);
      });
    });

    describe('.getObjForPagination()', function () {
      it('throw Error, input 1 or 2 or 3 parameters.', function () {
        expect(function () {
          math.getObjForPagination(10);
        }).toThrowError(Error);

        expect(function () {
          math.getObjForPagination(10, 10);
        }).toThrowError(Error);

        expect(function () {
          math.getObjForPagination(10, 10, 10);
        }).toThrowError(Error);
      });

      it('throw TypeError, input arguments are not Int Number type.', function () {
        expect(function () {
          math.getObjForPagination(undefined, 10, 10, 1);
        }).toThrowError(TypeError);

        expect(function () {
          math.getObjForPagination(10, null, 10, 1);
        }).toThrowError(TypeError);

        expect(function () {
          math.getObjForPagination(10, 10, true, 1);
        }).toThrowError(TypeError);

        expect(function () {
          math.getObjForPagination(10, 10, '10', 1);
        }).toThrowError(TypeError);
      });

      it('throw TypeError, input arguments are not positive Int Number type.', function () {
        expect(function () {
          math.getObjForPagination(-1, 10, 10, 1);
        }).toThrowError(TypeError);

        expect(function () {
          math.getObjForPagination(10, 0, 10, 1);
        }).toThrowError(TypeError);

        expect(function () {
          math.getObjForPagination(10, 10, 0, 1);
        }).toThrowError(TypeError);

        expect(function () {
          math.getObjForPagination(10, 10, 10, -1);
        }).toThrowError(TypeError);
      });

      it('return obj has pagination infos, when input arguments.', function () {
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

    describe('.degreeToRadian()', function () {
      it('if func parameter type is not number, throw Error.', function () {
        expect(function () {
          math.degreeToRadian(undefined);
        }).toThrowError();

        expect(function () {
          math.degreeToRadian(null);
        }).toThrowError();

        expect(function () {
          math.degreeToRadian(false);
        }).toThrowError();

        expect(function () {
          math.degreeToRadian(true);
        }).toThrowError();

        expect(function () {
          math.degreeToRadian(0);
        }).not.toThrowError();

        expect(function () {
          math.degreeToRadian('');
        }).toThrowError();

        expect(function () {
          math.degreeToRadian([]);
        }).toThrowError();

        expect(function () {
          math.degreeToRadian(NaN);
        }).toThrowError();

        expect(function () {
          math.degreeToRadian(function () {});
        }).toThrowError();
      });

      it('return number when input number', function () {
        var radian = math.degreeToRadian(90);
        expect(aid.isNumber(radian)).toBe(true);
      });
    });

    describe('.radianToDegree()', function () {
      it('if func parameter type is not number, throw Error.', function () {
        expect(function () {
          math.radianToDegree(undefined);
        }).toThrowError();

        expect(function () {
          math.radianToDegree(null);
        }).toThrowError();

        expect(function () {
          math.radianToDegree(false);
        }).toThrowError();

        expect(function () {
          math.radianToDegree(true);
        }).toThrowError();

        expect(function () {
          math.radianToDegree(0);
        }).not.toThrowError();

        expect(function () {
          math.radianToDegree('');
        }).toThrowError();

        expect(function () {
          math.radianToDegree([]);
        }).toThrowError();

        expect(function () {
          math.radianToDegree(NaN);
        }).toThrowError();

        expect(function () {
          math.radianToDegree(function () {});
        }).toThrowError();
      });

      it('return number when input number', function () {
        var degree = math.radianToDegree(90);
        expect(aid.isNumber(degree)).toBe(true);
      });
    });

    describe('.getDistanceBetweenTwoPoints()', function () {
      it('input arguments are not Number type, throw TypeError.', function () {
        var ERROR_MSG = 'math.getDistanceBetweenTwoPoints() requires Number parameters.';

        expect(function () {
          math.getDistanceBetweenTwoPoints(undefined, 1, 1, 1);
          math.getDistanceBetweenTwoPoints(1, undefined, 1, 1);
          math.getDistanceBetweenTwoPoints(1, 1, undefined, 1);
          math.getDistanceBetweenTwoPoints(1, 1, 1, undefined);
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function () {
          math.getDistanceBetweenTwoPoints(null, 1, 1, 1);
          math.getDistanceBetweenTwoPoints(1, null, 1, 1);
          math.getDistanceBetweenTwoPoints(1, 1, null, 1);
          math.getDistanceBetweenTwoPoints(1, 1, 1, null);
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function () {
          math.getDistanceBetweenTwoPoints(false, 1, 1, 1);
          math.getDistanceBetweenTwoPoints(1, false, 1, 1);
          math.getDistanceBetweenTwoPoints(1, 1, false, 1);
          math.getDistanceBetweenTwoPoints(1, 1, 1, false);
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function () {
          math.getDistanceBetweenTwoPoints(true, 1, 1, 1);
          math.getDistanceBetweenTwoPoints(1, true, 1, 1);
          math.getDistanceBetweenTwoPoints(1, 1, true, 1);
          math.getDistanceBetweenTwoPoints(1, 1, 1, true);
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function () {
          math.getDistanceBetweenTwoPoints('', 1, 1, 1);
          math.getDistanceBetweenTwoPoints(1, '', 1, 1);
          math.getDistanceBetweenTwoPoints(1, 1, '', 1);
          math.getDistanceBetweenTwoPoints(1, 1, 1, '');
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function () {
          math.getDistanceBetweenTwoPoints({}, 1, 1, 1);
          math.getDistanceBetweenTwoPoints(1, {}, 1, 1);
          math.getDistanceBetweenTwoPoints(1, 1, {}, 1);
          math.getDistanceBetweenTwoPoints(1, 1, 1, {});
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function () {
          math.getDistanceBetweenTwoPoints([], 1, 1, 1);
          math.getDistanceBetweenTwoPoints(1, [], 1, 1);
          math.getDistanceBetweenTwoPoints(1, 1, [], 1);
          math.getDistanceBetweenTwoPoints(1, 1, 1, []);
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function () {
          math.getDistanceBetweenTwoPoints(function () {}, 1, 1, 1);
          math.getDistanceBetweenTwoPoints(1, function () {}, 1, 1);
          math.getDistanceBetweenTwoPoints(1, 1, function () {}, 1);
          math.getDistanceBetweenTwoPoints(1, 1, 1, function () {});
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function () {
          math.getDistanceBetweenTwoPoints(new RegExp('^aid'), 1, 1, 1);
          math.getDistanceBetweenTwoPoints(1, new RegExp('^aid'), 1, 1);
          math.getDistanceBetweenTwoPoints(1, 1, new RegExp('^aid'), 1);
          math.getDistanceBetweenTwoPoints(1, 1, 1, new RegExp('^aid'));
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function () {
          math.getDistanceBetweenTwoPoints(/^aid/, 1, 1, 1);
          math.getDistanceBetweenTwoPoints(1, /^aid/, 1, 1);
          math.getDistanceBetweenTwoPoints(1, 1, /^aid/, 1);
          math.getDistanceBetweenTwoPoints(1, 1, 1, /^aid/);
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function () {
          math.getDistanceBetweenTwoPoints(1, 1, 1, 1);
          math.getDistanceBetweenTwoPoints(1, 1, 1, 1);
          math.getDistanceBetweenTwoPoints(1, 1, 1, 1);
          math.getDistanceBetweenTwoPoints(1, 1, 1, 1);
        }).not.toThrowError(TypeError, ERROR_MSG);
      });

      it('return number.', function () {
        var distance = math.getDistanceBetweenTwoPoints(0, 0, 100, 100);

        expect(aid.isNumber(distance)).toBeTruthy();
      });
    });

    describe('.gt()', function () {
      it('return function if input only one parameter.', function () {
        expect(function () {
          aid.isFunction(math.gt(undefined));
        }).toBeTruthy();

        expect(function () {
          aid.isFunction(math.gt(null));
        }).toBeTruthy();

        expect(function () {
          aid.isFunction(math.gt(false));
        }).toBeTruthy();

        expect(function () {
          aid.isFunction(math.gt(true));
        }).toBeTruthy();

        expect(function () {
          aid.isFunction(math.gt(0));
        }).toBeTruthy();

        expect(function () {
          aid.isFunction(math.gt(''));
        }).toBeTruthy();

        expect(function () {
          aid.isFunction(math.gt([]));
        }).toBeTruthy();

        expect(function () {
          aid.isFunction(math.gt(NaN));
        }).toBeTruthy();

        expect(function () {
          aid.isFunction(math.gt(function () {}));
        }).toBeTruthy();
      });

      it('if arguments are not Number type, throw Error.', function () {
        expect(function () {
          aid.isFunction(math.gt(undefined)(99));
        }).toThrowError();

        expect(function () {
          aid.isFunction(math.gt(null)(99));
        }).toThrowError();

        expect(function () {
          aid.isFunction(math.gt(false)(99));
        }).toThrowError();

        expect(function () {
          aid.isFunction(math.gt(true)(99));
        }).toThrowError();

        expect(function () {
          aid.isFunction(math.gt(0)(99));
        }).not.toThrowError();

        expect(function () {
          aid.isFunction(math.gt('')(99));
        }).toThrowError();

        expect(function () {
          aid.isFunction(math.gt([])(99));
        }).toThrowError();

        expect(function () {
          aid.isFunction(math.gt(NaN)(99));
        }).toThrowError();

        expect(function () {
          aid.isFunction(math.gt(function () {})(99));
        }).toThrowError();

        expect(function () {
          aid.isFunction(math.gt(99)(undefined));
        }).toThrowError();

        expect(function () {
          aid.isFunction(math.gt(99)(null));
        }).toThrowError();

        expect(function () {
          aid.isFunction(math.gt(99)(false));
        }).toThrowError();

        expect(function () {
          aid.isFunction(math.gt(99)(true));
        }).toThrowError();

        expect(function () {
          aid.isFunction(math.gt(99)(0));
        }).not.toThrowError();

        expect(function () {
          aid.isFunction(math.gt(99)(''));
        }).toThrowError();

        expect(function () {
          aid.isFunction(math.gt(99)([]));
        }).toThrowError();

        expect(function () {
          aid.isFunction(math.gt(99)(NaN));
        }).toThrowError();

        expect(function () {
          aid.isFunction(math.gt(99)(function () {}));
        }).toThrowError();
      });

      it('if lhs argument is greater than rhs argument, return true.', function () {
        expect(math.gt(-1)(-1)).toEqual(false);
        expect(math.gt(-1)(-9)).toEqual(false);
        expect(math.gt(0)(0)).toEqual(false);
        expect(math.gt(1)(1)).toEqual(false);
        expect(math.gt(9)(1)).toEqual(false);
        expect(math.gt(-9)(-1)).toEqual(true);
        expect(math.gt(1)(9)).toEqual(true);
      });
    });

    describe('.lt()', function () {
      it('return function if input only one parameter.', function () {
        expect(function () {
          aid.isFunction(math.lt(undefined));
        }).toBeTruthy();

        expect(function () {
          aid.isFunction(math.lt(null));
        }).toBeTruthy();

        expect(function () {
          aid.isFunction(math.lt(false));
        }).toBeTruthy();

        expect(function () {
          aid.isFunction(math.lt(true));
        }).toBeTruthy();

        expect(function () {
          aid.isFunction(math.lt(0));
        }).toBeTruthy();

        expect(function () {
          aid.isFunction(math.lt(''));
        }).toBeTruthy();

        expect(function () {
          aid.isFunction(math.lt([]));
        }).toBeTruthy();

        expect(function () {
          aid.isFunction(math.lt(NaN));
        }).toBeTruthy();

        expect(function () {
          aid.isFunction(math.lt(function () {}));
        }).toBeTruthy();
      });

      it('if arguments are not Number type, throw Error.', function () {
        expect(function () {
          aid.isFunction(math.lt(undefined)(99));
        }).toThrowError();

        expect(function () {
          aid.isFunction(math.lt(null)(99));
        }).toThrowError();

        expect(function () {
          aid.isFunction(math.lt(false)(99));
        }).toThrowError();

        expect(function () {
          aid.isFunction(math.lt(true)(99));
        }).toThrowError();

        expect(function () {
          aid.isFunction(math.lt(0)(99));
        }).not.toThrowError();

        expect(function () {
          aid.isFunction(math.lt('')(99));
        }).toThrowError();

        expect(function () {
          aid.isFunction(math.lt([])(99));
        }).toThrowError();

        expect(function () {
          aid.isFunction(math.lt(NaN)(99));
        }).toThrowError();

        expect(function () {
          aid.isFunction(math.lt(function () {})(99));
        }).toThrowError();

        expect(function () {
          aid.isFunction(math.lt(99)(undefined));
        }).toThrowError();

        expect(function () {
          aid.isFunction(math.lt(99)(null));
        }).toThrowError();

        expect(function () {
          aid.isFunction(math.lt(99)(false));
        }).toThrowError();

        expect(function () {
          aid.isFunction(math.lt(99)(true));
        }).toThrowError();

        expect(function () {
          aid.isFunction(math.lt(99)(0));
        }).not.toThrowError();

        expect(function () {
          aid.isFunction(math.lt(99)(''));
        }).toThrowError();

        expect(function () {
          aid.isFunction(math.lt(99)([]));
        }).toThrowError();

        expect(function () {
          aid.isFunction(math.lt(99)(NaN));
        }).toThrowError();

        expect(function () {
          aid.isFunction(math.lt(99)(function () {}));
        }).toThrowError();
      });

      it('if lhs argument is less than rhs argument, return true.', function () {
        expect(math.lt(-1)(-1)).toEqual(false);
        expect(math.lt(-1)(-9)).toEqual(true);
        expect(math.lt(0)(0)).toEqual(false);
        expect(math.lt(1)(1)).toEqual(false);
        expect(math.lt(9)(1)).toEqual(true);
        expect(math.lt(-9)(-1)).toEqual(false);
        expect(math.lt(1)(9)).toEqual(false);
      });
    });

    describe('.gte()', function () {
      it('return function if input only one parameter.', function () {
        expect(function () {
          aid.isFunction(math.gte(undefined));
        }).toBeTruthy();

        expect(function () {
          aid.isFunction(math.gte(null));
        }).toBeTruthy();

        expect(function () {
          aid.isFunction(math.gte(false));
        }).toBeTruthy();

        expect(function () {
          aid.isFunction(math.gte(true));
        }).toBeTruthy();

        expect(function () {
          aid.isFunction(math.gte(0));
        }).toBeTruthy();

        expect(function () {
          aid.isFunction(math.gte(''));
        }).toBeTruthy();

        expect(function () {
          aid.isFunction(math.gte([]));
        }).toBeTruthy();

        expect(function () {
          aid.isFunction(math.gte(NaN));
        }).toBeTruthy();

        expect(function () {
          aid.isFunction(math.gte(function () {}));
        }).toBeTruthy();
      });

      it('if arguments are not Number type, throw Error.', function () {
        expect(function () {
          aid.isFunction(math.gte(undefined)(99));
        }).toThrowError();

        expect(function () {
          aid.isFunction(math.gte(null)(99));
        }).toThrowError();

        expect(function () {
          aid.isFunction(math.gte(false)(99));
        }).toThrowError();

        expect(function () {
          aid.isFunction(math.gte(true)(99));
        }).toThrowError();

        expect(function () {
          aid.isFunction(math.gte(0)(99));
        }).not.toThrowError();

        expect(function () {
          aid.isFunction(math.gte('')(99));
        }).toThrowError();

        expect(function () {
          aid.isFunction(math.gte([])(99));
        }).toThrowError();

        expect(function () {
          aid.isFunction(math.gte(NaN)(99));
        }).toThrowError();

        expect(function () {
          aid.isFunction(math.gte(function () {})(99));
        }).toThrowError();

        expect(function () {
          aid.isFunction(math.gte(99)(undefined));
        }).toThrowError();

        expect(function () {
          aid.isFunction(math.gte(99)(null));
        }).toThrowError();

        expect(function () {
          aid.isFunction(math.gte(99)(false));
        }).toThrowError();

        expect(function () {
          aid.isFunction(math.gte(99)(true));
        }).toThrowError();

        expect(function () {
          aid.isFunction(math.gte(99)(0));
        }).not.toThrowError();

        expect(function () {
          aid.isFunction(math.gte(99)(''));
        }).toThrowError();

        expect(function () {
          aid.isFunction(math.gte(99)([]));
        }).toThrowError();

        expect(function () {
          aid.isFunction(math.gte(99)(NaN));
        }).toThrowError();

        expect(function () {
          aid.isFunction(math.gte(99)(function () {}));
        }).toThrowError();
      });

      it('if lhs argument is greater than equal rhs argument, return true.', function () {
        expect(math.gte(-1)(-1)).toEqual(true);
        expect(math.gte(-1)(-9)).toEqual(false);
        expect(math.gte(0)(0)).toEqual(true);
        expect(math.gte(1)(1)).toEqual(true);
        expect(math.gte(9)(1)).toEqual(false);
        expect(math.gte(-9)(-1)).toEqual(true);
        expect(math.gte(1)(9)).toEqual(true);
      });
    });

    describe('.lte()', function () {
      it('return function if input only one parameter.', function () {
        expect(function () {
          aid.isFunction(math.lte(undefined));
        }).toBeTruthy();

        expect(function () {
          aid.isFunction(math.lte(null));
        }).toBeTruthy();

        expect(function () {
          aid.isFunction(math.lte(false));
        }).toBeTruthy();

        expect(function () {
          aid.isFunction(math.lte(true));
        }).toBeTruthy();

        expect(function () {
          aid.isFunction(math.lte(0));
        }).toBeTruthy();

        expect(function () {
          aid.isFunction(math.lte(''));
        }).toBeTruthy();

        expect(function () {
          aid.isFunction(math.lte([]));
        }).toBeTruthy();

        expect(function () {
          aid.isFunction(math.lte(NaN));
        }).toBeTruthy();

        expect(function () {
          aid.isFunction(math.lte(function () {}));
        }).toBeTruthy();
      });

      it('if arguments are not Number type, throw Error.', function () {
        expect(function () {
          aid.isFunction(math.lte(undefined)(99));
        }).toThrowError();

        expect(function () {
          aid.isFunction(math.lte(null)(99));
        }).toThrowError();

        expect(function () {
          aid.isFunction(math.lte(false)(99));
        }).toThrowError();

        expect(function () {
          aid.isFunction(math.lte(true)(99));
        }).toThrowError();

        expect(function () {
          aid.isFunction(math.lte(0)(99));
        }).not.toThrowError();

        expect(function () {
          aid.isFunction(math.lte('')(99));
        }).toThrowError();

        expect(function () {
          aid.isFunction(math.lte([])(99));
        }).toThrowError();

        expect(function () {
          aid.isFunction(math.lte(NaN)(99));
        }).toThrowError();

        expect(function () {
          aid.isFunction(math.lte(function () {})(99));
        }).toThrowError();

        expect(function () {
          aid.isFunction(math.lte(99)(undefined));
        }).toThrowError();

        expect(function () {
          aid.isFunction(math.lte(99)(null));
        }).toThrowError();

        expect(function () {
          aid.isFunction(math.lte(99)(false));
        }).toThrowError();

        expect(function () {
          aid.isFunction(math.lte(99)(true));
        }).toThrowError();

        expect(function () {
          aid.isFunction(math.lte(99)(0));
        }).not.toThrowError();

        expect(function () {
          aid.isFunction(math.lte(99)(''));
        }).toThrowError();

        expect(function () {
          aid.isFunction(math.lte(99)([]));
        }).toThrowError();

        expect(function () {
          aid.isFunction(math.lte(99)(NaN));
        }).toThrowError();

        expect(function () {
          aid.isFunction(math.lte(99)(function () {}));
        }).toThrowError();
      });

      it('if lhs argument is less than equal rhs argument, return true.', function () {
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