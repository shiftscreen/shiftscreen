const express = require('express');
const path = require('path');
const { createProxyMiddleware } = require('http-proxy-middleware');
const compression = require('compression');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(compression());

app.use(createProxyMiddleware('/graphql',  {
  target: 'https://api.shiftscreen.pl',
  changeOrigin: true,
}));

app.use(express.static(path.join(__dirname, 'build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT);
