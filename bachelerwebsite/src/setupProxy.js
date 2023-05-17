// src/setupProxy.js
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://kamtjatkaapi.cegegch4h0a4aea6.northeurope.azurecontainer.io',
      changeOrigin: true,
    })
  );
};
