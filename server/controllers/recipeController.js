const Category = require('../models/category.models.js')
const RecipeDetail = require('../models/recipe.models.js')

exports.homepage = async(req,res)=>{
    try 
    {
        const limitNumber = 5;
        const categories = await Category.find({}).limit(limitNumber);
        const recipes = await RecipeDetail.aggregate([
            {
              $sort: { _id: -1 } // Sort by _id in descending order (assuming higher _id means a more recent addition)
            },
            {
              $group: {
                _id: "$category",
                latestRecipe: { $first: "$$ROOT" } // Select the first document in each category after sorting
              }
            },
            {
              $replaceRoot: { newRoot: "$latestRecipe" } // Replace the document structure with the latestRecipe
            }
          ]).limit(limitNumber);
          
        const thai = await RecipeDetail.find({ category: 'Thai' }).limit(limitNumber);
        const spanish = await RecipeDetail.find({ category: 'Spanish' }).limit(limitNumber);
        const indian = await RecipeDetail.find({ category: 'Indian' }).limit(limitNumber);
        console.log("Inside recipeController:",recipes);

        res.render('index',{pageTitle: 'Cooking Recipes Blog',categories,recipes,thai,spanish,indian});
    } 
    catch (error) 
    {
        res.status(500).send(error)
    }
}

exports.allCategories = async(req,res)=>{
    try 
    {
        const limitNumber = 20;
        const categories = await Category.find({}).limit(limitNumber);

        res.render('categories',{pageTitle: 'View All Categories',categories});
    } 
    catch (error) 
    {
        res.status(500).send(error)
    }
}

exports.exploreRecipe = async(req,res)=>{
    try 
    {
        const recipeID = req.params.id;
        const recipe = await RecipeDetail.findById(recipeID);

        res.render('explore_recipe',{pageTitle: 'Explore This Recipe',recipe});
    } 
    catch (error) 
    {
        res.status(500).send(error)
    }
}

exports.categoriesById = async(req,res)=>{
    try 
    {
        const categoryName = req.params.id;
        const limitNumber = 20;
        const categoryById = await RecipeDetail.find({ 'category': categoryName}).limit(limitNumber);

        res.render('categories',{pageTitle: 'Explore This Category',categoryById, categoryName});
    } 
    catch (error) 
    {
        res.status(500).send(error)
    }
}

exports.search = async(req,res)=>{
    try 
    {
        let searchTerm = req.body.searchTerm;
        let recipe = await RecipeDetail.find( { $text: { $search: searchTerm, $diacriticSensitive: true } }); //Diacritic sensititve: (e.g., é, è, ê) are treated as distinct from their non-accented counterparts
        res.render('search',{pageTitle: 'Search', recipe});
    } 
    catch (error) 
    {
        res.status(500).send(error)
    }
}

exports.exploreLatest = async(req,res)=>{
    try{
        const limitNumber = 15;
        const recipe = await RecipeDetail.find({}).sort({ _id: -1 }).limit(limitNumber);
        res.render('explore_latest',{pageTitle: 'Explore Latest Recipes', recipe});
    }
    catch(error){
        res.status(500).json(error);
    }
}

exports.showAllrecipes = async(req,res)=>{
    try{
        const recipe = await RecipeDetail.find({}).sort({ _id: -1 });
        res.render('show_all',{pageTitle: 'All Recipes', recipe});
    }
    catch(error){
        res.status(500).json(error);
    }
}

exports.randomRecipe = async(req,res)=>{
    try{
        const randomRecipe = await RecipeDetail.aggregate([
            { $sample: { size: 1 } }
          ]);
          
        const randomRecipeID = randomRecipe[0]._id;

        res.redirect(`/recipe/${randomRecipeID}`);
    }
    catch(error){
        res.status(500).json(error);
    }
}

exports.submitRecipe = async(req,res)=>{
    try {
        const infoErrorsObj = req.flash('infoErrors');
        const infoSubmitObj = req.flash('infoSubmit');
        res.render('submit_recipe',{pageTitle: 'Submit a New Recipe',infoErrorsObj,infoSubmitObj});
    } catch (error) {
        res.status(500).json(error)
    }
}

exports.postRecipe = async(req,res)=>{
    try {
        let imageUploadFile, uploadPath, newImageName;

        if (!req.files || Object.keys(req.files).length === 0)
        {
            console.log("No files were uploaded!");
        }
        else{
            imageUploadFile= req.files.image;
            newImageName = Date.now() + imageUploadFile.name;

            uploadPath = require('path').resolve('./') + '/public/uploads/' + newImageName;

            imageUploadFile.mv(uploadPath, function(err) {
                if (err) {
                  return res.status(500).send(err);
                }
              });
        }

        const newRecipe = await RecipeDetail.create({
            name: req.body.name,
            description: req.body.description,
            email: req.body.email,
            ingredients: req.body.ingredients,
            category: req.body.category,
            instruction: req.body.instruction,
            image: newImageName,
        });
        if(newRecipe){
        req.flash('infoSubmit', 'Recipe added successfully! 👍');
        res.redirect('/submit');
        }
    } catch (error) {
        req.flash('infoErrors', 'Recipe could not be added ☹️');
        console.log(error);
        res.redirect('/submit');
    }
}
