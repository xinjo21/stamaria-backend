import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'
import Jwt from 'jsonwebtoken'
// import cookieParser from 'cookie-parser'

import User from '../model/User-model.js'

import { registerValidation, loginValidation } from '../middleware/validator.js'

// register
export async function register(req, res) {

  // validates inputed data before making a user
  const { error } = registerValidation(req.body);
  if (error) return res.status(400).send({ "message": error.details[0].message })

  // check if email already existed
  const emailExist = await User.findOne({ email: req.body.email })
  if (emailExist) return res.status(400).send({ "message": "Email already exist" })

  // hashing of password
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(req.body.password, salt)

  const user = new User({
    name: {
      lastName: req.body.lastName,
      firstName: req.body.firstName,
      middleName: req.body.middleName
    },
    email: req.body.email,
    password: hashedPassword,
    roles: req.body.roles,
  })

  try {
    await user.save()
    res.send({ user: user._id })
  } catch (err) {
    res.status(400).send(err)
  }
}

// login
export async function login(req, res) {

  // validation of data
  const { error } = loginValidation(req.body);
  if (error) return res.status(400).send({ message: error.details[0].message })

  // check if email already exist
  const user = await User.findOne({ email: req.body.email })
  if (!user) return res.status(400).send({ message: "Invalid Email or password" })

  // Check password if incorrect
  const validPass = await bcrypt.compare(req.body.password, user.password)
  if (!validPass) return res.status(400).send({ message: "Invalid Email or password" })

  const assignedToken = Jwt.sign({
    _id: user._id
  }, process.env.TOKEN_SECRET,
    {
      expiresIn: '15d'
    }
  )

  const data = {
    id: user._id,
    name: user.name,
    email: user.email,
    roles: user.roles,
    token: assignedToken
  }

  return res.status(200).send(data)
}

// Update user
export async function updateUser(req, res) {
  const id = req.params.id
  let hashedPasssword


  if (req.body.password) {
    const salt = await bcrypt.genSalt(10)
    hashedPassword = await bcrypt.hash(req.body.password, salt)
  }

  // check if there is an existing id`
  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with that ID: ${id}`)

  const updateUser = {
    name: req.body.name,
    email: req.body.email,
    password: hashedPasssword,
  }

  try {
    await User.findByIdAndUpdate(id, updateUser, { new: true })
    return res.status(201).json({ message: "Success" })
  } catch (err) {
    res.status(404).json({ message: err.message })
  }
}

// get all users for ADMINS only:
export async function getUsers(req, res) {
  /* const jwtHeader = req.header('Authorization')
  const decodedjwt = Jwt.decode(jwtHeader) */

  const user = await User.find()

  try {
    return res.status(200).send(user)
  } catch (err) {
    return res.status(400).send({ message: err.message })
  }
}

// remove user
export async function removeUser(req, res) {
  const id = req.params.id

  try {
      await Resident.findByIdAndDelete(id)
      return res.status(200).send({ "message": "Successfully deleted" })
  } catch (err) {
      return res.status(404).json({ message: err.message })
  };
};