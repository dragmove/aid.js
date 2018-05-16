'use strict';

describe('aid.js', function () {
  describe('aid.clipboard', function () {
    var clipboard = aid.clipboard;

    describe('.copyText()', function () {
      it('if 1st argument is not String type, throw TypeError', function () {
        var ERROR_MSG = 'str parameter type of clipboard.copyText() must be String.';

        expect(function () {
          clipboard.copyText(undefined);
          clipboard.copyText(null);
          clipboard.copyText(false);
          clipboard.copyText(true);
          clipboard.copyText(0);
          clipboard.copyText({});
          clipboard.copyText([]);
          clipboard.copyText(function () {});
          clipboard.copyText(new RegExp('^aid'));
          clipboard.copyText(/^aid'/);
        }).toThrowError(TypeError, ERROR_MSG);
      });

      /*
      it('return index of element.', function () {
        expect(array.indexOf(tmpArr, 'foo')).toEqual(0);
        expect(array.indexOf(tmpArr, 1)).toEqual(1);
        expect(array.indexOf(tmpArr, 'bar')).toEqual(2);
        expect(array.indexOf(tmpArr, 2)).toEqual(3);
        expect(array.indexOf(tmpArr, null)).toEqual(4);
        expect(array.indexOf(tmpArr, 99)).toEqual(5);
      });

      it('if cannot find element, return -1', function () {
        expect(array.indexOf(tmpArr, undefined)).toEqual(-1);
        expect(array.indexOf(tmpArr, '')).toEqual(-1);
        expect(array.indexOf(tmpArr, 999)).toEqual(-1);
      });

      it('if first argument is empty array, return -1', function () {
        expect(array.indexOf([], 1)).toEqual(-1);
      });
      */
    });
  });
});