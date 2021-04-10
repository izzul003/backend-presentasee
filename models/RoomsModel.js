const db = require('../config')

const RoomSchema = new db.Schema({
  name: {type: String, required: true},
  file: {type: String, required: true},
  date: {type: Number, default: Date.now()},
})

const model = db.model('RoomModel', RoomSchema)

module.exports = model