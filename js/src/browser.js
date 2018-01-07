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
export const isIE = userAgent => (/msie/i.test(userAgent) || /trident/i.test(userAgent));