const StyleDictionary = require('style-dictionary');

// Prevent StyleDictionary from renaming tokens ending with '...3XL' to '...3-xl'.
// Additionally, split words like 'fontSize' to 'font-size'.
StyleDictionary.registerTransform({
  type: 'name',
  name: 'name/postnl',
  transformer: (token) => {
    const regex = /(?<=[a-z])[A-Z]/g;
    return token.path.join('-').replace(regex, (a, b) => `-${a}`).toLowerCase();
  }
})

const PostNLStyleDictionary = StyleDictionary.extend({
  source: ['tokens/input.json'],
  platforms: {
    css: {
      transformGroup: 'css',
      buildPath: 'build/',
      transforms: ['name/postnl'],
      files: [{
        destination: '_variables.css',
        format: 'css/variables'
      }]
    }
  }
});

PostNLStyleDictionary.buildAllPlatforms();