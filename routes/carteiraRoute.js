
const router = require('express').Router()

const carteiraController = require('../controllers/carteiraController')

router.get('/listagem_carteira', carteiraController.find)
router.put('/atualizar_carteira/:id', carteiraController.update)
router.post('/registrar_carteira', carteiraController.register)
router.delete('/deletar_carteira/:id', carteiraController.deleteOne)

module.exports = router
