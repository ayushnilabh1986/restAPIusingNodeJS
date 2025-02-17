const express = require('express')

// controller functions
const { LoginUser, SignUpUser } = require('../controllers/userController')

const router = express.Router()

// login route
router.post('/Login', LoginUser)

// signup route
router.post('/SignUp', SignUpUser)

module.exports = router