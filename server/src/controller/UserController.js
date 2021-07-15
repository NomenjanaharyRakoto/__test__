const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const Users = require('../model/User')
const { errorMessage } = require('../utils/utils')
const { error_email, error_mdp, is_exist } = require('../utils/message')
module.exports = UserController = {
    authentication: async(req, res) => {

        const user = await Users.findOne({ email: req.body.email })

        if (user) {
            const isValid = await bcrypt.compare(req.body.password, user.password);
            if (!isValid) {
                return res.status(201).json(errorMessage(error_mdp))
            } else {
                const payload = {
                    user: { _id: user._id }
                }

                jwt.sign(
                    payload,
                    "token", {
                        expiresIn: req.body.remembreMe ? "7d" : "2 days"
                    },
                    (err, token) => {
                        if (err) throw err;
                        res.status(200).json({ token, user })
                    }
                )
            }
        } else {
            return res.status(201).json(errorMessage(error_email))
        }
    },

    createUpdate: async(req, res) => {
        const data = req.body
        if (!data._id) {
            const salt = await bcrypt.genSalt(10);

            const password = await bcrypt.hash(req.body.password, salt);

            const newUser = new Users({...data, password: password })

            await newUser.save().then(response => {
                res.status(201).json(response)

            }).catch(err => {
                if (err && err.code === 11000) {
                    return res.status(201).json(errorMessage(is_exist))
                }
                throw err
            })
        } else {
            Users.findOneAndUpdate({ _id: data._id }, { $set: {...data, updatedAt: Date.now() } }).then(() => {
                return res.json(data)
            }).catch(err => {
                console.log(err, '<==== ERR');
                return err
            })
        }
    },
}