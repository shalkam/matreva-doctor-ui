const express = require('express');
const path = require('path');
const https = require('https');
const fs = require('fs');

const app = express();
app.get('/healthz', (req, res) => res.sendStatus(200));

if (process.env.NODE_ENV === 'production') {
  app.use((req, res, next) => {
    if (req.header('x-forwarded-proto') !== 'https') {
      res.redirect(
        `https://${req.headers.host.replace(/^www\./, '')}${req.url}`
      );
    } else {
      next();
    }
  });
}
app.use(express.static(path.resolve(__dirname, '../main/build')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../main/build/index.html'));
});

if (process.env.NODE_ENV === 'production') {
  app.listen(process.env.PORT || 8080, error => {
    if (!error) {
      console.log(`Server running on port ${process.env.PORT || 8080}`) // eslint-disable-line
    }
  });
} else {
  const key = fs.readFileSync(`${__dirname}/https-cert/selfsigned.key`);
  const cert = fs.readFileSync(`${__dirname}/https-cert/selfsigned.crt`);
  const options = {
    key,
    cert
  };
  const server = https.createServer(options, app);

  server.listen(process.env.PORT || 8080, () => {
    // eslint-disable-next-line
    console.log(`Server starting on port : ${process.env.PORT || 8080}`);
  });
}
