const express = require('express');

const PORT = process.env.PORT || 5000;
const DELAY = 2000;

const app = express();

app.get('/', (req, res) => {
  console.log(`Received request: ${req.headers['x-request-id']}`);

  setTimeout(() => res.send('Hello world'), DELAY);
});

const server = app.listen(PORT, () => {
  console.log('Server listening!');
});

process.on('SIGTERM', () => {
  console.log('SIGTERM RECEIVED');
  console.log('Shutting down express server');

  server.close(() => {
    console.log('Express server closed. Exiting the process.');
    process.exit(0);
  });
});
