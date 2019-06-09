import mongoose, { Schema } from 'mongoose'

const schema = new Schema({
  username: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
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
    required: false,
    trim: false
  }
})

schema.set('toJSON', { virtuals: true })

export default mongoose.model('User', schema)