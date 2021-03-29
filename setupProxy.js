/**
 * @description config api proxy
 */

const proxy = require('http-proxy-middleware');

function createProxy(path='', target='') {
  return proxy(path, {
    target,
    changeOrigin: true,
    pathRewrite: { [`^${path}`]: '' },
  });
}

module.exports = function(app) {
  app.use(
    createProxy('/api', 'http://www.xyz.com/api'),
  );
};
