const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true,"This field is required"],
    },
    description:{
        type: String,
        trim: true
    },
    email:{
        type: String,
        required: [true,"This field is required"],
        trim: true,
        lowercase: true,
    },
    ingredients: {
        type: Array,
        required: true
    },
    category: {
        type: String,
        enum: [
            'Thai', 'American', 'Chinese', 'Mexican', 'Indian', 'Italian',
            'Japanese', 'French', 'Mediterranean', 'Spanish', 'Greek', 'Turkish',
            'Brazilian', 'Peruvian', 'Vietnamese', 'Korean', 'Moroccan', 'Russian',
            'Lebanese', 'African', 'Caribbean', 'German', 'British', 'Irish',
            'Swedish', 'Australian', 'Cajun', 'Argentinian', 'Canadian', 'Portuguese'
        ],
        required: true
    },
    image: {
        type: String,
        required: true
    },
    instruction: {
        type: String,
        required: true,
        trim: true
    }
});

recipeSchema.index({ name: 'text', description: 'text', instruction: 'text'}); 
// Makes full text search optimised for queries that match terms across various fields.

module.exports  = mongoose.model("RecipeDetail",recipeSchema);