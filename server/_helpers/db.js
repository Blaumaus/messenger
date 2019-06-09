// DATABASE WRAPPER
// Imports
import mongoose from 'mongoose'
import { db_creds } from './config'

// Database connection
mongoose.connect(db_creds, { useNewUrlParser: true, auth: { authdb: 'admin' } })
    .then(db => console.log('[OK] DB is connected'))
    .catch(err => console.log(`[ERROR] Oops. Something went wrong while connecting to the database => ${err}`))
mongoose.Promise = global.Promise

// Exports
export { default as User } from '../models/Users/user.model'
// module.exports = {
//     User: require('../models/Users/user.model')
// }