// userRoutes.js
const express = require('express');
const { registerUser, getAllUsers, loginUser, getUserById, updateUser } = require('../controllers/userController');

const router = express.Router();

// Rutas para el usuario
router.post('/register', registerUser);
router.get('/users', getAllUsers);
router.get('/users/:id', getUserById); // Nueva ruta para obtener usuario por ID
router.post('/login', loginUser); // Ruta para iniciar sesión
router.put('/users/:id', updateUser); // Ruta para actualizar usuario (editar perfil)

module.exports = (upload) => {
    router.put('/edit/:id', upload.single('foto_perfil'), updateUser); // Rutas para editar perfil con imagen
    return router;
};
