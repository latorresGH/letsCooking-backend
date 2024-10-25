const pool = require('../config/db');

// Función para crear una nueva receta
const createRecipe = async ({ foto_receta, nombre_receta, categorias, descripcion, id_usuario }) => {
    const query = `
        INSERT INTO recetas (foto_receta, nombre_receta, categorias, descripcion, id_usuario)
        VALUES ($1, $2, $3, $4, $5) RETURNING *;
    `;
    const values = [foto_receta, nombre_receta, categorias, descripcion, id_usuario];
    
    try {
        const result = await pool.query(query, values);
        return result.rows[0]; // Retorna la receta creada
    } catch (error) {
        console.error('Error al crear la receta:', error);
        throw error; // Lanza el error para que pueda ser manejado en el controlador
    }
};

// Función para obtener todas las recetas
const getAllRecipes = async () => {
    const query = 'SELECT * FROM recetas;';
    
    try {
        const result = await pool.query(query);
        return result.rows; // Retorna todas las recetas
    } catch (error) {
        console.error('Error al obtener las recetas:', error);
        throw error; // Lanza el error para que pueda ser manejado en el controlador
    }
};

// Otras funciones (obtener por ID, actualizar, eliminar) se pueden agregar aquí

module.exports = {
    createRecipe,
    getAllRecipes,
};
