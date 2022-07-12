// Convert named font weights to a numeric value.
module.exports = {
  type: 'value',
  name: 'type/font-weight',
  matcher: (token) => token.type === 'fontWeight',
  transformer: (token) => {
    const { value } = token
    const weights = {
      'Light': 300,
      'Regular': 400,
      'Medium': 500,
      'Bold': 700
    }
    return weights[value];
  }
}