// Wonky solution to prevent duplication of text styles.
// Return text decoration property if it is something else than 'none', or a shorthand font notation otherwise.
module.exports = {
  type: 'value',
  name: 'type/text-styles',
  matcher: (token) => token.type === 'typography',
  transformer: (token) => {
    if(token.name.indexOf('default') < 0 && token.value.textDecoration && token.value.textDecoration !== 'none') {
      return token.value.textDecoration
    }
    return `${token.value.fontWeight} ${token.value.fontSize}/${token.value.lineHeight} ${token.value.fontFamily}`
  }
}