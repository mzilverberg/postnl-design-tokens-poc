const StyleDictionary = require('style-dictionary').extend({
  source: ['tokens/input.json'],
  platforms: {
    css: {
      transformGroup: 'css',
      buildPath: 'build/',
      files: [{
        destination: '_variables.css',
        format: 'css/variables'
      }]
    }
  }
});

StyleDictionary.buildAllPlatforms();