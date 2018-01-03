import {getGlobal} from './common';
import {
  isIE,
  isEdge,
  isFF,
  isOpera,
  isChrome,
  isSafari,
  getIEVersion,
  getFFVersion,
  getOperaVersion,
  getChromeVersion,
  getSafariVersion,
  getIECompatibility,
  isSupportDraggable,
  isSupportDragAndDrop,
  isChromeExtension,
  getCookie,
  setCookie
} from './browser';

(function () {
  'use strict';

  const global = getGlobal();

  let aid = {
    isIE,
    isEdge,
    isFF,
    isOpera,
    isChrome,
    isSafari,
    getIEVersion,
    getFFVersion,
    getOperaVersion,
    getChromeVersion,
    getSafariVersion,
    getIECompatibility,
    isSupportDraggable,
    isSupportDragAndDrop,
    isChromeExtension,
    getCookie,
    setCookie
  };

  /**
   * get object is null/undefined or other
   *
   * @static
   * @method existy
   * @param {Object} obj
   * @returns {Boolean} return boolean
   * @example
   * console.log( aid.existy(undefined) ); // false
   * console.log( aid.existy(null) ); // false
   * console.log( aid.existy('') ); // true
   */
  aid.existy = (obj) => (obj != null);

  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = aid;
    }
  } else if (typeof define === 'function' && define.amd) {
    define('aid', [], function () {
      return aid;
    });
  } else {
    global.aid = aid;
  }
}());