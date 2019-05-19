const express = require('express')
const consola = require('consola')
const app = express()
const http = require('http')
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');
const server = http.Server(app)
const socket_io = require('socket.io')
const io = socket_io(server)

const socketEvents = require('./socket-events')
const routes = require('./routes')

const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 90;

app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors({
  origin: 'http://localhost.com',
  credentials: true,
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}));

app.use(routes);

io.on('connection', (socket) => {
  socketEvents(io, socket);
});

// Listen the server
server.listen(port, host)
consola.ready({
  message: `Server listening on http://${host}:${port}`,
  badge: true
})

