const User = require('../models/User');
const bcrypt = require('bcryptjs');

// Función para registrar un nuevo usuario
const registerUser = async (req, res) => {
    const { nombre, correo, contrasena, foto_perfil } = req.body;

    try {
        // Verifica si el usuario ya existe
        const existingUser = await User.findUserByEmail(correo);
        if (existingUser) {
            return res.status(400).json({ message: 'El usuario ya existe' });
        }

        // Hashea la contrasena
        const hashedPassword = await bcrypt.hash(contrasena, 10);

        // Crea el nuevo usuario
        const newUser = await User.createUser({ nombre, correo, contrasena: hashedPassword, foto_perfil });

        return res.status(201).json(newUser);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error al registrar el usuario' });
    }
};

const getAllUsers = async (req, res) => {
    try {
        const users = await User.getAllUsers();
        return res.status(200).json(users);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error al obtener los usuarios' });
    }
};

const loginUser = async (req, res) => {
    const { correo, contrasena } = req.body; // Usa "contrasena" en vez de "contrasena"

    try {
        // Buscar el usuario por correo
        const user = await User.findUserByEmail(correo);
        if (!user) {
            return res.status(401).json({ message: 'Usuario o contrasena incorrectos' });
        }

        // Comparar la contrasena ingresada con la contrasena hasheada
        const isMatch = await bcrypt.compare(contrasena, user.contrasena); // Asegúrate de usar "contrasena"
        if (!isMatch) {
            return res.status(401).json({ message: 'Usuario o contrasena incorrectos' });
        }

        // Si las credenciales son correctas, puedes enviar una respuesta de éxito
        return res.status(200).json({ message: 'Inicio de sesión exitoso', user });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error al iniciar sesión' });
    }
};

module.exports = { registerUser, getAllUsers, loginUser };
