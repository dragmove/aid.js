(function() {
    "use strict";

    if(!window.dm) window.dm = {};
    var browserUtil = {};

    /**
     * @class browserUtil
     */
    browserUtil.ua = window.navigator.userAgent;

    /**
     * is IE browser 
     *
     * @static
     * @method isIE
     * @return {Boolean} return boolean
     * @example
     */
    browserUtil.isIE = (function() {
        var flag = /msie/i.test(browserUtil.ua) || /trident/i.test(browserUtil.ua);
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
    browserUtil.isFF = (function() {
        var flag = /Firefox/i.test(browserUtil.ua);
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
    browserUtil.isOpera = (function() {
        var flag = /Opera/i.test(browserUtil.ua) || /OPR\//i.test(browserUtil.ua);
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
    browserUtil.isChrome = (function() {
        var flag = !browserUtil.isOpera && /Chrome/i.test(browserUtil.ua);
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
    browserUtil.isSafari = (function() {
        var flag =  !/Chrome/i.test(browserUtil.ua) && /Safari/i.test(browserUtil.ua);
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
    browserUtil.getIEVersion = function() {
        if(browserUtil.isIE) {
            if(/msie (\d+\.\d+);/i.test(browserUtil.ua)) return parseFloat(RegExp.$1, 10);
            if(/trident.*rv:(\d+)\.(\d+)/i.test(browserUtil.ua)) return parseFloat(RegExp.$1, 10);
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
    browserUtil.getFFVersion = function() {
        if(browserUtil.isFF) {
            if(/Firefox[\/\s](\d+\.\d+)/i.test(browserUtil.ua)) return parseFloat(RegExp.$1, 10);
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
    browserUtil.getOperaVersion = function() {
        if(browserUtil.isOpera) {
            if(/Opera/i.test(browserUtil.ua)) {
                if(/Version[\/\s](\d+\.\d+)/i.test(browserUtil.ua)) return parseFloat(RegExp.$1, 10);
                if(/Opera[\/\s](\d+\.\d+)/i.test(browserUtil.ua)) return parseFloat(RegExp.$1, 10);
            }
            if(/OPR[\/\s](\d+\.\d+)/i.test(browserUtil.ua)) return parseFloat(RegExp.$1, 10);
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
    browserUtil.getChromeVersion = function() {
        if(browserUtil.isChrome) {
            if(/Chrome[\/\s](\d+\.\d+)/i.test(browserUtil.ua)) return parseFloat(RegExp.$1, 10);
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
    browserUtil.getSafariVersion = function() {
        if(browserUtil.isSafari) {
            if(/Version[\/\s](\d+\.\d+)/i.test(browserUtil.ua)) return parseFloat(RegExp.$1, 10);
        }
        return -1;
    };

    /**
     * get location search parameter
     *
     * @static
     * @method getLocationParameter
     * @param {String} parameterName
     * @return {String} return parameter value
     * @example
     */
    browserUtil.getLocationParameter = function(parameterName) {
        var searchStr = window.location.search;
        if(searchStr.length < 1) return '';

        var params = searchStr.substr(1).split('&'),
            keyValueArr = [];
        for(var i=0,max=params.length; i<max; i++) {
            keyValueArr = params[i].split('=');
            if(keyValueArr.length <= 1) return '';
            
            if(keyValueArr[0] === parameterName) {
                return window.decodeURIComponent( keyValueArr[1] );
            }
        }
        return '';
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
    browserUtil.getIECompatibility = function(optionUserAgentStr) {
		var ua = (optionUserAgentStr) ? optionUserAgentStr : navigator.userAgent.toLowerCase(),
            regex_msie = /msie/i,
            regex_msie7 = /msie 7/i,
            regex_msie8 = /msie 8/i,
            regex_msie9 = /msie 9/i,
            regex_msie10 = /msie 10/i,
            regex_msie11 = /rv:11[\.0-9]{0,}/,
            regex_trident = /trident/i,
            regex_trident7 = /trident\/7/;
        if( !regex_msie.test(ua) && !regex_msie11.test(ua)) {
            // not ie
            return { isIE : false, isCompatibilityMode : false, compatibilityVersion : -1 };
        }
        if(regex_msie11.test(ua) && regex_trident7.test(ua)) {
            // ie11 standard
            return { isIE : true, isCompatibilityMode : false, compatibilityVersion : -1 };
        }
        if(regex_msie.test(ua) && regex_trident7.test(ua)) {
            // ie11 compatibility mode
            if(regex_msie7.test(ua)) return { isIE : true, isCompatibilityMode : true, compatibilityVersion : 7 };
            if(regex_msie8.test(ua)) return { isIE : true, isCompatibilityMode : true, compatibilityVersion : 8 };
            if(regex_msie9.test(ua)) return { isIE : true, isCompatibilityMode : true, compatibilityVersion : 9 };
            if(regex_msie10.test(ua)) return { isIE : true, isCompatibilityMode : true, compatibilityVersion : 10 };
        }
        if(regex_msie7.test(ua) && regex_trident.test(ua)) {
            // ie8~10 compatibility mode
            return { isIE : true, isCompatibilityMode : true, compatibilityVersion : 7 };
        }
        // ie8~10 standard
        return { isIE : true, isCompatibilityMode : false, compatibilityVersion : -1 };
    };

    /**
     * is browser support draggable attribute of element.
     *
     * @static
     * @method isSupportDraggable
     * @return {Object} return boolean
     * @example
     */
    browserUtil.isSupportDraggable = function() {
        var div = document.createElement('div');
        return ('draggable' in div);
    };

    /**
     * is browser support element methods related drag(ondragstart, ondrop, etc...).
     *
     * @static
     * @method isSupportDragAndDrop
     * @return {Object} return boolean
     * @example
     */
    browserUtil.isSupportDragAndDrop = function() {
        var div = document.createElement('div');
        return ('ondragstart' in div && 'ondrop' in div);
    };

    /**
     * is browser support html5 File API.
     *
     * @static
     * @method isSupportFileApi
     * @return {Object} return boolean
     * @example
     */
    browserUtil.isSupportFileApi = function() {
        return !!(window.File && window.FileReader && window.FileList && window.Blob);
    };

    dm.browserUtil = browserUtil;
}());