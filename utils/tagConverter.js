const tagMap = require('../app/tag-map.json')

// Create reverse mapping (latin to croatian)
const reverseTagMap = Object.entries(tagMap).reduce((acc, [croatian, latin]) => {
  acc[latin] = croatian
  return acc
}, {})

/**
 * Converts a Croatian tag to its Latin equivalent using the tag map
 * @param {string} tag - The Croatian tag to convert
 * @returns {string} - The Latin equivalent of the tag
 */
function convertToLatin(tag){
  return tagMap[tag] || tag
}

/**
 * Converts a Latin tag to its Croatian equivalent using the reverse tag map
 * @param {string} tag - The Latin tag to convert
 * @returns {string} - The Croatian equivalent of the tag
 */
function convertToCroatian(tag) {
  return reverseTagMap[tag] || tag
}

module.exports = { convertToLatin, convertToCroatian }