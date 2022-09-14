import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    lastName: {
      type: String,
      required: true,
      max: 255,
    },
    firstName: {
      type: String,
      required: true,
      max: 255,
    },
    middleName: {
      type: String,
      max: 255,
    },
  },
  email: {
    type: String,
    required: true,
    min: 6,
    max: 255,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    min: 6,
    max: 1024,
  },
  roles: {              // ADMIN || OFFICIAL || ENCODER
    type: String,
    required: true,
  },
  timeCreated: {
    type: Date,
    immutable: true,
    default: () => Date.now
  },
  timeUpdated: {
    type: Date,
    default: Date.now
  }
})

const User = mongoose.model('User', userSchema)

export default User
