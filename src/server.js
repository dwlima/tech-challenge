const express = require('express');
const cors = require('cors');
//const jwt = require('./_helpers/jwt');
const config = require('./config.js');
const routes = require('./routes.js');
//const errorHandler = require('./_helpers/error-handler');

const app = express();

const server = require('http').Server(app);
//const io = require('socket.io')(server);

/*
app.use((req, res, next) => {
    req.io = io;
    next();
});
*/

app.use(cors());
app.use(express.json());

// use JWT auth to secure the api
//app.use(jwt());


app.use('/api', require('./routes'));

//app.use('/api', routes);

// global error handler
//app.use(errorHandler);

server.listen(PORT, function () {
    console.log('Server listening on port ' + PORT);
});
