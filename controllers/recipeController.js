const Recipe = require('../models/Repice');

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
const getRecipes = async (req, res) => {
    try {
        const recipes = await Recipe.getAllRecipes();
        return res.status(200).json(recipes);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error al obtener las recetas' });
    }
};

const getAllRecipes = async (req, res) => {
    try {
        const recipes = await Recipe.getAllRecipes();
        return res.status(200).json(recipes);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error al obtener las recetas' });
    }
};


module.exports = {
    addRecipe,
    getRecipes,
    getAllRecipes
};
