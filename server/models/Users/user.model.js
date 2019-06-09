import mongoose, { Schema } from 'mongoose'

const schema = new Schema({
  username: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  // TEMPORARILY SAVING PLAINTEXT PASSWORDS
  // TODO: HASH PASSORDS WITH BCRYPT OR PBKDF2 HASHING ALGORITHM
  password: {
    type: String,
    required: true,
    trim: false
  },
  regDate: {
    type: Date,
    default: Date.now
  },
  email: {
    type : String,
    required: true,
    trim: false
  }
})

schema.set('toJSON', { virtuals: true })

export default mongoose.model('User', schema)