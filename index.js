'use strict'

/**
 * Gets Random Object from Array.
 * @param {array} array
 * @return {object}
 */

module.exports = (array) => {
  return array[Math.floor(Math.random() * array.length)]
}
