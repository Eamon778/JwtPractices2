const express = require('express')
const { getAllData, registerUsers } = require('../controllers/controller')

const router = express.Router()

router.route('/products').get(getAllData)
router.route('/register').post(registerUsers)


module.exports = router