// Imports
import { port } from './_helpers/config'
import express from 'express'
import morgan from 'morgan'
import helmet from 'helmet'
// import { session } from 'inspector'

// Init app
const app = express()

// Set up middleware
app.use(helmet({
    referrerPolicy: {
        policy: 'no-referrer'
    }
}))
// Use session 
// app.use(session({
//     secret: "photonsecret",
//     resave: true,
//     saveUninitialized: false
// }))

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(morgan('dev'))
app.use('/users', require('./routes/api/user.controller'))

app.listen(port, () => {
    console.log(`[OK] Server is running on port ${port}`)
})