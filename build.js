const StyleDictionary = require('style-dictionary');
const hexToRgba = require('hex-to-rgba');

// Prevent StyleDictionary from renaming tokens ending with '...3XL' to '...3-xl'.
// Additionally, split words like 'fontSize' to 'font-size'.
StyleDictionary.registerTransform({
  type: 'name',
  name: 'name/postnl',
  transformer: (token) => {
    const regex = /(?<=[a-z])[A-Z]/g;
    return token.path.join('-').replace(regex, (a, b) => `-${a}`).toLowerCase();
  }
// Convert RGBA colors since Figma tokens plugin will put them in a eight-digit hex notation (i.e. #ffffff00).
// If the alpha is 0, return the `transparent` keyword instead.
}).registerTransform({
  type: 'value',
  name: 'color/hex2rgba',
  matcher: (token) => token.value.toString().match(/#[\w\d]{8}/g) !== null,
  transformer: (token) => {
    let color = hexToRgba(token.value)
    return color.slice(-4) === ', 0)' ? 'transparent' : color
  }
})

const PostNLStyleDictionary = StyleDictionary.extend({
  source: ['tokens/input.json'],
  platforms: {
    css: {
      transformGroup: 'css',
      buildPath: 'build/',
      transforms: ['name/postnl', 'color/hex2rgba'],
      files: [{
        destination: '_variables.css',
        format: 'css/variables'
      }]
    }
  }
});

PostNLStyleDictionary.buildAllPlatforms();