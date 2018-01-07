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
export const existy = obj => (obj != null);

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
export const isDefined = obj => ((obj === null || typeof obj === 'undefined') ? false : true);