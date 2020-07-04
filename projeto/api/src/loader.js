require('./config/db');
const server = require('./config/server');
require('./config/routes')(server);