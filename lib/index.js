/**
 * Created by alykoshin on 22.01.16.
 */

'use strict';

/**
 * Node 0.10-0.12 does not supports Object.assign()
 *
 * Source below is based upon
 * https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign#Polyfill
 */



/**
 * @param {object} target - target object
 * @param {object} source - source object
 * @returns {object}
 */
var _assign = function(target, source) {

  for (var nextKey in source) {
    if (source.hasOwnProperty(nextKey)) {
      if (typeof source[nextKey] === 'object' && !Array.isArray(source[nextKey])) {
        if (typeof target[nextKey] !== 'object') { // If target has no such key or it is non-object
          target[nextKey] = {};                    // Replace it with empty object
        }
        _assign(target[nextKey], source[nextKey]);
      } else {
        target[ nextKey ] = source[ nextKey ];
      }
    }
  }

};



/** @param {object} target - target object, followed by list of source objects
 * @returns {object}
 */
var assign = function (target /* sources */) {

  if (target === undefined || target === null) {
    throw new TypeError('Cannot convert undefined or null to object');
  }
  var output = Object(target);

  for (var index = 1; index < arguments.length; index++) {
    var source = arguments[index];
    if (source !== undefined && source !== null) {

      _assign(target, source);

    }
  }

  return output;
};


module.exports = assign;
