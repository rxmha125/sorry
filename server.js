// server.js
const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
// When deploying on environments like cPanel, PORT is often set by the environment.
// Listen on '0.0.0.0' to be accessible externally.
const port = parseInt(process.env.PORT, 10) || 3000;
const hostname = '0.0.0.0'; 

// Create the Next.js app instance.
// next({ dev }) will pick up PORT from process.env if available.
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      // Be sure to pass `true` as the last argument to `url.parse`.
      // This tells it to parse the query portion of the URL.
      const parsedUrl = parse(req.url, true);
      await handle(req, res, parsedUrl);
    } catch (err) {
      console.error('Error occurred handling', req.url, err);
      res.statusCode = 500;
      res.end('internal server error');
    }
  }).listen(port, hostname, (err) => {
    if (err) {
      console.error('Failed to start server:', err);
      process.exit(1); // Exit if the server fails to start
    }
    console.log(`> Ready on http://${hostname}:${port}`);
  });
});
