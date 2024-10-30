// userRoutes.js
const express = require('express');
const { registerUser, getAllUsers, loginUser, getUserById } = require('../controllers/userController');

const router = express.Router();

// Rutas para el usuario
router.post('/register', registerUser);
router.get('/users', getAllUsers);
router.get('/users/:id', getUserById); // Nueva ruta para obtener usuario por ID
router.post('/login', loginUser); // Ruta para iniciar sesión

module.exports = router;
