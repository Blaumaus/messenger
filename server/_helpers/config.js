// Imports
import dotenv from 'dotenv'

// Setup donenv to use config from '.env' file
dotenv.config({ path: '.env' })

// Exports
export const port = process.env.PORT
export const db_creds = process.env.DB_CREDENTIALS
export const secret = process.env.JWT_SECRET