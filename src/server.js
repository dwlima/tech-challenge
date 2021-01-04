const express = require('express');
const cors = require('cors');
const config = require('./config.js');
const routes = require('./routes.js');

const app = express();

const server = require('http').Server(app);

app.use(cors());
app.use(express.json());


app.use('/', require('./routes'));

server.listen(PORT, function () {
    console.log('Server listening on port ' + PORT);
});
