// loggerMiddleware.js
function loggerMiddleware(req, res, next) {
  console.log(`${req.method} ${req.url} at ${new Date().toISOString()}`);
  next(); // pass control to next middleware
}

module.exports = loggerMiddleware;
