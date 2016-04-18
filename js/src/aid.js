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
		common = {},
		element = {},
		browser = {},
		string = {};

	/**
	 * check exist object function
	 *
	 * @static
	 * @method isDefined
   * @param {object}
	 * @example
	 */
	aid.isDefined = function(obj) {
		var flag = true;
		if(obj === null || typeof obj === 'undefined') return false;
		return flag;
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

	aid.getStack = function() {
		return new Stack();
	};

	/**
	 * element text ellipsis function
	 *
	 * @static
	 * @method ellipsis
     * @param {element, left margin offset, right margin offset}
	 * @example
	 */
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

