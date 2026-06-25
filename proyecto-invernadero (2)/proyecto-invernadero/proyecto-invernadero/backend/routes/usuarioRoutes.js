const express = require('express');
const router = express.Router();
const { 
    login, 
    registrarUsuario,
    getUsuarios,
    desactivarUsuario,
    activarUsuario,
    editarUsuario,
    editarPerfil
} = require('../controllers/usuarioController');

// Rutas originales
router.post('/login', login);
router.post('/usuarios/registrar', registrarUsuario);

// Rutas para gestión de usuarios
router.get('/usuarios', getUsuarios);
router.delete('/usuarios/:id/desactivar', desactivarUsuario);
router.put('/usuarios/:id/activar', activarUsuario);
router.put('/usuarios/:id/editar', editarUsuario);

// NUEVA RUTA: Editar perfil propio
router.put('/perfil/:id', editarPerfil);

module.exports = router;