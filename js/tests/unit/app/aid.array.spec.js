'use strict';
describe('aid.js', function () {
  // sample - http://jasmine.github.io/2.0/introduction.html

  describe('aid.array', function () {
    var array = aid.array;
    
    describe('.indexOf()', function () {
      var tmpArr = ['foo', 1, 'bar', 2, null, 99]

      it('return index of element.', function () {
        expect( array.indexOf(tmpArr, 'foo') ).toEqual(0);
        expect( array.indexOf(tmpArr, 1) ).toEqual(1);
        expect( array.indexOf(tmpArr, 'bar') ).toEqual(2);
        expect( array.indexOf(tmpArr, 2) ).toEqual(3);
        expect( array.indexOf(tmpArr, null) ).toEqual(4);
        expect( array.indexOf(tmpArr, 99) ).toEqual(5);
      });

      it('if can not find element, return -1', function () {
        expect( array.indexOf(tmpArr, undefined) ).toEqual(-1);
        expect( array.indexOf(tmpArr, '') ).toEqual(-1);
        expect( array.indexOf(tmpArr, 999) ).toEqual(-1);
      });

      it('if first argument is empty array, return -1', function () {
        expect( array.indexOf([], 1) ).toEqual(-1);
      });

      it('if first argument is not Array type, return -1', function () {
        expect( array.indexOf(null, 1) ).toEqual(-1);
      });
    });

    describe('.getMatrixArr()', function () {
      // TODO
    });
  });
});