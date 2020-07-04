const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
module.exports = mongoose.connect('mongodb://localhost:27017/projeto-cursos-junho-sabado', { useNewUrlParser: true, useUnifiedTopology: true });