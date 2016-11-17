"use strict";
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

    describe('.binaryIndexOf()', function () {
      function compare(a, b) {
        if( a < b ) return -1;
        if( a > b ) return 1;
        return 0;
      }

      it('if array is not array, return -1', function () {
        expect( array.binaryIndexOf(99, 99) ).toEqual(-1);
      });

      it('if array length is 0, return -1', function () {
        expect( array.binaryIndexOf([], 99) ).toEqual(-1);
      });

      it('if there is not element in array, return -1', function () {
        var arr = [0, 2, 4, 6, 8, 1, 3, 5, 7, 9]
        arr.sort(compare);
        expect( array.binaryIndexOf(arr, 3.5) ).toEqual(-1);
      });
      
      it('if elements in array are sorted, return index of element', function () {
        var arr = [0, 2, 4, 6, 8, 1, 3, 5, 7, 9]
        arr.sort(compare);
        expect( array.binaryIndexOf(arr, 7) ).toEqual(7);
      });

      it('if elements in array are sorted, return index of element', function () {
        var arr = ['b', 'a', 'd', 'c', 'e', 'g', 'f'];
        arr.sort(compare);
        expect( array.binaryIndexOf(arr, 'c') ).toEqual(2);
      });
    });
  });
});