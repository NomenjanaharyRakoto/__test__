const app = require('express')
const router = app.Router()
const { DefaultController, ExtraFunction } = require('../controller/DefaultController')

const Comment = require('../model/Comment')
const middlawera = require('../middleware')

router.route('/')
    .post(middlawera, DefaultController(Comment).createUpdate)

router.route('/:PROPERTY/:ID').get(ExtraFunction(Comment, 'owner').findByPropertyWithPopulate)


module.exports = router