"use strict";

describe('aid.js', function () {
  describe('aid.operator', function () {
    describe('["+"]', function () {
      // TODO
    });

    describe('["==="]', function () {
      // TODO
    });

    describe('["!"]', function () {
      var not = aid.operator['!'];

      it('negate object parameter', function() {
        it('input undefined, return true', function () {
          expect(not(undefined)).toEqual(true);
        });

        it('input "undefined", return false', function () {
          expect(not("undefined")).toEqual(false);
        });

        it('input null, return true', function () {
          expect(not(null)).toEqual(true);
        });

        it('input false, return false', function () {
          expect(not(false)).toEqual(false);
        });

        it('input true, return false', function () {
          expect(not(true)).toEqual(false);
        });

        it('input 0, return false', function () {
          expect(not(0)).toEqual(false);
        });

        it('input "", return false', function () {
          expect(not("")).toEqual(false);
        });

        it('input {}, return false', function () {
          expect(not({})).toEqual(false);
        });
      });

      it('negate isNaN with aid.compose', function() {
        var isNotNaN = aid.compose(aid.operator['!'], isNaN);

        it('input undefined to aid.compose(aid.operator["!"], isNaN), return false', function () {
          expect(isNotNaN(undefined)).toEqual(false);
        });

        it('input 0 to aid.compose(aid.operator["!"], isNaN), return true', function () {
          expect(isNotNaN(0)).toEqual(true);
        });
      });
    });
  });
});