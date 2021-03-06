const proxy = require('http-proxy-middleware');

module.exports = (app) => {
  app.use('/api', proxy({
    target: 'http://localhost:3005',
    onProxyReq: (proxyReq, req) => {
      if (req.headers['accept'] === 'text/event-stream') {
        req.headers['accept-encoding'] = 'identity';
      }
    }
  }));
};
