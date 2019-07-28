import isEmpty from 'ramda/src/isEmpty';
import isNil from 'ramda/src/isNil';

/**
 * @function isFalsy
 * Checks if a value is falsy -- empty, null, undefined, 0, false
 * @param {*} val
 * @return {boolean}
 * @example isFalsy(0) => true
 * @example isFalsy([]) => true
 * @example isFalsy(true) => false
 * @example isFalsy('test') => false
 */
const isFalsy = val => isNil(val) || isEmpty(val) || !val;

export default isFalsy;
