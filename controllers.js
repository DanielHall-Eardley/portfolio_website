const jwt = require('jsonwebtoken')
const {Message} = require('./models')
const {format, add} = require('date-fns')

exports.login = (req, res, next) => {
  try {
    const name = req.body.name
    const password = req.body.name

    if (name !== process.env.NAME && password !== process.env.PASSWORD) {
      const error = new Error
      error.message = 'Invalid password/username'
      error.status = 401
      throw error
    }

    const token = jwt.sign(
      {name: name, password: password}, 
      process.env.JWT_SECRET,
      {expiresIn: '4h'})
    
    const expiration = format(add(new Date(), {hours: 4}), 'T')

    res.status(200).json({
      token: token,
      expiresIn: expiration
    })
  } catch (error) {
    next(error)
  }
}

exports.createMessage = async (req, res, next) => {
  try {
    const newMessage = new Message({
      name: req.body.name,
      email: req.body.email,
      message: req.body.message,
    })

    const savedMessage = await newMessage.save()

    if (!savedMessage) {
      const error = new Error
      error.message = 'Unable to create message'
      throw error
    }
    
    res.status(200).json({alert: 'Message created!'})
  } catch (error) {
    next(error)
  }
}

exports.messageList = async (req, res, next) => {
  try {
    const messages = await Message.find()

    if(!messages) {
      const error = new Error
      error.message = 'Unable to retrieve messages'
      throw error
    }

    res.status(200).json({messages: messages})
  } catch (error) {
    next(error)
  }
}

