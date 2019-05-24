'use strict';

describe('aid.js', function() {
  describe('aid.object', function() {
    var object = aid.object;

    describe('.isEmpty()', function() {
      it('input argument is not Object type, throw TypeError.', function() {
        expect(function() {
          object.isEmpty(undefined);
        }).toThrowError(TypeError);

        expect(function() {
          object.isEmpty(null);
        }).toThrowError(TypeError);

        expect(function() {
          object.isEmpty(false);
        }).toThrowError(TypeError);

        expect(function() {
          object.isEmpty(true);
        }).toThrowError(TypeError);

        expect(function() {
          object.isEmpty(0);
        }).toThrowError(TypeError);

        expect(function() {
          object.isEmpty({});
        }).not.toThrowError(TypeError);

        expect(function() {
          object.isEmpty([]);
        }).toThrowError(TypeError);

        expect(function() {
          object.isEmpty(function() {});
        }).toThrowError(TypeError);

        expect(function() {
          object.isEmpty(new RegExp('^aid'));
        }).toThrowError(TypeError);

        expect(function() {
          object.isEmpty(/^aid/);
        }).toThrowError(TypeError);
      });

      it('input {}, return true', function() {
        expect(object.isEmpty({})).toEqual(true);
      });

      it('input {name: "foo"}, return false', function() {
        expect(object.isEmpty({ name: 'foo' })).toEqual(false);
      });
    });

    describe('.keys()', function() {
      it('input argument is not Object or Function type, throw TypeError.', function() {
        expect(function() {
          object.keys(undefined);
        }).toThrowError(TypeError);

        expect(function() {
          object.keys(null);
        }).toThrowError(TypeError);

        expect(function() {
          object.keys(false);
        }).toThrowError(TypeError);

        expect(function() {
          object.keys(true);
        }).toThrowError(TypeError);

        expect(function() {
          object.keys(0);
        }).toThrowError(TypeError);

        expect(function() {
          object.keys('aid');
        }).toThrowError(TypeError);

        expect(function() {
          object.keys({});
        }).not.toThrowError(TypeError);

        expect(function() {
          object.keys([]);
        }).toThrowError(TypeError);

        expect(function() {
          object.keys(function() {});
        }).not.toThrowError(TypeError);

        expect(function() {
          object.keys(new RegExp('^aid'));
        }).toThrowError(TypeError);

        expect(function() {
          object.keys(/^aid/);
        }).toThrowError(TypeError);
      });

      it('input {}, return []', function() {
        expect(object.keys({})).toEqual([]);
      });

      it('input {name: "foo", job: "programmer", works: [{id: 1, year: 1999}]}, return ["name", "job", "works"]', function() {
        expect(
          object.keys({
            name: 'foo',
            job: 'programmer',
            works: [{ id: 1, year: 1999 }]
          })
        ).toEqual(['name', 'job', 'works']);
      });

      it('input function has "nick", "job" props, return ["nick", "job"]', function() {
        var func = function() {};
        func.nick = 'foo';
        func.job = 'programmer';

        expect(object.keys(func)).toEqual(['nick', 'job']);
      });
    });

    describe('.shallowEqual()', function() {
      var array = [],
        func = function() {},
        regex = new RegExp('^aid'),
        regexLiteral = /^aid/;

      it('input equal arguments, return true', function() {
        // compare primitive values
        expect(object.shallowEqual(undefined, undefined)).toEqual(true);

        expect(object.shallowEqual(null, null)).toEqual(true);

        expect(object.shallowEqual(false, false)).toEqual(true);

        expect(object.shallowEqual(true, true)).toEqual(true);

        expect(object.shallowEqual(0, 0)).toEqual(true);

        expect(object.shallowEqual('aid', 'aid')).toEqual(true);

        // compare objects
        expect(object.shallowEqual({}, {})).toEqual(true);

        // compare equality of non-primitive values
        expect(object.shallowEqual(array, array)).toEqual(true);

        expect(object.shallowEqual(func, func)).toEqual(true);

        expect(object.shallowEqual(regex, regex)).toEqual(true);

        expect(object.shallowEqual(regexLiteral, regexLiteral)).toEqual(true);

        // compare neither primitive values nor object
        expect(object.shallowEqual([], [])).toEqual(false);

        expect(object.shallowEqual(function() {}, function() {})).toEqual(false);

        expect(object.shallowEqual(new RegExp('^aid'), new RegExp('^aid'))).toEqual(false);

        expect(object.shallowEqual(/^aid/, /^aid/)).toEqual(false);
      });

      it('compare {id: 99, name: "foo", job: undefined, issue: null, hasMoney: false} objects, return true', function() {
        var objA = {
            id: 99,
            name: 'foo',
            job: undefined,
            issue: null,
            hasMoney: false
          },
          objB = {
            id: 99,
            name: 'foo',
            job: undefined,
            issue: null,
            hasMoney: false
          };

        expect(object.shallowEqual(objA, objB)).toEqual(true);
      });

      it('compare {datas: []} objects, return false', function() {
        var objA = { datas: [] },
          objB = { datas: [] };

        expect(object.shallowEqual(objA, objB)).toEqual(false);
      });
    });
  });
});
