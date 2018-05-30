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
      // TODO:
    });

    describe('.Nothing()', function() {
      // TODO:
    });

    describe('.Just()', function() {
      // TODO:
    });

    describe('.Maybe()', function() {
      // TODO:
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
