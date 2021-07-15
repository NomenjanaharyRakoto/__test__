const app = require('express')
const router = app.Router()
const UserController = require('../controller/UserController')


router.route('/').post(UserController.createUpdate)
router.route('/login').post(UserController.authentication)

module.exports = router