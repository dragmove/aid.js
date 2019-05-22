'use strict';

describe('aid.js', function() {
  describe('aid.monad', function() {
    var monad = aid.monad;

    describe('.Identity()', function() {
      // TODO:
    });

    describe('.Empty()', function() {
      // TODO:
    });

    describe('.Wrapper()', function() {
      var Wrapper = monad.Wrapper;

      it('of static method return Wrapper instance.', function() {
        expect(Wrapper.of('aid.js') instanceof Wrapper).toEqual(true);
      });

      it('map method return result Wrapper instance.', function() {
        expect(Wrapper.of('aid.js').map(aid.identity) instanceof Wrapper).toEqual(true);
      });

      it('join method return Wrapper flattened.', function() {
        expect(
          Wrapper.of('aid.js')
            .join()
            .get()
        ).toEqual('aid.js');

        expect(
          Wrapper.of(Wrapper.of('aid.js'))
            .join()
            .get()
        ).toEqual('aid.js');

        expect(
          Wrapper.of(Wrapper.of(Wrapper.of('aid.js')))
            .join()
            .get()
        ).toEqual('aid.js');
      });

      it('get method return Wrapped value.', function() {
        expect(Wrapper.of('aid.js').get()).toEqual('aid.js');
      });
    });

    describe('.Nothing()', function() {
      // TODO:
    });

    describe('.Just()', function() {
      // TODO:
    });

    describe('.Maybe()', function() {
      var Maybe = monad.Maybe;

      it('just static method return Just instance.', function() {
        expect(Maybe.just(99) instanceof monad.Just).toEqual(true);
      });

      it('nothing static method return Nothing instance.', function() {
        expect(Maybe.nothing() instanceof monad.Nothing).toEqual(true);
      });

      it('of static method return Just instance.', function() {
        expect(Maybe.of(99) instanceof monad.Just).toEqual(true);
      });

      it('fromNullable static method return Just instance if value argument is not undefined/null.', function() {
        expect(Maybe.fromNullable(99) instanceof monad.Just).toEqual(true);
      });

      it('fromNullable static method return Nothing instance if value argument is undefined or null.', function() {
        expect(Maybe.fromNullable(undefined) instanceof monad.Nothing).toEqual(true);
        expect(Maybe.fromNullable(null) instanceof monad.Nothing).toEqual(true);
      });

      /*
      var url = 'http://www.google.com';
      // var url = 'http://www.google.com?name=aid.js&language=javascript';

      var safeParams = aid.curry(function(uri) { return monad.Maybe.fromNullable(aid.string.getUriParams(uri)); });
      var safeName = safeParams(url).map(function(params) { return params.name; });

      // throw error when access value of Nothing.
      // console.log('safeName :', safeName.value());

      var name = safeName.getOrElse('no_name'); // 'no_name'
      console.log('name :', name);
      */

      /* 
      // es2015
      var safeParams = aid.curry(uri => monad.Maybe.fromNullable(aid.string.getUriParams(uri)));
      var name = safeParams(url).map(params => params.name).getOrElse('no_name');
      console.log('name :', name); 
      */
    });

    describe('.Left()', function() {
      // TODO:
    });

    describe('.Right()', function() {
      // TODO:
    });

    describe('.Either()', function() {
      var Either = monad.Either;

      it('left static method return Left instance.', function() {
        expect(Either.left(99) instanceof monad.Left).toEqual(true);
      });

      it('right static method return Right instance.', function() {
        expect(Either.right(99) instanceof monad.Right).toEqual(true);
      });

      it('fromNullable static method return Left instance when input undefined or null.', function() {
        expect(Either.fromNullable(null) instanceof monad.Left).toEqual(true);
      });

      it('fromNullable static method return Right instance when input defined value.', function() {
        expect(Either.fromNullable('aid.js') instanceof monad.Right).toEqual(true);
      });

      it('of static method return Right instance.', function() {
        expect(Either.of(99) instanceof monad.Right).toEqual(true);
      });
    });

    describe('.IO()', function() {
      var IO = monad.IO;

      it('effect argument is not Function type, throw TypeError.', function() {
        var ERROR_MSG = '[aid.monad.IO] Type of effect parameter must be Function.';

        expect(function() {
          IO(undefined);
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          IO(null);
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          IO(false);
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          IO(true);
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          IO(0);
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          IO({});
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          IO([]);
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          IO(function() {});
        }).not.toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          IO(new RegExp('^aid'));
        }).toThrowError(TypeError, ERROR_MSG);

        expect(function() {
          IO(/^aid/);
        }).toThrowError(TypeError, ERROR_MSG);
      });

      it('of static method return IO instance.', function() {
        expect(IO.of(99) instanceof monad.IO).toEqual(true);
      });

      it('from static method return IO instance.', function() {
        expect(IO.from(function() {}) instanceof monad.IO).toEqual(true);
      });

      // TODO: map, chain, run methods
    });

    /*
    // null check anti pattern
    function getCountry(student) {
      let school = student.school();

      if (school !== null) {
        let addr = school.address();
        if (addr !== null) {
          return addr.country();
        }
      }

      return 'no exist country';
    }

    // monad pattern
    const getCountry = student =>
      student
        .map(R.prop('school'))
        .map(R.prop('address'))
        .map(R.prop('country'))
        .getOrElse('no exist country');
    */
  });
});
