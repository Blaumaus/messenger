// DATABASE WRAPPER
// Imports
import mongoose from 'mongoose'
import { db_creds } from './config'

// Database connection
mongoose.connect(db_creds, { useNewUrlParser: true, auth: {authdb:"admin"} })
    .then(db => console.log('[OK] DB is connected'))
    .catch(err => console.log(`[ERROR] Oops. Something went wrong while connecting to the database... \n ${err}`))
mongoose.Promise = global.Promise

// Exports
// export 