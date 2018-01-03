import {getGlobal} from './common';

const global = getGlobal();

/**
 * is IE browser
 *
 * @static
 * @method isIE
 * @param {String} userAgent
 * @returns {Boolean} return boolean
 * @example
 * console.log( aid.browser.isIE(window.navigator.userAgent) );
 */
export const isIE = (userAgent) => (/msie/i.test(userAgent) || /trident/i.test(userAgent));

/**
 * is Edge browser
 *
 * @static
 * @method isEdge
 * @param {String} userAgent
 * @returns {Boolean} return boolean
 * @example
 * console.log( aid.browser.isEdge(window.navigator.userAgent) );
 */
export const isEdge = (userAgent) => (/Gecko/i.test(userAgent) && /Edge/i.test(userAgent));

/**
 * is Firefox browser
 *
 * @static
 * @method isFF
 * @param {String} userAgent
 * @returns {Boolean} return boolean
 * @example
 * console.log( aid.browser.isFF(window.navigator.userAgent) );
 */
export const isFF = (userAgent) => /Firefox/i.test(userAgent);

/**
 * is Opera browser
 *
 * @static
 * @method isOpera
 * @param {string} userAgent
 * @returns {Boolean} return boolean
 * @example
 * console.log( aid.browser.isOpera(window.navigator.userAgent) );
 */
