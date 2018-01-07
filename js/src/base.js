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
export const existy = (obj) => (obj != null);