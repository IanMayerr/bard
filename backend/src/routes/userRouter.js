// Importar o modulo de Router do express
const { Router } = require('express');

// Instanciar o Router na variável router
const router = Router();

// Importar as funções (processamento da requisição) do controller
const { 
    listUsers,
    storeUser,
    updateUser,
    deleteUser,
    usuario
} = require('../controllers/userController')

// Criar os endpoints (rotas) que serão acessados a partir dos métodos HTTP (get,post,put,delete)
router.get('/users', listUsers);
router.get('/usuario/:id', usuario);
router.post('/cadastro', storeUser);
// router.post('/publicacao', overView);
router.put('/updatePerfil/:id', updateUser);
router.delete('/user/:id', deleteUser);

module.exports = router;