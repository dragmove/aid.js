"use strict";
describe('aid.js', function () {
  // sample - http://jasmine.github.io/2.0/introduction.html

  describe('aid.string', function () {
    var string = aid.string;
    console.log('string :', string);

    describe('.trim()', function () {
      it('input "", return "".', function () {
        expect( string.trim("") ).toEqual("");
      });

      it('input "   foo", return "foo".', function () {
        expect( string.trim("   foo") ).toEqual("foo");
      });

      it('input "foo   ", return "foo".', function () {
        expect( string.trim("foo   ") ).toEqual("foo");
      });

      it('input "   foo   ", return "foo".', function () {
        expect( string.trim("   foo   ") ).toEqual("foo");
      });
    });

    describe('.hasUniqueChars()', function () {
      it('input "abcdefghijklmnopqrstuvwxyz", return true.', function () {
        expect( string.hasUniqueChars("abcdefghijklmnopqrstuvwxyz") ).toEqual(true);
      });

      it('input "abcdefghijklmnopqrstuvwxyzz", return false.', function () {
        expect( string.hasUniqueChars("abcdefghijklmnopqrstuvwxyzz") ).toEqual(false);
      });

      it('input "123451", return false.', function () {
        expect( string.hasUniqueChars("123451") ).toEqual(false);
      });
    });

    describe('.isEmail()', function () {
      it('input "dragmove@naver.com", return true.', function () {
        expect( string.isEmail("dragmove@naver.com") ).toEqual(true);
      });

      it('input "dragmove@gmail.com", return true.', function () {
        expect( string.isEmail("dragmove@gmail.com") ).toEqual(true);
      });

      it('input "dragmove@daum.net", return true.', function () {
        expect( string.isEmail("dragmove@daum.net") ).toEqual(true);
      });

      it('input "dragmove@yopmail.com", return true.', function () {
        expect( string.isEmail("dragmove@yopmail.com") ).toEqual(true);
      });

      it('input "dragmove@yahoo.co.kr", return true.', function () {
        expect( string.isEmail("dragmove@yahoo.co.kr") ).toEqual(true);
      });

      it('input "dragmove@hotmail.com", return true.', function () {
        expect( string.isEmail("dragmove@hotmail.com") ).toEqual(true);
      });
    });

    describe('.isIFrame()', function () {
      it('input <iframe src=""></iframe>, return true.', function () {
        expect( string.isIFrame('<iframe src=""></iframe>') ).toEqual(true);
      });
    });

    describe('.getUriParam()', function () {
      var uri = 'http://www.google.com?name=foo&age=99&address=seoul';

      it('get "" from "", return ""', function () {
        expect( string.getUriParam('', '') ).toEqual('');
      });

      it('get "" from "http://www.google.com?name=foo&age=99&address=seoul", return ""', function () {
        expect( string.getUriParam(uri, '') ).toEqual('');
      });

      it('get name from "http://www.google.com?name=foo&age=99&address=seoul", return "foo"', function () {
        expect( string.getUriParam(uri, 'name') ).toEqual('foo');
      });

      it('get age from "http://www.google.com?name=foo&age=99&address=seoul", return "seoul"', function () {
        expect( string.getUriParam(uri, 'age') ).toEqual('99');
      });

      it('get address from "http://www.google.com?name=foo&age=99&address=seoul", return "seoul"', function () {
        expect( string.getUriParam(uri, 'address') ).toEqual('seoul');
      });

      it('get noneParamName from "http://www.google.com?name=foo&age=99&address=seoul", return ""', function () {
        expect( string.getUriParam(uri, 'noneParamName') ).toEqual('');
      });
    });

    describe('.getUriParams()', function () {
      it('get params from "", return null', function () {
        expect( string.getUriParams('') ).toEqual(null);
      });

      it('get params from "http://www.google.com", return null', function () {
        expect( string.getUriParams('http://www.google.com') ).toEqual(null);
      });

      it('get params from "http://www.google.com?name=foo", return {name:"foo"}', function () {
        expect( string.getUriParams('http://www.google.com?name=foo') ).toEqual({
          name: 'foo'
        });
      });

      it('get params from "http://www.google.com?name=foo&age=99&address=seoul", return {name: "foo", age: "99", address: "seoul"}', function () {
        var uri = 'http://www.google.com?name=foo&age=99&address=seoul';
        expect( string.getUriParams(uri) ).toEqual({
          name: 'foo',
          age: '99',
          address: 'seoul'
        });
      });
    });

    describe('.getUriCombinedParams()', function () {
      it('combine "" and {}, return ""', function () {
        expect( string.getUriCombinedParams('', {}) ).toEqual("");
      });

      it('combine "http://www.google.com" and {}, return "http://www.google.com"', function () {
        expect( string.getUriCombinedParams('http://www.google.com', {}) ).toEqual("http://www.google.com");
      });

      it('combine "http://www.google.com" and {name: "foo"}, return "http://www.google.com?name=foo"', function () {
        expect( string.getUriCombinedParams('http://www.google.com', {name: "foo"}) ).toEqual("http://www.google.com?name=foo");
      });

      it('combine "http://www.google.com" and {name: "foo", age: "99", address: "seoul"}, return "http://www.google.com?name=foo&age=99&address=seoul"', function () {
        var params = {
          name: "foo", 
          age: "99", 
          address: "seoul"
        };
        expect( string.getUriCombinedParams('http://www.google.com', params) ).toEqual("http://www.google.com?name=foo&age=99&address=seoul");
      });
    });
    
    describe('.isValidYoutubeVideoId()', function () {
      // TODO

      /*
      it('input "", return false', function () {
        expect( string.isValidYoutubeVideoId('') ).toEqual(false);
      });

      it('input gathered youtube ids, return true', function () {
        expect( string.isValidYoutubeVideoId('0lUSlV37-f8') ).toEqual(true);
        expect( string.isValidYoutubeVideoId('QYhgIUi4kyc') ).toEqual(true);
        expect( string.isValidYoutubeVideoId('2xhXTk0GW5A') ).toEqual(true);
        expect( string.isValidYoutubeVideoId('Tl5toysUhzk') ).toEqual(true);
        expect( string.isValidYoutubeVideoId('_cBo5qlczV0') ).toEqual(true);
        expect( string.isValidYoutubeVideoId('GZjt_sA2eso') ).toEqual(true);
        expect( string.isValidYoutubeVideoId('sno_genwMz8') ).toEqual(true);
        expect( string.isValidYoutubeVideoId('A_4iqJn_OuM') ).toEqual(true);
        expect( string.isValidYoutubeVideoId('9R-VcUReR8s') ).toEqual(true);
        expect( string.isValidYoutubeVideoId('DAz_W_W7C9U') ).toEqual(true);
      });
      */
    });

    describe('.getObjCheckYoutubeURI()', function () {
      // TODO
    });

    describe('.getObjCheckTwitchURI()', function () {
      // TODO
    });

    describe('.getDocumentPrefixedProperty()', function() {
      it('input ("visibilityState", true) return "" when document does not have "visibilityState" property.', function () {
        expect( string.getDocumentPrefixedProperty('visibilityState', true) ).toEqual('');
      });
    });

    describe('.getElementPrefixedStyle()', function() {
      it('input ("transform", true) return "webkitTransform" when browser is based on webkit.', function () {
        expect( string.getElementPrefixedStyle('transform', true) ).toEqual('webkitTransform');
      });
    });
  });
});