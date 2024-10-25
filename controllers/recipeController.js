const Recipe = require('../models/Recipe'); // Asegúrate de que el nombre del modelo sea correcto

// Función para crear una nueva receta
const addRecipe = async (req, res) => {
    const { foto_receta, nombre_receta, categorias, descripcion, id_usuario } = req.body;

    try {
        const newRecipe = await Recipe.createRecipe({ foto_receta, nombre_receta, categorias, descripcion, id_usuario });
        return res.status(201).json(newRecipe);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error al crear la receta' });
    }
};

// Función para obtener todas las recetas
const getAllRecipes = async (req, res) => {
    try {
        const recipes = await Recipe.getAllRecipes(); // Asegúrate de que esta función esté bien definida en tu modelo
        return res.status(200).json(recipes);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error al obtener las recetas' });
    }
};

module.exports = {
    addRecipe,
    getAllRecipes
};
