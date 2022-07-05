const StyleDictionary = require('style-dictionary');
const postNLName = require('./transforms/css/postnl-name');
const hexToRgba = require('./transforms/css/hex-to-rgba');

StyleDictionary
  .registerTransform(postNLName)
  .registerTransform(hexToRgba)
  .extend({
    source: ['tokens/input.json'],
    platforms: {
      css: {
        buildPath: 'build/',
        transforms: ['name/postnl', 'color/hex-to-rgba'],
        files: [{
          destination: '_variables.css',
          format: 'css/variables'
        }]
      }
    }
  })
  .buildAllPlatforms();