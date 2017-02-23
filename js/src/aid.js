/*
 The MIT License (MIT)
 Copyright (c) 2016 dragmove

 Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

/*
 * aid.js 0.1.0
 * https://github.com/dragmove/aid.js
 */
;(function (global) {
  "use strict";

  var aid = {},
    platform = {},
    browser = {},
    string = {},
    math = {},
    date = {},
    array = {},
    element = {},
    control = {};

  var _ua = global.navigator.userAgent;

  /**
   * get object is null/undefined or other
   *
   * @static
   * @method existy
   * @param {Object} obj
   * @returns {Boolean} return boolean
   * @example
   * console.log( aid.existy(null) ); // false
   */
  aid.existy = function (obj) {
    return obj != null;
  };

  /**
   * check object is defined function
   *
   * @static
   * @method isDefined
   * @param {Object} obj
   * @returns {Boolean} return boolean
   * @example
   * console.log( aid.isDefined(null) ); // false
   */
  aid.isDefined = function (obj) {
    var flag = true;
    if (obj === null || typeof obj === 'undefined') return false;
    return flag;
  };

  /**
   * check object type is Boolean
   *
   * @static
   * @method isBoolean
   * @param {Object} obj
   * @returns {Boolean} return boolean
   * @example
   * console.log( aid.isBoolean(false) ); // true
   */
  aid.isBoolean = function (obj) {
    if (!aid.isDefined(obj)) return false;
    return (obj.constructor === Boolean);
  };

  /**
   * check object type is Number
   *
   * @static
   * @method isNumber
   * @param {Object} obj
   * @returns {Boolean} return boolean
   * @example
   * console.log( aid.isNumber(-1) ); // true
   */
  aid.isNumber = function (obj) {
    if (!aid.isDefined(obj)) return false;
    return (obj.constructor === Number);
  };

  /**
   * check object type is Number, and Integer.
   *
   * @static
   * @method isInteger
   * @param {Object} obj
   * @returns {Boolean} return boolean
   * @example
   * console.log( aid.isInteger(-1) ); // true
   */
  aid.isInteger = function (obj) {
    if (!aid.isDefined(obj) || obj.constructor !== Number) return false;

    // https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger
    return (isFinite(obj) && Math.floor(obj) === obj);
  };

  /**
   * check object type is String
   *
   * @static
   * @method isString
   * @param {Object} obj
   * @returns {Boolean} return boolean
   * @example
   * console.log( aid.isString('') ); // true
   */
  aid.isString = function (obj) {
    if (!aid.isDefined(obj)) return false;
    return (obj.constructor === String);
  };

  /**
   * check object type is Array
   *
   * @static
   * @method isArray
   * @param {Object} obj
   * @returns {Boolean} return boolean
   * @example
   * console.log( aid.isArray([]) ); // true
   */
  aid.isArray = function (obj) {
    if (!aid.isDefined(obj)) return false;
    return (obj.constructor === Array);
  };

  /**
   * check object type is Object
   *
   * @static
   * @method isObject
   * @param {Object} obj
   * @returns {Boolean} return boolean
   * @example
   * console.log( aid.isObject({}) ); // true
   */
  aid.isObject = function (obj) {
    if (!aid.isDefined(obj)) return false;
    return (obj.constructor === Object);
  };

  /**
   * check object type is Function
   *
   * @static
   * @method isFunction
   * @param {Object} obj
   * @returns {Boolean} return boolean
   * @example
   * console.log( aid.isFunction(function(){}) ); // true
   */
  aid.isFunction = function (obj) {
    if (!aid.isDefined(obj)) return false;
    return (obj.constructor === Function);
  };

  /**
   * check object type is RegExp
   *
   * @static
   * @method isRegExp
   * @param {Object} obj
   * @returns {Boolean} return boolean
   * @example
   * console.log( aid.isRegExp(new RegExp('^aid')) ); // true
   * console.log( aid.isRegExp(/^aid/) ); // true
   */
  aid.isRegExp = function (obj) {
    if (!aid.isDefined(obj)) return false;
    return (obj.constructor === RegExp);
  };

  /**
   * extend function
   *
   * @static
   * @method extend
   * @param {Object} prototype of class function
   * @param {Object} object has variables or methods
   * @example
   */
  aid.extend = function (destination, source) {
    for (var key in source) {
      if (source.hasOwnProperty(key)) {
        destination[key] = source[key];
      }
    }
    return destination;
  };

  /**
   * inherit Class function
   *
   * @static
   * @method inherit
   * @param {class} ChildClass - child class function
   * @param {class} ParentClass - parent class function
   * @example
   */
  aid.inherit = (function () {
    // use closure, protect gabarge collection.
    var F = function () {
    };

    return function (ChildClass, ParentClass) {
      F.prototype = ParentClass.prototype;

      ChildClass.prototype = new F();
      ChildClass.prototype.constructor = ChildClass;
      ChildClass.super = ParentClass.prototype;
    };
  }());

  /**
   * is window platform
   *
   * @static
   * @method isWindow
   * @returns {Boolean} return boolean
   * @example
   * console.log( aid.platform.isWindow );
   */
  platform.isWindow = (function () {
    return /Windows/i.test(_ua);
  }());

  /**
   * is Macintosh platform
   *
   * @static
   * @method isMac
   * @returns {Boolean} return boolean
   * @example
   * console.log( aid.platform.isMac );
   */
  platform.isMac = (function () {
    return /Macintosh/i.test(_ua);
  }());

  /**
   * is Ubuntu platform
   *
   * @static
   * @method isUbuntu
   * @returns {Boolean} return boolean
   * @example
   * console.log( aid.platform.isUbuntu );
   */
  platform.isUbuntu = (function () {
    return /Ubuntu/i.test(_ua);
  }());

  /**
   * is iOS platform
   * http://stackoverflow.com/questions/9038625/detect-if-device-is-ios/9039885#9039885
   *
   * @static
   * @method isIOS
   * @returns {Boolean} return boolean
   * @example
   * console.log( aid.platform.isIOS );
   */
  platform.isIOS = (function () {
    return /iPad|iPhone|iPod/.test(_ua) && !window.MSStream;
  }());

  /**
   * is Android platform
   *
   * @static
   * @method isAndroid
   * @returns {Boolean} return boolean
   * @example
   * console.log( aid.platform.isAndroid );
   */
  platform.isAndroid = (function () {
    return /android/i.test(_ua);
  }());

  /**
   * is IE browser
   *
   * @static
   * @method isIE
   * @returns {Boolean} return boolean
   * @example
   * console.log( aid.browser.isIE );
   */
  browser.isIE = (function () {
    return /msie/i.test(_ua) || /trident/i.test(_ua);
  }());

  /**
   * is Firefox browser
   *
   * @static
   * @method isFF
   * @returns {Boolean} return boolean
   * @example
   * console.log( aid.browser.isFF );
   */
  browser.isFF = (function () {
    return /Firefox/i.test(_ua);
  }());

  /**
   * is Opera browser
   *
   * @static
   * @method isOpera
   * @returns {Boolean} return boolean
   * @example
   * console.log( aid.browser.isOpera );
   */
  browser.isOpera = (function () {
    return ( /Opera/i.test(_ua) || /OPR\//i.test(_ua) );
  }());

  /**
   * is Chrome browser
   *
   * @static
   * @method isChrome
   * @returns {Boolean} return boolean
   * @example
   * console.log( aid.browser.isChrome );
   */
  browser.isChrome = (function () {
    return ( !browser.isOpera && /Chrome/i.test(_ua) );
  }());

  /**
   * is Safari browser
   *
   * @static
   * @method isSafari
   * @returns {Boolean} return boolean
   * @example
   * console.log( aid.browser.isSafari );
   */
  browser.isSafari = (function () {
    return ( !/Chrome/i.test(_ua) && /Safari/i.test(_ua) );
  }());

  /**
   * get IE version
   *
   * @static
   * @method getIEVersion
   * @returns {Number} return version float number
   * @example
   * console.log( aid.browser.getIEVersion() );
   */
  browser.getIEVersion = function () {
    if (browser.isIE) {
      if (/msie (\d+\.\d+);/i.test(_ua)) return parseFloat(RegExp.$1, 10);
      if (/trident.*rv:(\d+)\.(\d+)/i.test(_ua)) return parseFloat(RegExp.$1, 10);
    }
    return -1;
  };

  /**
   * get Firefox version
   *
   * @static
   * @method getFFVersion
   * @returns {Number} return version float number
   * @example
   * console.log( aid.browser.getFFVersion() );
   */
  browser.getFFVersion = function () {
    if (browser.isFF) {
      if (/Firefox[\/\s](\d+\.\d+)/i.test(_ua)) return parseFloat(RegExp.$1, 10);
    }
    return -1;
  };

  /**
   * get Opera version
   *
   * @static
   * @method getOperaVersion
   * @returns {Number} return version float number
   * @example
   * console.log( aid.browser.getOperaVersion() );
   */
  browser.getOperaVersion = function () {
    if (browser.isOpera) {
      if (/Opera/i.test(_ua)) {
        if (/Version[\/\s](\d+\.\d+)/i.test(_ua)) return parseFloat(RegExp.$1, 10);
        if (/Opera[\/\s](\d+\.\d+)/i.test(_ua)) return parseFloat(RegExp.$1, 10);
      }
      if (/OPR[\/\s](\d+\.\d+)/i.test(_ua)) return parseFloat(RegExp.$1, 10);
    }
    return -1;
  };

  /**
   * get Chrome version
   *
   * @static
   * @method getChromeVersion
   * @returns {Number} return version float number
   * @example
   * console.log( aid.browser.getChromeVersion() );
   */
  browser.getChromeVersion = function () {
    if (browser.isChrome) {
      if (/Chrome[\/\s](\d+\.\d+)/i.test(_ua)) return parseFloat(RegExp.$1, 10);
    }
    return -1;
  };

  /**
   * get Safari version
   *
   * @static
   * @method getSafariVersion
   * @returns {Number} return version float number
   * @example
   * console.log( aid.browser.getSafariVersion() );
   */
  browser.getSafariVersion = function () {
    if (browser.isSafari) {
      if (/Version[\/\s](\d+\.\d+)/i.test(_ua)) return parseFloat(RegExp.$1, 10);
    }
    return -1;
  };

  /**
   * get IE browser Compatibility info object.
   *
   * @static
   * @method getIECompatibility
   * @param {String} optionUserAgentStr
   * @returns {Object} return { isIE: Boolean, isCompatibilityMode: Boolean, compatibilityVersion: Number }
   * @example
   * console.log( aid.browser.getIECompatibility() );
   * console.log( aid.browser.getIECompatibility('mozilla/5.0 (windows nt 6.1; wow64) applewebkit/537.36 (khtml, like gecko) hrome/39.0.2171.65 safari/537.36') );
   */
  browser.getIECompatibility = function (optionUserAgentStr) {
    var ua = (optionUserAgentStr) ? optionUserAgentStr : global.navigator.userAgent.toLowerCase(),
      regex_msie = /msie/i,
      regex_msie7 = /msie 7/i,
      regex_msie8 = /msie 8/i,
      regex_msie9 = /msie 9/i,
      regex_msie10 = /msie 10/i,
      regex_msie11 = /rv:11[\.0-9]{0,}/,
      regex_trident = /trident/i,
      regex_trident7 = /trident\/7/;

    if (!regex_msie.test(ua) && !regex_msie11.test(ua)) {
      // not IE
      return {
        isIE: false,
        isCompatibilityMode: false,
        compatibilityVersion: -1
      };
    }

    if (regex_msie11.test(ua) && regex_trident7.test(ua)) {
      // IE11 standard
      return {
        isIE: true,
        isCompatibilityMode: false,
        compatibilityVersion: -1
      };
    }

    if (regex_msie.test(ua) && regex_trident7.test(ua)) {

      // IE11 compatibility mode
      if (regex_msie7.test(ua))
        return {
          isIE: true,
          isCompatibilityMode: true,
          compatibilityVersion: 7
        };

      if (regex_msie8.test(ua))
        return {
          isIE: true,
          isCompatibilityMode: true,
          compatibilityVersion: 8
        };

      if (regex_msie9.test(ua))
        return {
          isIE: true,
          isCompatibilityMode: true,
          compatibilityVersion: 9
        };

      if (regex_msie10.test(ua))
        return {
          isIE: true,
          isCompatibilityMode: true,
          compatibilityVersion: 10
        };
    }

    if (regex_msie7.test(ua) && regex_trident.test(ua)) {
      // IE8 ~ 10 compatibility mode
      return {
        isIE: true,
        isCompatibilityMode: true,
        compatibilityVersion: 7
      };
    }

    // IE8 ~ 10 standard
    return {
      isIE: true,
      isCompatibilityMode: false,
      compatibilityVersion: -1
    };
  };

  /**
   * is browser support draggable attribute of element.
   *
   * @static
   * @method isSupportDraggable
   * @returns {Boolean} return boolean
   * @example
   * console.log( aid.browser.isSupportDraggable() );
   */
  browser.isSupportDraggable = function () {
    var div = document.createElement('div');
    return ('draggable' in div);
  };

  /**
   * is browser support element methods related drag(ondragstart, ondrop, etc...).
   *
   * @static
   * @method isSupportDragAndDrop
   * @returns {Boolean} return boolean
   * @example
   * console.log( aid.browser.isSupportDragAndDrop() );
   */
  browser.isSupportDragAndDrop = function () {
    var div = document.createElement('div');
    return ('ondragstart' in div && 'ondrop' in div);
  };

  /**
   * is browser support html5 File API.
   *
   * @static
   * @method isSupportFileApi
   * @returns {Boolean} return boolean
   * @example
   * console.log( aid.browser.isSupportFileApi() );
   */
  browser.isSupportFileApi = function () {
    return !!(global.File && global.FileReader && global.FileList && global.Blob);
  };

  /**
   * is chrome extension.
   *
   * @static
   * @method isChromeExtension
   * @returns {Boolean} return boolean
   * @example
   * console.log( aid.browser.isChromeExtension() );
   */
  browser.isChromeExtension = (function () {
    if (browser.isChrome && window.chrome) {
      if (!window.chrome.cookies) {
        if (window.chrome.experimental) window.chrome.cookies = window.chrome.experimental.cookies;
      }

      if (window.chrome.cookies) return true;
      return false;
    }
    return false;
  }());

  /**
   * get cookie
   *
   * @static
   * @method getCookie
   * @returns {String} return string
   * @example
   * console.log( aid.browser.getCookie('sampleCookieKey') );
   */
  browser.getCookie = function (key) {
    var cookieArr = document.cookie.split('; '),
      splitArr = [],
      keyStr = '',
      valueStr = '';

    for (var i = 0, max = cookieArr.length; i < max; ++i) {
      splitArr = cookieArr[i].split('=');
      keyStr = splitArr[0];
      valueStr = window.decodeURIComponent(splitArr[1]);
      if (keyStr === key) return valueStr;
    }

    return null;
  };

  /**
   * set cookie
   *
   * @static
   * @method setCookie
   * @example
   * aid.browser.setCookie('sampleCookieKey', 'sampleValue', 3600, '/samplePath', 'sample.com');
   */
  browser.setCookie = function (key, value, expireSecond, path, domain) {
    var expires = '',
      pathStr = '; path=' + ( (path) ? path : '/' ),
      domainStr = (domain) ? '; domain=' + domain : '';

    if (expireSecond) {
      var date = new Date();
      date.setTime(date.getTime() + (expireSecond * 1000));
      expires = '; expires=' + date.toGMTString();
    }

    document.cookie = key + '=' + window.encodeURIComponent(value) + pathStr + domainStr + expires;
  };

  /**
   * trim string
   *
   * @static
   * @method trim
   * @returns {String} return trimmed string
   * @example
   * console.log( aid.string.trim('   foo   ') ); // 'foo'
   */
  string.trim = function (str) {
    return str.replace(/^\s+/, '').replace(/\s+$/, '');
  };

  /**
   * check string has unique characters
   *
   * @static
   * @method hasUniqueChars
   * @returns {Boolean} return boolean
   * @example
   * console.log( aid.string.hasUniqueChars('abcdea') );
   */
  string.hasUniqueChars = function (str) {
    if (!str.length) return true;

    var obj = {}, char = '';
    for (var i = 0, max = str.length; i < max; i++) {
      char = str.charAt(i);

      if (obj[char] === true) return false;
      obj[char] = true;
    }

    return true;
  };

  /**
   * get extension(png, jpg ...) string.
   *
   * @static
   * @method getFileExtension
   * @returns {String} return string
   * @example
   * console.log( aid.string.getFileExtension('aid.png') );
   */
  string.getFileExtension = function (fileName) {
    if (!aid.isString(fileName) || fileName.length <= 0) return '';

    var lastDotIndex = fileName.lastIndexOf('.'),
      extension = fileName.substr(lastDotIndex + 1);

    return extension;
  };

  /**
   * check email string.
   *
   * @static
   * @method isEmail
   * @returns {Boolean} return boolean
   * @example
   * console.log( aid.string.isEmail('dragmove@gmail.com') ); // true
   */
  string.isEmail = function (emailStr) {
    // html5 form email check regex - https://www.w3.org/TR/html5/forms.html#e-mail-state-(type=email)
    var emailRegex = new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$");
    return ( emailRegex.exec(emailStr) ? true : false );
  };

  /**
   * check iframe string.
   *
   * @static
   * @method isIFrame
   * @returns {Boolean} return boolean
   * @example
   * console.log( aid.string.isIFrame('<iframe src=""></iframe>') ); // true
   */
  string.isIFrame = function (iframeStr) {
    return /^(<iframe).*(<\/iframe>|\/>)$/.test(iframeStr);
  };

  /**
   * get param value from uri.
   *
   * @static
   * @method getUriParam
   * @returns {String} return string
   * @example
   * console.log( aid.string.getUriParam('http://www.google.com?name=foo&age=99&address=seoul', 'name') ); // 'foo'
   */
  string.getUriParam = function (uri, paramName) {
    var str = uri;
    if (str.length < 1) return '';

    var tmpArr = str.split('?');
    if (tmpArr.length < 2) return '';

    var paramStr = tmpArr[1],
      params = paramStr.split('&');

    for (var i = 0, max = params.length; i < max; ++i) {
      var keyValueArr = params[i].split('=');
      if (keyValueArr.length <= 1) keyValueArr.push('');
      if (keyValueArr[0] === paramName) return window.decodeURIComponent(keyValueArr[1]);
    }

    return '';
  };

  /**
   * get param values from uri.
   *
   * @static
   * @method getUriParams
   * @returns {Object} return object
   * @example
   * console.log( aid.string.getUriParams('http://www.google.com?name=foo&age=99&address=seoul') ); // {name: 'foo', age: '99', address: 'seoul'}
   */
  string.getUriParams = function (uri) {
    var str = uri;
    if (str.length < 1) return null;

    var tmpArr = str.split('?');
    if (tmpArr.length < 2) return null;

    var paramStr = tmpArr[1],
      params = paramStr.split('&');

    var obj = {};
    for (var i = 0, max = params.length; i < max; ++i) {
      var keyValueArr = params[i].split('=');
      if (keyValueArr.length <= 1) return null;

      obj[keyValueArr[0]] = keyValueArr[1];
    }
    return obj;
  };

  /**
   * get uri combined params
   *
   * @static
   * @method getUriCombinedParams
   * @returns {String} return string
   * @example
   * console.log( aid.string.getUriCombinedParams('http://www.google.com', {name: "foo", age: "99", address: "seoul"}) ) // http://www.google.com?name=foo&age=99&address=seoul
   */
  string.getUriCombinedParams = function (uri, params) {
    if (!uri) return '';
    if (!params) return uri;

    var str = '';
    for (var key in params) {
      str += '&' + key + '=' + String(params[key]);
    }
    if (str === '') return uri;

    uri = (uri.indexOf('?') >= 0) ? (uri + str) : (uri + '?' + str.substr(1));
    return uri;
  };

  /**
   * check youtube video id.
   *
   * @static
   * @method isValidYoutubeVideoId
   * @returns {Boolean} return boolean
   * @example
   */
  string.isValidYoutubeVideoId = function (youtubeId) {
    var regex = /^(\w|-|_){11}$/;
    return regex.exec(youtubeId) ? true : false;
  };

  /**
   * check youtube uri is valid.
   *
   * @static
   * @method getObjCheckYoutubeURI
   * @returns {Object} return { type:'youtube', uri: String, youtubeId: String, isValidURI: Boolean }
   * @example
   */
  string.getObjCheckYoutubeURI = function (uri) {
    var YOUTUBE_REGEXES = {
      'watch': /^(?:(?:https?:)?\/\/)?(?:www\.)?youtube\.com\/watch/,
      'embed': /^(?:(?:https?:)?\/\/)?(?:www\.)?youtube\.com\/(?:embed\/((?:\w|-|_){11}))/,
      'v': /^(?:(?:https?:)?\/\/)?(?:www\.)?youtube\.com\/(?:v\/((?:\w|-|_){11}))/,
      'youtu.be': /^(?:(?:https?:)?\/\/)?(?:www\.)?youtu\.be\/((?:\w|-|_){11})/
    };

    var uriType = null;
    for (var key in YOUTUBE_REGEXES) {
      var val = YOUTUBE_REGEXES[key];
      if (!val) continue;

      var flag = YOUTUBE_REGEXES[key].exec(uri) ? true : false;
      if (flag) {
        uriType = key;
        break;
      }
    }

    var youtubeId = '',
      tmpArr = [];
    switch (uriType) {
      case 'watch' :
        youtubeId = string.getUriParam(uri, 'v') || '';
        break;

      case 'embed' :
        tmpArr = uri.split('?')[0].split('/');
        youtubeId = tmpArr[tmpArr.length - 1] || '';
        break;

      case 'v' :
        tmpArr = uri.split('?')[0].split('/');
        youtubeId = tmpArr[tmpArr.length - 1] || '';
        break;

      case 'youtu.be' :
        tmpArr = uri.split('?')[0].split('/');
        youtubeId = tmpArr[tmpArr.length - 1] || '';
        break;

      default :
    }

    var isValidURI = ( youtubeId && string.isValidYoutubeVideoId(youtubeId) );
    return {
      type: 'youtube',
      uri: uri,
      youtubeId: youtubeId,
      isValidURI: isValidURI
    };
  };

  /**
   * check twitch uri is valid.
   *
   * @static
   * @method getObjCheckTwitchURI
   * @returns {Object} return { type:'twitch', uri: String, channelName: String, videoId: Boolean, isChatting: Boolean, isValidURI: Boolean }
   * @example
   */
  string.getObjCheckTwitchURI = function (uri) {
    /*
     + Live Video
     https://www.twitch.tv/surrenderhs // channel link
     https://player.twitch.tv/?channel=surrenderhs // iframe, Flash player
     https://www.twitch.tv/surrenderhs/chat?popout= // iframe chatting

     + Past Video
     https://www.twitch.tv/surrenderhs/v/56097351 // channel link
     https://player.twitch.tv/?video=v56097351 // iframe, Flash player

     + URI TEST
     https://www.twitch.tv/surrenderhs
     //www.twitch.tv/surrenderhs
     www.twitch.tv/surrenderhs
     twitch.tv/surrenderhs

     https://player.twitch.tv/?channel=surrenderhs
     //player.twitch.tv/?channel=surrenderhs
     player.twitch.tv/?channel=surrenderhs

     https://www.twitch.tv/surrenderhs/v/56097351
     //www.twitch.tv/surrenderhs/v/56097351
     www.twitch.tv/surrenderhs/v/56097351

     https://player.twitch.tv/?video=v56097351
     //player.twitch.tv/?video=v56097351
     player.twitch.tv/?video=v56097351
     */

    var TWITCH_REGEXES = {
      'liveChannel': /^(?:(?:https?:)?\/\/)?(?:www\.)?twitch\.tv\/([a-zA-Z0-9][\w]{2,24})$/,
      'liveVideo': /^(?:(?:https?:)?\/\/)?player\.twitch\.tv\/\?channel\=([a-zA-Z0-9][\w]{2,24})$/,
      'chatting': /^(?:(?:https?:)?\/\/)?(?:www\.)?twitch\.tv\/([a-zA-Z0-9][\w]{2,24})\/chat/,
      'pastChannel': /^(?:(?:https?:)?\/\/)?(?:www\.)?twitch\.tv\/([a-zA-Z0-9][\w]{2,24})\/v\/(\d+)/,
      'pastVideo': /^(?:(?:https?:)?\/\/)?player\.twitch\.tv\/\?video\=v(\d+)/
    };

    var channelName = '',
      videoId = '',
      isChatting = false,
      isValidURI = false;

    var uriType = null;
    for (var key in TWITCH_REGEXES) {
      var val = TWITCH_REGEXES.hasOwnProperty(key);
      if (!val) continue;

      var flag = TWITCH_REGEXES[key].exec(uri) ? true : false;
      if (flag) {
        uriType = key;
        isValidURI = true;
        break;
      }
    }

    var tmpArr = [];
    switch (uriType) {
      // https://www.twitch.tv/surrenderhs
      case 'liveChannel' :
        tmpArr = TWITCH_REGEXES[uriType].exec(uri);
        channelName = tmpArr[1];
        break;

      // https://player.twitch.tv/?channel=surrenderhs
      case 'liveVideo' :
        tmpArr = TWITCH_REGEXES[uriType].exec(uri);
        channelName = tmpArr[1];
        break;

      // https://www.twitch.tv/surrenderhs/chat?popout=
      case 'chatting' :
        tmpArr = TWITCH_REGEXES[uriType].exec(uri);
        channelName = tmpArr[1];
        isChatting = true;
        break;

      // https://www.twitch.tv/surrenderhs/v/56097351
      case 'pastChannel' :
        tmpArr = TWITCH_REGEXES[uriType].exec(uri);
        channelName = tmpArr[1];
        videoId = tmpArr[2];
        break;

      // https://player.twitch.tv/?video=v56097351
      case 'pastVideo' :
        tmpArr = TWITCH_REGEXES[uriType].exec(uri);
        videoId = tmpArr[1];
        break;

      default :
    }

    isValidURI = (channelName || videoId) ? true : false;
    return {
      type: 'twitch',
      uri: uri,
      channelName: channelName,
      videoId: videoId,
      isChatting: isChatting,
      isValidURI: isValidURI
    };
  };

  /**
   * get prefixed document property string
   *
   * @static
   * @method getDocumentPrefixedProperty
   * @returns {String} return string
   * @example
   * console.log( aid.string.getDocumentPrefixedProperty('visibilityState', true) ); // return 'visibilityState' or 'webkitVisibilityState' or 'mozVisibilityState' or 'msVisibilityState' or 'oVisibilityState'.
   * console.log( aid.string.getDocumentPrefixedProperty('12345', false) ); // if browser doesn't have property, return ''.
   */
  string.getDocumentPrefixedProperty = function (propertyName, isPropertyFirstCharToUpperCase) {
    if (propertyName in document) return propertyName;

    var PREFIXES = ['webkit', 'moz', 'ms', 'o'],
      isPropFirstCharUppercase = (isPropertyFirstCharToUpperCase === true) ? true : false;

    var prop = '';
    for (var i = 0, max = PREFIXES.length; i < max; i++) {
      prop = (isPropFirstCharUppercase) ? propertyName.charAt(0).toUpperCase() + propertyName.slice(1) : propertyName;

      prop = PREFIXES[i] + prop;
      if (prop in document) return prop;
    }

    return '';
  };

  /**
   * get prefixed element style property string
   *
   * @static
   * @method getElementPrefixedStyle
   * @returns {String} return string
   * @example
   * console.log( aid.string.getElementPrefixedStyle('transform', true) ); // return 'transform' or 'wekitTransform' or 'mozTransform' or 'msTransform' or 'oTransform'.
   * console.log( aid.string.getElementPrefixedStyle('12345', false) ); // if browser doesn't have style property, return ''.
   */
  string.getElementPrefixedStyle = function (propertyName, isPropertyFirstCharToUpperCase) {
    var style = document.createElement('div').style;
    if (propertyName in style) return propertyName;

    var PREFIXES = ['webkit', 'moz', 'ms', 'o'],
      isPropFirstCharUppercase = (isPropertyFirstCharToUpperCase === true) ? true : false;

    var prop = '';
    for (var i = 0, max = PREFIXES.length; i < max; i++) {
      prop = (isPropFirstCharUppercase) ? propertyName.charAt(0).toUpperCase() + propertyName.slice(1) : propertyName;

      prop = PREFIXES[i] + prop;
      if (prop in style) return prop;
    }

    return '';
  };

  /**
   * null, undefined to empty string. if parameter is not null or undefined, return parameter.
   *
   * @static
   * @method absentToEmpty
   * @returns {String} return string
   * @example
   * console.log( aid.string.absentToEmpty(null) ); // null to ''.
   * console.log( aid.string.absentToEmpty(undefined) ); // undefined to ''.
   * console.log( aid.string.absentToEmpty('javascript') ); // if parameter is exist, return parameter.
   */
  string.absentToEmpty = function (absentableStr) {
    if (!aid.existy(absentableStr)) return '';
    return absentableStr;
  };

  /**
   * convert number to string type with commas.
   * http://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
   *
   * @static
   * @method numberWithCommas
   * @returns {String} return string
   * @example
   * console.log( aid.string.numberWithCommas(1000000) ); // 1000000 to '1,000,000'.
   */
  string.numberWithCommas = function (number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  /**
   * convert 'translate(0px, 0px)' or 'translateX(0px)' or 'translateY(0px)' format string to { x: 0, y: 0 }.
   *
   * @static
   * @method getPositionFromTranslateStr
   * @returns {Object} return object
   * @example
   */
  string.getPositionFromTranslateStr = function (str) {
    var obj = {x: 0, y: 0};
    if (!aid.isDefined(str)) return obj;

    var values = str.match(/[+-]?(\d*\.)?\d+/g);
    if (values.length <= 0) return obj;

    if (/translateX/g.test(str)) {
      obj.x = parseFloat(values[0]);
      return obj;
    }

    if (/translateY/g.test(str)) {
      obj.y = parseFloat(values[0]);
      return obj;
    }

    obj.x = parseFloat(values[0]);
    if (values.length > 1) obj.y = parseFloat(values[1]);

    return obj;
  };

  /**
   * get aspectFill content size
   *
   * @static
   * @method getSizeAspectFill
   * @returns {Object} return { width: Number, height: Number }
   * @example
   * console.log( aid.math.getSizeAspectFill(960, 640, window.innerWidth, window.innerHeight) );
   */
  math.getSizeAspectFill = function (srcWidth, srcHeight, maxWidth, maxHeight) {
    var modifiedSizeW = maxWidth,
      modifiedSizeH = Math.ceil((maxWidth / srcWidth) * srcHeight);

    if (modifiedSizeH < maxHeight) {
      modifiedSizeW = Math.ceil((maxHeight / srcHeight) * srcWidth);
      modifiedSizeH = maxHeight;
    }

    return {
      width: modifiedSizeW,
      height: modifiedSizeH
    };
  };

  /**
   * get aspectFit content size
   *
   * @static
   * @method getSizeAspectFit
   * @returns {Object} return { width: Number, height: Number }
   * @example
   * console.log( aid.math.getSizeAspectFit(960, 640, window.innerWidth, window.innerHeight) );
   */
  math.getSizeAspectFit = function (srcWidth, srcHeight, maxWidth, maxHeight) {
    var ratio = Math.min(maxWidth / srcWidth, maxHeight / srcHeight),
      modifiedSizeW = Math.ceil(srcWidth * ratio),
      modifiedSizeH = Math.ceil(srcHeight * ratio);

    return {
      width: modifiedSizeW,
      height: modifiedSizeH
    };
  };

  /**
   * get widthFit content size
   *
   * @static
   * @method getSizeWidthFit
   * @returns {Object} return { width: Number, height: Number }
   * @example
   * console.log( aid.math.getSizeWidthFit(960, 640, window.innerWidth) );
   */
  math.getSizeWidthFit = function (srcWidth, srcHeight, maxWidth) {
    var modifiedSizeW = maxWidth,
      modifiedSizeH = Math.ceil((maxWidth / srcWidth) * srcHeight);

    return {
      width: modifiedSizeW,
      height: modifiedSizeH
    };
  };

  /**
   * get flag whether 2 numbers are equal by Number.EPSILON
   *
   * @static
   * @method isEpsilonEqual
   * @returns {Boolean} return boolean
   * @example
   * console.log( aid.math.isEpsilonEqual(0.1 + 0.2, 0.3) );
   */
  math.isEpsilonEqual = function (number_a, number_b) {
    if (!Number.EPSILON) {
      throw new Error('Number.EPSILON is not exist.');
    }
    return (Math.abs(number_a - number_b) < Number.EPSILON);
  };

  /**
   * get flag that looped values in 1 ~ totalLength has searchIndex.
   * value increases from startIndex to (firstIndex + loopGap - 1).
   * if value is bigger than totalLength, change value to 1.
   * if searchIndex in values, return true.
   * otherwise, return false.
   *
   * @static
   * @method isIndexInLoop
   * @returns {Boolean} return boolean
   * @example
   * console.log( aid.math.isIndexInLoop(8, 5, 6, 3) ); // false
   * console.log( aid.math.isIndexInLoop(8, 5, 6, 6) ); // true
   */
  math.isIndexInLoop = function (totalLength, loopGap, firstIndex, searchIndex) {
    if (arguments.length < 4) {
      throw Error('isIndexInLoop function requires 4 arguments.');
    }
    if (!aid.isInteger(totalLength) || !aid.isInteger(loopGap) || !aid.isInteger(firstIndex) || !aid.isInteger(searchIndex)) {
      throw Error('arguments must be Integer Number.');
    }
    if (totalLength < 1 || firstIndex < 1) {
      throw Error('totalLength and firstIndex can not smaller than 1.');
    }
    if (loopGap > totalLength) {
      throw Error('loopGap can not bigger than totalLength.');
    }

    var index = firstIndex;
    for (var i = 0; i < loopGap; i++) {
      if (index === searchIndex) return true;
      index = (index + 1 > totalLength) ? 1 : index + 1;
    }

    return false;
  };

  /**
   * get looped index from firstIndex in 1 ~ totalLength.
   * value increases from firstIndex to (firstIndex + loopGap - 1).
   * if value is bigger than totalLength, change value to 1. and, return value.
   *
   * @static
   * @method getLoopedLastIndex
   * @returns {Number} return Int Number
   * @example
   * console.log( aid.math.getLoopedLastIndex(8, 1, 7) ); // 7
   * console.log( aid.math.getLoopedLastIndex(8, 4, 7) ); // 2
   */
  math.getLoopedLastIndex = function (totalLength, loopGap, firstIndex) {
    if (arguments.length < 3) {
      throw Error('getLoopedLastIndex function requires 3 arguments.');
    }
    if (!aid.isInteger(totalLength) || !aid.isInteger(loopGap) || !aid.isInteger(firstIndex)) {
      throw Error('arguments must be Integer Number.');
    }
    if (totalLength < 1 || firstIndex < 1) {
      throw Error('totalLength and firstIndex can not smaller than 1.');
    }
    if (loopGap > totalLength || firstIndex > totalLength) {
      throw Error('loopGap and firstIndex can not bigger than totalLength.');
    }

    var index = firstIndex;
    for (var i = 0; i < loopGap - 1; i++) {
      index = (index + 1 > totalLength) ? 1 : index + 1;
    }

    return index;
  };

  /**
   * get reverse looped index from lastIndex in 1 ~ totalLength.
   * value decreases from lastIndex to (lastIndex - loopGap - 1).
   * if value is smaller than 0, change value to totalLength. and return value.
   *
   * @static
   * @method getReverseLoopedFirstIndex
   * @returns {Number} return Int Number
   * @example
   * console.log( aid.math.getReverseLoopedFirstIndex(8, 4, 2) ); // 7
   * console.log( aid.math.getReverseLoopedFirstIndex(8, 8, 2) ); // 3
   */
  math.getReverseLoopedFirstIndex = function (totalLength, loopGap, lastIndex) {
    if (arguments.length < 3) {
      throw Error('getReverseLoopedFirstIndex function requires 3 arguments.');
    }
    if (!aid.isInteger(totalLength) || !aid.isInteger(loopGap) || !aid.isInteger(lastIndex)) {
      throw Error('arguments must be Integer Number.');
    }
    if (totalLength < 1 || lastIndex < 1) {
      throw Error('totalLength and lastIndex can not smaller than 1.');
    }
    if (loopGap > totalLength || lastIndex > totalLength) {
      throw Error('loopGap and lastIndex can not bigger than totalLength.');
    }

    var index = lastIndex;
    for (var i = 0; i < loopGap - 1; i++) {
      index = (index - 1 < 1) ? totalLength : index - 1;
    }

    return index;
  };

  /**
   * days name
   *
   * @static
   * @property date.DAYS
   * @returns {Array} return Array
   * @example
   */
  date.DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  /**
   * months name
   *
   * @static
   * @property date.MONTHS
   * @returns {Array} return Array
   * @example
   */
  date.MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  /**
   * 1 minutes to second unit (60 sec)
   *
   * @static
   * @property date.MIN_TO_SEC
   * @returns {Number} return Int number
   * @example
   */
  date.MIN_TO_SEC = 60;

  /**
   * 1 hour to second unit (60 * 60 = 3600 sec)
   *
   * @static
   * @property date.HOUR_TO_SEC
   * @returns {Number} return Int number
   * @example
   */
  date.HOUR_TO_SEC = 3600;

  /**
   * 1 day to second unit (60 * 60 * 24 = 86400 sec)
   *
   * @static
   * @property date.DAY_TO_SEC
   * @returns {Number} return Int number
   * @example
   */
  date.DAY_TO_SEC = 86400;

  /**
   * equal to Array.indexOf
   *
   * @static
   * @method indexOf
   * @returns {Number} return Int number
   * @example
   */
  array.indexOf = function (arr, target) {
    if (!aid.isArray(arr)) return -1;

    for (var i = 0, max = arr.length; i < max; ++i) {
      if (arr[i] === target) return i;
    }

    return -1;
  };

  /**
   * get index of minimum number in Array.
   *
   * @static
   * @method indexOfMin
   * @returns {Number} return Int number
   * @example
   */
  array.indexOfMin = function (arr, startSearchIndex) {
    if (!aid.isArray(arr) || !aid.isInteger(startSearchIndex)) return -1;

    var startIndex = (startSearchIndex > 0) ? startSearchIndex : 0;
    if (arr.length <= startIndex) return -1;

    var minVal = arr[startIndex],
      minIndex = startIndex;

    for (var i = minIndex + 1, max = arr.length; i < max; i++) {
      if (arr[i] < minVal) {
        minVal = arr[i];
        minIndex = i;
      }
    }

    return minIndex;
  };

  /**
   * swap two elements in Array.
   *
   * @static
   * @method swap
   * @returns {Array} return Array or null
   * @example
   * var arr = [18, 6, 66, 44, 9, 22, 14];
   * aid.array.swap(arr, 0, 1); // [6, 18, 66, 44, 9, 22, 14]
   */
  array.swap = function (arr, firstIndex, secondIndex) {
    if (arguments.length !== 3) return null;
    if (!aid.isArray(arr) || !aid.isInteger(firstIndex) || !aid.isInteger(secondIndex)) return null;
    if (firstIndex < 0 || firstIndex >= arr.length || secondIndex < 0 || secondIndex >= arr.length) return null;

    var tmp = arr[firstIndex];
    arr[firstIndex] = arr[secondIndex];
    arr[secondIndex] = tmp;

    return arr;
  };

  /**
   * selection sort in Array.
   *
   * @static
   * @method selectionSort
   * @returns {Array} return Array or null
   * @example
   * var arr = [18, 6, 66, 44, 9, 22, 14];
   * aid.array.selectionSort(arr); // [6, 9, 14, 18, 22, 44, 66]
   */
  array.selectionSort = function (arr) {
    if (!aid.isArray(arr) || arr.length <= 0) return null;

    var minIndex = 0;
    for (var i = 0, max = arr.length - 1; i < max; i++) {
      minIndex = array.indexOfMin(arr, i);
      array.swap(arr, i, minIndex);
    }

    return arr;
  };


  /**
   * remove element in Array, and return cloned Array.
   *
   * @static
   * @method remove
   * @returns {Array} return Array
   * @example
   * var arr = [1, 2, 3, 4, 5, 99];
   * aid.array.remove(arr, 99); // [1, 2, 3, 4, 5]
   */
  array.remove = function (arr, target) {
    if (!aid.isArray(arr)) {
      throw new TypeError('1st parameter type of array.remove() must be Array');
    }

    var clonedArr = arr.slice(0),
      index = array.indexOf(clonedArr, target);
    if (index >= 0) clonedArr.splice(index, 1);

    return clonedArr;
  };

  /**
   * get 2 x 2 Matrix Array
   *
   * @static
   * @method getMatrixArr
   * @returns {Array} return array
   * @example
   */
  array.getMatrixArr = function (rowNum, columnNum, initialVal) {
    var arr = [];
    for (var i = 0; i < rowNum; ++i) {
      var columns = [];

      for (var j = 0; j < columnNum; ++j) {
        columns[j] = initialVal;
      }
      arr[i] = columns;
    }

    return arr;
  };

  /**
   * binary search version of Array.indexOf
   *
   * @static
   * @method binaryIndexOf
   * @returns {Number} return Int number
   * @example
   */
  array.binaryIndexOf = function (sortedArray, target) {
    if (!aid.isArray(sortedArray) || sortedArray.length <= 0) return -1;

    var first = 0,
      last = sortedArray.length - 1,
      middle;

    while (first <= last) {
      middle = Math.floor((first + last) / 2);

      if (target === sortedArray[middle]) {
        return middle;
      } else {
        if (target < sortedArray[middle]) {
          last = middle - 1;
        } else {
          first = middle + 1;
        }
      }
    }

    return -1;
  };

  /**
   * get object has property in array.
   * this object is first matched element in array by value or regex.
   *
   * @static
   * @method getFirstObjectHasProperty
   * @returns {Object} return object
   * @example
   * var arrayHasObjects = [{ no: 11 }, { no: 22 }];
   * array.getFirstObjectHasProperty(arrayHasObjects, 'index', 11) // null
   * array.getFirstObjectHasProperty(arrayHasObjects, 'no', 11) // {no: 11}
   * array.getFirstObjectHasProperty(arrayHasObjects, 'no', new RegExp('^1')) // {no: 11}
   * array.getFirstObjectHasProperty(arrayHasObjects, 'no', /^(1)\d/) // {no: 11}
   *
   */
  array.getFirstObjectHasProperty = function (arrayHasObjects, propertyKey, findPropertyValueOrRegex) {
    if (!aid.isArray(arrayHasObjects) || arrayHasObjects.length <= 0) return null;
    if (!aid.isString(propertyKey)) return null;

    var obj, result = null;
    for (var i = 0, max = arrayHasObjects.length; i < max; ++i) {
      obj = arrayHasObjects[i];
      if (!obj.hasOwnProperty(propertyKey)) continue;

      if (aid.isRegExp(findPropertyValueOrRegex)) {
        if (findPropertyValueOrRegex.test(obj[propertyKey])) {
          result = obj;
          break;
        }
      } else {
        if (obj[propertyKey] === findPropertyValueOrRegex) {
          result = obj;
          break;
        }
      }
    }

    return result;
  };

  /*
   * Data Structure
   */
  // Stack
  var Stack = function () {
    this._dataStore = [];
    this._top = 0;
  };

  Stack.prototype.push = function (element) {
    if (this._top < 0) this._top = 0;
    this._dataStore[this._top++] = element;
  };

  Stack.prototype.pop = function () {
    return this._dataStore[--this._top];
  };

  Stack.prototype.peek = function () {
    return this._dataStore[this._top - 1];
  };

  Stack.prototype.length = function () {
    return (this._top > 0) ? this._top : 0;
  };

  Stack.prototype.clear = function () {
    this._dataStore = [];
    this._top = 0;
  };

  aid.createStack = function () {
    return new Stack();
  };

  // Queue
  var Queue = function () {
    this._dataStore = [];
  };

  Queue.prototype.enqueue = function (element) {
    this._dataStore.push(element);
  };

  Queue.prototype.dequeue = function () {
    return this._dataStore.shift();
  };

  Queue.prototype.front = function () {
    return this._dataStore[0];
  };

  Queue.prototype.rear = function () {
    return this._dataStore[this._dataStore.length - 1];
  };

  Queue.prototype.length = function () {
    return this._dataStore.length;
  };

  Queue.prototype.isEmpty = function () {
    if (this._dataStore.length <= 0) return true;
    return false;
  };

  aid.createQueue = function () {
    return new Queue();
  };

  // LinkedList node
  var LinkedListNode = function (data) {
    this.data = data;
    this.next = null;
  };

  // LinkedList
  var LinkedList = function () {
    this.head = new LinkedListNode('head');
  };

  LinkedList.prototype.find = function (data) {
    var node = this.head;
    while (node.data !== data) {
      node = node.next;
      if (node === null) return node;
    }
    return node;
  };

  LinkedList.prototype.findPrevious = function (data) {
    if (this.head.data === data) return null;

    var node = this.head;
    while ((node.next !== null) && (node.next.data !== data)) {
      node = node.next;
    }
    return node;
  };

  LinkedList.prototype.insert = function (data, prevNodeData) {
    var insertNode = new LinkedListNode(data),
      prevNode = this.find(prevNodeData);
    insertNode.next = prevNode.next;
    prevNode.next = insertNode;
  };

  LinkedList.prototype.remove = function (data) {
    var prevNode = this.findPrevious(data);
    if (prevNode.next !== null) {
      prevNode.next = prevNode.next.next;
    }
  };

  LinkedList.prototype.getAllNodes = function () {
    var nodes = [this.head],
      node = this.head;

    while (node.next !== null) {
      nodes.push(node.next);
      node = node.next;
    }
    return nodes;
  };

  aid.createLinkedList = function () {
    return new LinkedList();
  };

  /**
   * check element is in viewport entirely.
   *
   * @static
   * @method isEntirelyInViewport
   * @param {Element}
   * @example
   */
  element.isEntirelyInViewport = function (_element) {
    var ele = _element;
    if (typeof jQuery === 'function' && ele instanceof jQuery) ele = ele.get(0);
    if (!ele) return false;

    var rect = ele.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
      rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
    );
  };

  /**
   * check element is in viewport partially.
   *
   * @static
   * @method isPartiallyInViewport
   * @param {Element}
   * @example
   */
  element.isPartiallyInViewport = function (_element) {
    var ele = _element;
    if (typeof jQuery === 'function' && ele instanceof jQuery) ele = ele.get(0);
    if (!ele) return false;

    var rect = ele.getBoundingClientRect(),
      windowHeight = (window.innerHeight || document.documentElement.clientHeight),
      windowWidth = (window.innerWidth || document.documentElement.clientWidth);

    // http://stackoverflow.com/questions/325933/determine-whether-two-date-ranges-overlap
    var vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0);
    var horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);

    return (vertInView && horInView);
  };

  /**
   * element text ellipsis function
   *
   * @static
   * @method ellipsis
   * @param {Element, left margin offset, right margin offset}
   * @example
   */
  /*
   element.ellipsis = function(_element, _leftMargin, _rightMargin) {
   var ELLIPSIS_STR = '...';

   var ele = $(_element);
   if(ele.length <= 0) return;

   var leftMargin = commonUtil.isDefined(_leftMargin) ? _leftMargin : 0,
   rightMargin = commonUtil.isDefined(_rightMargin) ? _rightMargin : 0,
   text = ele.text(),
   limitWidth = ele.width();

   var parent = ele.parent(),
   eleClone = ele.clone();
   eleClone.css( {display: 'none', position: 'absolute', width: 'auto', height: 'auto'} );
   parent.append(eleClone);

   var isNeedEllipsis = false,
   tmpStr = '';
   for(var i=0,max=text.length; i<max; i++) {
   tmpStr += text.charAt(i);
   eleClone.text(tmpStr);
   if(ele.width() <= eleClone.width() + leftMargin + rightMargin) {
   tmpStr = tmpStr.substr(0, tmpStr.length - 1);
   isNeedEllipsis = true;
   break;
   }
   }

   if(isNeedEllipsis) {
   tmpStr = ( tmpStr.substr(0, tmpStr.length - ELLIPSIS_STR.length) ) + ELLIPSIS_STR;
   ele.text(tmpStr);
   }
   eleClone.remove();
   };
   */

  /**
   * prevent document scroll from scrallable child element.
   *
   * @static
   * @method preventDocumentScrollFromScrollableElement
   * @param {Element} element
   * @param {Event} jQuery event
   * @example
   * var ele = ${element}, event = (browser.isFF) ? 'DOMMouseScroll' : 'mousewheel';
   * ele.on(event, function(evt) {
   * util.preventDocumentScrollFromScrollableElement(ele, evt);
   * });
   */
  control.preventDocumentScrollFromScrollableElement = function (_element, event) {
    var ele = $(_element);
    if (!ele.length) return;

    var height = ele.height(),
      scrollHeight = ele.get(0).scrollHeight;

    if (height < scrollHeight) {
      var scrollTop = ele.scrollTop();

      var isMouseWheelDown = false;
      if (browser.isFF) {
        isMouseWheelDown = (event.originalEvent.detail > 0) ? true : false;
      } else {
        isMouseWheelDown = (event.originalEvent.wheelDelta < 0) ? true : false;
      }

      if ((scrollTop >= (scrollHeight - height) && isMouseWheelDown) || (scrollTop <= 0 && !isMouseWheelDown)) {
        event.preventDefault();
      }
    }
  };

  aid.platform = platform;
  aid.browser = browser;
  aid.string = string;
  aid.math = math;
  aid.date = date;
  aid.array = array;
  aid.element = element;
  aid.control = control;

  if (typeof exports !== 'undefined') {
    if (typeof modules !== 'undefined' && module.exports) {
      exports = module.exports = aid;
    }
  } else if (typeof define === 'function' && define.amd) {
    define('aid', function () {
      return aid;
    });
  } else {
    global.aid = aid;
  }
}(window));

