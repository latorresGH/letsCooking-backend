const express = require('express');
const { registerUser, getAllUsers } = require('../controllers/userController');

const router = express.Router();

// Ruta para registrar un nuevo usuario
router.post('/register', registerUser);

// Ruta para obtener todos los usuarios
router.get('/', getAllUsers); // Aquí agregamos la ruta

module.exports = router;
