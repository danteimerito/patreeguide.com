const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true
})

// module.exports = {
//   transpileDependencies: ['vuex-persist'],
//   devServer: {
//     proxy: {
//       '^/api': {
//         target: 'http://localhost:5000',
//         changeOrigin: true,
//         logLevel: 'debug',
//         pathRewrite: { '^/api': '/' },
//       },
//     },
//   },
// }




