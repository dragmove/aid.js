"use strict";

describe('aid.js', function () {
  describe('aid.math', function () {
    var math = aid.math;

    describe('.getSizeAspectFill()', function () {
      it('input arguments are not Number type, throw TypeError.', function () {
        expect(function () {
          math.getSizeAspectFill(undefined)
        }).toThrowError(TypeError);

        expect(function () {
          math.getSizeAspectFill(null)
        }).toThrowError(TypeError);

        expect(function () {
          math.getSizeAspectFill(false)
        }).toThrowError(TypeError);

        expect(function () {
          math.getSizeAspectFill(true)
        }).toThrowError(TypeError);

        expect(function () {
          math.getSizeAspectFill('')
        }).toThrowError(TypeError);

        expect(function () {
          math.getSizeAspectFill({})
        }).toThrowError(TypeError);

        expect(function () {
          math.getSizeAspectFill([])
        }).toThrowError(TypeError);

        expect(function () {
          math.getSizeAspectFill(function () {
          })
        }).toThrowError(TypeError);

        expect(function () {
          math.getSizeAspectFill(new RegExp('^aid'))
        }).toThrowError(TypeError);

        expect(function () {
          math.getSizeAspectFill(/^aid/)
        }).toThrowError(TypeError);
      });

      // TODO
    });

    describe('.getSizeAspectFit()', function () {
      it('input arguments are not Number type, throw TypeError.', function () {
        expect(function () {
          math.getSizeAspectFit(undefined)
        }).toThrowError(TypeError);

        expect(function () {
          math.getSizeAspectFit(null)
        }).toThrowError(TypeError);

        expect(function () {
          math.getSizeAspectFit(false)
        }).toThrowError(TypeError);

        expect(function () {
          math.getSizeAspectFit(true)
        }).toThrowError(TypeError);

        expect(function () {
          math.getSizeAspectFit('')
        }).toThrowError(TypeError);

        expect(function () {
          math.getSizeAspectFit({})
        }).toThrowError(TypeError);

        expect(function () {
          math.getSizeAspectFit([])
        }).toThrowError(TypeError);

        expect(function () {
          math.getSizeAspectFit(function () {
          })
        }).toThrowError(TypeError);

        expect(function () {
          math.getSizeAspectFit(new RegExp('^aid'))
        }).toThrowError(TypeError);

        expect(function () {
          math.getSizeAspectFit(/^aid/)
        }).toThrowError(TypeError);
      });

      // TODO
    });

    describe('.getSizeWidthFit()', function () {
      it('input arguments are not Number type, throw TypeError.', function () {
        expect(function () {
          math.getSizeWidthFit(undefined)
        }).toThrowError(TypeError);

        expect(function () {
          math.getSizeWidthFit(null)
        }).toThrowError(TypeError);

        expect(function () {
          math.getSizeWidthFit(false)
        }).toThrowError(TypeError);

        expect(function () {
          math.getSizeWidthFit(true)
        }).toThrowError(TypeError);

        expect(function () {
          math.getSizeWidthFit('')
        }).toThrowError(TypeError);

        expect(function () {
          math.getSizeWidthFit({})
        }).toThrowError(TypeError);

        expect(function () {
          math.getSizeWidthFit([])
        }).toThrowError(TypeError);

        expect(function () {
          math.getSizeWidthFit(function () {
          })
        }).toThrowError(TypeError);

        expect(function () {
          math.getSizeWidthFit(new RegExp('^aid'))
        }).toThrowError(TypeError);

        expect(function () {
          math.getSizeWidthFit(/^aid/)
        }).toThrowError(TypeError);
      });

      // TODO
    });

    describe('.isEpsilonEqual()', function () {
      it('input arguments are not Number type, throw TypeError.', function () {
        expect(function () {
          math.getSizeWidthFit(undefined)
        }).toThrowError(TypeError);

        expect(function () {
          math.getSizeWidthFit(null)
        }).toThrowError(TypeError);

        expect(function () {
          math.getSizeWidthFit(false)
        }).toThrowError(TypeError);

        expect(function () {
          math.getSizeWidthFit(true)
        }).toThrowError(TypeError);

        expect(function () {
          math.getSizeWidthFit('')
        }).toThrowError(TypeError);

        expect(function () {
          math.getSizeWidthFit({})
        }).toThrowError(TypeError);

        expect(function () {
          math.getSizeWidthFit([])
        }).toThrowError(TypeError);

        expect(function () {
          math.getSizeWidthFit(function () {
          })
        }).toThrowError(TypeError);

        expect(function () {
          math.getSizeWidthFit(new RegExp('^aid'))
        }).toThrowError(TypeError);

        expect(function () {
          math.getSizeWidthFit(/^aid/)
        }).toThrowError(TypeError);
      });

      // TODO
    });

    describe('.isIndexInLoop()', function () {
      it('throw Error, input 1 or 2 or 3 parameters.', function () {
        expect(function () {
          math.isIndexInLoop(8)
        }).toThrowError(Error);

        expect(function () {
          math.isIndexInLoop(8, 5)
        }).toThrowError(Error);

        expect(function () {
          math.isIndexInLoop(8, 5, 6)
        }).toThrowError(Error);
      });

      it('throw TypeError, input arguments are not Number type.', function () {
        expect(function () {
          math.isIndexInLoop(8, 5, 6, undefined)
        }).toThrowError(TypeError);

        expect(function () {
          math.isIndexInLoop(8, 5, 6, null)
        }).toThrowError(TypeError);

        expect(function () {
          math.isIndexInLoop(8, 5, 6, false)
        }).toThrowError(TypeError);

        expect(function () {
          math.isIndexInLoop(8, 5, 6, true)
        }).toThrowError(TypeError);

        expect(function () {
          math.isIndexInLoop(8, 5, 6, '')
        }).toThrowError(TypeError);

        expect(function () {
          math.isIndexInLoop(8, 5, 6, {})
        }).toThrowError(TypeError);

        expect(function () {
          math.isIndexInLoop(8, 5, 6, [])
        }).toThrowError(TypeError);

        expect(function () {
          math.isIndexInLoop(8, 5, 6, function () {
          })
        }).toThrowError(TypeError);

        expect(function () {
          math.isIndexInLoop(8, 5, 6, new RegExp('^aid'))
        }).toThrowError(TypeError);

        expect(function () {
          math.isIndexInLoop(8, 5, 6, /^aid/)
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
          math.getLoopedLastIndex(8)
        }).toThrowError(Error);

        expect(function () {
          math.getLoopedLastIndex(8, 1)
        }).toThrowError(Error);
      });

      it('throw TypeError, input arguments are not Number type.', function () {
        expect(function () {
          math.getLoopedLastIndex(8, 1, undefined)
        }).toThrowError(TypeError);

        expect(function () {
          math.getLoopedLastIndex(8, 1, null)
        }).toThrowError(TypeError);

        expect(function () {
          math.getLoopedLastIndex(8, 1, false)
        }).toThrowError(TypeError);

        expect(function () {
          math.getLoopedLastIndex(8, 1, true)
        }).toThrowError(TypeError);

        expect(function () {
          math.getLoopedLastIndex(8, 1, '')
        }).toThrowError(TypeError);

        expect(function () {
          math.getLoopedLastIndex(8, 1, {})
        }).toThrowError(TypeError);

        expect(function () {
          math.getLoopedLastIndex(8, 1, [])
        }).toThrowError(TypeError);

        expect(function () {
          math.getLoopedLastIndex(8, 1, function () {
          })
        }).toThrowError(TypeError);

        expect(function () {
          math.getLoopedLastIndex(8, 1, new RegExp('^aid'))
        }).toThrowError(TypeError);

        expect(function () {
          math.getLoopedLastIndex(8, 1, /^aid/)
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
          math.getReverseLoopedFirstIndex(8)
        }).toThrowError(Error);

        expect(function () {
          math.getReverseLoopedFirstIndex(8, 1)
        }).toThrowError(Error);
      });

      it('throw TypeError, input arguments are not Number type.', function () {
        expect(function () {
          math.getReverseLoopedFirstIndex(8, 1, undefined)
        }).toThrowError(TypeError);

        expect(function () {
          math.getReverseLoopedFirstIndex(8, 1, null)
        }).toThrowError(TypeError);

        expect(function () {
          math.getReverseLoopedFirstIndex(8, 1, false)
        }).toThrowError(TypeError);

        expect(function () {
          math.getReverseLoopedFirstIndex(8, 1, true)
        }).toThrowError(TypeError);

        expect(function () {
          math.getReverseLoopedFirstIndex(8, 1, '')
        }).toThrowError(TypeError);

        expect(function () {
          math.getReverseLoopedFirstIndex(8, 1, {})
        }).toThrowError(TypeError);

        expect(function () {
          math.getReverseLoopedFirstIndex(8, 1, [])
        }).toThrowError(TypeError);

        expect(function () {
          math.getReverseLoopedFirstIndex(8, 1, function () {
          })
        }).toThrowError(TypeError);

        expect(function () {
          math.getReverseLoopedFirstIndex(8, 1, new RegExp('^aid'))
        }).toThrowError(TypeError);

        expect(function () {
          math.getReverseLoopedFirstIndex(8, 1, /^aid/)
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
          math.factorial(undefined)
        }).toThrowError(TypeError);

        expect(function () {
          math.factorial(null)
        }).toThrowError(TypeError);

        expect(function () {
          math.factorial(false)
        }).toThrowError(TypeError);

        expect(function () {
          math.factorial(true)
        }).toThrowError(TypeError);

        expect(function () {
          math.factorial('')
        }).toThrowError(TypeError);

        expect(function () {
          math.factorial(0.5)
        }).toThrowError(TypeError);

        expect(function () {
          math.factorial({})
        }).toThrowError(TypeError);

        expect(function () {
          math.factorial([])
        }).toThrowError(TypeError);

        expect(function () {
          math.factorial(function () {
          })
        }).toThrowError(TypeError);

        expect(function () {
          math.factorial(new RegExp('^aid'))
        }).toThrowError(TypeError);

        expect(function () {
          math.factorial(/^aid/)
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
  });
});