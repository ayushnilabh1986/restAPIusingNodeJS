const User = require('../models/userModel')
const jwt = require('jsonwebtoken')

const createToken = (_id) => {
  return jwt.sign({_id}, process.env.SECRET, { expiresIn: '3d' })
}

// login a user
const LoginUser = async (req, res) => {
  const {email, password} = req.body

  try {
    const user = await User.login(email, password)

    // create a token
    const token = createToken(user._id)

    res.status(200).json({email, token})
    console.log("Login Successful")
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

// signup a user
const SignUpUser = async (req, res) => {
  const { email, password} = req.body

  try {
    const user = await User.SignUp(email, password)

    // create a token
    const token = createToken(user._id)

    res.status(200).json({email, token})
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

module.exports = { SignUpUser, LoginUser }