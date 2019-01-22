module.exports = {
  devServer: {
    host: '127.0.0.1',
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        pathRewrite: { '^/api': '' }
      }
    }
  }
};
