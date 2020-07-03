const {model, Schema} = require('mongoose')

const MessageSchema = Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  }
}, {
  timestamps: true
})

exports.Message = model('Message', MessageSchema)