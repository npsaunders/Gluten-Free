const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema(
  {
    name: { type: String, required: true },
    urlPath: { type: String },
    instructions: { type: String, required: true }
  });


const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;