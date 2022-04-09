const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  // publicPath: process.env.NODE_ENV === 'production'
  //   ? '/vrizas.github.io/'
  //   : '/',
  transpileDependencies: true,
  chainWebpack: config => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .tap(options => {
        options.compilerOptions = {
          ...options.compilerOptions,
          isCustomElement: tag => tag.startsWith('ion-')
        }
        return options
      })
  },
  pwa: {
    name: 'Vrizas Izza Izzuddin',
    themeColor: '#f5df4e',
    msTileColor: '#191919',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black'
  }
})
