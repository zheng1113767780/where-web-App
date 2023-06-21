const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  outputDir: "build",
  transpileDependencies: true,
  configureWebpack: {
    devServer: {
      proxy: {
        '/data': {
          target: 'http://localhost:8080/',
          ws: true,
          changeOrigin: true,
          pathRewrite: {
            '^/data': 'public/mock'
          }
        }
      }
    }
  }
})
