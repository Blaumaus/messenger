// Imports
import { port } from './config'
import express from 'express'
import morgan from 'morgan'
import mongoose from 'mongoose'
import helmet from 'helmet'

// DB connection
// mongoose.connect(process.env.DB_CREDENTIALS, { useNewUrlParser: true, auth: {authdb:"admin"} })
//    .then(db => console.log('[OK] DB is connected'))
//    .catch(err => console.log(`[ERROR] Oops. Something went wrong while connecting to the database... \n ${err}`))

// Init app
const app = express()

// Set up middleware
app.use(helmet({
    referrerPolicy: {
        policy: 'no-referrer'
    }
}))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(morgan('dev'))
// app.use('/api', require('./routes/api/router'))

app.listen(port, () => {
  console.log(`[OK] Server is running on port ${port}`)
})