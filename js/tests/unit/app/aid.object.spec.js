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
  });
});