export const isOpera = (userAgent) => (/Opera/i.test(userAgent) || /OPR\//i.test(userAgent));

/**
 * is Chrome browser
 *
 * @static
 * @method isChrome
 * @param {String} userAgent
 * @returns {Boolean} return boolean
 * @example
 * console.log( aid.browser.isChrome(window.navigator.userAgent) );
 */
export const isChrome = (userAgent) => (!isEdge(userAgent) && !isOpera(userAgent) && /Chrome/i.test(userAgent));

/**
 * is Safari browser
 *
 * @static
 * @method isSafari
 * @param {String} userAgent
 * @returns {Boolean} return boolean
 * @example
 * console.log( aid.browser.isSafari(window.navigator.userAgent) );
 */
export const isSafari = (userAgent) => (!/Chrome/i.test(userAgent) && /Safari/i.test(userAgent));

/**
 * get IE version
 *
 * @static
 * @method getIEVersion
 * @param {string} userAgent
 * @returns {Number} return version float number
 * @example
 * console.log( aid.browser.getIEVersion(window.navigator.userAgent) );
 */
export const getIEVersion = (userAgent) => {
  if (isIE(userAgent)) {
    if (/msie (\d+\.\d+);/i.test(userAgent)) return parseFloat(RegExp.$1, 10);
    if (/trident.*rv:(\d+)\.(\d+)/i.test(userAgent)) return parseFloat(RegExp.$1, 10);
  }

  return -1;
};

/**
 * get Firefox version
 *
 * @static
 * @method getFFVersion
 * @param {string} userAgent
 * @returns {Number} return version float number
 * @example
 * console.log( aid.browser.getFFVersion(window.navigator.userAgent) );
 */
export const getFFVersion = (userAgent) => {
  if (isFF(userAgent)) {
    if (/Firefox[\/\s](\d+\.\d+)/i.test(userAgent)) return parseFloat(RegExp.$1, 10);
  }

  return -1;
};

/**
 * get Opera version
 *
 * @static
 * @method getOperaVersion
 * @param {String} userAgent
 * @returns {Number} return version float number
 * @example
 * console.log( aid.browser.getOperaVersion(window.navigator.userAgent) );
 */
export const getOperaVersion = (userAgent) => {
  if (isOpera(userAgent)) {
    if (/Opera/i.test(userAgent)) {
      if (/Version[\/\s](\d+\.\d+)/i.test(userAgent)) return parseFloat(RegExp.$1, 10);
      if (/Opera[\/\s](\d+\.\d+)/i.test(userAgent)) return parseFloat(RegExp.$1, 10);
    }

    if (/OPR[\/\s](\d+\.\d+)/i.test(userAgent)) return parseFloat(RegExp.$1, 10);
  }

  return -1;
};

/**
 * get Chrome version
 *
 * @static
 * @method getChromeVersion
 * @param {String} userAgent
 * @returns {Number} return version float number
 * @example
 * console.log( aid.browser.getChromeVersion(window.navigator.userAgent) );
 */
export const getChromeVersion = (userAgent) => {
  if (isChrome(userAgent)) {
    if (/Chrome[\/\s](\d+\.\d+)/i.test(userAgent)) return parseFloat(RegExp.$1, 10);
  }

  return -1;
};

/**
 * get Safari version
 *
 * @static
 * @method getSafariVersion
 * @param {String} userAgent
 * @returns {Number} return version float number
 * @example
 * console.log( aid.browser.getSafariVersion(window.navigator.userAgent) );
 */
export const getSafariVersion = (userAgent) => {
  if (isSafari(userAgent)) {
    if (/Version[\/\s](\d+\.\d+)/i.test(userAgent)) return parseFloat(RegExp.$1, 10);
  }

  return -1;
};

/**
 * get IE browser Compatibility info object.
 *
 * @static
 * @method getIECompatibility
 * @param {String} optionUserAgent
 * @returns {Object} return { isIE: Boolean, isCompatibilityMode: Boolean, compatibilityVersion: Number }
 * @example
 * console.log( aid.browser.getIECompatibility() );
 * console.log( aid.browser.getIECompatibility('mozilla/5.0 (windows nt 6.1; wow64) applewebkit/537.36 (khtml, like gecko) hrome/39.0.2171.65 safari/537.36') );
 */
export const getIECompatibility = (optionUserAgent) => {
  const ua = (optionUserAgent) ? optionUserAgent : global.navigator.userAgent.toLowerCase(),
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
export const isSupportDraggable = () => ('draggable' in document.createElement('div'));

/**
 * is browser support element methods related drag(ondragstart, ondrop, etc...).
 *
 * @static
 * @method isSupportDragAndDrop
 * @returns {Boolean} return boolean
 * @example
 * console.log( aid.browser.isSupportDragAndDrop() );
 */
export const isSupportDragAndDrop = () => {
  const div = document.createElement('div');

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
export const isSupportFileApi = () => {
  return !!(global.File && global.FileReader && global.FileList && global.Blob);
};

/**
 * is chrome extension.
 *
 * @static
 * @method isChromeExtension
 * @param {string} userAgent
 * @returns {Boolean} return boolean
 * @example
 * console.log( aid.browser.isChromeExtension(window.navigator.userAgent) );
 */
export const isChromeExtension = (userAgent) => {
  if (isChrome(userAgent) && global.chrome) {
    if (!global.chrome.cookies) {
      if (global.chrome.experimental) global.chrome.cookies = global.chrome.experimental.cookies;
    }

    if (global.chrome.cookies) return true;

    return false;
  }

  return false;
};

/**
 * get cookie
 *
 * @static
 * @method getCookie
 * @param {String} key
 * @returns {String} return string
 * @example
 * console.log( aid.browser.getCookie('sampleCookieKey') );
 */
export const getCookie = (key) => {
  let cookieArr = document.cookie.split('; '),
    splitArr = [],
    keyStr = '',
    valueStr = '';

  for (let i = 0, max = cookieArr.length; i < max; ++i) {
    splitArr = cookieArr[i].split('=');
    keyStr = splitArr[0];
    valueStr = global.decodeURIComponent(splitArr[1]);

    if (keyStr === key) return valueStr;
  }

  return null;
};

/**
 * set cookie
 *
 * @static
 * @method setCookie
 * @param {String} key
 * @param {String} value
 * @param {Number} expireSecond
 * @param {String} path
 * @param {String} domain
 * @example
 * aid.browser.setCookie('sampleCookieKey', 'sampleValue', 3600, '/samplePath', 'sample.com');
 */
export const setCookie = (key, value, expireSecond, path, domain) => {
  let expires = '',
    pathStr = '; path=' + ( (path) ? path : '/' ),
    domainStr = (domain) ? '; domain=' + domain : '';

  if (expireSecond) {
    let date = new Date();
    date.setTime(date.getTime() + (expireSecond * 1000));

    expires = '; expires=' + date.toGMTString();
  }

  document.cookie = key + '=' + global.encodeURIComponent(value) + pathStr + domainStr + expires;
};