// Prevent StyleDictionary from renaming tokens ending with '...3XL' to '...3-xl'.
// Additionally, split words like 'fontSize' to 'font-size'.
module.exports = {
  type: 'name',
  name: 'name/postnl',
  transformer: (token) => {
    const regex = /(?<=[a-z])[A-Z]/g;
    const name = token.path.join('-').replace(regex, (a, b) => `-${a}`).toLowerCase();
    // Append suffix for 'duplicate' text styles.
    // Disabled for now. (See wonky solution at `text-styles.js`)

    // if(token.type === 'typography' && (name.indexOf('hover') >= 0 || name.indexOf('pressed') >= 0)) {
    //   return `${name}-decoration`
    // }
    return name
  }
}