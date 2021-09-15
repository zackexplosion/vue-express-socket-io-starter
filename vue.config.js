module.exports = {
  // configureWebpack: {
  //   resolve: {
  //     alias: {
  //       '@': './src/components',
  //     },
  //   },
  // },
  devServer: {
    // before: () => {
    //   // app()
    // },
    // open: process.platform === 'darwin',
    open: false,
    // public: 'notilusdev.dimosoftware.com',
    host: '0.0.0.0',
    disableHostCheck: true,
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
