"use strict";
describe('aid.js', function () {
  // sample - http://jasmine.github.io/2.0/introduction.html

  describe('aid.array', function () {
    var array = aid.array;

    describe('.indexOf()', function () {
      var tmpArr = ['foo', 1, 'bar', 2, null, 99]

      it('return index of element.', function () {
        expect(array.indexOf(tmpArr, 'foo')).toEqual(0);
        expect(array.indexOf(tmpArr, 1)).toEqual(1);
        expect(array.indexOf(tmpArr, 'bar')).toEqual(2);
        expect(array.indexOf(tmpArr, 2)).toEqual(3);
        expect(array.indexOf(tmpArr, null)).toEqual(4);
        expect(array.indexOf(tmpArr, 99)).toEqual(5);
      });

      it('if can not find element, return -1', function () {
        expect(array.indexOf(tmpArr, undefined)).toEqual(-1);
        expect(array.indexOf(tmpArr, '')).toEqual(-1);
        expect(array.indexOf(tmpArr, 999)).toEqual(-1);
      });

      it('if first argument is empty array, return -1', function () {
        expect(array.indexOf([], 1)).toEqual(-1);
      });

      it('if first argument is not Array type, return -1', function () {
        expect(array.indexOf(null, 1)).toEqual(-1);
      });
    });

    describe('.indexOfMin()', function () {
      var tmpArr = [18, 6, 66, 44, 9, 22, 14];

      it('return -1 when 1st parameter type is not array.', function () {
        expect(array.indexOfMin(null, 0)).toEqual(-1);
        expect(array.indexOfMin(undefined, 1)).toEqual(-1);
        expect(array.indexOfMin(99, 2)).toEqual(-1);
        expect(array.indexOfMin('string', 3)).toEqual(-1);
        expect(array.indexOfMin(false, 3)).toEqual(-1);
      });

      it('return -1 when startSearchIndex is not Int.', function () {
        expect(array.indexOfMin(tmpArr, -0.5)).toEqual(-1);
        expect(array.indexOfMin(tmpArr, 0.5)).toEqual(-1);
      });

      it('return -1 when startSearchIndex is greater than array.length', function () {
        expect(array.indexOfMin(tmpArr, 7)).toEqual(-1);
        expect(array.indexOfMin(tmpArr, 99)).toEqual(-1);
      });

      it('return index of minimum element.', function () {
        expect(array.indexOfMin(tmpArr, -1)).toEqual(1);
        expect(array.indexOfMin(tmpArr, 0)).toEqual(1);
        expect(array.indexOfMin(tmpArr, 1)).toEqual(1);
        expect(array.indexOfMin(tmpArr, 2)).toEqual(4);
        expect(array.indexOfMin(tmpArr, 2)).toEqual(4);
        expect(array.indexOfMin(tmpArr, 4)).toEqual(4);
        expect(array.indexOfMin(tmpArr, 5)).toEqual(6);
        expect(array.indexOfMin(tmpArr, 6)).toEqual(6);
      });
    });

    describe('.swap()', function () {
      var tmpArr = [18, 6, 66, 44, 9, 22, 14];

      beforeEach(function () {
        tmpArr = [18, 6, 66, 44, 9, 22, 14];
      });

      it('no change when parameter length is not 3.', function () {
        array.swap(tmpArr);
        expect(tmpArr).toEqual([18, 6, 66, 44, 9, 22, 14]);

        array.swap(tmpArr, 0);
        expect(tmpArr).toEqual([18, 6, 66, 44, 9, 22, 14]);

        array.swap(tmpArr, 0, 1, 2);
        expect(tmpArr).toEqual([18, 6, 66, 44, 9, 22, 14]);
      });

      it('no change when 1st parameter type is not array.', function () {
        array.swap(null, 1, 2);
        expect(tmpArr).toEqual([18, 6, 66, 44, 9, 22, 14]);

        array.swap(undefined, 1, 2);
        expect(tmpArr).toEqual([18, 6, 66, 44, 9, 22, 14]);

        array.swap(99, 1, 2);
        expect(tmpArr).toEqual([18, 6, 66, 44, 9, 22, 14]);

        array.swap('string', 1, 2);
        expect(tmpArr).toEqual([18, 6, 66, 44, 9, 22, 14]);

        array.swap(false, 1, 2);
        expect(tmpArr).toEqual([18, 6, 66, 44, 9, 22, 14]);

        array.swap({}, 1, 2);
        expect(tmpArr).toEqual([18, 6, 66, 44, 9, 22, 14]);
      });

      it('no change when 2nd, 3rd parameter is not Integer.', function () {
        array.swap(tmpArr, 1.5, 2);
        expect(tmpArr).toEqual([18, 6, 66, 44, 9, 22, 14]);

        array.swap(tmpArr, 1, 2.5);
        expect(tmpArr).toEqual([18, 6, 66, 44, 9, 22, 14]);

        array.swap(tmpArr, 1.5, 2.5);
        expect(tmpArr).toEqual([18, 6, 66, 44, 9, 22, 14]);
      });

      it('no change when array does not include firstIndex, secondIndex elements', function () {
        array.swap(tmpArr, -1, 3);
        expect(tmpArr).toEqual([18, 6, 66, 44, 9, 22, 14]);

        array.swap(tmpArr, 99, 3);
        expect(tmpArr).toEqual([18, 6, 66, 44, 9, 22, 14]);

        array.swap(tmpArr, 3, -1);
        expect(tmpArr).toEqual([18, 6, 66, 44, 9, 22, 14]);

        array.swap(tmpArr, 3, 99);
        expect(tmpArr).toEqual([18, 6, 66, 44, 9, 22, 14]);
      });

      it('no change when array does not include firstIndex, secondIndex elements', function () {
        expect(array.swap(tmpArr, 0, 1)).toEqual([6, 18, 66, 44, 9, 22, 14]);
        expect(array.swap(tmpArr, 0, 2)).toEqual([66, 18, 6, 44, 9, 22, 14]);
        expect(array.swap(tmpArr, 1, 2)).toEqual([66, 6, 18, 44, 9, 22, 14]);
        expect(array.swap(tmpArr, 3, 5)).toEqual([66, 6, 18, 22, 9, 44, 14]);
        expect(array.swap(tmpArr, 3, 1)).toEqual([66, 22, 18, 6, 9, 44, 14]);
      });
    });

    describe('.remove()', function () {
      var arr = [1, 2, 3, 4, 5, 99];

      beforeEach(function () {
        arr = [1, 2, 3, 4, 5, 99];
      });

      /*
      // TODO
      it('1st parameter is not Array, throw error.', function () {
       expect(array.remove(undefined, 99)).toThrowError(TypeError);
       expect(array.remove(null, 99)).toThrowError(TypeError);
       expect(array.remove(99, 99)).toThrowError(TypeError);
       expect(array.remove('aid', 99)).toThrowError(TypeError);
       expect(array.remove(true, 99)).toThrowError(TypeError);
      });
      */

      it('array has no element, return []', function () {
        arr = [];
        expect(array.remove(arr, 99)).toEqual([]);
      });

      it('remove 99, return [1, 2, 3, 4, 5]', function () {
        expect(array.remove(arr, 99)).toEqual([1, 2, 3, 4, 5]);
        expect(arr).toEqual([1, 2, 3, 4, 5, 99]);
      });

      it('remove 3, return [1, 2, 4, 5, 99]', function () {
        expect(array.remove(arr, 3)).toEqual([1, 2, 4, 5, 99]);
        expect(arr).toEqual([1, 2, 3, 4, 5, 99]);
      });

      it('remove 9999, return [1, 2, 3, 4, 5, 99]', function () {
        expect(array.remove(arr, 9999)).toEqual([1, 2, 3, 4, 5, 99]);
        expect(arr).toEqual([1, 2, 3, 4, 5, 99]);
      });
    });

    describe('.getMatrixArr()', function () {
      // TODO
    });

    describe('.binaryIndexOf()', function () {
      function compare(a, b) {
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
      }

      it('if array is not array, return -1', function () {
        expect(array.binaryIndexOf(99, 99)).toEqual(-1);
      });

      it('if array length is 0, return -1', function () {
        expect(array.binaryIndexOf([], 99)).toEqual(-1);
      });

      it('if there is not element in array, return -1', function () {
        var arr = [0, 2, 4, 6, 8, 1, 3, 5, 7, 9]
        arr.sort(compare);
        expect(array.binaryIndexOf(arr, 3.5)).toEqual(-1);
      });

      it('if elements in array are sorted, return index of element', function () {
        var arr = [0, 2, 4, 6, 8, 1, 3, 5, 7, 9]
        arr.sort(compare);
        expect(array.binaryIndexOf(arr, 7)).toEqual(7);
      });

      it('if elements in array are sorted, return index of element', function () {
        var arr = ['b', 'a', 'd', 'c', 'e', 'g', 'f'];
        arr.sort(compare);
        expect(array.binaryIndexOf(arr, 'c')).toEqual(2);
      });
    });

    describe('.getFirstObjectHasProperty()', function () {
      var arrayHasObjects = [];

      it('if 1st element is not array, return null', function () {
        arrayHasObjects = 1;
        expect(array.getFirstObjectHasProperty(arrayHasObjects, 'no', 1)).toEqual(null);
      });

      it('if array.length is 0, return null', function () {
        arrayHasObjects = [];
        expect(array.getFirstObjectHasProperty(arrayHasObjects, 'no', 1)).toEqual(null);
      });

      it('if propertyKey is not string, return null', function () {
        arrayHasObjects = [];
        expect(array.getFirstObjectHasProperty(arrayHasObjects, undefined, 1)).toEqual(null);
        expect(array.getFirstObjectHasProperty(arrayHasObjects, null, 1)).toEqual(null);
        expect(array.getFirstObjectHasProperty(arrayHasObjects, 1, 1)).toEqual(null);
        expect(array.getFirstObjectHasProperty(arrayHasObjects, [], 1)).toEqual(null);
      });

      it('if property key is "index", target value is 1, return null', function () {
        arrayHasObjects = [{no: 1}, {no: 2}];
        expect(array.getFirstObjectHasProperty(arrayHasObjects, 'index', 1)).toEqual(null);
        expect(array.getFirstObjectHasProperty(arrayHasObjects, 'index', new RegExp('^1'))).toEqual(null);
        expect(array.getFirstObjectHasProperty(arrayHasObjects, 'index', /^(1)\d/)).toEqual(null);
      });

      it('if property key is "no", target value is 11, return {no: 11}', function () {
        arrayHasObjects = [{no: 11}, {no: 22}];
        expect(array.getFirstObjectHasProperty(arrayHasObjects, 'no', 11)).toEqual({no: 11});
        expect(array.getFirstObjectHasProperty(arrayHasObjects, 'no', new RegExp('^1'))).toEqual({no: 11});
        expect(array.getFirstObjectHasProperty(arrayHasObjects, 'no', /^(1)\d/)).toEqual({no: 11});
      });
    });
  });
});