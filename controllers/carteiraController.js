const carteiraModel = require('../models/carteira.js')

const update = async (req, res) => {
  let valorOriginal = 0
  await carteiraModel.findOne({ _id: req.params.id })
    .then(carteiraEncontrada => {
      valorOriginal = carteiraEncontrada.valor
    })
  try {
    if (!req.params.id) {
      throw new Error('Falta parametros')
    }
    if (req.body.tipo === 'entrada') {
      const update = await carteiraModel.update({ _id: req.params.id }, {
        $set: {
          valor: valorOriginal + req.body.valor
        }
      })
      res.send(update)
    } else {
      const update = await carteiraModel.update({ _id: req.params.id }, {
        $set: {
          valor: valorOriginal - req.body.valor
        }
      })
      res.send(update)
    }
  } catch (error) {
    res.status(400)
    res.send({ error: error.toString() })
  }
}

const register = async (req, res) => {
  const reg = await carteiraModel.create(req.body)
  res.send(reg)
}

const deleteOne = async (req, res) => {
  try {
    if (!req.params.id) {
      throw new Error('Falta parametros')
    }
    const del = await carteiraModel.deleteOne({ _id: req.params.id })
    res.send(del)
  } catch (error) {

  }
}
const find = async (req, res) => {
  try {
    const retorno = await carteiraModel.find().populate('user')
    res.send(retorno)
  } catch (error) {
    res.status(400)
    res.send({ error })
  }
}

module.exports = { register, update, deleteOne, find }
