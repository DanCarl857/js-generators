// Author: Daniel Carlson <dancarl758@gmail.com>
const http = require('http');
const app = require('./app');

// Defined process port or default to 5001
const port = process.env.PORT || 5001;

// create a server with our app
const server = http.createServer(app);

// Listen on defined port
server.listen(port, () => {
  var host = server.address().address;
  host = (host === '::' ? 'localhost' : host);
  var port = server.address().port;

  console.log(`[SERVER]: Listening at http://${host}:${port}`);
});