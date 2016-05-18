'use strict';
describe('aid.js', function () {
  // sample - http://jasmine.github.io/2.0/introduction.html

  describe('aid.string', function () {
    var string = aid.string;
    
    describe('.trim()', function () {
      it('input "", return "".', function () {
        expect(string.trim("")).toEqual("");
      });

      it('input "   foo", return "foo".', function () {
        expect(string.trim("   foo")).toEqual("foo");
      });

      it('input "foo   ", return "foo".', function () {
        expect(string.trim("foo   ")).toEqual("foo");
      });

      it('input "   foo   ", return "foo".', function () {
        expect(string.trim("   foo   ")).toEqual("foo");
      });
    });

    describe('.isEmail()', function () {
      it('input "dragmove@naver.com", return true.', function () {
        expect(string.isEmail("dragmove@naver.com")).toEqual(true);
      });

      it('input "dragmove@gmail.com", return true.', function () {
        expect(string.isEmail("dragmove@gmail.com")).toEqual(true);
      });

      it('input "dragmove@daum.net", return true.', function () {
        expect(string.isEmail("dragmove@daum.net")).toEqual(true);
      });

      it('input "dragmove@yopmail.com", return true.', function () {
        expect(string.isEmail("dragmove@yopmail.com")).toEqual(true);
      });

      it('input "dragmove@yahoo.co.kr", return true.', function () {
        expect(string.isEmail("dragmove@yahoo.co.kr")).toEqual(true);
      });

      it('input "dragmove@hotmail.com", return true.', function () {
        expect(string.isEmail("dragmove@hotmail.com")).toEqual(true);
      });
    });

    describe('.isIFrame()', function () {
      it('input <iframe src=""></iframe>, return true.', function () {
        expect(string.isIFrame('<iframe src=""></iframe>')).toEqual(true);
      });
    });
  });
});