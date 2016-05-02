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
;(function(global) {
	"use strict";

	var aid = {},
		browser = {},
		string = {},
    date = {},
		array = {},
		element = {};

	var ua = global.navigator.userAgent;

	/**
	 * get object is null/undefined or other
	 *
	 * @static
	 * @method isDefined
   * @param {object}
   * @return {Boolean} return boolean
	 * @example
	 */
	aid.existy  = function(obj) {
		return obj != null;
	};

	/**
	 * check object is defined function
	 *
	 * @static
	 * @method isDefined
   * @param {object}
   * @return {Boolean} return boolean
	 * @example
	 * console.log('aid.isDefined(null) :', aid.isDefined(null));
	 */
	aid.isDefined = function(obj) {
		var flag = true;
		if(obj === null || typeof obj === 'undefined') return false;
		return flag;
	};

	/**
	 * check object type is Boolean
	 *
	 * @static
	 * @method isBoolean
   * @param {object}
   * @return {Boolean} return boolean
	 * @example
	 */
	aid.isBoolean = function(obj) {
		if(!aid.isDefined(obj)) return false;
		return (object.constructor === Boolean);
	};

	/**
	 * check object type is Number
	 *
	 * @static
	 * @method isNumber
   * @param {object}
   * @return {Boolean} return boolean
	 * @example
	 */
	aid.isNumber = function(obj) {
		if(!aid.isDefined(obj)) return false;
		return (object.constructor === Number);
	};

	/**
	 * check object type is String
	 *
	 * @static
	 * @method isString
   * @param {object}
   * @return {Boolean} return boolean
	 * @example
	 */
	aid.isString = function(obj) {
		if(!aid.isDefined(obj)) return false;
		return (object.constructor === String);
	};

	/**
	 * check object type is Array
	 *
	 * @static
	 * @method isArray
   * @param {object}
   * @return {Boolean} return boolean
	 * @example
	 */
	aid.isArray = function(obj) {
		if(!aid.isDefined(obj)) return false;
		return (object.constructor === Array);
	};

	/**
	 * check object type is Object
	 *
	 * @static
	 * @method isObject
   * @param {object}
   * @return {Boolean} return boolean
	 * @example
	 */
	aid.isObject = function(obj) {
		if(!aid.isDefined(obj)) return false;
		return (object.constructor === Object);
	};

	/**
	 * check object type is Function
	 *
	 * @static
	 * @method isFunction
   * @param {object}
   * @return {Boolean} return boolean
	 * @example
	 */
	aid.isFunction = function(obj) {
		if(!aid.isDefined(obj)) return false;
		return (object.constructor === Function);
	};

	/**
	 * inherit Class function
	 *
	 * @static
	 * @method inherit
   * @param {Child Class, Parent Class}
	 * @example
	 */
	aid.inherit = (function() {
		// use closure, protect gabarge collection.
    var F = function() {}; 

    return function(ChildClass, ParentClass) {
      F.prototype = ParentClass.prototype;
      
      ChildClass.prototype = new F();
      ChildClass.prototype.constructor = ChildClass;
      ChildClass.super = ParentClass.prototype;
    };
	}());

	/**
   * is IE browser 
   *
   * @static
   * @method isIE
   * @return {Boolean} return boolean
   * @example
   */
  browser.isIE = (function() {
    var flag = /msie/i.test(ua) || /trident/i.test(ua);
    return flag;
  }());

  /**
   * is Firefox browser 
   *
   * @static
   * @method isFF
   * @return {Boolean} return boolean
   * @example
   */
  browser.isFF = (function() {
    var flag = /Firefox/i.test(ua);
    return flag;
  }());

  /**
   * is Opera browser 
   *
   * @static
   * @method isOpera
   * @return {Boolean} return boolean
   * @example
   */
  browser.isOpera = (function() {
    var flag = /Opera/i.test(ua) || /OPR\//i.test(ua);
    return flag;
  }());

  /**
   * is Chrome browser 
   *
   * @static
   * @method isChrome
   * @return {Boolean} return boolean
   * @example
   */
  browser.isChrome = (function() {
    var flag = !browser.isOpera && /Chrome/i.test(ua);
    return flag;
  }());

  /**
   * is Safari browser 
   *
   * @static
   * @method isSafari
   * @return {Boolean} return boolean
   * @example
   */
  browser.isSafari = (function() {
    var flag =  !/Chrome/i.test(ua) && /Safari/i.test(ua);
    return flag;
  }());

  /**
   * get IE version
   *
   * @static
   * @method getIEVersion
   * @return {Float} return version number
   * @example
   */
  browser.getIEVersion = function() {
    if(browser.isIE) {
      if(/msie (\d+\.\d+);/i.test(ua)) return parseFloat(RegExp.$1, 10);
      if(/trident.*rv:(\d+)\.(\d+)/i.test(ua)) return parseFloat(RegExp.$1, 10);
    }
    return -1;
  };

  /**
   * get Firefox version
   *
   * @static
   * @method getFFVersion
   * @return {Float} return version number
   * @example
   */
  browser.getFFVersion = function() {
    if(browser.isFF) {
      if(/Firefox[\/\s](\d+\.\d+)/i.test(ua)) return parseFloat(RegExp.$1, 10);
    }
    return -1;
  };

  /**
   * get Opera version
   *
   * @static
   * @method getOperaVersion
   * @return {Float} return version number
   * @example
   */
  browser.getOperaVersion = function() {
    if(browser.isOpera) {
      if(/Opera/i.test(ua)) {
        if(/Version[\/\s](\d+\.\d+)/i.test(ua)) return parseFloat(RegExp.$1, 10);
        if(/Opera[\/\s](\d+\.\d+)/i.test(ua)) return parseFloat(RegExp.$1, 10);
      }
      if(/OPR[\/\s](\d+\.\d+)/i.test(ua)) return parseFloat(RegExp.$1, 10);
    }
    return -1;
  };

  /**
   * get Chrome version
   *
   * @static
   * @method getChromeVersion
   * @return {Float} return version number
   * @example
   */
  browser.getChromeVersion = function() {
	  if(browser.isChrome) {
      if(/Chrome[\/\s](\d+\.\d+)/i.test(ua)) return parseFloat(RegExp.$1, 10);
	  }
	  return -1;
  };

  /**
   * get Safari version
   *
   * @static
   * @method getSafariVersion
   * @return {Float} return version number
   * @example
   */
  browser.getSafariVersion = function() {
    if(browser.isSafari) {
      if(/Version[\/\s](\d+\.\d+)/i.test(ua)) return parseFloat(RegExp.$1, 10);
    }
    return -1;
  };

  /**
   * get IE browser Compatibility info object.
   *
   * @static
   * @method getIECompatibility
   * @param {String} optionUserAgentStr
   * @return {Object} return {isIE:true/false, isCompatibilityMode:true/false, compatibilityVersion:number}
   * @example
   */
  browser.getIECompatibility = function(optionUserAgentStr) {
		var ua = (optionUserAgentStr) ? optionUserAgentStr : global.navigator.userAgent.toLowerCase(),
      regex_msie = /msie/i,
      regex_msie7 = /msie 7/i,
      regex_msie8 = /msie 8/i,
      regex_msie9 = /msie 9/i,
      regex_msie10 = /msie 10/i,
      regex_msie11 = /rv:11[\.0-9]{0,}/,
      regex_trident = /trident/i,
      regex_trident7 = /trident\/7/;

    if( !regex_msie.test(ua) && !regex_msie11.test(ua)) {
      // not IE
      return { isIE : false, isCompatibilityMode : false, compatibilityVersion : -1 };
    }
    if(regex_msie11.test(ua) && regex_trident7.test(ua)) {
      // IE11 standard
      return { isIE : true, isCompatibilityMode : false, compatibilityVersion : -1 };
    }
    if(regex_msie.test(ua) && regex_trident7.test(ua)) {
      // IE11 compatibility mode
      if(regex_msie7.test(ua)) return { isIE : true, isCompatibilityMode : true, compatibilityVersion : 7 };
      if(regex_msie8.test(ua)) return { isIE : true, isCompatibilityMode : true, compatibilityVersion : 8 };
      if(regex_msie9.test(ua)) return { isIE : true, isCompatibilityMode : true, compatibilityVersion : 9 };
      if(regex_msie10.test(ua)) return { isIE : true, isCompatibilityMode : true, compatibilityVersion : 10 };
    }
    if(regex_msie7.test(ua) && regex_trident.test(ua)) {
      // IE8 ~ 10 compatibility mode
      return { isIE : true, isCompatibilityMode : true, compatibilityVersion : 7 };
    }
    // IE8 ~ 10 standard
    return { isIE : true, isCompatibilityMode : false, compatibilityVersion : -1 };
  };

  /**
   * is browser support draggable attribute of element.
   *
   * @static
   * @method isSupportDraggable
   * @return {Boolean} return boolean
   * @example
   */
  browser.isSupportDraggable = function() {
    var div = document.createElement('div');
    return ('draggable' in div);
  };

  /**
   * is browser support element methods related drag(ondragstart, ondrop, etc...).
   *
   * @static
   * @method isSupportDragAndDrop
   * @return {Boolean} return boolean
   * @example
   */
  browser.isSupportDragAndDrop = function() {
    var div = document.createElement('div');
    return ('ondragstart' in div && 'ondrop' in div);
  };

  /**
   * is browser support html5 File API.
   *
   * @static
   * @method isSupportFileApi
   * @return {Boolean} return boolean
   * @example
   */
  browser.isSupportFileApi = function() {
    return !!(global.File && global.FileReader && global.FileList && global.Blob);
  };

  /**
   * is chrome extension.
   *
   * @static
   * @method isChromeExtension
   * @return {Boolean} return boolean
   * @example
   */
  browser.isChromeExtension = (function() {
    if(browser.isChrome && window.chrome) {
      if(!chrome.cookies) {
        if(chrome.experimental) chrome.cookies = chrome.experimental.cookies;
      }

      if(chrome.cookies) return true;
      return false;
    }
    return false;
  }());

  /**
   * get cookie
   *
   * @static
   * @method getCookie
   * @return {String} return string
   * @example
   */
  browser.getCookie = function(key) {
    var cookieArr = document.cookie.split('; '),
      splitArr = [],
      keyStr = '',
      valueStr = '';

    for(var i=0,max=cookieArr.length; i<max; ++i) {
      splitArr = cookieArr[i].split('=');
      keyStr = splitArr[0];
      valueStr = window.decodeURIComponent( splitArr[1] );
      if(keyStr === key) return valueStr;
    }

    return null;
  };

  /**
   * set cookie
   *
   * @static
   * @method setCookie
   * @example
   */
  browser.setCookie = function(key, value, expireSecond, path, domain) {
    var expires = '',
      pathStr = '; path=' + ( (path) ? path : '/' ),
      domainStr = (domain) ? '; domain=' + domain : '';

    if(expireSecond) {
      var date = new Date();
      date.setTime( date.getTime() + (expireSecond * 1000) );
      expires = '; expires=' + date.toGMTString();
    }

    document.cookie = key + '=' + window.encodeURIComponent(value) + pathStr + domainStr + expires;
  };

  /**
   * check email string.
   *
   * @static
   * @method isEmail
   * @return {Boolean} return boolean
   * @example
   */
  string.isEmail = function(emailStr) {
  	// html5 form email check regex - https://www.w3.org/TR/html5/forms.html#e-mail-state-(type=email)
  	var emailRegex = new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$"),
    	flag = emailRegex.exec(emailStr) ? true : false;
    return flag;
  };

  /**
   * get param value from uri.
   *
   * @static
   * @method getUriParam
   * @return {String} return string
   * @example
   */
  string.getUriParam = function(uri, paramName) {
    var str = uri;
    if(str.length < 1) return '';

    var tmpArr = str.split('?');
    if(tmpArr.length < 2) return '';

    var paramStr = tmpArr[1],
      params = paramStr.split('&');

    for(var i=0,max=params.length; i<max; ++i) {
      var keyValueArr = params[i].split('=');
      if(keyValueArr.length <= 1) keyValueArr.push('');
      if(keyValueArr[0] === paramName) return window.decodeURIComponent( keyValueArr[1] );
    }

    return '';
  };

  /**
   * check youtube video id.
   *
   * @static
   * @method isValidYoutubeVideoId
   * @return {Boolean} return boolean
   * @example
   */
  string.isValidYoutubeVideoId = function(youtubeId) {
    var regex = /^(\w|-|_){11}$/;
    return regex.exec(youtubeId) ? true : false;
  };

  /**
   * check youtube uri is valid.
   *
   * @static
   * @method getObjCheckYoutubeURI
   * @return {Object} return { youtubeId: String, isValidYoutubeURI: Boolean }
   * @example
   */
  string.getObjCheckYoutubeURI = function(uri) {
    var YOUTUBE_REGEXES = {
      'watch' : /^(?:(?:https?:)?\/\/)?(?:www\.)?youtube\.com\/watch/,
      'embed' : /^(?:(?:https?:)?\/\/)?(?:www\.)?youtube\.com\/(?:embed\/((?:\w|-|_){11}))/,
      'v' : /^(?:(?:https?:)?\/\/)?(?:www\.)?youtube\.com\/(?:v\/((?:\w|-|_){11}))/,
      'youtu.be' : /^(?:(?:https?:)?\/\/)?(?:www\.)?youtu\.be\/((?:\w|-|_){11})/
    };

    var flag = false,
      uriType = null;

    for(var key in YOUTUBE_REGEXES) {
      var val = YOUTUBE_REGEXES[key];
      if(!val) continue;

      flag = YOUTUBE_REGEXES[key].exec(uri) ? true : false;
      if(flag) {
        uriType = key;
        break;
      }
    }

    var youtubeId = '',
      isValidYoutubeURI = false;

    var tmpArr = [];
    switch(uriType) {
      case 'watch' :
        youtubeId = string.getUriParam(uri, 'v') || '';
      break;

      case 'embed' :
        tmpArr = uri.split('?')[0].split('/');
        youtubeId = tmpArr[ tmpArr.length - 1 ] || '';
      break;

      case 'v' :
        tmpArr = uri.split('?')[0].split('/');
        youtubeId = tmpArr[ tmpArr.length - 1 ] || '';
      break;

      case 'youtu.be' :
        tmpArr = uri.split('?')[0].split('/');
        youtubeId = tmpArr[ tmpArr.length - 1 ] || '';
      break;
    
      default :
        youtubeId = '';
    }

    if( youtubeId && string.isValidYoutubeVideoId(youtubeId) ) {
      isValidYoutubeURI = true;
    }else{
      isValidYoutubeURI = false;
    }

    return {
      youtubeId : youtubeId,
      isValidYoutubeURI : isValidYoutubeURI
    };
  };

  /**
   * days name
   *
   * @static
   * @property date.DAYS
   * @return {Array} return Array
   * @example
   */
  date.DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  /**
   * months name
   *
   * @static
   * @property date.MONTHS
   * @return {Array} return Array
   * @example
   */
  date.MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  /**
   * 1 minutes to second unit (60 sec)
   *
   * @static
   * @property date.MIN_TO_SEC
   * @return {Number} return Int
   * @example
   */
  date.MIN_TO_SEC = 60;

  /**
   * 1 hour to second unit (60 * 60 = 3600 sec)
   *
   * @static
   * @property date.HOUR_TO_SEC
   * @return {Number} return Int
   * @example
   */
  date.HOUR_TO_SEC = 3600;

  /**
   * 1 day to second unit (60 * 60 * 24 = 86400 sec)
   *
   * @static
   * @property date.DAY_TO_SEC
   * @return {Number} return Int
   * @example
   */
  date.DAY_TO_SEC = 86400;

  /**
   * equal to Array.indexOf
   *
   * @static
   * @method indexOf
   * @return {Number} return Int
   * @example
   */
  array.indexOf = function(array, target) {
  	for(var i=0,max=array.length; i<max; ++i) {
  		if(array[i] === target) return i;
  	}
  	return -1;
  };

  /**
   * get 2 x 2 Matrix Array
   *
   * @static
   * @method getMatrixArr
   * @return {Array} return array
   * @example
   */
  array.getMatrixArr = function(rowNum, columnNum, initialVal) {
    var arr = [];
    for(var i=0; i<rowNum; ++i) {
      var columns = [];

      for(var j=0; j<columnNum; ++j) {
        columns[j] = initialVal;
      }
      arr[i] = columns;
    }

    return arr;
  };








	

	/*
	 * Data Structure
	 */
	// Stack
	var Stack = function() {
		this._dataStore = [];
		this._top = 0;
	};

	Stack.prototype.push = function(element) {
		if(this._top < 0) this._top = 0;
		this._dataStore[this._top++] = element;
	};

	Stack.prototype.pop = function() {
		return this._dataStore[--this._top];
	};

	Stack.prototype.peek = function() {
		return this._dataStore[this._top - 1];
	};

	Stack.prototype.length = function() {
		return (this._top > 0) ? this._top : 0;
	};

	Stack.prototype.clear = function() {
		this._dataStore = [];
		this._top = 0;
	};

	aid.createStack = function() {
		return new Stack();
	};

  // Queue
  var Queue = function() {
    this._dataStore = [];
  };

  Queue.prototype.enqueue = function(element) {
    this._dataStore.push(element);
  };

  Queue.prototype.dequeue = function() {
    return this._dataStore.shift();
  };

  Queue.prototype.front = function() {
    return this._dataStore[0];
  };

  Queue.prototype.rear = function() {
    return this._dataStore[ this._dataStore.length - 1 ];
  };

  Queue.prototype.length = function() {
    return this._dataStore.length;
  };

  Queue.prototype.isEmpty = function() {
    if( this._dataStore.length <= 0 ) return true;
    return false;
  };

	/**
	 * element text ellipsis function
	 *
	 * @static
	 * @method ellipsis
     * @param {element, left margin offset, right margin offset}
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

	aid.browser = browser;
	aid.string = string;
  aid.date = date;
	aid.array = array;
	aid.element = element;

	if (typeof exports !== 'undefined') {
		if (typeof modules !== 'undefined' && module.exports) {
			exports = module.exports = aid;
		}
	} else if(typeof define === 'function' && define.amd) {
		define('aid', function() {
			return aid;
		});
	} else {
		global.aid = aid;
	}
}(window));

