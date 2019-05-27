const userModel = require('../models/user')
const bcrypt = require('bcryptjs')

const update = async (req, res) => {
  try {
    if (!req.params.id) {
      throw new Error('Falta parametros')
    }
    const update = await userModel.update({ _id: req.params.id }, req.body)

    res.send(update)
  } catch (error) {
    res.status(400)
    res.send({ error: error.toString() })
  }
}

const register = async (req, res) => {
  const { email } = req.body
  try {
    if (await userModel.findOne({ email })) {
      throw new Error('Email já cadastrado')
    }

    const { password, ...body } = req.body
    const hash = await bcrypt.hash(password, 10)
    const response = await userModel.create({ ...body, password: hash })

    res.send({ data: response })
  } catch (error) {
    res.status(400)
    res.send({ error: error.toString() })
  }
}

const deleteOne = async (req, res) => {
  try {
    if (!req.params.id) {
      throw new Error('Falta parametros')
    }
    const del = await userModel.deleteOne({ _id: req.params.id })
    res.send(del)
  } catch (error) {
    res.status(400)
    res.send({ error: error.toString() })
  }
}

const find = async (req, res) => {
  try {
    const retorno = await userModel.find().populate('carteira')

    res.send(retorno)
  } catch (error) {
    res.status(400)
    res.send({ error })
  }
}

module.exports = { register, update, deleteOne, find }
