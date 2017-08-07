"use strict";

describe('aid.js', function () {
  describe('aid.string', function () {
    var string = aid.string;

    describe('.trim()', function () {
      it('input argument is not String type, throw TypeError.', function () {
        expect(function () {
          string.trim(undefined);
        }).toThrowError(TypeError);

        expect(function () {
          string.trim(null);
        }).toThrowError(TypeError);

        expect(function () {
          string.trim(false);
        }).toThrowError(TypeError);

        expect(function () {
          string.trim(true);
        }).toThrowError(TypeError);

        expect(function () {
          string.trim(0);
        }).toThrowError(TypeError);

        expect(function () {
          string.trim({});
        }).toThrowError(TypeError);

        expect(function () {
          string.trim([]);
        }).toThrowError(TypeError);

        expect(function () {
          string.trim(function () {
          });
        }).toThrowError(TypeError);

        expect(function () {
          string.trim(new RegExp('^aid'));
        }).toThrowError(TypeError);

        expect(function () {
          string.trim(/^aid/);
        }).toThrowError(TypeError);
      });

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

    describe('.hasUniqueChars()', function () {
      it('input argument is not String type, throw TypeError.', function () {
        expect(function () {
          string.hasUniqueChars(undefined)
        }).toThrowError(TypeError);

        expect(function () {
          string.hasUniqueChars(null)
        }).toThrowError(TypeError);

        expect(function () {
          string.hasUniqueChars(false)
        }).toThrowError(TypeError);

        expect(function () {
          string.hasUniqueChars(true)
        }).toThrowError(TypeError);

        expect(function () {
          string.hasUniqueChars(0)
        }).toThrowError(TypeError);

        expect(function () {
          string.hasUniqueChars({})
        }).toThrowError(TypeError);

        expect(function () {
          string.hasUniqueChars([])
        }).toThrowError(TypeError);

        expect(function () {
          string.hasUniqueChars(function () {
          })
        }).toThrowError(TypeError);

        expect(function () {
          string.hasUniqueChars(new RegExp('^aid'))
        }).toThrowError(TypeError);

        expect(function () {
          string.hasUniqueChars(/^aid/)
        }).toThrowError(TypeError);
      });

      it('input "abcdefghijklmnopqrstuvwxyz", return true.', function () {
        expect(string.hasUniqueChars("abcdefghijklmnopqrstuvwxyz")).toEqual(true);
      });

      it('input "abcdefghijklmnopqrstuvwxyzz", return false.', function () {
        expect(string.hasUniqueChars("abcdefghijklmnopqrstuvwxyzz")).toEqual(false);
      });

      it('input "123451", return false.', function () {
        expect(string.hasUniqueChars("123451")).toEqual(false);
      });
    });

    describe('.getFileExtension()', function () {
      it('input argument is not String type, throw TypeError.', function () {
        expect(function () {
          string.getFileExtension(undefined);
        }).toThrowError(TypeError);

        expect(function () {
          string.getFileExtension(null);
        }).toThrowError(TypeError);

        expect(function () {
          string.getFileExtension(false);
        }).toThrowError(TypeError);

        expect(function () {
          string.getFileExtension(true);
        }).toThrowError(TypeError);

        expect(function () {
          string.getFileExtension(0);
        }).toThrowError(TypeError);

        expect(function () {
          string.getFileExtension({});
        }).toThrowError(TypeError);

        expect(function () {
          string.getFileExtension([]);
        }).toThrowError(TypeError);

        expect(function () {
          string.getFileExtension(function () {
          });
        }).toThrowError(TypeError);

        expect(function () {
          string.getFileExtension(new RegExp('^aid'));
        }).toThrowError(TypeError);

        expect(function () {
          string.getFileExtension(/^aid/);
        }).toThrowError(TypeError);
      });

      it('input "", return "".', function () {
        expect(string.getFileExtension('')).toEqual('');
      });

      it('input "aid.png", return "png".', function () {
        expect(string.getFileExtension("aid.png")).toEqual('png');
      });

      it('input "aid.jpg", return "jpg".', function () {
        expect(string.getFileExtension("aid.jpg")).toEqual('jpg');
      });

      it('input "aid.js.jpg", return "jpg".', function () {
        expect(string.getFileExtension("aid.js.jpg")).toEqual('jpg');
      });
    });

    describe('.isEmail()', function () {
      it('input argument is not String type, throw TypeError.', function () {
        expect(function () {
          string.getFileExtension(undefined);
        }).toThrowError(TypeError);

        expect(function () {
          string.getFileExtension(null);
        }).toThrowError(TypeError);

        expect(function () {
          string.getFileExtension(false);
        }).toThrowError(TypeError);

        expect(function () {
          string.getFileExtension(true);
        }).toThrowError(TypeError);

        expect(function () {
          string.getFileExtension(0);
        }).toThrowError(TypeError);

        expect(function () {
          string.getFileExtension({});
        }).toThrowError(TypeError);

        expect(function () {
          string.getFileExtension([]);
        }).toThrowError(TypeError);

        expect(function () {
          string.getFileExtension(function () {
          });
        }).toThrowError(TypeError);

        expect(function () {
          string.getFileExtension(new RegExp('^aid'));
        }).toThrowError(TypeError);

        expect(function () {
          string.getFileExtension(/^aid/);
        }).toThrowError(TypeError);
      });

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
      it('input argument is not String type, throw TypeError.', function () {
        expect(function () {
          string.getFileExtension(undefined);
        }).toThrowError(TypeError);

        expect(function () {
          string.getFileExtension(null);
        }).toThrowError(TypeError);

        expect(function () {
          string.getFileExtension(false);
        }).toThrowError(TypeError);

        expect(function () {
          string.getFileExtension(true);
        }).toThrowError(TypeError);

        expect(function () {
          string.getFileExtension(0);
        }).toThrowError(TypeError);

        expect(function () {
          string.getFileExtension({});
        }).toThrowError(TypeError);

        expect(function () {
          string.getFileExtension([]);
        }).toThrowError(TypeError);

        expect(function () {
          string.getFileExtension(function () {
          });
        }).toThrowError(TypeError);

        expect(function () {
          string.getFileExtension(new RegExp('^aid'));
        }).toThrowError(TypeError);

        expect(function () {
          string.getFileExtension(/^aid/);
        }).toThrowError(TypeError);
      });

      it('input <iframe src=""></iframe>, return true.', function () {
        expect(string.isIFrame('<iframe src=""></iframe>')).toEqual(true);
      });
    });

    describe('.getUriParam()', function () {
      var uri = 'http://www.google.com?name=foo&age=99&address=seoul';

      it('input arguments are not String type, throw TypeError.', function () {
        expect(function () {
          string.getUriParam(undefined, undefined);
        }).toThrowError(TypeError);

        expect(function () {
          string.getUriParam(null, null);
        }).toThrowError(TypeError);

        expect(function () {
          string.getUriParam(false, false);
        }).toThrowError(TypeError);

        expect(function () {
          string.getUriParam(true, true);
        }).toThrowError(TypeError);

        expect(function () {
          string.getUriParam(0, 0);
        }).toThrowError(TypeError);

        expect(function () {
          string.getUriParam({}, {});
        }).toThrowError(TypeError);

        expect(function () {
          string.getUriParam([], []);
        }).toThrowError(TypeError);

        expect(function () {
          string.getUriParam(function () {
          }, function () {
          });
        }).toThrowError(TypeError);

        expect(function () {
          string.getUriParam(new RegExp('^aid'), new RegExp('^aid'));
        }).toThrowError(TypeError);

        expect(function () {
          string.getUriParam(/^aid/, /^aid/);
        }).toThrowError(TypeError);
      });

      it('get "" from "", return ""', function () {
        expect(string.getUriParam('', '')).toEqual('');
      });

      it('get "" from "http://www.google.com?name=foo&age=99&address=seoul", return ""', function () {
        expect(string.getUriParam(uri, '')).toEqual('');
      });

      it('get name from "http://www.google.com?name=foo&age=99&address=seoul", return "foo"', function () {
        expect(string.getUriParam(uri, 'name')).toEqual('foo');
      });

      it('get age from "http://www.google.com?name=foo&age=99&address=seoul", return "seoul"', function () {
        expect(string.getUriParam(uri, 'age')).toEqual('99');
      });

      it('get address from "http://www.google.com?name=foo&age=99&address=seoul", return "seoul"', function () {
        expect(string.getUriParam(uri, 'address')).toEqual('seoul');
      });

      it('get noneParamName from "http://www.google.com?name=foo&age=99&address=seoul", return ""', function () {
        expect(string.getUriParam(uri, 'noneParamName')).toEqual('');
      });

      it('get foo from "http://www.google.com?name=foo&age=99&address=seoul#foo=1&bar=3", return ""', function () {
        expect(string.getUriParam('http://www.google.com?name=foo&age=99&address=seoul#foo=1&bar=3', 'foo')).toEqual('');
      });

      it('get name from "http://www.google.com?name=foo&age=99&address=seoul#foo=1&bar=3", return ""', function () {
        expect(string.getUriParam('http://www.google.com?name=foo&age=99&address=seoul#foo=1&bar=3', 'name')).toEqual('foo');
      });
    });

    describe('.getUriParams()', function () {
      it('input argument is not String type, throw TypeError.', function () {
        expect(function () {
          string.getUriParams(undefined);
        }).toThrowError(TypeError);

        expect(function () {
          string.getUriParams(null);
        }).toThrowError(TypeError);

        expect(function () {
          string.getUriParams(false);
        }).toThrowError(TypeError);

        expect(function () {
          string.getUriParams(true);
        }).toThrowError(TypeError);

        expect(function () {
          string.getUriParams(0);
        }).toThrowError(TypeError);

        expect(function () {
          string.getUriParams({});
        }).toThrowError(TypeError);

        expect(function () {
          string.getUriParams([]);
        }).toThrowError(TypeError);

        expect(function () {
          string.getUriParams(function () {
          });
        }).toThrowError(TypeError);

        expect(function () {
          string.getUriParams(new RegExp('^aid'));
        }).toThrowError(TypeError);

        expect(function () {
          string.getUriParams(/^aid/);
        }).toThrowError(TypeError);
      });

      it('get parameters from "", return null', function () {
        expect(string.getUriParams('')).toEqual(null);
      });

      it('get parameters from "http://www.google.com", return null', function () {
        expect(string.getUriParams('http://www.google.com')).toEqual(null);
      });

      it('get parameters from "http://www.google.com?name=foo", return {name:"foo"}', function () {
        expect(string.getUriParams('http://www.google.com?name=foo')).toEqual({
          name: 'foo'
        });
      });

      it('get parameters from "http://www.google.com?name=foo&age=99&address=seoul", return {name: "foo", age: "99", address: "seoul"}', function () {
        var uri = 'http://www.google.com?name=foo&age=99&address=seoul';
        expect(string.getUriParams(uri)).toEqual({
          name: 'foo',
          age: '99',
          address: 'seoul'
        });
      });

      it('get parameters from "http://www.google.com?name=foo&age=99&address=seoul#foo=1&bar=3", return {name: "foo", age: "99", address: "seoul"}', function () {
        var uri = 'http://www.google.com?name=foo&age=99&address=seoul#foo=1&bar=3';
        expect(string.getUriParams(uri)).toEqual({
          name: 'foo',
          age: '99',
          address: 'seoul'
        });
      });
    });

    describe('.getUriCombinedParams()', function () {
      var uri = 'http://www.google.com';

      it('1st argument is not String type, throw TypeError.', function () {
        expect(function () {
          string.getUriCombinedParams(undefined);
        }).toThrowError(TypeError);

        expect(function () {
          string.getUriCombinedParams(null);
        }).toThrowError(TypeError);

        expect(function () {
          string.getUriCombinedParams(false);
        }).toThrowError(TypeError);

        expect(function () {
          string.getUriCombinedParams(true);
        }).toThrowError(TypeError);

        expect(function () {
          string.getUriCombinedParams(0);
        }).toThrowError(TypeError);

        expect(function () {
          string.getUriCombinedParams({});
        }).toThrowError(TypeError);

        expect(function () {
          string.getUriCombinedParams([]);
        }).toThrowError(TypeError);

        expect(function () {
          string.getUriCombinedParams(function () {
          });
        }).toThrowError(TypeError);

        expect(function () {
          string.getUriCombinedParams(new RegExp('^aid'))
        }).toThrowError(TypeError);

        expect(function () {
          string.getUriCombinedParams(/^aid/);
        }).toThrowError(TypeError);
      });

      it('2nd argument is not Object type, throw TypeError.', function () {
        expect(function () {
          string.getUriCombinedParams(uri, undefined);
        }).toThrowError(TypeError);

        expect(function () {
          string.getUriCombinedParams(uri, null);
        }).toThrowError(TypeError);

        expect(function () {
          string.getUriCombinedParams(uri, false);
        }).toThrowError(TypeError);

        expect(function () {
          string.getUriCombinedParams(uri, true);
        }).toThrowError(TypeError);

        expect(function () {
          string.getUriCombinedParams(uri, 0);
        }).toThrowError(TypeError);

        expect(function () {
          string.getUriCombinedParams(uri, "");
        }).toThrowError(TypeError);

        expect(function () {
          string.getUriCombinedParams(uri, []);
        }).toThrowError(TypeError);

        expect(function () {
          string.getUriCombinedParams(uri, function () {
          });
        }).toThrowError(TypeError);

        expect(function () {
          string.getUriCombinedParams(uri, new RegExp('^aid'));
        }).toThrowError(TypeError);

        expect(function () {
          string.getUriCombinedParams(uri, /^aid/);
        }).toThrowError(TypeError);
      });

      it('combine "" and {}, return ""', function () {
        expect(string.getUriCombinedParams('', {})).toEqual("");
      });

      it('combine "http://www.google.com" and {}, return "http://www.google.com"', function () {
        expect(string.getUriCombinedParams('http://www.google.com', {})).toEqual("http://www.google.com");
      });

      it('combine "http://www.google.com" and {name: "foo"}, return "http://www.google.com?name=foo"', function () {
        expect(string.getUriCombinedParams('http://www.google.com', {name: "foo"})).toEqual("http://www.google.com?name=foo");
      });

      it('combine "http://www.google.com" and {name: "foo", age: "99", address: "seoul"}, return "http://www.google.com?name=foo&age=99&address=seoul"', function () {
        var params = {
          name: "foo",
          age: "99",
          address: "seoul"
        };
        expect(string.getUriCombinedParams('http://www.google.com', params)).toEqual("http://www.google.com?name=foo&age=99&address=seoul");
      });

      it('combine "http://www.google.com#foo=1&bar=3" and {name: "foo", age: "99", address: "seoul"}, return "http://www.google.com?name=foo&age=99&address=seoul#foo=1&bar=3"', function () {
        var uri = 'http://www.google.com#foo=1&bar=3';

        var params = {
          name: "foo",
          age: "99",
          address: "seoul"
        };

        expect(string.getUriCombinedParams(uri, params)).toEqual('http://www.google.com?name=foo&age=99&address=seoul#foo=1&bar=3');
      });
    });

    describe('.isValidYoutubeVideoId()', function () {
      it('1st argument is not String type, throw TypeError.', function () {
        expect(function () {
          string.isValidYoutubeVideoId(undefined);
        }).toThrowError(TypeError);

        expect(function () {
          string.isValidYoutubeVideoId(null);
        }).toThrowError(TypeError);

        expect(function () {
          string.isValidYoutubeVideoId(false);
        }).toThrowError(TypeError);

        expect(function () {
          string.isValidYoutubeVideoId(true);
        }).toThrowError(TypeError);

        expect(function () {
          string.isValidYoutubeVideoId(0);
        }).toThrowError(TypeError);

        expect(function () {
          string.isValidYoutubeVideoId({});
        }).toThrowError(TypeError);

        expect(function () {
          string.isValidYoutubeVideoId([]);
        }).toThrowError(TypeError);

        expect(function () {
          string.isValidYoutubeVideoId(function () {
          });
        }).toThrowError(TypeError);

        expect(function () {
          string.isValidYoutubeVideoId(new RegExp('^aid'));
        }).toThrowError(TypeError);

        expect(function () {
          string.isValidYoutubeVideoId(/^aid/);
        }).toThrowError(TypeError);
      });

      // TODO - isValidYoutubeVideoId
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
      it('1st argument is not String type, throw TypeError.', function () {
        expect(function () {
          string.getObjCheckYoutubeURI(undefined);
        }).toThrowError(TypeError);

        expect(function () {
          string.getObjCheckYoutubeURI(null);
        }).toThrowError(TypeError);

        expect(function () {
          string.getObjCheckYoutubeURI(false);
        }).toThrowError(TypeError);

        expect(function () {
          string.getObjCheckYoutubeURI(true);
        }).toThrowError(TypeError);

        expect(function () {
          string.getObjCheckYoutubeURI(0);
        }).toThrowError(TypeError);

        expect(function () {
          string.getObjCheckYoutubeURI({});
        }).toThrowError(TypeError);

        expect(function () {
          string.getObjCheckYoutubeURI([]);
        }).toThrowError(TypeError);

        expect(function () {
          string.getObjCheckYoutubeURI(function () {
          });
        }).toThrowError(TypeError);

        expect(function () {
          string.getObjCheckYoutubeURI(new RegExp('^aid'));
        }).toThrowError(TypeError);

        expect(function () {
          string.getObjCheckYoutubeURI(/^aid/);
        }).toThrowError(TypeError);
      });

      // TODO - getObjCheckYoutubeURI
    });

    describe('.getObjCheckTwitchURI()', function () {
      it('1st argument is not String type, throw TypeError.', function () {
        expect(function () {
          string.getObjCheckTwitchURI(undefined);
        }).toThrowError(TypeError);

        expect(function () {
          string.getObjCheckTwitchURI(null);
        }).toThrowError(TypeError);

        expect(function () {
          string.getObjCheckTwitchURI(false);
        }).toThrowError(TypeError);

        expect(function () {
          string.getObjCheckTwitchURI(true);
        }).toThrowError(TypeError);

        expect(function () {
          string.getObjCheckTwitchURI(0);
        }).toThrowError(TypeError);

        expect(function () {
          string.getObjCheckTwitchURI({});
        }).toThrowError(TypeError);

        expect(function () {
          string.getObjCheckTwitchURI([]);
        }).toThrowError(TypeError);

        expect(function () {
          string.getObjCheckTwitchURI(function () {
          });
        }).toThrowError(TypeError);

        expect(function () {
          string.getObjCheckTwitchURI(new RegExp('^aid'));
        }).toThrowError(TypeError);

        expect(function () {
          string.getObjCheckTwitchURI(/^aid/);
        }).toThrowError(TypeError);
      });

      // TODO - getObjCheckTwitchURI
    });

    describe('.getDocumentPrefixedProperty()', function () {
      it('input ("visibilityState", true) return "" when document does not have "visibilityState" property.', function () {
        // TODO - getDocumentPrefixedProperty
        // expect( string.getDocumentPrefixedProperty('visibilityState', true) ).toEqual('');
      });
    });

    describe('.getElementPrefixedStyle()', function () {
      it('input ("transform", true) return "webkitTransform" when browser is based on webkit.', function () {
        // TODO - getElementPrefixedStyle
        // expect( string.getElementPrefixedStyle('transform', true) ).toEqual('webkitTransform');
      });
    });

    describe('.absentToEmpty()', function () {
      it('input (null) return "".', function () {
        expect(string.absentToEmpty(null)).toEqual('');
      });

      it('input (undefined) return "".', function () {
        expect(string.absentToEmpty(undefined)).toEqual('');
      });

      it('argument is not String type, return "".', function () {
        expect(string.absentToEmpty(undefined)).toEqual('');
        expect(string.absentToEmpty(null)).toEqual('');
        expect(string.absentToEmpty(false)).toEqual('');
        expect(string.absentToEmpty(true)).toEqual('');
        expect(string.absentToEmpty(0)).toEqual('');
        expect(string.absentToEmpty({})).toEqual('');
        expect(string.absentToEmpty([])).toEqual('');
        expect(string.absentToEmpty(function () {
        })).toEqual('');
        expect(string.absentToEmpty(new RegExp('^aid'))).toEqual('');
        expect(string.absentToEmpty(/^aid/)).toEqual('');
      });

      it('input ("javascript") return "".', function () {
        expect(string.absentToEmpty('javascript')).toEqual('javascript');
      });
    });

    describe('.numberWithCommas()', function () {
      it('argument is not Integer Number type, throw TypeError.', function () {
        expect(function () {
          string.numberWithCommas(undefined);
        }).toThrowError(TypeError);

        expect(function () {
          string.numberWithCommas(null);
        }).toThrowError(TypeError);

        expect(function () {
          string.numberWithCommas(false);
        }).toThrowError(TypeError);

        expect(function () {
          string.numberWithCommas(true);
        }).toThrowError(TypeError);

        expect(function () {
          string.numberWithCommas(0.5);
        }).toThrowError(TypeError);

        expect(function () {
          string.numberWithCommas({});
        }).toThrowError(TypeError);

        expect(function () {
          string.numberWithCommas([]);
        }).toThrowError(TypeError);

        expect(function () {
          string.numberWithCommas(function () {
          });
        }).toThrowError(TypeError);

        expect(function () {
          string.numberWithCommas(new RegExp('^aid'));
        }).toThrowError(TypeError);

        expect(function () {
          string.numberWithCommas(/^aid/);
        }).toThrowError(TypeError);
      });

      it('return string number with commas when input number.', function() {
        expect(string.numberWithCommas(1)).toBe('1');
        expect(string.numberWithCommas(10)).toBe('10');
        expect(string.numberWithCommas(100)).toBe('100');
        expect(string.numberWithCommas(1000)).toBe('1,000');
        expect(string.numberWithCommas(10000)).toBe('10,000');
        expect(string.numberWithCommas(100000)).toBe('100,000');
        expect(string.numberWithCommas(1000000)).toBe('1,000,000');
        expect(string.numberWithCommas(10000000)).toBe('10,000,000');
        expect(string.numberWithCommas(100000000)).toBe('100,000,000');
        expect(string.numberWithCommas(1000000000)).toBe('1,000,000,000');
      });
    });

    describe('.getPositionFromTranslateStr()', function () {
      it('throw TypeError, when argument is not Integer Number type.', function () {
        expect(function () {
          string.getPositionFromTranslateStr(undefined);
        }).toThrowError(TypeError);

        expect(function () {
          string.getPositionFromTranslateStr(null);
        }).toThrowError(TypeError);

        expect(function () {
          string.getPositionFromTranslateStr(false);
        }).toThrowError(TypeError);

        expect(function () {
          string.getPositionFromTranslateStr(true);
        }).toThrowError(TypeError);

        expect(function () {
          string.getPositionFromTranslateStr(0);
        }).toThrowError(TypeError);

        expect(function () {
          string.getPositionFromTranslateStr({});
        }).toThrowError(TypeError);

        expect(function () {
          string.getPositionFromTranslateStr([]);
        }).toThrowError(TypeError);

        expect(function () {
          string.getPositionFromTranslateStr(function () {
          });
        }).toThrowError(TypeError);

        expect(function () {
          string.getPositionFromTranslateStr(new RegExp('^aid'));
        }).toThrowError(TypeError);

        expect(function () {
          string.getPositionFromTranslateStr(/^aid/);
        }).toThrowError(TypeError);
      });

      it('return {x: 99, y: 999}, when input "translate(99px, 999px)" string.', function () {
        expect(string.getPositionFromTranslateStr('translate(99px, 999px)')).toEqual({x: 99, y: 999});
      });
      it('return {x: 99, y: 999}, when input "translate(99 999)" string.', function () {
        expect(string.getPositionFromTranslateStr('translate(99 999)')).toEqual({x: 99, y: 999});
      });
      it('return {x: -99, y: 999}, when input "translate(-99px, 999px)" string.', function () {
        expect(string.getPositionFromTranslateStr('translate(-99px, 999px)')).toEqual({x: -99, y: 999});
      });
      it('return {x: -99, y: 999}, when input "translate(-99 999)" string.', function () {
        expect(string.getPositionFromTranslateStr('translate(-99 999)')).toEqual({x: -99, y: 999});
      });

      it('return {x: 99, y: 0}, when input "translate(99px)" string.', function () {
        expect(string.getPositionFromTranslateStr('translate(99px)')).toEqual({x: 99, y: 0});
      });
      it('return {x: 99, y: 0}, when input "translate(99)" string.', function () {
        expect(string.getPositionFromTranslateStr('translate(99)')).toEqual({x: 99, y: 0});
      });
      it('return {x: -99, y: 0}, when input "translate(-99px)" string.', function () {
        expect(string.getPositionFromTranslateStr('translate(-99px)')).toEqual({x: -99, y: 0});
      });
      it('return {x: -99, y: 0}, when input "translate(-99)" string.', function () {
        expect(string.getPositionFromTranslateStr('translate(-99)')).toEqual({x: -99, y: 0});
      });

      it('return {x: 99, y: 0}, when input "translateX(99px)" string.', function () {
        expect(string.getPositionFromTranslateStr('translateX(99px)')).toEqual({x: 99, y: 0});
      });
      it('return {x: 99, y: 0}, when input "translateX(99)" string.', function () {
        expect(string.getPositionFromTranslateStr('translateX(99)')).toEqual({x: 99, y: 0});
      });
      it('return {x: -99, y: 0}, when input "translateX(-99px)" string.', function () {
        expect(string.getPositionFromTranslateStr('translateX(-99px)')).toEqual({x: -99, y: 0});
      });
      it('return {x: -99, y: 0}, when input "translateX(-99)" string.', function () {
        expect(string.getPositionFromTranslateStr('translateX(-99)')).toEqual({x: -99, y: 0});
      });

      it('return {x: 0, y: 99}, when input "translateY(99px)" string.', function () {
        expect(string.getPositionFromTranslateStr('translateY(99px)')).toEqual({x: 0, y: 99});
      });
      it('return {x: 0, y: 99}, when input "translateY(99)" string.', function () {
        expect(string.getPositionFromTranslateStr('translateY(99)')).toEqual({x: 0, y: 99});
      });
      it('return {x: 0, y: -99}, when input "translateY(-99px)" string.', function () {
        expect(string.getPositionFromTranslateStr('translateY(-99px)')).toEqual({x: 0, y: -99});
      });
      it('return {x: 0, y: -99}, when input "translateY(-99)" string.', function () {
        expect(string.getPositionFromTranslateStr('translateY(-99)')).toEqual({x: 0, y: -99});
      });
    });

    describe('.isPalindrome()', function () {
      it('throw TypeError, when argument is not Integer Number type.', function () {
        expect(function () {
          string.isPalindrome(undefined);
        }).toThrowError(TypeError);

        expect(function () {
          string.isPalindrome(null);
        }).toThrowError(TypeError);

        expect(function () {
          string.isPalindrome(false);
        }).toThrowError(TypeError);

        expect(function () {
          string.isPalindrome(true);
        }).toThrowError(TypeError);

        expect(function () {
          string.isPalindrome(0);
        }).toThrowError(TypeError);

        expect(function () {
          string.isPalindrome({});
        }).toThrowError(TypeError);

        expect(function () {
          string.isPalindrome([]);
        }).toThrowError(TypeError);

        expect(function () {
          string.isPalindrome(function () {
          });
        }).toThrowError(TypeError);

        expect(function () {
          string.isPalindrome(new RegExp('^aid'));
        }).toThrowError(TypeError);

        expect(function () {
          string.isPalindrome(/^aid/);
        }).toThrowError(TypeError);
      });

      it('return true, when input "r" string.', function () {
        expect(string.isPalindrome('r')).toEqual(true);
      });

      it('return true, when input "rotor" string.', function () {
        expect(string.isPalindrome('rotor')).toEqual(true);
      });

      it('return true, when input "abcdeedcba" string.', function () {
        expect(string.isPalindrome('abcdeedcba')).toEqual(true);
      });

      it('return true, when input "motor" string.', function () {
        expect(string.isPalindrome('motor')).toEqual(false);
      });
    });
  });
});