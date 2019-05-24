'use strict';

describe('aid.js', function() {
  describe('aid.array', function() {
    var array = aid.array;

    describe('.indexOf()', function() {
      var tmpArr = ['foo', 1, 'bar', 2, null, 99];

      it('if 1st argument is not Array type, throw TypeError', function() {
        expect(function() {
          array.indexOf(null, 1);
        }).toThrowError(TypeError);
      });

      it('return index of element.', function() {
        expect(array.indexOf(tmpArr, 'foo')).toEqual(0);
        expect(array.indexOf(tmpArr, 1)).toEqual(1);
        expect(array.indexOf(tmpArr, 'bar')).toEqual(2);
        expect(array.indexOf(tmpArr, 2)).toEqual(3);
        expect(array.indexOf(tmpArr, null)).toEqual(4);
        expect(array.indexOf(tmpArr, 99)).toEqual(5);
      });

      it('if cannot find element, return -1', function() {
        expect(array.indexOf(tmpArr, undefined)).toEqual(-1);
        expect(array.indexOf(tmpArr, '')).toEqual(-1);
        expect(array.indexOf(tmpArr, 999)).toEqual(-1);
      });

      it('if first argument is empty array, return -1', function() {
        expect(array.indexOf([], 1)).toEqual(-1);
      });
    });

    describe('.indexOfMin()', function() {
      var tmpArr = [18, 6, 66, 44, 9, 22, 14];

      it('return -1 when 1st parameter type is not array.', function() {
        expect(array.indexOfMin(null, 0)).toEqual(-1);
        expect(array.indexOfMin(undefined, 1)).toEqual(-1);
        expect(array.indexOfMin(99, 2)).toEqual(-1);
        expect(array.indexOfMin('string', 3)).toEqual(-1);
        expect(array.indexOfMin(false, 3)).toEqual(-1);
      });

      it('return -1 when startSearchIndex is not Int.', function() {
        expect(array.indexOfMin(tmpArr, -0.5)).toEqual(-1);
        expect(array.indexOfMin(tmpArr, 0.5)).toEqual(-1);
      });

      it('return -1 when startSearchIndex is greater than array.length', function() {
        expect(array.indexOfMin(tmpArr, 7)).toEqual(-1);
        expect(array.indexOfMin(tmpArr, 99)).toEqual(-1);
      });

      it('return index of minimum element.', function() {
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

    describe('.swap()', function() {
      var tmpArr = [18, 6, 66, 44, 9, 22, 14];

      beforeEach(function() {
        tmpArr = [18, 6, 66, 44, 9, 22, 14];
      });

      it('no change when parameter length is not 3.', function() {
        array.swap(tmpArr);
        expect(tmpArr).toEqual([18, 6, 66, 44, 9, 22, 14]);

        array.swap(tmpArr, 0);
        expect(tmpArr).toEqual([18, 6, 66, 44, 9, 22, 14]);

        array.swap(tmpArr, 0, 1, 2);
        expect(tmpArr).toEqual([18, 6, 66, 44, 9, 22, 14]);
      });

      it('no change when 1st parameter type is not array.', function() {
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

      it('no change when 2nd, 3rd parameter is not Integer.', function() {
        array.swap(tmpArr, 1.5, 2);
        expect(tmpArr).toEqual([18, 6, 66, 44, 9, 22, 14]);

        array.swap(tmpArr, 1, 2.5);
        expect(tmpArr).toEqual([18, 6, 66, 44, 9, 22, 14]);

        array.swap(tmpArr, 1.5, 2.5);
        expect(tmpArr).toEqual([18, 6, 66, 44, 9, 22, 14]);
      });

      it('no change when array does not include firstIndex, secondIndex elements', function() {
        array.swap(tmpArr, -1, 3);
        expect(tmpArr).toEqual([18, 6, 66, 44, 9, 22, 14]);

        array.swap(tmpArr, 99, 3);
        expect(tmpArr).toEqual([18, 6, 66, 44, 9, 22, 14]);

        array.swap(tmpArr, 3, -1);
        expect(tmpArr).toEqual([18, 6, 66, 44, 9, 22, 14]);

        array.swap(tmpArr, 3, 99);
        expect(tmpArr).toEqual([18, 6, 66, 44, 9, 22, 14]);
      });

      it('no change when array does not include firstIndex, secondIndex elements', function() {
        expect(array.swap(tmpArr, 0, 1)).toEqual([6, 18, 66, 44, 9, 22, 14]);
        expect(array.swap(tmpArr, 0, 2)).toEqual([66, 18, 6, 44, 9, 22, 14]);
        expect(array.swap(tmpArr, 1, 2)).toEqual([66, 6, 18, 44, 9, 22, 14]);
        expect(array.swap(tmpArr, 3, 5)).toEqual([66, 6, 18, 22, 9, 44, 14]);
        expect(array.swap(tmpArr, 3, 1)).toEqual([66, 22, 18, 6, 9, 44, 14]);
      });
    });

    describe('.selectionSort()', function() {
      var tmpArr = [18, 6, 66, 44, 9, 22, 14];

      beforeEach(function() {
        tmpArr = [18, 6, 66, 44, 9, 22, 14];
      });

      it('return null when parameter is not array.', function() {
        expect(array.selectionSort(null)).toEqual(null);
        expect(array.selectionSort(undefined)).toEqual(null);
        expect(array.selectionSort(99)).toEqual(null);
        expect(array.selectionSort('string')).toEqual(null);
        expect(array.selectionSort(false)).toEqual(null);
      });

      it('return null when array length is 0.', function() {
        expect(array.selectionSort([])).toEqual(null);
      });

      it('return sorted array.', function() {
        expect(array.selectionSort(tmpArr)).toEqual([6, 9, 14, 18, 22, 44, 66]);
      });
    });

    describe('.insertionSort()', function() {
      var arr = [18, 6, 66, 44, 9, 22, 14];

      beforeEach(function() {
        arr = [18, 6, 66, 44, 9, 22, 14];
      });

      it('return null when parameter is not array.', function() {
        expect(array.insertionSort(null)).toEqual(null);
        expect(array.insertionSort(undefined)).toEqual(null);
        expect(array.insertionSort(99)).toEqual(null);
        expect(array.insertionSort('string')).toEqual(null);
        expect(array.insertionSort(false)).toEqual(null);
      });

      it('return sorted array.', function() {
        expect(array.insertionSort(arr)).toEqual([6, 9, 14, 18, 22, 44, 66]);
      });
    });

    describe('.merge()', function() {
      var arr = [18, 6, 66, 44, 9, 22, 14];

      beforeEach(function() {
        arr = [18, 6, 66, 44, 9, 22, 14];
      });

      it('return null when parameter is not array.', function() {
        expect(array.merge(null)).toEqual(null);
        expect(array.merge(undefined)).toEqual(null);
        expect(array.merge(99)).toEqual(null);
        expect(array.merge('string')).toEqual(null);
        expect(array.merge(false)).toEqual(null);
      });

      it('return null when startIndex > middleIndex.', function() {
        expect(array.merge(arr, 2, 1, 99)).toEqual(null);
      });

      it('return null when middleIndex > endIndex.', function() {
        expect(array.merge(arr, 1, 99, 2)).toEqual(null);
      });

      it('return sorted array when array has 3 elements.', function() {
        arr = [1, 22, 33];

        var startIndex = 0,
          endIndex = arr.length - 1,
          middleIndex = Math.floor((startIndex + endIndex) / 2);

        expect(array.merge(arr, startIndex, middleIndex, endIndex)).toEqual([1, 22, 33]);

        arr = [1, 33, 22];
        expect(array.merge(arr, startIndex, middleIndex, endIndex)).toEqual([1, 22, 33]);

        arr = [22, 33, 1];
        expect(array.merge(arr, startIndex, middleIndex, endIndex)).toEqual([1, 22, 33]);

        arr = [22, 1, 33];
        expect(array.merge(arr, startIndex, middleIndex, endIndex)).not.toEqual([1, 22, 33]);

        arr = [33, 1, 22];
        expect(array.merge(arr, startIndex, middleIndex, endIndex)).not.toEqual([1, 22, 33]);

        arr = [33, 22, 1];
        expect(array.merge(arr, startIndex, middleIndex, endIndex)).not.toEqual([1, 22, 33]);
      });

      it('return sorted array when array has 4 elements.', function() {
        arr = [1, 22, 33, 44];

        var startIndex = 0,
          endIndex = arr.length - 1,
          middleIndex = Math.floor((startIndex + endIndex) / 2);

        expect(array.merge(arr, startIndex, middleIndex, endIndex)).toEqual([1, 22, 33, 44]);

        arr = [1, 33, 22, 44];
        expect(array.merge(arr, startIndex, middleIndex, endIndex)).toEqual([1, 22, 33, 44]);

        arr = [1, 44, 22, 33];
        expect(array.merge(arr, startIndex, middleIndex, endIndex)).toEqual([1, 22, 33, 44]);

        arr = [22, 33, 1, 44];
        expect(array.merge(arr, startIndex, middleIndex, endIndex)).toEqual([1, 22, 33, 44]);

        arr = [22, 44, 1, 33];
        expect(array.merge(arr, startIndex, middleIndex, endIndex)).toEqual([1, 22, 33, 44]);

        arr = [33, 44, 1, 22];
        expect(array.merge(arr, startIndex, middleIndex, endIndex)).toEqual([1, 22, 33, 44]);

        arr = [1, 22, 44, 33];
        expect(array.merge(arr, startIndex, middleIndex, endIndex)).not.toEqual([1, 22, 33, 44]);

        arr = [1, 33, 44, 22];
        expect(array.merge(arr, startIndex, middleIndex, endIndex)).not.toEqual([1, 22, 33, 44]);

        arr = [1, 44, 33, 22];
        expect(array.merge(arr, startIndex, middleIndex, endIndex)).not.toEqual([1, 22, 33, 44]);

        arr = [22, 1, 33, 44];
        expect(array.merge(arr, startIndex, middleIndex, endIndex)).not.toEqual([1, 22, 33, 44]);

        arr = [22, 44, 33, 1];
        expect(array.merge(arr, startIndex, middleIndex, endIndex)).not.toEqual([1, 22, 33, 44]);

        arr = [33, 22, 1, 44];
        expect(array.merge(arr, startIndex, middleIndex, endIndex)).not.toEqual([1, 22, 33, 44]);
      });
    });

    describe('.mergeSort()', function() {
      var arr = [18, 6, 66, 44, 9, 22, 14];

      beforeEach(function() {
        arr = [18, 6, 66, 44, 9, 22, 14];
      });

      it('return null when parameter is not array.', function() {
        expect(array.mergeSort(null)).toEqual(null);
        expect(array.mergeSort(undefined)).toEqual(null);
        expect(array.mergeSort(99)).toEqual(null);
        expect(array.mergeSort('string')).toEqual(null);
        expect(array.mergeSort(false)).toEqual(null);
      });

      it('return null when array has 1 element.', function() {
        arr = [1];
        expect(array.mergeSort([1], 99, 99)).toEqual(null);
        expect(arr).toEqual([1]);
      });

      it('return null when startIndex is equal to endIndex', function() {
        expect(array.mergeSort(arr, 1, 1)).toEqual(null);
      });

      it('return sorted array when array has 2 elements.', function() {
        arr = [2, 1];
        expect(array.mergeSort(arr, 0, 1)).toEqual([1, 2]);

        arr = [1, 2];
        expect(array.mergeSort(arr, 0, 1)).toEqual([1, 2]);
      });

      it('return sorted array when array has 3 elements.', function() {
        arr = [1, 22, 33];
        expect(array.mergeSort(arr, 0, arr.length - 1)).toEqual([1, 22, 33]);

        arr = [1, 33, 22];
        expect(array.mergeSort(arr, 0, arr.length - 1)).toEqual([1, 22, 33]);

        arr = [22, 1, 33];
        expect(array.mergeSort(arr, 0, arr.length - 1)).toEqual([1, 22, 33]);

        arr = [22, 33, 1];
        expect(array.mergeSort(arr, 0, arr.length - 1)).toEqual([1, 22, 33]);

        arr = [33, 1, 22];
        expect(array.mergeSort(arr, 0, arr.length - 1)).toEqual([1, 22, 33]);

        arr = [33, 22, 1];
        expect(array.mergeSort(arr, 0, arr.length - 1)).toEqual([1, 22, 33]);
      });

      it('return sorted array.', function() {
        expect(array.mergeSort(arr, 0, arr.length - 1)).toEqual([6, 9, 14, 18, 22, 44, 66]);
      });
    });

    describe('.getPivotIndexAfterPartition()', function() {
      var arr = [18, 6, 66, 44, 9, 22, 14];

      beforeEach(function() {
        arr = [18, 6, 66, 44, 9, 22, 14];
      });

      it('return null when parameter is not array.', function() {
        expect(array.getPivotIndexAfterPartition(null)).toEqual(-1);
        expect(array.getPivotIndexAfterPartition(undefined)).toEqual(-1);
        expect(array.getPivotIndexAfterPartition(99)).toEqual(-1);
        expect(array.getPivotIndexAfterPartition('string')).toEqual(-1);
        expect(array.getPivotIndexAfterPartition(false)).toEqual(-1);
      });

      it('return null when startIndex > endIndex.', function() {
        expect(array.getPivotIndexAfterPartition(arr, 99, 1)).toEqual(-1);
      });

      it('return 0 when array length is 1.', function() {
        arr = [1];
        expect(array.getPivotIndexAfterPartition(arr, 0, 0)).toEqual(0);
      });

      it('return startIndex when startIndex is equal to endIndex.', function() {
        expect(array.getPivotIndexAfterPartition(arr, 3, 3)).toEqual(3);
      });

      it('return 2 when apply arr.', function() {
        expect(array.getPivotIndexAfterPartition(arr, 0, arr.length - 1)).toEqual(2);
      });

      it('return 0 when arr has 2 elements.', function() {
        arr = [2, 1];
        expect(array.getPivotIndexAfterPartition(arr, 0, arr.length - 1)).toEqual(0);
      });

      it('return 0 when arr has 2 elements.', function() {
        arr = [1, 2];
        expect(array.getPivotIndexAfterPartition(arr, 0, arr.length - 1)).toEqual(1);
      });

      it('return partitioned array.', function() {
        array.getPivotIndexAfterPartition(arr, 0, arr.length - 1);
        expect(arr).toEqual([6, 9, 14, 44, 18, 22, 66]);
      });
    });

    describe('.quickSort()', function() {
      var arr = [18, 6, 66, 44, 9, 22, 14];

      beforeEach(function() {
        arr = [18, 6, 66, 44, 9, 22, 14];
      });

      it('return null when parameter is not array.', function() {
        expect(array.quickSort(null)).toEqual(null);
        expect(array.quickSort(undefined)).toEqual(null);
        expect(array.quickSort(99)).toEqual(null);
        expect(array.quickSort('string')).toEqual(null);
        expect(array.quickSort(false)).toEqual(null);
      });

      it('return null when array has 1 element.', function() {
        arr = [1];
        expect(array.quickSort([1], 99, 99)).toEqual(null);
        expect(arr).toEqual([1]);
      });

      it('return null when startIndex is equal to endIndex', function() {
        arr = [1];
        expect(array.quickSort([1], 99, 99)).toEqual(null);
        expect(arr).toEqual([1]);
      });

      it('return sorted array when array has 2 elements.', function() {
        arr = [2, 1];
        expect(array.quickSort(arr, 0, 1)).toEqual([1, 2]);

        arr = [1, 2];
        expect(array.quickSort(arr, 0, 1)).toEqual([1, 2]);
      });

      it('return sorted array when array has 3 elements.', function() {
        arr = [1, 22, 33];
        expect(array.quickSort(arr, 0, arr.length - 1)).toEqual([1, 22, 33]);

        arr = [1, 33, 22];
        expect(array.quickSort(arr, 0, arr.length - 1)).toEqual([1, 22, 33]);

        arr = [22, 1, 33];
        expect(array.quickSort(arr, 0, arr.length - 1)).toEqual([1, 22, 33]);

        arr = [22, 33, 1];
        expect(array.quickSort(arr, 0, arr.length - 1)).toEqual([1, 22, 33]);

        arr = [33, 1, 22];
        expect(array.quickSort(arr, 0, arr.length - 1)).toEqual([1, 22, 33]);

        arr = [33, 22, 1];
        expect(array.quickSort(arr, 0, arr.length - 1)).toEqual([1, 22, 33]);
      });

      it('return sorted array.', function() {
        expect(array.quickSort(arr, 0, arr.length - 1)).toEqual([6, 9, 14, 18, 22, 44, 66]);
      });
    });

    describe('.remove()', function() {
      var arr = [1, 2, 3, 4, 5, 99];

      beforeEach(function() {
        arr = [1, 2, 3, 4, 5, 99];
      });

      it('1st parameter is not Array, throw TypeError.', function() {
        expect(function() {
          array.remove(undefined, 99);
        }).toThrowError(TypeError);

        expect(function() {
          array.remove(null, 99);
        }).toThrowError(TypeError);

        expect(function() {
          array.remove(99, 99);
        }).toThrowError(TypeError);

        expect(function() {
          array.remove('aid', 99);
        }).toThrowError(TypeError);

        expect(function() {
          array.remove(true, 99);
        }).toThrowError(TypeError);
      });

      it('array has no element, return []', function() {
        arr = [];
        expect(array.remove(arr, 99)).toEqual([]);
      });

      it('remove 99, return [1, 2, 3, 4, 5]', function() {
        expect(array.remove(arr, 99)).toEqual([1, 2, 3, 4, 5]);
        expect(arr).toEqual([1, 2, 3, 4, 5, 99]);
      });

      it('remove 3, return [1, 2, 4, 5, 99]', function() {
        expect(array.remove(arr, 3)).toEqual([1, 2, 4, 5, 99]);
        expect(arr).toEqual([1, 2, 3, 4, 5, 99]);
      });

      it('remove 9999, return [1, 2, 3, 4, 5, 99]', function() {
        expect(array.remove(arr, 9999)).toEqual([1, 2, 3, 4, 5, 99]);
        expect(arr).toEqual([1, 2, 3, 4, 5, 99]);
      });
    });

    describe('.getMatrixArr()', function() {
      it('if parameter rowNum is not Integer, throw TypeError', function() {
        expect(function() {
          array.getMatrixArr(3.5);
        }).toThrowError(TypeError);
      });

      it('if parameter columnNum is not Integer, throw TypeError', function() {
        expect(function() {
          array.getMatrixArr(3, 1.5);
        }).toThrowError(TypeError);
      });

      it('if parameter length is not 3, throw Error', function() {
        expect(function() {
          array.getMatrixArr(3, 3, 0, 0);
        }).toThrowError(Error);
      });

      it('if parameter 1, 1, 0', function() {
        expect(array.getMatrixArr(1, 1, 0)).toEqual([[0]]);
      });

      it('if parameter 1, 2, 0', function() {
        expect(array.getMatrixArr(1, 2, 0)).toEqual([[0, 0]]);
      });

      it('if parameter 2, 1, 0', function() {
        expect(array.getMatrixArr(2, 1, 0)).toEqual([[0], [0]]);
      });

      it('if parameter 2, 2, 0', function() {
        expect(array.getMatrixArr(2, 2, 0)).toEqual([[0, 0], [0, 0]]);
      });
    });

    describe('.binaryIndexOf()', function() {
      function compare(a, b) {
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
      }

      it('if array is not array, return -1', function() {
        expect(array.binaryIndexOf(99, 99)).toEqual(-1);
      });

      it('if array length is 0, return -1', function() {
        expect(array.binaryIndexOf([], 99)).toEqual(-1);
      });

      it('if there is not element in array, return -1', function() {
        var arr = [0, 2, 4, 6, 8, 1, 3, 5, 7, 9];
        arr.sort(compare);
        expect(array.binaryIndexOf(arr, 3.5)).toEqual(-1);
      });

      it('if elements in array are sorted, return index of element', function() {
        var arr = [0, 2, 4, 6, 8, 1, 3, 5, 7, 9];
        arr.sort(compare);
        expect(array.binaryIndexOf(arr, 7)).toEqual(7);
      });

      it('if elements in array are sorted, return index of element', function() {
        var arr = ['b', 'a', 'd', 'c', 'e', 'g', 'f'];
        arr.sort(compare);
        expect(array.binaryIndexOf(arr, 'c')).toEqual(2);
      });
    });

    describe('.getFirstObjectHasProperty()', function() {
      var arrayHasObjects = [];

      it('if 1st element is not array, return null', function() {
        arrayHasObjects = 1;
        expect(array.getFirstObjectHasProperty(arrayHasObjects, 'no', 1)).toEqual(null);
      });

      it('if array.length is 0, return null', function() {
        arrayHasObjects = [];
        expect(array.getFirstObjectHasProperty(arrayHasObjects, 'no', 1)).toEqual(null);
      });

      it('if propertyKey is not string, return null', function() {
        arrayHasObjects = [];
        expect(array.getFirstObjectHasProperty(arrayHasObjects, undefined, 1)).toEqual(null);
        expect(array.getFirstObjectHasProperty(arrayHasObjects, null, 1)).toEqual(null);
        expect(array.getFirstObjectHasProperty(arrayHasObjects, 1, 1)).toEqual(null);
        expect(array.getFirstObjectHasProperty(arrayHasObjects, [], 1)).toEqual(null);
      });

      it('if property key is "index", target value is 1, return null', function() {
        arrayHasObjects = [
          {
            no: 1
          },
          {
            no: 2
          }
        ];
        expect(array.getFirstObjectHasProperty(arrayHasObjects, 'index', 1)).toEqual(null);
        expect(array.getFirstObjectHasProperty(arrayHasObjects, 'index', new RegExp('^1'))).toEqual(null);
        expect(array.getFirstObjectHasProperty(arrayHasObjects, 'index', /^(1)\d/)).toEqual(null);
      });

      it('if property key is "no", target value is 11, return {no: 11}', function() {
        arrayHasObjects = [
          {
            no: 11
          },
          {
            no: 22
          }
        ];
        expect(array.getFirstObjectHasProperty(arrayHasObjects, 'no', 11)).toEqual({
          no: 11
        });
        expect(array.getFirstObjectHasProperty(arrayHasObjects, 'no', new RegExp('^1'))).toEqual({
          no: 11
        });
        expect(array.getFirstObjectHasProperty(arrayHasObjects, 'no', /^(1)\d/)).toEqual({
          no: 11
        });
      });
    });

    describe('.getIndexOfObjectHasProperty()', function() {
      // TODO:
    });

    describe('.overlappedConditionSortByProperty()', function() {
      it('return null when arrayHasObjects is not array.', function() {
        expect(array.overlappedConditionSortByProperty(null)).toEqual(null);
        expect(array.overlappedConditionSortByProperty(undefined)).toEqual(null);
        expect(array.overlappedConditionSortByProperty(99)).toEqual(null);
        expect(array.overlappedConditionSortByProperty('string')).toEqual(null);
        expect(array.overlappedConditionSortByProperty(false)).toEqual(null);
      });

      it('return clone array when arrayHasObjects has no element.', function() {
        expect(array.overlappedConditionSortByProperty([])).toEqual([]);
      });

      it('return clone array when arrayHasObjects has only one element.', function() {
        var arr = [
          {
            group: 1,
            level: 1,
            date: '2017-01-01T00:00:00.000Z'
          }
        ];
        expect(array.overlappedConditionSortByProperty(arr)).toEqual(arr);
      });

      it('return clone array when sortConditions is not array.', function() {
        var arr = [];

        beforeEach(function() {
          arr = [
            {
              group: 1,
              level: 1,
              date: '2017-01-01T00:00:00.000Z'
            }
          ];
        });

        expect(array.overlappedConditionSortByProperty(arr, null)).toEqual(arr);
        expect(array.overlappedConditionSortByProperty(arr, undefined)).toEqual(arr);
        expect(array.overlappedConditionSortByProperty(arr, 99)).toEqual(arr);
        expect(array.overlappedConditionSortByProperty(arr, 'string')).toEqual(arr);
        expect(array.overlappedConditionSortByProperty(arr, false)).toEqual(arr);
      });

      it('return clone array when sortConditions has no condition.', function() {
        var arr = [
          {
            group: 1,
            level: 1,
            date: '2017-01-01T00:00:00.000Z'
          }
        ];
        expect(array.overlappedConditionSortByProperty(arr, [])).toEqual(arr);
      });

      it('return sorted array when sortConditions has one condition.', function() {
        var arr = [
          {
            group: 1,
            level: 1,
            date: '2017-01-01T00:00:00.000Z'
          },
          {
            group: 1,
            level: 2,
            date: '2017-01-01T00:00:00.000Z'
          }
        ];

        expect(
          array.overlappedConditionSortByProperty(arr, [
            {
              property: 'level',
              func: function(a, b) {
                return b.level - a.level;
              }
            }
          ])
        ).toEqual(arr.reverse());
      });

      it('return sorted array when sortConditions has one condition.', function() {
        var arr = [
          {
            group: 1,
            level: 1,
            date: '2017-01-01T00:00:00.000Z'
          },
          {
            group: 1,
            level: 2,
            date: '2017-01-01T00:00:00.000Z'
          }
        ];

        expect(
          array.overlappedConditionSortByProperty(arr, [
            {
              property: 'level',
              func: function(a, b) {
                return b.level - a.level;
              }
            }
          ])
        ).toEqual(arr.reverse());
      });

      it('return sorted array when sortConditions has one condition.', function() {
        var arr = [
          {
            group: 1,
            level: 1,
            date: '2017-01-01T00:00:00.000Z'
          },
          {
            group: 1,
            level: 2,
            date: '2017-01-01T00:00:00.000Z'
          }
        ];

        expect(
          array.overlappedConditionSortByProperty(arr, [
            {
              property: 'level',
              func: function(a, b) {
                return a.level - b.level;
              }
            }
          ])
        ).toEqual(arr);

        arr = [
          {
            group: 2,
            level: 1,
            date: '2017-01-01T00:00:00.000Z'
          },
          {
            group: 2,
            level: 2,
            date: '2017-01-01T00:00:00.000Z'
          },
          {
            group: 2,
            level: 3,
            date: '2017-01-01T00:00:00.000Z'
          }
        ];

        expect(
          array.overlappedConditionSortByProperty(arr, [
            {
              property: 'level',
              func: function(a, b) {
                return b.level - a.level;
              }
            }
          ])
        ).toEqual(arr.reverse());

        arr = [
          {
            group: 3,
            level: 1,
            date: '2017-01-01T00:00:00.000Z'
          },
          {
            group: 3,
            level: 1,
            date: '2017-01-02T00:00:00.000Z'
          }
        ];

        expect(
          array.overlappedConditionSortByProperty(arr, [
            {
              property: 'date',
              func: function(a, b) {
                return new Date(a.date).getTime() - new Date(b.date).getTime();
              }
            }
          ])
        ).toEqual(arr);
      });

      it('return sorted array when sortConditions has two conditions.', function() {
        var arr = [
          {
            group: 1,
            level: 1,
            date: '2017-01-01T00:00:00.000Z'
          },
          {
            group: 2,
            level: 2,
            date: '2017-01-01T00:00:00.000Z'
          },
          {
            group: 2,
            level: 3,
            date: '2017-01-01T00:00:00.000Z'
          },
          {
            group: 1,
            level: 2,
            date: '2017-01-01T00:00:00.000Z'
          },
          {
            group: 2,
            level: 1,
            date: '2017-01-01T00:00:00.000Z'
          }
        ];

        var result = array.overlappedConditionSortByProperty(arr, [
          {
            property: 'group',
            func: function(a, b) {
              return a.group - b.group;
            }
          },
          {
            property: 'level',
            func: function(a, b) {
              return a.level - b.level;
            }
          }
        ]);

        expect(result).toEqual([
          {
            group: 1,
            level: 1,
            date: '2017-01-01T00:00:00.000Z'
          },
          {
            group: 1,
            level: 2,
            date: '2017-01-01T00:00:00.000Z'
          },
          {
            group: 2,
            level: 1,
            date: '2017-01-01T00:00:00.000Z'
          },
          {
            group: 2,
            level: 2,
            date: '2017-01-01T00:00:00.000Z'
          },
          {
            group: 2,
            level: 3,
            date: '2017-01-01T00:00:00.000Z'
          }
        ]);
      });

      it('return sorted array when sortConditions has three conditions.', function() {
        var arr = [
          {
            group: 3,
            level: 1,
            date: '2017-02-04T00:00:00.000Z'
          },
          {
            group: 1,
            level: 1,
            date: '2017-01-01T00:00:00.000Z'
          },
          {
            group: 2,
            level: 3,
            date: '2017-01-01T00:00:00.000Z'
          },
          {
            group: 3,
            level: 1,
            date: '2017-01-03T00:00:00.000Z'
          },
          {
            group: 2,
            level: 1,
            date: '2017-01-01T00:00:00.000Z'
          },
          {
            group: 4,
            level: 1,
            date: '2017-01-01T00:00:00.000Z'
          },
          {
            group: 3,
            level: 2,
            date: '2017-01-03T00:00:00.000Z'
          },
          {
            group: 1,
            level: 2,
            date: '2017-01-01T00:00:00.000Z'
          },
          {
            group: 3,
            level: 2,
            date: '2017-02-04T00:00:00.000Z'
          },
          {
            group: 2,
            level: 2,
            date: '2017-01-01T00:00:00.000Z'
          }
        ];

        var result = array.overlappedConditionSortByProperty(arr, [
          {
            property: 'group',
            func: function(a, b) {
              return a.group - b.group;
            }
          },
          {
            property: 'level',
            func: function(a, b) {
              return a.level - b.level;
            }
          },
          {
            property: 'date',
            func: function(a, b) {
              return new Date(a.date).getTime() - new Date(b.date).getTime();
            }
          }
        ]);

        expect(result).toEqual([
          {
            group: 1,
            level: 1,
            date: '2017-01-01T00:00:00.000Z'
          },
          {
            group: 1,
            level: 2,
            date: '2017-01-01T00:00:00.000Z'
          },

          {
            group: 2,
            level: 1,
            date: '2017-01-01T00:00:00.000Z'
          },
          {
            group: 2,
            level: 2,
            date: '2017-01-01T00:00:00.000Z'
          },
          {
            group: 2,
            level: 3,
            date: '2017-01-01T00:00:00.000Z'
          },

          {
            group: 3,
            level: 1,
            date: '2017-01-03T00:00:00.000Z'
          },
          {
            group: 3,
            level: 1,
            date: '2017-02-04T00:00:00.000Z'
          },

          {
            group: 3,
            level: 2,
            date: '2017-01-03T00:00:00.000Z'
          },
          {
            group: 3,
            level: 2,
            date: '2017-02-04T00:00:00.000Z'
          },

          {
            group: 4,
            level: 1,
            date: '2017-01-01T00:00:00.000Z'
          }
        ]);
      });
    });
  });
});
