(function() {
    "use strict";

	if(!window.dm) window.dm = {};

	/**
     * @class commonUtil
     */
	var commonUtil = {};

	/**
	 * inherit Class function
	 *
	 * @static
	 * @method inherit
     * @param {Child Class, Parent Class}
	 * @example
	 */
	commonUtil.inherit = (function() {
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
	 * check exist object function
	 *
	 * @static
	 * @method isDefined
     * @param {object}
	 * @example
	 */
	commonUtil.isDefined = function(obj) {
		var flag = true;
		if(obj === null || typeof obj === 'undefined') return false;
		return flag;
	};

	/**
	 * element text ellipsis function
	 *
	 * @static
	 * @method ellipsis
     * @param {element, left margin offset, right margin offset}
	 * @example
	 */
	commonUtil.ellipsis = function(_element, _leftMargin, _rightMargin) {
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

	dm.commonUtil = commonUtil;
}());