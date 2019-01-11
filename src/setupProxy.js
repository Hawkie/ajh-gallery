// setupProxy.js
const proxy = require('http-proxy-middleware')
module.exports = function(app) {
  app.use(proxy('/.netlify/functions/', { 
    target: 'http://localhost:9005/',
    "pathRewrite": {
      "^/\\.netlify/functions": ""
    }
  }))
}