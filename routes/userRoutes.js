const express = require('express');
const { registerUser, getAllUsers, loginUser } = require('../controllers/userController');

const router = express.Router();

// Rutas para el usuario
router.post('/register', registerUser);
router.get('/users', getAllUsers);
router.post('/login', loginUser); // Ruta para iniciar sesión

module.exports = router;
