const express = require('express')
const consola = require('consola')
const app = express()
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');

const routes = require('./routes')

const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 90;

app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

app.use(routes);

// Listen the server
app.listen(port, host)
consola.ready({
  message: `Server listening on http://${host}:${port}`,
  badge: true
})

