const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const cors = require('cors');

const routes = require('./routes')

const host = 'localhost';
const port = 4200;

app.use(bodyParser.json());
app.use(cors());

app.use(routes);

// Listen the server
app.listen(port, host)
console.log(`Server listening on http://${host}:${port}`)
