const { errorMessage } = require('../utils/utils')
const Car = require('../model/Car')

module.exports = DefaultController = (Model) => {
    async function createUpdate(req, res) {
        const data = req.body

        if (!data._id) {
            const newData = new Model(data)
            await newData.save().then(response => {
                return res.status(201).json(response)
            }).catch(err => {
                console.log(err._message, '<======= ERROR');
                return res.status(200).json(errorMessage(err._message))
            })
        } else {
            Model.findOneAndUpdate({ _id: data._id }, { $set: {...data, updatedAt: Date.now() } }).then(() => {
                return res.json(data)
            }).catch(err => {
                console.log(err, '<==== ERROR');
                return res.status(200).json(errorMessage(err._message))
            })
        }
    }
    async function getAll(req, res) {
        await Model.find().then(response => {
            res.json(response)
        }).catch(err => {
            console.log(err._message, '<======== ERROR');
            return res.status(200).json(errorMessage(err._message))
        })
    }

    async function remove(req, res) {
        await Model.findOneAndUpdate({ _id: req.params.ID }, { $set: { isRemoved: true, updatedAt: Date.now() } }).then(response => {
            res.json(response)
        }).catch(err => {
            return res.status(200).json(errorMessage(err._message))
        })
    }

    async function findByProperty(req, res) {
        await Model.find({
            [req.params.PROPERTY]: req.params.ID
        }).then(response => {
            return res.status(200).json(response)
        }).catch(err => {
            return res.status(200).json(errorMessage(err._message))
        })
    }



    return {
        createUpdate,
        getAll,
        remove,
        findByProperty,
    }
}