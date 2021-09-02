module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@': './src/components',
      },
    },
  },
  devServer: {
    // before: () => {
    //   // app()
    // },
    open: process.platform === 'darwin',
    host: '0.0.0.0',
    // port: 8085, // CHANGE YOUR PORT HERE!
    https: true,
    hotOnly: false,
    proxy: {
      '/api': {
        target: 'http://localhost:7777',
        // target: 'https://google.com',
      },
    },
  },
}
