const express = require('express');
const { addRecipe, getRecipes, getAllRecipes } = require('../controllers/recipeController');

const router = express.Router();

// Ruta para crear una nueva receta
router.post('/', addRecipe);

// Ruta para obtener todas las recetas
router.get('/', getRecipes);

router.get('/', getAllRecipes);


module.exports = router;
