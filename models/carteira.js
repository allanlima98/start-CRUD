const mongoose = require('../configs/mongodb')()
const { Schema } = require('mongoose')
const uuid = require('node-uuid')

const carteiraSchema = new Schema({
  tipo: {
    type: String
  },
  valor: {
    type: Number
  },
  user: {
    type: String,
    ref: 'user'
  },
  _id: {
    type: String
  }

})

carteiraSchema.pre('save', function () {
  this._id = uuid.v4()
})

const carteira = mongoose.models.carteira || mongoose.model('carteira', carteiraSchema)
module.exports = carteira
