// Imports
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import { secret } from '../../_helpers/config'
const db = require('../../_helpers/db')
// import db from '../../_helpers/db'
const User = db.User

// Auth user to his account
async function authenticate({ username, password }) {
  const user = await User.findOne({ username })

  if (user && bcrypt.compareSync(password, user.password)) {
    const { password, ...userWithoutPassword } = user.toObject()
    const token = jwt.sign({ sub: user.id }, secret)
    return {
      ...userWithoutPassword,
      token
    }
  }
}

async function getAll() {
  return await User.find().select('-hash')
}

async function getById(id) {
  return await User.findById(id).select('-hash')
}

// Delete account
async function deleteAcc(id) {
  await User.findByIdAndRemove(id)
}

// Update account credentials
async function update(id, params) {
  const user = await User.findById(id)

  // Validate
  if (!user) throw 'User not found';
  if (user.username !== params.username && await User.findOne({ username: params.username })) {
    throw `Username '${params.username}' is taken`
  }

  // Hash password if it was entered
  if (params.password) params.password = bcrypt.hashSync(params.password, 10)

  // Copy 'params' properties to user
  Object.assign(user, userParam)

  await user.save()
}

// Create new account
async function create(params) {
  // Username validation
  if (await User.findOne({ username: params.username })) {
    throw `Username '${params.username}' is taken`
  }

  const user = new User(params)

  // Hash password
  if (params.password) user.password = bcrypt.hashSync(user.password, 10)

  await user.save()
}

// Exports
export {
  authenticate,
  getAll,
  getById,
  create,
  update,
  deleteAcc
}