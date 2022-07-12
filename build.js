const StyleDictionary = require('style-dictionary');
const cssTokenNames = require('./transforms/css/postnl-name');
const cssHexToRgba = require('./transforms/css/hex-to-rgba');
const cssFontWeight = require('./transforms/css/font-weight');
// const cssTextStyles = require('./transforms/css/text-styles');

StyleDictionary
  // In order for these transforms to work, add their name to the 'transforms' array below.
  // The name of a transform can be found in the corresponding file.
  .registerTransform(cssTokenNames)
  .registerTransform(cssHexToRgba)
  .registerTransform(cssFontWeight)
  // .registerTransform(cssTextStyles)
  .extend({
    source: ['tokens/input.json'],
    platforms: {
      css: {
        buildPath: 'build/',
        transforms: ['name/postnl', 'color/hex-to-rgba', 'type/font-weight'/*, 'type/text-styles'*/],
        files: [{
          destination: '_variables.css',
          format: 'css/variables'
        }]
      }
    }
  })
  .buildAllPlatforms();