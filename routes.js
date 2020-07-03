const router = require('express').Router()
const controller = require('./controllers')
const jwt = require('jsonwebtoken')

const checkAuth = (req, res, next) => {
  try {
    const token = req.get('Authorization')
    jwt.verify(token, process.env.JWT_SECRET)
    next()
  } catch (error) {
    next(error)
  }
}

router.post('/message/create', controller.createMessage)

router.get('/message/list', checkAuth, controller.messageList)

// router.post('/blog/create', checkAuth, controller.createBlog)

// router.get('/blog/list', controller.blogList)

router.post('/login', controller.login)

module.exports = router