"use strict";

describe('aid.js', function () {
  describe('aid.math', function () {
    var math = aid.math;

    describe('.getSizeAspectFill()', function () {
      // TODO
    });

    describe('.getSizeAspectFit()', function () {
      // TODO
    });

    describe('.getSizeWidthFit()', function () {
      // TODO
    });

    describe('.isEpsilonEqual()', function () {
      // TODO
    });

    describe('.isIndexInLoop()', function () {
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
  });
});