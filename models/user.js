const { Schema } = require('mongoose')
const mongoose = require('./../configs/mongodb')()
const uuid = require('node-uuid')

const userSchema = new Schema({
  name: {
    type: String,
    require: true
  },
  email: {
    type: String,
    required: true,
    lowercase: true
  },
  password: {
    type: String,
    select: false
  },
  createdAt: {
    type: Date,
    defaut: Date.now
  },
  carteira: {
    type: String,
    ref: 'carteira'
  },
  _id: {
    type: String
  }

})
userSchema.pre('save', function () {
  this._id = uuid.v4()
})

const user = mongoose.model('user', userSchema)
module.exports = user
