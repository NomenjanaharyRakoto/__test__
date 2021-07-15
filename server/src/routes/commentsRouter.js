const app = require('express')
const router = app.Router()
const DefaultController = require('../controller/DefaultController')
const Comment = require('../model/Comment')
const middlawera = require('../middleware')

router.route('/')
    .post(middlawera, DefaultController(Comment).createUpdate)

router.route('/:PROPERTY/:ID').get(DefaultController(Comment).findByProperty)


module.exports = router