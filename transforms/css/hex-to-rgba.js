const hexToRgba = require('hex-to-rgba');

// Convert RGBA colors since Figma tokens plugin will put them in a eight-digit hex notation (i.e. #ffffff00).
// If the alpha is 0, return the `transparent` keyword instead.
module.exports = {
  type: 'value',
  name: 'color/hex-to-rgba',
  matcher: (token) => token.value.toString().match(/#[\w\d]{8}/g) !== null,
  transformer: (token) => {
    let color = hexToRgba(token.value)
    return color.slice(-4) === ', 0)' ? 'transparent' : color
  }
}