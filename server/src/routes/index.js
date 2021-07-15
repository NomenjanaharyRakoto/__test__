const app = require('express')
const router = app.Router()
const commetsRouter = require('./commentsRouter')
const userRouter = require('./userRouter')
const carRouter = require('./carsRouter')

router.use('/comments', commetsRouter)
router.use('/cars', carRouter)
router.use('/users', userRouter)

module.exports = router