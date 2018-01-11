'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
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
var existy = exports.existy = function existy(obj) {
  return obj != null;
};

/**
 * check object is defined
 *
 * @static
 * @method isDefined
 * @param {Object} obj
 * @returns {Boolean} return boolean
 * @example
 * console.log( aid.isDefined(undefined) ); // false
 * console.log( aid.isDefined(null) ); // false
 * console.log( aid.isDefined(0) ); // true
 */
var isDefined = exports.isDefined = function isDefined(obj) {
  return obj === null || typeof obj === 'undefined' ? false : true;
};