const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/presentasee', {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose
module.exports = db;