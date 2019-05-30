'use strict';

describe('aid.js', function() {
  describe('aid.operator', function() {
    describe('["+"]', function() {
      var plus = aid.operator['+'];

      it('return value plus two numbers.', function() {
        var result = plus(1, 2);
        expect(aid.isNumber(result)).toBe(true);
      });
    });

    describe('["==="]', function() {
      var identity = aid.operator['==='];

      it('input undefined values, return true', function() {
        expect(identity(undefined, undefined)).toBe(true);
      });

      it('input null values, return true', function() {
        expect(identity(null, null)).toBe(true);
      });

      it('input equal numbers, return true', function() {
        expect(identity(1, 1)).toBe(true);
      });

      it('input equal booleans, return true', function() {
        expect(identity(true, true)).toBe(true);
        expect(identity(false, false)).toBe(true);
      });

      it('input equal strings, return true', function() {
        expect(identity('aid', 'aid')).toBe(true);
      });

      it('input equal arrays, return true', function() {
        var arr = [1, 2, 3];
        expect(identity(arr, arr)).toBe(true);
      });

      it('input equal functions, return true', function() {
        var func = function() {};
        expect(identity(func, func)).toBe(true);
      });

      it('input equal objects, return true', function() {
        var obj = {};
        expect(identity(obj, obj)).toBe(true);
      });

      it('input equal regexes, return true', function() {
        var regex = /^aid/;
        expect(identity(regex, regex)).toBe(true);

        regex = new RegExp('^aid');
        expect(identity(regex, regex)).toBe(true);
      });
    });

    describe('["!"]', function() {
      var not = aid.operator['!'];

      describe('negate object parameter', function() {
        it('input undefined, return true', function() {
          expect(not(undefined)).toEqual(true);
        });

        it('input "undefined", return false', function() {
          expect(not('undefined')).toEqual(false);
        });

        it('input null, return true', function() {
          expect(not(null)).toEqual(true);
        });

        it('input false, return true', function() {
          expect(not(false)).toEqual(true);
        });

        it('input true, return false', function() {
          expect(not(true)).toEqual(false);
        });

        it('input 0, return true', function() {
          expect(not(0)).toEqual(true);
        });

        it('input "", return true', function() {
          expect(not('')).toEqual(true);
        });

        it('input {}, return false', function() {
          expect(not({})).toEqual(false);
        });
      });

      describe('negate isNaN with aid.compose', function() {
        var isNotNaN = aid.compose(
          aid.operator['!'],
          isNaN
        );

        it('input undefined to aid.compose(aid.operator["!"], isNaN), return false', function() {
          expect(isNotNaN(undefined)).toEqual(false);
        });

        it('input 0 to aid.compose(aid.operator["!"], isNaN), return true', function() {
          expect(isNotNaN(0)).toEqual(true);
        });
      });
    });
  });
});
