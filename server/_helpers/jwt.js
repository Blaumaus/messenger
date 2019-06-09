// Imports
import { secret } from './config'
import expressJwt from 'express-jwt'
import { getById } from '../models/Users/user.service'

function jwt () {
  return expressJwt({ secret, isRevoked }).unless({
    path: [
      // Routes which do not reqiure auth
      '/users/register',
      '/users/login'
    ]
  })
}

async function isRevoked (req, payload, done) {
  const user = await getById(payload.sub)

  // If user does not exits - revoke his token
  if (!user) return done(null, true)

  done()
}