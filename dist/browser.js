"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * is IE browser
 *
 * @static
 * @method isIE
 * @param {String} userAgent
 * @returns {Boolean} return boolean
 * @example
 * console.log( aid.isIE(window.navigator.userAgent) );
 */
var isIE = exports.isIE = function isIE(userAgent) {
  return (/msie/i.test(userAgent) || /trident/i.test(userAgent)
  );
};