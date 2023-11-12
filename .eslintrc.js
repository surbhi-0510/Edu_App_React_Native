// module.exports = {
//   root: true,
//   extends: '@react-native',
//   //   parser: '@babel/eslint-parser',
//   //   parserOptions: {
//   //     requireConfigFile: false,
//   //   },
//   parser: '@babel/eslint-parser',
//   parserOptions: {
//     babelOptions: {
//       presets: ['@babel/preset-react'],
//     },
//   },
// };

module.exports = {
  extends: 'eslint-config-antife',
  plugins: [
    "babel",
    "html",
  ]
}
