/* eslint-disable no-unused-vars */
const express = require('express');
const cors = require('cors');
const config = require('./config.js');
const routes = require('./routes.js');

const app = express();
// eslint-disable-next-line import/order
const server = require('http').Server(app);

app.use(cors());
app.use(express.json());

app.use('/', require('./routes'));

// eslint-disable-next-line no-undef
server.listen(PORT, () => {
  // eslint-disable-next-line no-undef, no-console
  console.log(`Server listening on port ${PORT}`);
});

module.exports = app;
