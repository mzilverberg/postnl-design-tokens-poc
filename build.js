const StyleDictionary = require('style-dictionary');
const cssTokenNames = require('./transforms/css/postnl-name');
const cssHexToRgba = require('./transforms/css/hex-to-rgba');
const cssTextStyles = require('./transforms/css/text-styles');

StyleDictionary
  .registerTransform(cssTokenNames)
  .registerTransform(cssHexToRgba)
  .registerTransform(cssTextStyles)
  .extend({
    source: ['tokens/input.json'],
    platforms: {
      css: {
        buildPath: 'build/',
        transforms: ['name/postnl', 'color/hex-to-rgba', 'type/text-styles'],
        files: [{
          destination: '_variables.css',
          format: 'css/variables'
        }]
      }
    }
  })
  .buildAllPlatforms();