const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipeController');

router.get('/',recipeController.homepage);
router.get('/categories',recipeController.allCategories);
router.get('/recipe/:id', recipeController.exploreRecipe );
router.get('/categories/:id', recipeController.categoriesById );
router.post('/search', recipeController.search );
router.get('/explore-latest', recipeController.exploreLatest );
router.get('/random-recipe', recipeController.randomRecipe );
router.get('/submit', recipeController.submitRecipe );
router.post('/submit', recipeController.postRecipe );
router.get('/show-all', recipeController.showAllrecipes );

module.exports = router;