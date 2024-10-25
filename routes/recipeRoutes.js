const express = require('express');
const { addRecipe, getAllRecipes } = require('../controllers/recipeController');

const router = express.Router();

// Ruta para crear una nueva receta
router.post('/', addRecipe);

// Ruta para obtener todas las recetas
router.get('/', getAllRecipes); // Solo debes mantener una definición para obtener todas las recetas

module.exports = router;
