const db = require('../config')

const UserSchema = new db.Schema({
  name: {type: String, required: true},
  email: {type: String, required: true},
  password: {type: String},
  date: {type: Number, default: Date.now()},
})

const model = db.model('UserModel', UserSchema)

module.exports = model