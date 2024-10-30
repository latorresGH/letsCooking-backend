const pool = require('../config/db');

// Función para crear un nuevo usuario
const createUser = async (userData) => {
    const { nombre, correo, contrasena, foto_perfil } = userData;
    const query = `
        INSERT INTO Usuario (nombre, correo, contrasena, foto_perfil)
        VALUES ($1, $2, $3, $4)
        RETURNING *`;
    const values = [nombre, correo, contrasena, foto_perfil || null]; // La foto será null si no se proporciona

    const res = await pool.query(query, values);
    return res.rows[0]; // Retorna el usuario creado
};

// Función para encontrar un usuario por correo
const findUserByEmail = async (correo) => {
    const query = 'SELECT * FROM Usuario WHERE correo = $1';
    const values = [correo];

    const res = await pool.query(query, values);
    return res.rows[0]; // Retorna el usuario encontrado o undefined si no existe
};

// Función para obtener todos los usuarios
const getAllUsers = async () => {
    const query = 'SELECT * FROM Usuario;';
    const res = await pool.query(query);
    return res.rows; // Retorna todos los usuarios
};

// Función para eliminar un usuario
const deleteUser = async (id) => {
    const query = 'DELETE FROM Usuario WHERE id = $1 RETURNING *';
    const values = [id];

    const res = await pool.query(query, values);
    return res.rows[0]; // Retorna el usuario eliminado
};

const findUserById = async (id) => {
    const query = 'SELECT * FROM Usuario WHERE id = $1';
    const values = [id];

    const res = await pool.query(query, values);
    return res.rows[0]; // Retorna el usuario encontrado o undefined si no existe
};

// Función para actualizar un usuario
const updateUser = async (id, userData) => {
    const { nombre, correo, foto_perfil } = userData;
    const query = `
        UPDATE Usuario 
        SET nombre = $1, correo = $2, foto_perfil = $3 
        WHERE id = $4 
        RETURNING *`;
    const values = [nombre, correo, foto_perfil || null, id];

    const res = await pool.query(query, values);
    return res.rows[0]; // Retorna el usuario actualizado
};

module.exports = {
    createUser,
    findUserByEmail,
    findUserById,
    getAllUsers,
    updateUser,
    deleteUser,
};