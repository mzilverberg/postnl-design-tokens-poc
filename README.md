# Design Tokens PoC for PostNL
This repo is used as a Proof of Concept by PostNL's Design System team.
It's aimed to tackle questions about the usage of design tokens stored centrally on GitHub (in this case: this repo) in combination with Figma libraries.

## Tools
- [Figma Tokens plugin](https://www.jansix.at/resources/figma-tokens)
- [Token Transformer](https://www.npmjs.com/package/token-transformer)
- [Style Dictionary](https://amzn.github.io/style-dictionary/)

## Getting started
Tokens are automatically converted to CSS variables through a GitHub action that's running after each push. In order to manually generate CSS variables from the tokens, run the following script:
```
npm run build
```