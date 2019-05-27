
const router = require('express').Router()

const userController = require('../controllers/userController')

router.get('/listagem_user', userController.find)
router.put('/atualizar_user/:id', userController.update)
router.post('/registrar_user', userController.register)
router.delete('/deletar_user/:id', userController.deleteOne)

module.exports = router
