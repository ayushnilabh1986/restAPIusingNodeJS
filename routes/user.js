const express = require('express')

// controller functions
const { loginUser, SignUpUser } = require('../controllers/userController')

const router = express.Router()

// login route
router.post('/login', loginUser)

// signup route
router.post('/SignUp', SignUpUser)

module.exports = router