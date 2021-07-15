const app = require('express')
const router = app.Router()
const DefaultController = require('../controller/DefaultController')
const Car = require('../model/Car')


router.route('/')
    .get(DefaultController(Car).getAll)



module.exports = router