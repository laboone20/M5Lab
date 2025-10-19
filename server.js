const express = require('express');
const loggerMiddleware = require('./loggerMiddleware');
const app = express();

app.use(loggerMiddleware); // integrate middleware

app.get('/', (req, res) => {
  res.send('Middleware implementation successful!');
});

app.listen(3000, () => console.log('Server running on port 3000'));
